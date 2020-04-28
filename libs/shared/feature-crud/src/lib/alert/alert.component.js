import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input, Output, EventEmitter } from '@angular/core';
let AlertComponent = class AlertComponent {
    constructor() {
        this.duration = 0;
        this.showCloseButton = true;
        this.close = new EventEmitter();
        this.alertShowing = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (this.duration === 0) {
            return;
        }
        setTimeout(() => {
            this.closeAlert();
        }, this.duration);
    }
    /**
     * close alert
     */
    closeAlert() {
        this.close.emit();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AlertComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "duration", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "showCloseButton", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "close", void 0);
AlertComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-alert',
        templateUrl: './alert.component.html'
    })
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map