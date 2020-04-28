import * as tslib_1 from "tslib";
var _a;
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, catchError, take } from 'rxjs/operators';
import { ClientAuthService } from '@monorepo/shared/util-services';
let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    getUser() {
        return this.authService.getAuthState();
    }
    canActivate() {
        return this.getUser().pipe(take(1), switchMap(user => {
            console.log('AuthGuard userObj ===> ', user);
            if (!user) {
                this.router.navigateByUrl('/auth/login');
                return of(false);
            }
            return of(true);
        }), catchError(() => {
            this.router.navigateByUrl('/auth/login');
            return of(false);
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, ClientAuthService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map