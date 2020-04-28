import * as tslib_1 from "tslib";
// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { LayoutConfigService, HtmlClassService } from '@monorepo/shared/util-services';
let BrandComponent = class BrandComponent {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     */
    constructor(layoutConfigService, htmlClassService) {
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-aside--minimize',
            togglerState: 'kt-aside__brand-aside-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
    }
    /**
     * On destroy
     */
    ngAfterViewInit() { }
};
BrandComponent = tslib_1.__decorate([
    Component({
        selector: 'client-brand',
        templateUrl: './brand.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService,
        HtmlClassService])
], BrandComponent);
export { BrandComponent };
//# sourceMappingURL=brand.component.js.map