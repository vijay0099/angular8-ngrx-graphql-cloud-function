import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
// NGBOOTSTRAP
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
// PERFECT SCROLLBAR
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';
// HIGHLIGHT JS
import { HighlightModule } from 'ngx-highlightjs';
// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';
// Builder component
import { BuilderComponent } from './builder.component';
let BuilderModule = class BuilderModule {
};
BuilderModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            PartialsModule,
            FormsModule,
            MatTabsModule,
            DataAccessCoreModule,
            PerfectScrollbarModule,
            HighlightModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: BuilderComponent
                }
            ]),
            // ng-bootstrap modules
            NgbTabsetModule
        ],
        providers: [],
        declarations: [BuilderComponent]
    })
], BuilderModule);
export { BuilderModule };
//# sourceMappingURL=builder.module.js.map