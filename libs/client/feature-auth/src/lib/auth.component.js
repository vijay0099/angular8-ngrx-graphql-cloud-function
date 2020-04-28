import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
// SERVICES
import { TranslationService, LayoutConfigService, SplashScreenService, AuthNoticeService } from '@monorepo/shared/util-services';
let AuthComponent = class AuthComponent {
    /**
     * Component constructor
     *
     * @param el
     * @param render
     * @param layoutConfigService: LayoutConfigService
     * @param authNoticeService: authNoticeService
     * @param translationService: TranslationService
     * @param splashScreenService: SplashScreenService
     */
    constructor(el, render, layoutConfigService, authNoticeService, translationService, splashScreenService) {
        this.el = el;
        this.render = render;
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        // Public properties
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.translationService.setLanguage(this.translationService.getSelectedLanguage());
        this.headerLogo = this.layoutConfigService.getLogo();
        this.splashScreenService.hide();
    }
    /**
     * Load CSS for this specific page only, and destroy when navigate away
     * @param styleUrl
     */
    loadCSS(styleUrl) {
        return new Promise((resolve, reject) => {
            const styleElement = document.createElement('link');
            styleElement.href = styleUrl;
            styleElement.type = 'text/css';
            styleElement.rel = 'stylesheet';
            styleElement.onload = resolve;
            this.render.appendChild(this.el.nativeElement, styleElement);
        });
    }
};
AuthComponent = tslib_1.__decorate([
    Component({
        selector: 'client-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object, typeof (_b = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _b : Object, LayoutConfigService,
        AuthNoticeService,
        TranslationService,
        SplashScreenService])
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map