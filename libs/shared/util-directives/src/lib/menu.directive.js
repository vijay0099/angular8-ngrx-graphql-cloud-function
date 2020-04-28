import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Directive, ElementRef, Input } from '@angular/core';
// OBJECT-PATH
import * as objectPath from 'object-path';
/**
 * Configure menu
 */
let MenuDirective = class MenuDirective {
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
        this.setupOptions();
        this.menu = new KTMenu(this.el.nativeElement, this.options);
    }
    /**
     * Return the menu
     */
    getMenu() {
        return this.menu;
    }
    /**
     * Setup menu options
     */
    setupOptions() {
        // init aside menu
        let menuDesktopMode = 'accordion';
        if (this.el.nativeElement.getAttribute('data-ktmenu-dropdown') === '1') {
            menuDesktopMode = 'dropdown';
        }
        if (typeof objectPath.get(this.options, 'submenu.desktop') === 'object') {
            objectPath.set(this.options, 'submenu.desktop', menuDesktopMode);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MenuDirective.prototype, "options", void 0);
MenuDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktMenu]',
        exportAs: 'ktMenu'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object])
], MenuDirective);
export { MenuDirective };
//# sourceMappingURL=menu.directive.js.map