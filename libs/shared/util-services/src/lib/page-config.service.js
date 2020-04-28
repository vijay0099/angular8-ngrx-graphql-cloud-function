import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// RXJS
import { Subject } from 'rxjs';
// OBJECT-PATH
import * as objectPath from 'object-path';
// LODASH
import { merge } from 'lodash';
let PageConfigService = class PageConfigService {
    /**
     * Service Constructor
     *
     * @param router: Router
     */
    constructor(router) {
        this.router = router;
        // register on config changed event and set default config
        this.onConfigUpdated$ = new Subject();
    }
    /**
     * Get current page config based on route
     */
    getCurrentPageConfig(path) {
        let configPath = this.cleanUrl(this.router.url);
        if (path) {
            configPath += '.' + path;
        }
        // get page config by path
        return objectPath.get(this.pageConfig, configPath);
    }
    /**
     * Set existing config with a new value
     * @param value: any
     * @param sav: boolean?
     */
    setConfig(value, save) {
        this.pageConfig = merge(this.pageConfig, value);
        if (save) {
            // not implemented
        }
        // fire off an event that all subscribers will listen
        this.onConfigUpdated$.next(this.pageConfig);
    }
    /**
     * Load confgis
     *
     * @param config: any
     */
    loadConfigs(config) {
        this.pageConfig = config;
        this.onConfigUpdated$.next(this.pageConfig);
    }
    /**
     * Remove unnecessary params from URL
     * @param url
     */
    cleanUrl(url) {
        // remove first route (demo name) from url router
        if (new RegExp(/^\/demo/).test(url)) {
            const urls = url.split('/');
            urls.splice(0, 2);
            url = urls.join('/');
        }
        if (url.charAt(0) == '/') {
            url = url.substr(1);
        }
        // we get the page title from config, using url path.
        // we need to remove query from url ?id=1 before we use the path to search in array config.
        let finalUrl = url.replace(/\//g, '.');
        if (finalUrl.indexOf('?') !== -1) {
            finalUrl = finalUrl.substring(0, finalUrl.indexOf('?'));
        }
        return finalUrl;
    }
};
PageConfigService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
], PageConfigService);
export { PageConfigService };
//# sourceMappingURL=page-config.service.js.map