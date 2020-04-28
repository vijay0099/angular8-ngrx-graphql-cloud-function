import * as tslib_1 from "tslib";
// ANGULAR
import { Component } from '@angular/core';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
let StickyToolbarComponent = class StickyToolbarComponent {
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        // Public properties
        this.demoPanelOptions = {
            overlay: true,
            baseClass: 'kt-demo-panel',
            closeBy: 'kt_demo_panel_close',
            toggleBy: 'kt_demo_panel_toggle'
        };
        this.baseHref = 'https://keenthemes.com/metronic/preview/angular/';
    }
    isActiveDemo(demo) {
        return demo === this.layoutConfigService.getConfig('demo');
    }
};
StickyToolbarComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-sticky-toolbar',
        templateUrl: './sticky-toolbar.component.html',
        styleUrls: ['./sticky-toolbar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], StickyToolbarComponent);
export { StickyToolbarComponent };
//# sourceMappingURL=sticky-toolbar.component.js.map