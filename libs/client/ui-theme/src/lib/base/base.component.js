import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, ViewEncapsulation } from '@angular/core';
// OBJECT-PATH
import * as objectPath from 'object-path';
// SERVICES
import { HtmlClassService, LayoutConfigService, MenuConfigService, PageConfigService } from '@monorepo/shared/util-services';
import { LayoutConfig, MenuConfig, PageConfig } from '@monorepo/client/util-config';
// User permissions
import { NgxPermissionsService } from 'ngx-permissions';
// STATE
import { currentUserPermissions } from '@monorepo/shared/data-access-core';
// STORE
import { select, Store } from '@ngrx/store';
let BaseComponent = class BaseComponent {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param menuConfigService: MenuConfigService
     * @param pageConfigService: PageConfigService
     * @param htmlClassService: HtmlClassService
     * @param store
     * @param permissionsService
     */
    constructor(layoutConfigService, menuConfigService, pageConfigService, htmlClassService, store, permissionsService) {
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.store = store;
        this.permissionsService = permissionsService;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.loadRolesWithPermissions();
        // register configs by demos
        this.layoutConfigService.loadConfigs(new LayoutConfig().configs);
        this.menuConfigService.loadConfigs(new MenuConfig().configs);
        this.pageConfigService.loadConfigs(new PageConfig().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(layoutConfig => {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(subscr);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        const config = this.layoutConfigService.getConfig();
        this.selfLayout = objectPath.get(config, 'self.layout');
        this.asideDisplay = objectPath.get(config, 'aside.self.display');
        this.subheaderDisplay = objectPath.get(config, 'subheader.display');
        this.fluid = objectPath.get(config, 'content.width') === 'fluid';
        // let the layout type change
        const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(cfg => {
            setTimeout(() => {
                this.selfLayout = objectPath.get(cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(subscr);
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.unsubscribe.forEach(sb => sb.unsubscribe());
    }
    /**
     * NGX Permissions, init roles
     */
    loadRolesWithPermissions() {
        this.currentUserPermissions$ = this.store.pipe(select(currentUserPermissions));
        const subscr = this.currentUserPermissions$.subscribe(res => {
            if (!res || res.length === 0) {
                return;
            }
            this.permissionsService.flushPermissions();
            res.forEach((pm) => this.permissionsService.addPermission(pm.name));
        });
        this.unsubscribe.push(subscr);
    }
};
BaseComponent = tslib_1.__decorate([
    Component({
        selector: 'client-base',
        templateUrl: './base.component.html',
        styleUrls: ['./base.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService,
        MenuConfigService,
        PageConfigService,
        HtmlClassService, typeof (_a = typeof Store !== "undefined" && Store) === "function" ? _a : Object, typeof (_b = typeof NgxPermissionsService !== "undefined" && NgxPermissionsService) === "function" ? _b : Object])
], BaseComponent);
export { BaseComponent };
//# sourceMappingURL=base.component.js.map