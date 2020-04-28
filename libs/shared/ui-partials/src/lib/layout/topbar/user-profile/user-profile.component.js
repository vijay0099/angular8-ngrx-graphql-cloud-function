import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, Input } from '@angular/core';
// NGRX
import { select, Store } from '@ngrx/store';
// STATE
// import { AppState } from '../../../../../core/reducers';
// import { currentUser, Logout } from '../../../../../core/auth';
// CORE
import { currentUser, Logout } from '@monorepo/shared/data-access-core';
let UserProfileComponent = class UserProfileComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    constructor(store) {
        this.store = store;
        this.avatar = true;
        this.greeting = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.user$ = this.store.pipe(select(currentUser));
    }
    /**
     * Log out
     */
    logout() {
        this.store.dispatch(new Logout());
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UserProfileComponent.prototype, "avatar", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UserProfileComponent.prototype, "greeting", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserProfileComponent.prototype, "badge", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserProfileComponent.prototype, "icon", void 0);
UserProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-user-profile',
        templateUrl: './user-profile.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object])
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map