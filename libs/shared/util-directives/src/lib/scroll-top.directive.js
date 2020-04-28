import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Directive, ElementRef, Input } from '@angular/core';
/**
 * Scroll to top
 */
let ScrollTopDirective = class ScrollTopDirective {
    /**
     * Directive Conctructor
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
        this.scrollTop = new KTScrolltop(this.el.nativeElement, this.options);
    }
    /**
     * Returns ScrollTop
     */
    getScrollTop() {
        return this.scrollTop;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ScrollTopDirective.prototype, "options", void 0);
ScrollTopDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktScrollTop]'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object])
], ScrollTopDirective);
export { ScrollTopDirective };
//# sourceMappingURL=scroll-top.directive.js.map