import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Directive, ElementRef, Input } from '@angular/core';
// OBJECT PATH
import * as objectPath from 'object-path';
/**
 * Configure Header
 */
let HeaderDirective = class HeaderDirective {
    /**
     * Directive Constructor
     * @param el: ElementRef
     */
    constructor(el) {
        this.el = el;
        this.options = {};
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ngAfterViewInit() {
        this.setupOptions();
        const header = new KTHeader(this.el.nativeElement, this.options);
    }
    /**
     * Setup options to header
     */
    setupOptions() {
        this.options = {
            classic: {
                desktop: true,
                mobile: false
            }
        };
        if (this.el.nativeElement.getAttribute('data-ktheader-minimize') === '1') {
            objectPath.set(this.options, 'minimize', {
                desktop: {
                    on: 'kt-header--minimize'
                },
                mobile: {
                    on: 'kt-header--minimize'
                }
            });
            objectPath.set(this.options, 'offset', {
                desktop: 200,
                mobile: 150
            });
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], HeaderDirective.prototype, "options", void 0);
HeaderDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktHeader]',
        exportAs: 'ktHeader'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object])
], HeaderDirective);
export { HeaderDirective };
//# sourceMappingURL=header.directive.js.map