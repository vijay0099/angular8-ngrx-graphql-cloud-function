import * as tslib_1 from "tslib";
var _a, _b;
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
// GRAPHQL
import { ValidateUserGQL, CreateUserGQL } from '@monorepo/client/data-access-models';
import { map } from 'rxjs/internal/operators/map';
// import * as bcrypt from 'bcrypt';
// const saltRounds = 10;
let AuthService = class AuthService {
    constructor(afAuth, db, validateUserGQL, createUserGQL) {
        this.afAuth = afAuth;
        this.db = db;
        this.validateUserGQL = validateUserGQL;
        this.createUserGQL = createUserGQL;
    }
    register(email, password) {
        return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
    }
    login(email, password) {
        // const salt = bcrypt.genSaltSync(saltRounds);
        // password = bcrypt.hashSync(password, salt);
        return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    }
    socialLogin(authProvider) {
        let provider;
        if (authProvider === 'google') {
            provider = new firebase.auth.GoogleAuthProvider();
        }
        if (authProvider === 'facebook') {
            provider = new firebase.auth.FacebookAuthProvider();
        }
        return from(this.afAuth.auth.signInWithPopup(provider));
    }
    registerUser(email, password) {
        return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
    }
    logout(uid) {
        this.updateOnlineStatus(uid, false);
        return from(this.afAuth.auth.signOut());
    }
    checkUser(user) {
        return from(this.validateUserGQL
            .watch({ query: user })
            .valueChanges.pipe(map(result => result)));
        // return this.validateUserGQL
        //   .watch({ query: user })
        //   .valueChanges.pipe(map(result => result));
    }
    //  saveUser(user: User) {
    saveUser(user) {
        console.log('user', user);
        return this.createUserGQL
            .mutate({ input: user })
            .pipe(map(result => result));
        // const users = this.db.object('users/' + user.id);
        // return users.set(user);
    }
    updateOnlineStatus(uid, status) {
        if (status) {
            this.db.database
                .ref()
                .child('users/' + uid)
                .onDisconnect()
                .update({ isOnline: false });
        }
        return from(this.db.object('users/' + uid).update({ isOnline: status }));
    }
    checkUserRole(uid) {
        return this.db.object('admins/' + uid).valueChanges();
    }
    getAuthState() {
        return this.afAuth.authState;
    }
    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AngularFireAuth !== "undefined" && AngularFireAuth) === "function" ? _a : Object, typeof (_b = typeof AngularFireDatabase !== "undefined" && AngularFireDatabase) === "function" ? _b : Object, ValidateUserGQL,
        CreateUserGQL])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map