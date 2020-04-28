import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { mergeMap, map, tap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// SERVICES
import { AuthService } from '@monorepo/shared/util-services';
import { UserActionTypes, UsersPageLoaded, UserCreated, UsersActionToggleLoading, UsersPageToggleLoading } from '../_actions/user.actions';
let UserEffects = class UserEffects {
    constructor(actions$, auth, store) {
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new UsersPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new UsersPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new UsersActionToggleLoading({
            isLoading: true
        });
        this.hideActionLoadingDistpatcher = new UsersActionToggleLoading({
            isLoading: false
        });
        this.loadUsersPage$ = this.actions$.pipe(ofType(UserActionTypes.UsersPageRequested), mergeMap(({ payload }) => {
            this.store.dispatch(this.showPageLoadingDistpatcher);
            const requestToServer = this.auth.findUsers(payload.page);
            const lastQuery = of(payload.page);
            return forkJoin(requestToServer, lastQuery);
        }), map(response => {
            const result = response[0];
            const lastQuery = response[1];
            return new UsersPageLoaded({
                users: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteUser$ = this.actions$.pipe(ofType(UserActionTypes.UserDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.auth.deleteUser(payload.id);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.updateUser$ = this.actions$.pipe(ofType(UserActionTypes.UserUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.auth.updateUser(payload.user);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.createUser$ = this.actions$.pipe(ofType(UserActionTypes.UserOnServerCreated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.auth.createUser(payload.user).pipe(tap(res => {
                this.store.dispatch(new UserCreated({ user: res }));
            }));
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UserEffects.prototype, "loadUsersPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UserEffects.prototype, "deleteUser$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UserEffects.prototype, "updateUser$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UserEffects.prototype, "createUser$", void 0);
UserEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Actions !== "undefined" && Actions) === "function" ? _a : Object, AuthService, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], UserEffects);
export { UserEffects };
//# sourceMappingURL=user.effects.js.map