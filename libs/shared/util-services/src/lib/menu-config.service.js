import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { Subject } from 'rxjs';
let MenuConfigService = class MenuConfigService {
    /**
     * Service Constructor
     */
    constructor() {
        // register on config changed event and set default config
        this.onConfigUpdated$ = new Subject();
    }
    /**
     * Returns the menuConfig
     */
    getMenus() {
        return this.menuConfig;
    }
    /**
     * Load config
     *
     * @param config: any
     */
    loadConfigs(config) {
        this.menuConfig = config;
        this.onConfigUpdated$.next(this.menuConfig);
    }
};
MenuConfigService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], MenuConfigService);
export { MenuConfigService };
//# sourceMappingURL=menu-config.service.js.map