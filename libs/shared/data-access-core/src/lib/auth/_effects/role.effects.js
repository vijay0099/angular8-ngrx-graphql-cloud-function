import * as tslib_1 from "tslib";
var _a, _b, _c;
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { of, Observable, defer, forkJoin } from 'rxjs';
import { mergeMap, map, withLatestFrom, filter, tap } from 'rxjs/operators';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
// SERVICES
import { AuthService } from '@monorepo/shared/util-services';
// SELECTORS
import { allRolesLoaded } from '../_selectors/role.selectors';
// ACTIONS
import { AllRolesLoaded, AllRolesRequested, RoleActionTypes, RolesPageLoaded, RolesPageToggleLoading, RoleCreated, RolesActionToggleLoading } from '../_actions/role.actions';
let RoleEffects = class RoleEffects {
    constructor(actions$, auth, store) {
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new RolesPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new RolesPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new RolesActionToggleLoading({
            isLoading: true
        });
        this.hideActionLoadingDistpatcher = new RolesActionToggleLoading({
            isLoading: false
        });
        this.loadAllRoles$ = this.actions$.pipe(ofType(RoleActionTypes.AllRolesRequested), withLatestFrom(this.store.pipe(select(allRolesLoaded))), filter(([action, isAllRolesLoaded]) => !isAllRolesLoaded), mergeMap(() => this.auth.getAllRoles()), map(roles => {
            return new AllRolesLoaded({ roles });
        }));
        this.loadRolesPage$ = this.actions$.pipe(ofType(RoleActionTypes.RolesPageRequested), mergeMap(({ payload }) => {
            this.store.dispatch(this.showPageLoadingDistpatcher);
            const requestToServer = this.auth.findRoles(payload.page);
            const lastQuery = of(payload.page);
            return forkJoin(requestToServer, lastQuery);
        }), map(response => {
            const result = response[0];
            const lastQuery = response[1];
            this.store.dispatch(this.hidePageLoadingDistpatcher);
            return new RolesPageLoaded({
                roles: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteRole$ = this.actions$.pipe(ofType(RoleActionTypes.RoleDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.auth.deleteRole(payload.id);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.updateRole$ = this.actions$.pipe(ofType(RoleActionTypes.RoleUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.auth.updateRole(payload.role);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.createRole$ = this.actions$.pipe(ofType(RoleActionTypes.RoleOnServerCreated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.auth.createRole(payload.role).pipe(tap(res => {
                this.store.dispatch(new RoleCreated({ role: res }));
            }));
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.init$ = defer(() => {
            return of(new AllRolesRequested());
        });
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], RoleEffects.prototype, "loadAllRoles$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], RoleEffects.prototype, "loadRolesPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], RoleEffects.prototype, "deleteRole$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], RoleEffects.prototype, "updateRole$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], RoleEffects.prototype, "createRole$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], RoleEffects.prototype, "init$", void 0);
RoleEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Actions !== "undefined" && Actions) === "function" ? _b : Object, AuthService, typeof (_c = typeof Store !== "undefined" && Store) === "function" ? _c : Object])
], RoleEffects);
export { RoleEffects };
//# sourceMappingURL=role.effects.js.map