import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';
// COMPONENTS
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import { Timeline2Component } from './timeline2/timeline2.component';
let WidgetModule = class WidgetModule {
};
WidgetModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DataTableComponent,
            // Widgets
            Widget1Component,
            Widget4Component,
            Widget5Component,
            Widget12Component,
            Widget14Component,
            Widget26Component,
            Timeline2Component
        ],
        exports: [
            DataTableComponent,
            // Widgets
            Widget1Component,
            Widget4Component,
            Widget5Component,
            Widget12Component,
            Widget14Component,
            Widget26Component,
            Timeline2Component
        ],
        imports: [
            CommonModule,
            PerfectScrollbarModule,
            MatTableModule,
            DataAccessCoreModule,
            MatIconModule,
            MatButtonModule,
            MatProgressSpinnerModule,
            MatPaginatorModule,
            MatSortModule
        ]
    })
], WidgetModule);
export { WidgetModule };
//# sourceMappingURL=widget.module.js.map