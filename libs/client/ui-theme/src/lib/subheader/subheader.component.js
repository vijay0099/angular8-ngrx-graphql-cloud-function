import * as tslib_1 from "tslib";
// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
// OBJECT-PATH
import * as objectPath from 'object-path';
let SubheaderComponent = class SubheaderComponent {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        const config = this.layoutConfigService.getConfig();
        this.layout = objectPath.get(config, 'subheader.layout');
        this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
        this.clear = objectPath.get(config, 'subheader.clear');
    }
};
SubheaderComponent = tslib_1.__decorate([
    Component({
        selector: 'client-subheader',
        templateUrl: './subheader.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], SubheaderComponent);
export { SubheaderComponent };
//# sourceMappingURL=subheader.component.js.map