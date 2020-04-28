import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';
// PORTLET
import { PortletComponent } from './portlet.component';
import { PortletHeaderComponent } from './portlet-header.component';
import { PortletBodyComponent } from './portlet-body.component';
import { PortletFooterComponent } from './portlet-footer.component';
let PortletModule = class PortletModule {
};
PortletModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            DataAccessCoreModule,
            MatProgressSpinnerModule,
            MatProgressBarModule
        ],
        declarations: [
            PortletComponent,
            PortletHeaderComponent,
            PortletBodyComponent,
            PortletFooterComponent
        ],
        exports: [
            PortletComponent,
            PortletHeaderComponent,
            PortletBodyComponent,
            PortletFooterComponent
        ]
    })
], PortletModule);
export { PortletModule };
//# sourceMappingURL=portlet.module.js.map