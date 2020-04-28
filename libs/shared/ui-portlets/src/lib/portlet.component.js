import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
// ANGULAR
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// LOADING BAR
import { LoadingBarService } from '@ngx-loading-bar/core';
// RXJS
import { Observable } from 'rxjs';
// PORTLET
import { PortletBodyComponent } from './portlet-body.component';
import { PortletHeaderComponent } from './portlet-header.component';
import { PortletFooterComponent } from './portlet-footer.component';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
let PortletComponent = class PortletComponent {
    /**
     * Component constructor
     *
     * @param el: ElementRef
     * @param loader: LoadingBarService
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(el, loader, layoutConfigService) {
        this.el = el;
        this.loader = loader;
        this.layoutConfigService = layoutConfigService;
        this.loader.complete();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() { }
    /**
     * After view init
     */
    ngAfterViewInit() { }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], PortletComponent.prototype, "loading$", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PortletComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PortletComponent.prototype, "class", void 0);
tslib_1.__decorate([
    ViewChild('portlet', { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object)
], PortletComponent.prototype, "portlet", void 0);
tslib_1.__decorate([
    ViewChild(PortletHeaderComponent, { static: true }),
    tslib_1.__metadata("design:type", PortletHeaderComponent)
], PortletComponent.prototype, "header", void 0);
tslib_1.__decorate([
    ViewChild(PortletBodyComponent, { static: true }),
    tslib_1.__metadata("design:type", PortletBodyComponent)
], PortletComponent.prototype, "body", void 0);
tslib_1.__decorate([
    ViewChild(PortletFooterComponent, { static: true }),
    tslib_1.__metadata("design:type", PortletFooterComponent)
], PortletComponent.prototype, "footer", void 0);
PortletComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-portlet',
        templateUrl: './portlet.component.html',
        exportAs: 'ktPortlet'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _c : Object, typeof (_d = typeof LoadingBarService !== "undefined" && LoadingBarService) === "function" ? _d : Object, LayoutConfigService])
], PortletComponent);
export { PortletComponent };
//# sourceMappingURL=portlet.component.js.map