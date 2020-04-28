import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
let BuilderComponent = class BuilderComponent {
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
        this.model = this.layoutConfigService.getConfig();
    }
    /**
     * Reset preview
     *
     * @param e: Event
     */
    resetPreview(e) {
        e.preventDefault();
        this.layoutConfigService.resetConfig();
        location.reload();
    }
    /**
     * Submit preview
     *
     * @param e: Event
     */
    submitPreview(e) {
        this.layoutConfigService.setConfig(this.model, true);
        location.reload();
    }
};
tslib_1.__decorate([
    ViewChild('form', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof NgForm !== "undefined" && NgForm) === "function" ? _a : Object)
], BuilderComponent.prototype, "form", void 0);
BuilderComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-builder',
        templateUrl: './builder.component.html',
        styleUrls: ['./builder.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], BuilderComponent);
export { BuilderComponent };
//# sourceMappingURL=builder.component.js.map