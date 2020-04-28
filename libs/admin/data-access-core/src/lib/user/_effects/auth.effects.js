import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e;
// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { filter, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { defer, Observable, of } from 'rxjs';
// NGRX
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
// Auth actions
import { AuthActionTypes, Login, Logout, UserLoaded, UserRequested } from '../_actions/auth.actions';
import { environment } from '@monorepo/shared/environments';
import { isUserLoaded } from '../_selectors/auth.selectors';
import { User } from '@monorepo/shared/data-access-models';
// Translate
import { TranslateService } from '@ngx-translate/core';
import { AuthNoticeService, AuthService } from '@monorepo/shared/util-services';
let AuthEffects = class AuthEffects {
    constructor(actions$, router, auth, translate, authNoticeService, store) {
        this.actions$ = actions$;
        this.router = router;
        this.auth = auth;
        this.translate = translate;
        this.authNoticeService = authNoticeService;
        this.store = store;
        this._user = new User();
        this.login$ = this.actions$.pipe(ofType(AuthActionTypes.Login), tap(action => {
            localStorage.setItem(environment.authTokenKey, action.payload.authToken);
            this.store.dispatch(new UserRequested());
        }));
        this.logout$ = this.actions$.pipe(ofType(AuthActionTypes.Logout), tap(() => {
            localStorage.removeItem(environment.authTokenKey);
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.returnUrl } });
        }));
        this.register$ = this.actions$.pipe(ofType(AuthActionTypes.Register), tap(action => {
            localStorage.setItem(environment.authTokenKey, action.payload.authToken);
        }));
        this.loadUser$ = this.actions$
            .pipe(ofType(AuthActionTypes.UserRequested), withLatestFrom(this.store.pipe(select(isUserLoaded))), filter(([action, _isUserLoaded]) => !_isUserLoaded), mergeMap(([action, _isUserLoaded]) => this.auth.getUserByToken()), tap(_user => {
            if (_user) {
                this.store.dispatch(new UserLoaded({ user: _user }));
            }
            else {
                this.store.dispatch(new Logout());
            }
        }));
        this.init$ = defer(() => {
            const userToken = localStorage.getItem(environment.authTokenKey);
            let observableResult = of({ type: 'NO_ACTION' });
            if (userToken) {
                observableResult = of(new Login({ authToken: userToken }));
            }
            return observableResult;
        });
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], AuthEffects.prototype, "init$", void 0);
AuthEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Actions !== "undefined" && Actions) === "function" ? _b : Object, typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, AuthService, typeof (_d = typeof TranslateService !== "undefined" && TranslateService) === "function" ? _d : Object, AuthNoticeService, typeof (_e = typeof Store !== "undefined" && Store) === "function" ? _e : Object])
], AuthEffects);
export { AuthEffects };
//# sourceMappingURL=auth.effects.js.map