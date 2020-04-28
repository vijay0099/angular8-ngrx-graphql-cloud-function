import * as tslib_1 from "tslib";
// ANGULAR
import { Component, HostBinding, Input } from '@angular/core';
let ErrorComponent = class ErrorComponent {
    constructor() {
        // Public properties
        // type of error template to be used, accepted values; error-v1 | error-v2 | error-v3 | error-v4 | error-v5 | error-v6
        this.type = 'error-v1';
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // return back button title
        this.return = 'Return back';
        this.classes = 'kt-grid kt-grid--ver kt-grid--root';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ErrorComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ErrorComponent.prototype, "image", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ErrorComponent.prototype, "code", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ErrorComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ErrorComponent.prototype, "subtitle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ErrorComponent.prototype, "desc", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ErrorComponent.prototype, "return", void 0);
tslib_1.__decorate([
    HostBinding('class'),
    tslib_1.__metadata("design:type", Object)
], ErrorComponent.prototype, "classes", void 0);
ErrorComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-error',
        templateUrl: './error.component.html',
        styleUrls: ['./error.component.scss']
    })
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map