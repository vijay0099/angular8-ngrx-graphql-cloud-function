import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { ChangeDetectorRef, Component, Output } from '@angular/core';
// SERVICES
import { AuthNoticeService } from '@monorepo/shared/util-services';
let AuthNoticeComponent = class AuthNoticeComponent {
    /**
     * Component Constructor
     *
     * @param authNoticeService
     * @param cdr
     */
    constructor(authNoticeService, cdr) {
        this.authNoticeService = authNoticeService;
        this.cdr = cdr;
        this.message = '';
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
            this.message = notice.message;
            this.type = notice.type;
            this.cdr.markForCheck();
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
], AuthNoticeComponent.prototype, "message", void 0);
AuthNoticeComponent = tslib_1.__decorate([
    Component({
        selector: 'admin-auth-notice',
        templateUrl: './auth-notice.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthNoticeService, typeof (_a = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _a : Object])
], AuthNoticeComponent);
export { AuthNoticeComponent };
//# sourceMappingURL=auth-notice.component.js.map