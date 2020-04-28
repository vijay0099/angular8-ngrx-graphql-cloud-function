import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let NotificationComponent = class NotificationComponent {
    /**
     * Component constructor
     *
     * @param sanitizer: DomSanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        // Set icon class name
        this.icon = 'flaticon2-bell-alarm-symbol';
        // Set skin color, default to light
        this.skin = 'light';
        this.type = 'success';
    }
    backGroundStyle() {
        if (!this.bgImage) {
            return 'none';
        }
        return 'url(' + this.bgImage + ')';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NotificationComponent.prototype, "dot", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NotificationComponent.prototype, "pulse", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NotificationComponent.prototype, "pulseLight", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NotificationComponent.prototype, "icon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NotificationComponent.prototype, "iconType", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NotificationComponent.prototype, "useSVG", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NotificationComponent.prototype, "bgImage", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NotificationComponent.prototype, "skin", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NotificationComponent.prototype, "type", void 0);
NotificationComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-notification',
        templateUrl: './notification.component.html',
        styleUrls: ['notification.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" ? _a : Object])
], NotificationComponent);
export { NotificationComponent };
//# sourceMappingURL=notification.component.js.map