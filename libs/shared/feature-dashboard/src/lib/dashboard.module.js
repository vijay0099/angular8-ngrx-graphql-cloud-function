import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';
// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';
// COMPONENTS
import { DashboardComponent } from './dashboard.component';
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            PartialsModule,
            DataAccessCoreModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: DashboardComponent
                }
            ])
        ],
        providers: [],
        declarations: [DashboardComponent]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map