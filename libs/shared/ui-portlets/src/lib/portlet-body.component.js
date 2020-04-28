import * as tslib_1 from "tslib";
// ANGULAR
import { Component, HostBinding, Input } from '@angular/core';
let PortletBodyComponent = class PortletBodyComponent {
    constructor() {
        // Public properties
        this.classList = 'kt-portlet__body';
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
], PortletBodyComponent.prototype, "classList", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PortletBodyComponent.prototype, "class", void 0);
PortletBodyComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-portlet-body',
        template: `
		<ng-content></ng-content>`
    })
], PortletBodyComponent);
export { PortletBodyComponent };
//# sourceMappingURL=portlet-body.component.js.map