import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Directive, ElementRef, Input } from '@angular/core';
/**
 * Setup off Convas
 */
let OffcanvasDirective = class OffcanvasDirective {
    /**
     * Directive Constructor
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
        setTimeout(() => {
            this.offcanvas = new KTOffcanvas(this.el.nativeElement, this.options);
        });
    }
    /**
     * Returns the offCanvas
     */
    getOffcanvas() {
        return this.offcanvas;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], OffcanvasDirective.prototype, "options", void 0);
OffcanvasDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktOffcanvas]',
        exportAs: 'ktOffcanvas'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object])
], OffcanvasDirective);
export { OffcanvasDirective };
//# sourceMappingURL=offcanvas.directive.js.map