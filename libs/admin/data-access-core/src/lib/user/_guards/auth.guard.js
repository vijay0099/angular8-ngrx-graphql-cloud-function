import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
import { isLoggedIn } from '../_selectors/auth.selectors';
let AuthGuard = class AuthGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        return this.store.pipe(select(isLoggedIn), tap(loggedIn => {
            if (!loggedIn) {
                this.router.navigateByUrl('/auth/login');
            }
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map