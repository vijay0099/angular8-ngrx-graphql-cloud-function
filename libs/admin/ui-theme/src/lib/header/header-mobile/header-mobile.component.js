import * as tslib_1 from "tslib";
// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
let HeaderMobileComponent = class HeaderMobileComponent {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-header__topbar--mobile-on',
            togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.headerLogo = this.layoutConfigService.getStickyLogo();
        this.asideDisplay = this.layoutConfigService.getConfig('aside.self.display');
    }
};
HeaderMobileComponent = tslib_1.__decorate([
    Component({
        selector: 'admin-header-mobile',
        templateUrl: './header-mobile.component.html',
        styleUrls: ['./header-mobile.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], HeaderMobileComponent);
export { HeaderMobileComponent };
//# sourceMappingURL=header-mobile.component.js.map