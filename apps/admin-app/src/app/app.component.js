import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// SERVICES
import { LayoutConfigService, SplashScreenService, TranslationService } from '@monorepo/shared/util-services';
import { sharedEnLang, sharedChLang, sharedEsLang, sharedJpLang, sharedDeLang, sharedFrLang, sharedHrvLang } from '@monorepo/shared/util-lang';
import { enLang, chLang, esLang, jpLang, deLang, frLang, hrvLang } from '@monorepo/admin/util-lang';
let AppComponent = class AppComponent {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     * @param layoutConfigService: LayoutConfigService
     * @param splashScreenService: SplashScreenService
     */
    constructor(translationService, router, layoutConfigService, splashScreenService) {
        this.translationService = translationService;
        this.router = router;
        this.layoutConfigService = layoutConfigService;
        this.splashScreenService = splashScreenService;
        // Public properties
        this.title = 'Metronic';
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(enLang, chLang, esLang, jpLang, deLang, frLang, hrvLang, sharedEnLang, sharedChLang, sharedEsLang, sharedJpLang, sharedDeLang, sharedFrLang, sharedHrvLang);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // enable/disable loader
        this.loader = this.layoutConfigService.getConfig('loader.enabled');
        const routerSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // hide splash screen
                this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add('kt-page--loaded');
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
    }
    /**
     * On Destroy
     */
    ngOnDestroy() {
        this.unsubscribe.forEach(sb => sb.unsubscribe());
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'body[kt-root]',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [TranslationService, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, LayoutConfigService,
        SplashScreenService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map