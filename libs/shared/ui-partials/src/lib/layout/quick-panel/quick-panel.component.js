import * as tslib_1 from "tslib";
// ANGULAR
import { Component } from '@angular/core';
let QuickPanelComponent = class QuickPanelComponent {
    constructor() {
        // Public properties
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'kt-quick-panel',
            closeBy: 'kt_quick_panel_close_btn',
            toggleBy: 'kt_quick_panel_toggler_btn'
        };
    }
};
QuickPanelComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-quick-panel',
        templateUrl: './quick-panel.component.html',
        styleUrls: ['./quick-panel.component.scss']
    })
], QuickPanelComponent);
export { QuickPanelComponent };
//# sourceMappingURL=quick-panel.component.js.map