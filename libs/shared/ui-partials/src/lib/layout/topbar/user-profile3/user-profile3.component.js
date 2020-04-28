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
let UserProfile3Component = class UserProfile3Component {
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
], UserProfile3Component.prototype, "avatar", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UserProfile3Component.prototype, "greeting", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserProfile3Component.prototype, "badge", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserProfile3Component.prototype, "icon", void 0);
UserProfile3Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-user-profile3',
        templateUrl: './user-profile3.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object])
], UserProfile3Component);
export { UserProfile3Component };
//# sourceMappingURL=user-profile3.component.js.map