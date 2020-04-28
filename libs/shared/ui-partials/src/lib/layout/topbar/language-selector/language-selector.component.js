import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, HostBinding, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// RXJS
import { filter } from 'rxjs/operators';
// SERVICES
import { TranslationService } from '@monorepo/shared/util-services';
let LanguageSelectorComponent = class LanguageSelectorComponent {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     */
    constructor(translationService, router) {
        this.translationService = translationService;
        this.router = router;
        // Public properties
        this.classes = '';
        this.languages = [
            {
                lang: 'en',
                name: 'English',
                flag: './assets/media/flags/260-united-kingdom.svg'
            },
            {
                lang: 'hrv',
                name: 'Hrvatski/Croatian',
                flag: './assets/media/flags/164-croatia.svg'
            },
        ];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.setSelectedLanguage();
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(event => {
            this.setSelectedLanguage();
        });
    }
    /**
     * Set language
     *
     * @param lang: any
     */
    setLanguage(lang) {
        this.languages.forEach((language) => {
            if (language.lang === lang) {
                language.active = true;
                this.language = language;
            }
            else {
                language.active = false;
            }
        });
        this.translationService.setLanguage(lang);
    }
    /**
     * Set selected language
     */
    setSelectedLanguage() {
        this.setLanguage(this.translationService.getSelectedLanguage());
    }
};
tslib_1.__decorate([
    HostBinding('class'),
    tslib_1.__metadata("design:type", Object)
], LanguageSelectorComponent.prototype, "classes", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], LanguageSelectorComponent.prototype, "iconType", void 0);
LanguageSelectorComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-language-selector',
        templateUrl: './language-selector.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [TranslationService, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
], LanguageSelectorComponent);
export { LanguageSelectorComponent };
//# sourceMappingURL=language-selector.component.js.map