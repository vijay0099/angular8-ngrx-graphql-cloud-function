import * as tslib_1 from "tslib";
// ANGULAR
import { Component, HostBinding, Input } from '@angular/core';
let PortletFooterComponent = class PortletFooterComponent {
    constructor() {
        // Public properties
        this.classList = 'kt-portlet__foot';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
    }
};
tslib_1.__decorate([
    HostBinding('class'),
    tslib_1.__metadata("design:type", Object)
], PortletFooterComponent.prototype, "classList", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PortletFooterComponent.prototype, "class", void 0);
PortletFooterComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-portlet-footer',
        template: `
		<ng-content></ng-content>`
    })
], PortletFooterComponent);
export { PortletFooterComponent };
//# sourceMappingURL=portlet-footer.component.js.map