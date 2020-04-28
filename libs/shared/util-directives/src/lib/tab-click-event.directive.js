import * as tslib_1 from "tslib";
var _a, _b;
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
/**
 * Listen Tab click
 */
let TabClickEventDirective = class TabClickEventDirective {
    /**
     * Directive Constructor
     * @param el: ElementRef
     * @param render: Renderer2
     */
    constructor(el, render) {
        this.el = el;
        this.render = render;
    }
    /**
     * A directive handler the tab click event for active tab
     * @param target
     */
    onClick(target) {
        // remove previous active tab
        const parent = target.closest('[role="tablist"]');
        const activeLink = parent.querySelector('[role="tab"].active');
        if (activeLink) {
            this.render.removeClass(activeLink, 'active');
        }
        // set active tab
        const link = target.closest('[role="tab"]');
        if (link) {
            this.render.addClass(link, 'active');
        }
    }
};
tslib_1.__decorate([
    HostListener('click', ['$event.target']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [HTMLElement]),
    tslib_1.__metadata("design:returntype", void 0)
], TabClickEventDirective.prototype, "onClick", null);
TabClickEventDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktTabClickEvent]'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object, typeof (_b = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _b : Object])
], TabClickEventDirective);
export { TabClickEventDirective };
//# sourceMappingURL=tab-click-event.directive.js.map