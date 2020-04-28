import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Directive, ElementRef, Input } from '@angular/core';
/**
 * Toggle
 */
let ToggleDirective = class ToggleDirective {
    /**
     * Directive constructor
     * @param el: ElementRef
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ngAfterViewInit() {
        this.toggle = new KTToggle(this.el.nativeElement, this.options);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ToggleDirective.prototype, "options", void 0);
ToggleDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktToggle]',
        exportAs: 'ktToggle'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object])
], ToggleDirective);
export { ToggleDirective };
//# sourceMappingURL=toggle.directive.js.map