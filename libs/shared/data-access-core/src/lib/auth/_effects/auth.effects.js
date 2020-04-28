import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e;
// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { filter, mergeMap, map, switchMap, catchError, tap, take, withLatestFrom } from 'rxjs/operators';
import { defer, of } from 'rxjs';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
// Auth actions
import { AuthActionTypes, Logout, UserLoaded, UserRequested } from '../_actions/auth.actions';
import { environment } from '@monorepo/shared/environments';
import { isUserLoaded } from '../_selectors/auth.selectors';
import * as authAction from './../_actions/auth.actions';
// Translate
import { TranslateService } from '@ngx-translate/core';
import { AuthNoticeService, AuthService, ClientAuthService } from '@monorepo/shared/util-services';
let AuthEffects = class AuthEffects {
    constructor(actions$, router, auth, authClient, translate, authNoticeService, store) {
        this.actions$ = actions$;
        this.router = router;
        this.auth = auth;
        this.authClient = authClient;
        this.translate = translate;
        this.authNoticeService = authNoticeService;
        this.store = store;
        this.accessToken = '';
        this.login$ = this.actions$.pipe(ofType(AuthActionTypes.Login), tap(action => {
            localStorage.setItem(environment.authTokenKey, action.payload.authToken);
            this.store.dispatch(new UserRequested());
        }));
        this.loginAction$ = this.actions$.pipe(ofType(AuthActionTypes.LOGIN_REQUESTED), map((action) => action.payload), switchMap(payload => this.authClient.login(payload.email, payload.password).pipe(map((res) => {
            console.log('Lgoin Response', res);
            this.accessToken = res.accessToken;
            // CREATE A NEW USER
            const user = {
                id: res.user.uid,
                role: 'USER',
                fullName: res.user.displayName,
                email: res.user.email,
                password: payload.password,
                phoneNumber: res.user.phoneNumber || '',
                providerId: res.additionalUserInfo.providerId,
                photoUrl: res.user.photoURL,
                isNewUser: res.additionalUserInfo.isNewUser
            };
            return new authAction.LoginSuccess({ user });
        }), switchMap((user) => {
            if (user.isNewUser) {
                return [
                    new authAction.LoginSuccess({ user }),
                    new authAction.SaveUser({ user })
                    // new authAction.CheckUserRole( {uid: user.uid })
                ];
            }
            else {
                return [
                    new authAction.LoginSuccess({ user })
                    //  new authAction.CheckUserRole({ uid: user.uid })
                ];
            }
        }), tap(() => this.router.navigateByUrl('')), catchError(error => of(new authAction.AuthError({ error }))))));
        this.registerAction$ = this.actions$.pipe(ofType(AuthActionTypes.REGISTER_REQUESTED), map((action) => action.payload), switchMap((payload) => this.authClient.checkUser({ username: payload.user.username }).pipe(map(data => {
            console.log('check user data', data);
            const pd = {
                data: data,
                payload: payload
            };
            console.log('payload = ', pd);
            return pd;
            // return  {
            //   data: data,
            //   payload: payload
            // };
        }), switchMap(data => this.authClient
            .registerUser(data.payload.user.email, data.payload.user.password)
            .pipe(map((res) => {
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
        }), switchMap(user => {
            console.log(user);
            return [
                new authAction.RegisterCompleted(),
                new authAction.LoginSuccess({ user }),
                new authAction.SaveUser({ user })
            ];
        }))), tap(() => {
            this.router.navigateByUrl('');
        }), 
        // catchError(error => of(new authAction.AuthError({ error })))
        catchError(error => {
            console.log('registerAction$ catchError() ==', error);
            return of(new authAction.AuthError({ error }));
        }))));
        this.saveUser$ = this.actions$.pipe(ofType(authAction.AuthActionTypes.SAVE_USER), map((action) => action.payload), switchMap((payload) => this.authClient.saveUser(payload.user)));
        this.loginSuccess$ = this.actions$.pipe(ofType(authAction.AuthActionTypes.LOGIN_SUCCESS), map((action) => action.payload), switchMap((payload) => {
            return [
                new authAction.UpdateOnlineStatus({
                    uid: payload.user.id,
                    status: true
                })
                //  new authAction.CheckUserRole( {uid: payload.user.uid })
            ];
        }));
        this.updateOnlineStatus$ = this.actions$.pipe(ofType(authAction.AuthActionTypes.UPDATE_ONLINE_STATUS), map((action) => action.payload), switchMap((payload) => this.authClient.updateOnlineStatus(payload.uid, payload.status)));
        this.socialLogin$ = this.actions$.pipe(ofType(AuthActionTypes.SOCIAL_LOGIN), map((action) => action.payload), switchMap(payload => this.authClient.socialLogin(payload.authProvider).pipe(map((res) => {
            console.log('res', res);
            this.accessToken = res.credential.accessToken;
            const user = {
                id: res.user.uid,
                fullName: res.user.displayName,
                email: res.user.email,
                providerId: res.additionalUserInfo.providerId,
                photoUrl: res.user.photoURL,
                isNewUser: res.additionalUserInfo.isNewUser
            };
            return user;
        }), switchMap(user => {
            if (user.isNewUser) {
                return [
                    new authAction.LoginSuccess({ user }),
                    new authAction.SaveUser({ user })
                    // new auth.CheckUserRole({ uid: user.id })
                ];
            }
            else {
                return [
                    new authAction.LoginSuccess({ user })
                    //  new authAction.CheckUserRole({ uid: user.uid })
                ];
            }
        }), tap(() => this.router.navigateByUrl('')), catchError(error => {
            return of(new authAction.AuthError({ error }));
        }))));
        this.getUser$ = this.actions$.pipe(ofType(authAction.AuthActionTypes.GET_USER), switchMap(() => this.authClient.getAuthState().pipe(take(1), map((authData) => {
            if (authData) {
                const user = {
                    id: authData.uid,
                    fullName: authData.displayName,
                    email: authData.email,
                    providerId: authData.providerData[0].providerId,
                    photoUrl: authData.photoURL
                };
                return new authAction.LoginSuccess({ user });
            }
            else {
                return new authAction.LoginFailed();
            }
        }), catchError(error => of(new authAction.AuthError({ error }))))));
        this.init$ = defer(() => {
            return of(new authAction.GetUser());
        });
        this.logout$ = this.actions$.pipe(ofType(AuthActionTypes.Logout), tap(() => {
            localStorage.removeItem(environment.authTokenKey);
            this.router.navigate(['/auth/login'], {
                queryParams: { returnUrl: this.returnUrl }
            });
        }));
        this.register$ = this.actions$.pipe(ofType(AuthActionTypes.Register), tap(action => {
            // USER IS PERSISTANT
            // SIDE EFFECT
            localStorage.setItem(environment.authTokenKey, action.payload.authToken);
        }));
        this.loadUser$ = this.actions$.pipe(ofType(AuthActionTypes.UserRequested), withLatestFrom(this.store.pipe(select(isUserLoaded))), filter(([action, _isUserLoaded]) => !_isUserLoaded), mergeMap(([action, _isUserLoaded]) => this.auth.getUserByToken()), tap(_user => {
            if (_user) {
                this.store.dispatch(new UserLoaded({ user: _user }));
            }
            else {
                this.store.dispatch(new Logout());
            }
        }));
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.returnUrl = event.url;
            }
        });
    }
};
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "login$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "loginAction$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "registerAction$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "saveUser$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "loginSuccess$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "updateOnlineStatus$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "socialLogin$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "getUser$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], AuthEffects.prototype, "init$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "logout$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "register$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], AuthEffects.prototype, "loadUser$", void 0);
AuthEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Actions !== "undefined" && Actions) === "function" ? _b : Object, typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, AuthService,
        ClientAuthService, typeof (_d = typeof TranslateService !== "undefined" && TranslateService) === "function" ? _d : Object, AuthNoticeService, typeof (_e = typeof Store !== "undefined" && Store) === "function" ? _e : Object])
], AuthEffects);
export { AuthEffects };
//# sourceMappingURL=auth.effects.js.map