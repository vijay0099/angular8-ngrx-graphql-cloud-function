import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  User,
  UserInput,
  UserUpdateInput,
  UserValidateInput,
  UserValidateOutput
} from '@monorepo/shared/data-access-models';

// GRAPHQL
import {
  ValidateUserGQL,
  CreateUserGQL,
  UpdateUserGQL,
  GetUserGQL
} from '@monorepo/client/data-access-models';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/operators';

// import * as bcrypt from 'bcrypt';
// const saltRounds = 10;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private validateUserGQL: ValidateUserGQL,
    private getUserGQL: GetUserGQL,
    private createUserGQL: CreateUserGQL,
    private updateUserGQL: UpdateUserGQL
  ) {}

  isUserExistsInDb$: Observable<boolean>;

  register(email: string, password: string) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  login(email: string, password: string) {
    // const salt = bcrypt.genSaltSync(saltRounds);
    // password = bcrypt.hashSync(password, salt);
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
          console.log('result.user() > ', result.user.emailVerified);
          if (result.user.emailVerified !== true) {
           console.log('send verification mail() >>>>');
           this.sendEmailVerification();
           return result;
         }else{
           return result;
         }
      })
    );
  }

  socialLogin(authProvider: string) {
    let provider: any;
    if (authProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }

    if (authProvider === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    }

    return from(this.afAuth.auth.signInWithPopup(provider));
  }

  registerUser(email: string, password: string) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendEmailVerification();
        return result;
      })
    );
  }

  logout(uid: string) {
    console.log('service logout function >>>', uid);
    this.updateOnlineStatus({id:uid, isOnline:false});
    return from(this.afAuth.auth.signOut());
  }

  checkUser(user: UserValidateInput) {
    return from(
      this.validateUserGQL
        .watch({ query: user })
        .valueChanges.pipe(map(result => result))
    );
  }

  saveUser(user: UserInput) {
    console.log('user', user);
    return this.createUserGQL
      .mutate({ input: user })
      .pipe(map(result => result));
  }

  updateOnlineStatus(user : UserUpdateInput) {
    return from(
       this.updateUserGQL
      .mutate({ input: user })
      .pipe(map(result => result))
    );

    // console.log('uid() >', user.id);
    // if (user.isOnline) {
    //   this.db.database.ref().child('users/' + user.id).onDisconnect().update( { isOnline: false });
    // }
    // return from(
    //     this.db.object('users/' + user.id).update({ isOnline: user.isOnline })
    // );
  }

  checkUserRole(uid: string) {
    return this.db.object('admins/' + uid).valueChanges();
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  getUser(id: string) {
    return from( this.getUserGQL
      .watch({ id: id })
      .valueChanges
      .pipe(map(result => result.data.getUser))
    )
  }

  sendEmailVerification() {
    return from( this.afAuth.auth.currentUser.sendEmailVerification({
       url: 'http://localhost:3002/auth/login' }));
  }

  /** 
   * Initiate the password reset process for this user 
   * @param email email of the user 
   */ 
  resetPasswordInit(email: string) { 
    return from( this.afAuth.auth.sendPasswordResetEmail(
      email, 
      { url: 'http://localhost:3002/auth/login' })
      )
    }
    
}
