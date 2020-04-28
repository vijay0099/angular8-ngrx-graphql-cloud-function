import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
// OBJECT-PATH
import * as objectPath from 'object-path';
// RXJS
import { BehaviorSubject } from 'rxjs';
let HtmlClassService = class HtmlClassService {
    /**
     * Component constructor
     */
    constructor() {
        // Private properties
        this.loaded = [];
        this.onClassesUpdated$ = new BehaviorSubject(this.classes);
    }
    /**
     * Build html element classes from layout config
     * @param layoutConfig
     */
    setConfig(layoutConfig) {
        this.config = layoutConfig;
        // scope list of classes
        this.classes = {
            header: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: []
        };
        // init base layout
        this.initLayout();
        this.initLoader();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init aside and aside menu
        this.initAside();
        // init footer
        this.initFooter();
        this.initSkins();
        this.onClassesUpdated$.next(this.classes);
    }
    /**
     * Returns Classes
     *
     * @param path: string
     * @param toString boolean
     */
    getClasses(path, toString) {
        if (path) {
            const classes = objectPath.get(this.classes, path) || '';
            if (toString && Array.isArray(classes)) {
                return classes.join(' ');
            }
            return classes.toString();
        }
        return this.classes;
    }
    /**
     * Init Layout
     */
    initLayout() {
        if (objectPath.has(this.config, 'self.body.class')) {
            const selfBodyClass = objectPath
                .get(this.config, 'self.body.class')
                .toString();
            if (selfBodyClass) {
                const bodyClasses = selfBodyClass.split(' ');
                bodyClasses.forEach(cssClass => document.body.classList.add(cssClass));
            }
        }
        if (objectPath.get(this.config, 'self.layout') === 'boxed' &&
            objectPath.has(this.config, 'self.body.background-image')) {
            document.body.style.backgroundImage =
                'url("' +
                    objectPath.get(this.config, 'self.body.background-image') +
                    '")';
        }
        // Offcanvas directions
        document.body.classList.add('kt-quick-panel--right');
        document.body.classList.add('kt-demo-panel--right');
        document.body.classList.add('kt-offcanvas-panel--right');
    }
    /**
     * Init Loader
     */
    initLoader() { }
    /**
     * Init Header
     */
    initHeader() {
        // Fixed header
        if (objectPath.get(this.config, 'header.self.fixed.desktop')) {
            document.body.classList.add('kt-header--fixed');
            objectPath.push(this.classes, 'header', 'kt-header--fixed');
        }
        else {
            document.body.classList.add('kt-header--static');
        }
        if (objectPath.get(this.config, 'header.self.fixed.mobile')) {
            document.body.classList.add('kt-header-mobile--fixed');
            objectPath.push(this.classes, 'header_mobile', 'kt-header-mobile--fixed');
        }
        if (objectPath.get(this.config, 'header.menu.self.layout')) {
            objectPath.push(this.classes, 'header_menu', 'kt-header-menu--layout-' +
                objectPath.get(this.config, 'header.menu.self.layout'));
        }
    }
    /**
     * Inin Subheader
     */
    initSubheader() {
        // Fixed content head
        if (objectPath.get(this.config, 'subheader.fixed')) {
            document.body.classList.add('kt-subheader--fixed');
        }
        if (objectPath.get(this.config, 'subheader.display')) {
            document.body.classList.add('kt-subheader--enabled');
        }
        if (objectPath.has(this.config, 'subheader.style')) {
            document.body.classList.add('kt-subheader--' + objectPath.get(this.config, 'subheader.style'));
        }
    }
    /**
     * Init Aside
     */
    initAside() {
        if (objectPath.get(this.config, 'aside.self.display') !== true) {
            return;
        }
        document.body.classList.add('kt-aside--enabled');
        // Fixed Aside
        if (objectPath.get(this.config, 'aside.self.fixed')) {
            document.body.classList.add('kt-aside--fixed');
            objectPath.push(this.classes, 'aside', 'kt-aside--fixed');
        }
        else {
            document.body.classList.add('kt-aside--static');
        }
        // Default fixed
        if (objectPath.get(this.config, 'aside.self.minimize.default')) {
            document.body.classList.add('kt-aside--minimize');
        }
        // Menu
        // Dropdown Submenu
        if (objectPath.get(this.config, 'aside.menu.dropdown')) {
            objectPath.push(this.classes, 'aside_menu', 'kt-aside-menu--dropdown');
            // enable menu dropdown
        }
    }
    /**
     * Init Footer
     */
    initFooter() {
        // Fixed header
        if (objectPath.get(this.config, 'footer.self.fixed')) {
            document.body.classList.add('kt-footer--fixed');
        }
    }
    /**
     * Set the body class name based on page skin options
     */
    initSkins() {
        if (objectPath.get(this.config, 'header.self.skin')) {
            document.body.classList.add('kt-header-base-' + objectPath.get(this.config, 'header.self.skin'));
        }
        if (objectPath.get(this.config, 'header.menu.desktop.submenu.skin')) {
            document.body.classList.add('kt-header-menu-' +
                objectPath.get(this.config, 'header.menu.desktop.submenu.skin'));
        }
        if (objectPath.get(this.config, 'brand.self.skin')) {
            document.body.classList.add('kt-brand-' + objectPath.get(this.config, 'brand.self.skin'));
        }
        if (objectPath.get(this.config, 'aside.self.skin')) {
            document.body.classList.add('kt-aside-' + objectPath.get(this.config, 'aside.self.skin'));
        }
    }
};
HtmlClassService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], HtmlClassService);
export { HtmlClassService };
//# sourceMappingURL=html-class.service.js.map