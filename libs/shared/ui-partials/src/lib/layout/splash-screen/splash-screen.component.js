import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, ElementRef, ViewChild } from '@angular/core';
// OBJECT-PATH
import * as objectPath from 'object-path';
// SERVICES
import { LayoutConfigService, SplashScreenService } from '@monorepo/shared/util-services';
let SplashScreenComponent = class SplashScreenComponent {
    /**
     * Component constructor
     *
     * @param el: ElementRef
     * @param layoutConfigService: LayoutConfigService
     * @param splashScreenService: SplachScreenService
     */
    constructor(el, layoutConfigService, splashScreenService) {
        this.el = el;
        this.layoutConfigService = layoutConfigService;
        this.splashScreenService = splashScreenService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // init splash screen, see loader option in layout.config.ts
        const loaderConfig = this.layoutConfigService.getConfig('loader');
        this.loaderLogo = objectPath.get(loaderConfig, 'logo');
        this.loaderType = objectPath.get(loaderConfig, 'type');
        this.loaderMessage = objectPath.get(loaderConfig, 'message');
        this.splashScreenService.init(this.splashScreen);
    }
};
tslib_1.__decorate([
    ViewChild('splashScreen', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object)
], SplashScreenComponent.prototype, "splashScreen", void 0);
SplashScreenComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-splash-screen',
        templateUrl: './splash-screen.component.html',
        styleUrls: ['./splash-screen.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object, LayoutConfigService,
        SplashScreenService])
], SplashScreenComponent);
export { SplashScreenComponent };
//# sourceMappingURL=splash-screen.component.js.map