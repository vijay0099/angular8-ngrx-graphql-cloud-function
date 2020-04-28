import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';
let MenuHorizontalService = class MenuHorizontalService {
    /**
     * Service constructor
     *
     * @param menuConfigService: MenuConfigService
     */
    constructor(menuConfigService) {
        this.menuConfigService = menuConfigService;
        // Public properties
        this.menuList$ = new BehaviorSubject([]);
        this.loadMenu();
    }
    /**
     * Load menu list
     */
    loadMenu() {
        // get menu list
        const menuItems = objectPath.get(this.menuConfigService.getMenus(), 'header.items');
        this.menuList$.next(menuItems);
    }
};
MenuHorizontalService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [MenuConfigService])
], MenuHorizontalService);
export { MenuHorizontalService };
//# sourceMappingURL=menu-horizontal.service.js.map