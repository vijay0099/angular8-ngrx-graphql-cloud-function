// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import {
  filter,
  mergeMap,
  map,
  switchMap,
  catchError,
  tap,
  take,
  withLatestFrom
} from 'rxjs/operators';
import { defer, of } from 'rxjs';
import { Observable, forkJoin } from 'rxjs';

// import { Observable } from 'rxjs/Observable';

// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
// Auth actions
import {
  AuthActions,
  AuthActionTypes,
  Login,
  Logout,
  Register,
  UserLoaded,
  UserRequested,
  SocialLogin,
  LogoutCompleted,
  AuthLoading
} from '../_actions/auth.actions';

import { AppState } from '../../reducers';
import { environment } from '@monorepo/shared/environments';
import { isUserLoaded } from '../_selectors/auth.selectors';

import {
  User,
  UserModel,
  UserInput
} from '@monorepo/shared/data-access-models';
import * as authAction from './../_actions/auth.actions';

// Translate
import { TranslateService } from '@ngx-translate/core';

import {
  AuthNoticeService,
  AuthService,
  ClientAuthService
} from '@monorepo/shared/util-services';

@Injectable()
export class AuthEffects {
  user: UserModel;
  accessToken = '';
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => {
      localStorage.setItem(environment.authTokenKey, action.payload.authToken);
      this.store.dispatch(new UserRequested());
    })
  );

  // ADMIN APP LOGIN
  @Effect()
  adminLoginAction$ = this.actions$.pipe(
    ofType(AuthActionTypes.ADMIN_LOGIN_REQUESTED),
    map((action: authAction.AdminLoginRequested) => action.payload),
    switchMap(payload =>
      this.authClient.login(payload.email, payload.password).pipe(
        map((res: any) => {
          console.log('Lgoin Response', res);
          this.accessToken = res.accessToken;
          const user = {
            id: res.user.uid,
            fullName: res.user.displayName,
            username: res.user.username || '',
            email: res.user.email,
            password: payload.password,
            phoneNumber: res.user.phoneNumber || '',
            providerId: res.additionalUserInfo.providerId,
            photoUrl: res.user.photoURL,
            isNewUser: res.additionalUserInfo.isNewUser,
            isOnline: true
          };
          return {user:user,emailVerified:res.user.emailVerified};
        }),
        switchMap((authData : any) => 
          this.authClient
            .getUser(authData.user.id)
            .pipe(
              map((user: any) => {
                return {user:user, emailVerified:authData.emailVerified};
              }),
            )
        ),
        switchMap((data: any) => {
          const user = data.user;
          if(data.emailVerified!== true){
            return [
              new authAction.AuthError({ error : 'Please verify your acount. Verification email sent your account.' }),
              new AuthLoading({ loading: false })
            ];
          }else{
            if(user.role !== 'ADMIN' && user.role !== 'STAFF'){
              console.log('user.role () 1>', user.role);
              return [
                new authAction.AuthError({ error : 'You have no permission to access admin panel.' }),
                new AuthLoading({ loading: false }),
                new authAction.LogoutRequested({uid : user.id})
              ];
            }else{
              console.log('user.role () 2>', user.role);
              this.store.dispatch(new authAction.LoginSuccess({ user }));
              this.store.dispatch(new AuthLoading({ loading: false }));
              this.router.navigateByUrl('');
            }
          }
        }),
        catchError(error => of(
            new authAction.AuthError({ error }),
            new AuthLoading({ loading: false })
           )
          )
      )
    )
  );

  @Effect()
  loginAction$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_REQUESTED),
    map((action: authAction.LoginRequested) => action.payload),
    switchMap(payload =>
      this.authClient.login(payload.email, payload.password).pipe(
        map((res: any) => {
          console.log('Lgoin Response', res);
          this.accessToken = res.accessToken;

          // CREATE A NEW USER
          const user = {
            id: res.user.uid,
            fullName: res.user.displayName,
            username: res.user.username || '',
            email: res.user.email,
            password: payload.password,
            phoneNumber: res.user.phoneNumber || '',
            providerId: res.additionalUserInfo.providerId,
            photoUrl: res.user.photoURL,
            isNewUser: res.additionalUserInfo.isNewUser,
            isOnline: true
          };
          return {user:user,emailVerified:res.user.emailVerified};
        //  return new authAction.LoginSuccess({ user });
        }),
        switchMap((data: any) => {
          const user = data.user;
          if(data.emailVerified!== true){
            return [
              new authAction.AuthError({ error : 'Please verify your acount. Verification email sent your account.' }),
              new AuthLoading({ loading: false })
            ];
          }else{
            if (user.isNewUser) {
              user.role = 'USER';
              this.store.dispatch(new authAction.LoginSuccess({ user }));
              this.store.dispatch(new authAction.SaveUser({ user }));
              this.store.dispatch(new AuthLoading({ loading: false }));
              // new authAction.CheckUserRole( {uid: user.uid })
            } else {
              this.store.dispatch(new authAction.LoginSuccess({ user }));
              this.store.dispatch(new AuthLoading({ loading: false }));
              //  new authAction.CheckUserRole({ uid: user.uid })
            }
            this.router.navigateByUrl('');
          }
        }),
        catchError(error => of(
            new authAction.AuthError({ error }),
            new AuthLoading({ loading: false })
           )
          )
      )
    )
  );

  @Effect()
  registerAction$ = this.actions$.pipe(
    ofType(AuthActionTypes.REGISTER_REQUESTED),
    map((action: authAction.RegisterRequested) => action.payload),
    switchMap((payload: any) =>
      this.authClient.checkUser({ username: payload.user.username }).pipe(
        map(data => {
          console.log('check user data', data);
          const pd = {
            data: data,
            payload: payload
          };
          console.log('payload = ', pd);
          return pd;
        }),
        switchMap(data =>
          this.authClient
            .registerUser(data.payload.user.email, data.payload.user.password)
            .pipe(
              map((res: any) => {
                const user = {
                  id: res.user.uid,
                  role: 'USER',
                  username: data.payload.user.username,
                  fullName: data.payload.user.fullName || data.payload.user.username,
                  email: res.user.email,
                  phoneNumber: data.payload.user.phoneNumber || '',
                  password: data.payload.user.password,
                  providerId: res.additionalUserInfo.providerId,
                  isNewUser: res.additionalUserInfo.isNewUser,
                  isOnline: true
                };
                return user;
              }),
              switchMap(user => {
                console.log(user);
                return [
                  new authAction.RegisterCompleted(),
                 //  new authAction.LoginSuccess({ user }),
                  new authAction.AuthSuccess({ success : 'Account Verification email sent successfully.' }),
                  new authAction.SaveUser({ user }),
                  new AuthLoading({ loading: false })
                ];
              })
            )
        ),
        tap(() => {
         // this.router.navigateByUrl('');
        }),
        // catchError(error => of(new authAction.AuthError({ error })))
        catchError(error => {
          console.log('registerAction$ catchError() ==', error);
          return of(new authAction.AuthError({ error }), new AuthLoading({ loading: false }));
        })
      )
    )
  );

  @Effect({ dispatch: false })
  saveUser$ = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.SAVE_USER),
    map((action: authAction.SaveUser) => action.payload),
    switchMap((payload: any) => this.authClient.saveUser(payload.user))
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.LOGIN_SUCCESS),
    map((action: authAction.LoginSuccess) => action.payload),
    switchMap((payload: any) => {
      return [
        new UserRequested(),
        new authAction.UpdateOnlineStatus({
          uid: payload.user.id,
          status: true
        })
        //  new authAction.CheckUserRole( {uid: payload.user.uid })
      ];
    })
  );

  @Effect({ dispatch: false })
  updateOnlineStatus$ = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.UPDATE_ONLINE_STATUS),
    map((action: authAction.UpdateOnlineStatus) => action.payload),
    switchMap((payload: any) =>
      this.authClient.updateOnlineStatus({id:payload.uid, isOnline:payload.status})
    )
  );

  @Effect()
  socialLogin$ = this.actions$.pipe(
    ofType<SocialLogin>(AuthActionTypes.SOCIAL_LOGIN),
    map((action: authAction.SocialLogin) => action.payload),
    switchMap(payload =>
      this.authClient.socialLogin(payload.authProvider).pipe(
        map((res: any) => {
          console.log('res', res);
          this.accessToken = res.credential.accessToken;
          const user = {
            id: res.user.uid,
            role: 'USER',
            fullName: res.user.displayName,
            username: '',
            email: res.user.email,
            phoneNumber: res.user.phoneNumber || '',
            providerId: res.additionalUserInfo.providerId,
            photoUrl: res.user.photoURL,
            isNewUser: res.additionalUserInfo.isNewUser,
            isOnline: true
          };
          return user;
        }),
        switchMap(user => {
          console.log('Social Media User >>>>> ', user);
          if (user.isNewUser) {
            return [
              new authAction.LoginSuccess({ user }),
              new authAction.SaveUser({ user }),
              new AuthLoading({ loading: false })
              // new auth.CheckUserRole({ uid: user.id })
            ];
          } else {
            return [
              new authAction.LoginSuccess({ user }),
              new AuthLoading({ loading: false })
              //  new authAction.CheckUserRole({ uid: user.uid })
            ];
          }
        }),
        tap(() => this.router.navigateByUrl('')),
        catchError(error => {
          return of(new authAction.AuthError({ error }), new AuthLoading({ loading: false }));
        })
      )
    )
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.GET_USER),
    switchMap(() =>
      this.authClient.getAuthState().pipe(
        take(1),
        map((authData: any) => {
          if (authData) {
            const user = {
              id: authData.uid,
              fullName: authData.displayName,
              displayName: authData.displayName,
              email: authData.email,
              providerId: authData.providerData[0].providerId,
              photoUrl: authData.photoURL
            };
            return new authAction.LoginSuccess({ user });
          } else {
            return new authAction.LoginFailed();
          }
        }),
        catchError(error => of(new authAction.AuthError({ error }) , new AuthLoading({ loading: false })))
      )
    )
  );

  @Effect()
  logoutAction$ = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.LOGOUT_REQUESTED),
    map( (action: authAction.LogoutRequested) => action.payload),
    switchMap((payload: any) => this.authClient.logout(payload.uid)
      .pipe(
        map(() => (new authAction.LogoutCompleted())),
        tap(() => {
          this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl: this.returnUrl }
          });
        }),
        catchError(error => {
          return of(new authAction.AuthError({ error }));
        }
        )
      )
    )
  ); 

  @Effect()
  forgotPasswordAction$ = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.FORGOT_PASSWORD_REQUESTED),
    map( (action: authAction.ForgotPasswordRequested) => action.payload),
    switchMap((payload) => this.authClient.resetPasswordInit(payload.email)
      .pipe(
        map((res) => {
          return res; 
        }),
        switchMap(res => {
          return [
            new authAction.AuthSuccess({ success : this.translate.instant('AUTH.FORGOT.SUCCESS') }),
            new AuthLoading({ loading: false })
          ]
        }),
        catchError(error => {
          return of(new authAction.AuthError({ error }), new AuthLoading({ loading: false }));
        }
        )
      )
    )
  );

  @Effect()
  init$: Observable<any> = defer(() => {
    return of(new authAction.GetUser());
  });

  @Effect({ dispatch: false })
  register$ = this.actions$.pipe(
    ofType<Register>(AuthActionTypes.Register),
    tap(action => {
      // USER IS PERSISTANT
      // SIDE EFFECT
      localStorage.setItem(environment.authTokenKey, action.payload.authToken);
    })
  );

  @Effect({ dispatch: false })
  loadUser$ = this.actions$.pipe(
    ofType<UserRequested>(AuthActionTypes.UserRequested),
    switchMap(() =>
      this.authClient.getAuthState().pipe(
        take(1),
        map((authData: any) => {
          return authData;
        }),
        switchMap((authData : any) => 
          this.authClient
            .getUser(authData.uid)
            .pipe(
              map((user: any) => {
                console.log('USER () >', user);
                if(user){
                  this.store.dispatch(new UserLoaded({ user: user }));
                }else{
                  this.store.dispatch(new Logout());
                }
              }),
            )
        ),
        catchError(error => {
          console.log('registerAction$ catchError() ==', error);
          return of(new authAction.AuthError({ error }));
        })
      )
    )


    // withLatestFrom(this.store.pipe(select(isUserLoaded))),
    // filter(([action, _isUserLoaded]) => !_isUserLoaded),
    // mergeMap(([action, _isUserLoaded]) => this.auth.getUserByToken()),
    // tap(_user => {
    //   if (_user) {
    //     this.store.dispatch(new UserLoaded({ user: _user }));
    //   } else {
    //     this.store.dispatch(new Logout());
    //   }
    // })
  );

  // @Effect()
  // init$: Observable<Action> = defer(() => {
  //   const userToken = localStorage.getItem(environment.authTokenKey);
  //   let observableResult = of({ type: 'NO_ACTION' });
  //   if (userToken) {
  //     observableResult = of(new Login({ authToken: userToken }));
  //   }
  //   return observableResult;
  // });

  private returnUrl: string;

  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService,
    private authClient: ClientAuthService,
    private translate: TranslateService,
    private authNoticeService: AuthNoticeService,
    private store: Store<AppState>
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }
}
