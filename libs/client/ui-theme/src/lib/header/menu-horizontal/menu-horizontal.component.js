import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
// ANGULAR
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { filter } from 'rxjs/operators';
// OBJECT-PATH
import * as objectPath from 'object-path';
// SERVICES
import { LayoutConfigService, MenuConfigService, MenuHorizontalService, HtmlClassService } from '@monorepo/shared/util-services';
let MenuHorizontalComponent = class MenuHorizontalComponent {
    /**
     * Component Conctructor
     *
     * @param el: ElementRef
     * @param htmlClassService: HtmlClassService
     * @param menuHorService: MenuHorService
     * @param menuConfigService: MenuConfigService
     * @param layoutConfigService: LayouConfigService
     * @param router: Router
     * @param render: Renderer2
     * @param cdr: ChangeDetectorRef
     */
    constructor(el, htmlClassService, menuHorService, menuConfigService, layoutConfigService, router, render, cdr) {
        this.el = el;
        this.htmlClassService = htmlClassService;
        this.menuHorService = menuHorService;
        this.menuConfigService = menuConfigService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        // Public properties
        this.currentRouteUrl = '';
        this.menuOptions = {
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            accordion: {
                slideSpeed: 200,
                expandAll: false // allow having multiple expanded accordions in the menu
            },
            dropdown: {
                timeout: 50
            }
        };
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'kt-header-menu-wrapper',
            closeBy: 'kt_header_menu_mobile_close_btn',
            toggleBy: {
                target: 'kt_header_mobile_toggler',
                state: 'kt-header-mobile__toolbar-toggler--active'
            }
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ngAfterViewInit() { }
    /**
     * On init
     */
    ngOnInit() {
        this.rootArrowEnabled = this.layoutConfigService.getConfig('header.menu.self.root-arrow');
        this.currentRouteUrl = this.router.url;
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
            this.currentRouteUrl = this.router.url;
            this.cdr.markForCheck();
        });
    }
    /**
     * Return Css Class Name
     * @param item: any
     */
    getItemCssClasses(item) {
        let classes = 'kt-menu__item';
        if (objectPath.get(item, 'submenu')) {
            classes += ' kt-menu__item--submenu';
        }
        if (!item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--active kt-menu__item--here';
        }
        if (item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--open kt-menu__item--here';
        }
        if (objectPath.get(item, 'resizer')) {
            classes += ' kt-menu__item--resize';
        }
        const menuType = objectPath.get(item, 'submenu.type') || 'classic';
        if ((objectPath.get(item, 'root') && menuType === 'classic') ||
            parseInt(objectPath.get(item, 'submenu.width'), 10) > 0) {
            classes += ' kt-menu__item--rel';
        }
        const customClass = objectPath.get(item, 'custom-class');
        if (customClass) {
            classes += ' ' + customClass;
        }
        if (objectPath.get(item, 'icon-only')) {
            classes += ' kt-menu__item--icon-only';
        }
        return classes;
    }
    /**
     * Returns Attribute SubMenu Toggle
     * @param item: any
     */
    getItemAttrSubmenuToggle(item) {
        let toggle = 'hover';
        if (objectPath.get(item, 'toggle') === 'click') {
            toggle = 'click';
        }
        else if (objectPath.get(item, 'submenu.type') === 'tabs') {
            toggle = 'tabs';
        }
        else {
            // submenu toggle default to 'hover'
        }
        return toggle;
    }
    /**
     * Returns Submenu CSS Class Name
     * @param item: any
     */
    getItemMenuSubmenuClass(item) {
        let classes = '';
        const alignment = objectPath.get(item, 'alignment') || 'right';
        if (alignment) {
            classes += ' kt-menu__submenu--' + alignment;
        }
        const type = objectPath.get(item, 'type') || 'classic';
        if (type === 'classic') {
            classes += ' kt-menu__submenu--classic';
        }
        if (type === 'tabs') {
            classes += ' kt-menu__submenu--tabs';
        }
        if (type === 'mega') {
            if (objectPath.get(item, 'width')) {
                classes += ' kt-menu__submenu--fixed';
            }
        }
        if (objectPath.get(item, 'pull')) {
            classes += ' kt-menu__submenu--pull';
        }
        return classes;
    }
    /**
     * Check Menu is active
     * @param item: any
     */
    isMenuItemIsActive(item) {
        if (item.submenu) {
            return this.isMenuRootItemIsActive(item);
        }
        if (!item.page) {
            return false;
        }
        return this.currentRouteUrl.indexOf(item.page) !== -1;
    }
    /**
     * Check Menu Root Item is active
     * @param item: any
     */
    isMenuRootItemIsActive(item) {
        if (item.submenu.items) {
            for (const subItem of item.submenu.items) {
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (item.submenu.columns) {
            for (const subItem of item.submenu.columns) {
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (typeof item.submenu[Symbol.iterator] === 'function') {
            for (const subItem of item.submenu) {
                const active = this.isMenuItemIsActive(subItem);
                if (active) {
                    return true;
                }
            }
        }
        return false;
    }
};
MenuHorizontalComponent = tslib_1.__decorate([
    Component({
        selector: 'client-menu-horizontal',
        templateUrl: './menu-horizontal.component.html',
        styleUrls: ['./menu-horizontal.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object, HtmlClassService,
        MenuHorizontalService,
        MenuConfigService,
        LayoutConfigService, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _c : Object, typeof (_d = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _d : Object])
], MenuHorizontalComponent);
export { MenuHorizontalComponent };
//# sourceMappingURL=menu-horizontal.component.js.map