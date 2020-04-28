import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { mergeMap, map } from 'rxjs/operators';
import { defer, Observable, of } from 'rxjs';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
// SERVICES
import { AuthService } from '@monorepo/shared/util-services';
// ACTIONS
import { AllPermissionsLoaded, AllPermissionsRequested, PermissionActionTypes } from '../_actions/permission.actions';
let PermissionEffects = class PermissionEffects {
    constructor(actions$, auth) {
        this.actions$ = actions$;
        this.auth = auth;
        this.loadAllPermissions$ = this.actions$.pipe(ofType(PermissionActionTypes.AllPermissionsRequested), mergeMap(() => this.auth.getAllPermissions()), map((result) => {
            return new AllPermissionsLoaded({
                permissions: result
            });
        }));
        this.init$ = defer(() => {
            return of(new AllPermissionsRequested());
        });
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], PermissionEffects.prototype, "loadAllPermissions$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], PermissionEffects.prototype, "init$", void 0);
PermissionEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Actions !== "undefined" && Actions) === "function" ? _b : Object, AuthService])
], PermissionEffects);
export { PermissionEffects };
//# sourceMappingURL=permission.effects.js.map