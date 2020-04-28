import * as tslib_1 from "tslib";
// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
// OBJECT-PATH
import * as objectPath from 'object-path';
let FooterComponent = class FooterComponent {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayouConfigService
     */
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
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
        const config = this.layoutConfigService.getConfig();
        // footer width fluid
        this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
    }
};
FooterComponent = tslib_1.__decorate([
    Component({
        selector: 'client-footer',
        templateUrl: './footer.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map