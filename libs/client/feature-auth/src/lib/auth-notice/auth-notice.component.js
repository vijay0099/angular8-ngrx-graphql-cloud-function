import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { ChangeDetectorRef, Component, Output } from '@angular/core';
import { map } from 'rxjs/operators';
// STORE
import { Store, select } from '@ngrx/store';
// CORE
import { getAuthError, AuthError } from '@monorepo/shared/data-access-core';
// SERVICES
import { AuthNoticeService } from '@monorepo/shared/util-services';
let AuthNoticeComponent = class AuthNoticeComponent {
    /**
     * Component Constructor
     *
     * @param authNoticeService
     * @param cdr
     * @param store: Store<AppState>
     */
    constructor(authNoticeService, cdr, store) {
        this.authNoticeService = authNoticeService;
        this.cdr = cdr;
        this.store = store;
        this.resMessage = '';
        // Private properties
        this.subscriptions = [];
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.subscriptions.push(this.authNoticeService.onNoticeChanged$.subscribe((notice) => {
            notice = Object.assign({}, { message: '', type: '' }, notice);
            this.resMessage = notice.message;
            this.type = notice.type;
            this.cdr.markForCheck();
        }));
        // Clear Error
        this.store.dispatch(new AuthError({ error: '' }));
        // Error
        this.errors$ = this.store.pipe(select(getAuthError), map((error) => {
            console.log('client-side error message =', error);
            if (error &&
                (error.code === 'auth/user-not-found' ||
                    error.code === 'auth/wrong-password')) {
                return 'Invalid login or password';
            }
            else if (error && error.code === 'auth/weak-password') {
                return error.message;
            }
            else if (error && error.code === 'auth/email-already-in-use') {
                return 'User with this email address already exist';
            }
            else if (error) {
                return error.message;
            }
            else {
                return null;
            }
        }));
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AuthNoticeComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AuthNoticeComponent.prototype, "resMessage", void 0);
AuthNoticeComponent = tslib_1.__decorate([
    Component({
        selector: 'client-auth-notice',
        templateUrl: './auth-notice.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthNoticeService, typeof (_a = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _a : Object, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], AuthNoticeComponent);
export { AuthNoticeComponent };
//# sourceMappingURL=auth-notice.component.js.map