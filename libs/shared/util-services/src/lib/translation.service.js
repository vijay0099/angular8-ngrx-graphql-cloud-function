import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
// Tranlsation
import { TranslateService } from '@ngx-translate/core';
let TranslationService = class TranslationService {
    /**
     * Service Constructor
     *
     * @param translate: TranslateService
     */
    constructor(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        // add new langIds to the list
        this.translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    }
    /**
     * Load Translation
     *
     * @param args: Locale[]
     */
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach(locale => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }
    /**
     * Setup language
     *
     * @param lang: any
     */
    setLanguage(lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem('language', lang);
        }
    }
    /**
     * Returns selected language
     */
    getSelectedLanguage() {
        return localStorage.getItem('language') || this.translate.getDefaultLang();
    }
};
TranslationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof TranslateService !== "undefined" && TranslateService) === "function" ? _a : Object])
], TranslationService);
export { TranslationService };
//# sourceMappingURL=translation.service.js.map