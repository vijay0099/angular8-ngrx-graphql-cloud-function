import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// RXJS
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
import { currentUserPermissions } from '../_selectors/auth.selectors';
import { find } from 'lodash';
let ModuleGuard = class ModuleGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        const moduleName = route.data.moduleName;
        if (!moduleName) {
            return of(false);
        }
        return this.store.pipe(select(currentUserPermissions), map((permissions) => {
            const _perm = find(permissions, (elem) => {
                return (elem.title.toLocaleLowerCase() === moduleName.toLocaleLowerCase());
            });
            return _perm ? true : false;
        }), tap(hasAccess => {
            if (!hasAccess) {
                this.router.navigateByUrl('/error/403');
            }
        }));
    }
};
ModuleGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object])
], ModuleGuard);
export { ModuleGuard };
//# sourceMappingURL=module.guard.js.map