import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
// NGRX
import { Store } from '@ngrx/store';
const userManagementPermissionId = 2;
let UserManagementComponent = class UserManagementComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
        // this.currentUserPermission$.subscribe(permissions => {
        // 	if (permissions && permissions.length > 0) {
        // 		this.hasUserAccess$ =
        // 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
        // 		this.hasUserAccess$.subscribe(res => {
        // 			if (!res) {
        // 				this.router.navigateByUrl('/error/403');
        // 			}
        // 		});
        // 	}
        // });
    }
};
UserManagementComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-user-management',
        templateUrl: './user-management.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object])
], UserManagementComponent);
export { UserManagementComponent };
//# sourceMappingURL=user-management.component.js.map