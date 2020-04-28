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
import { tap } from 'rxjs/operators';
let UserProfile2Component = class UserProfile2Component {
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
        this.user$ = this.store.pipe(select(currentUser), tap(value => console.log('this.user$ >>>>> ', value)));
        // .subscribe(data => console.log(data))
        console.log('checkthis.user$ > ', this.user$);
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
], UserProfile2Component.prototype, "avatar", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UserProfile2Component.prototype, "greeting", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserProfile2Component.prototype, "badge", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], UserProfile2Component.prototype, "icon", void 0);
UserProfile2Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-user-profile2',
        templateUrl: './user-profile2.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object])
], UserProfile2Component);
export { UserProfile2Component };
//# sourceMappingURL=user-profile2.component.js.map