import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';
// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';
// MAIL
import { MailModule } from '@monorepo/shared/feature-mail';
// E_COMMERCE
import { ECommerceModule } from '@monorepo/shared/feature-e-commerce';
// USER MANAGEMENT
import { UserManagementModule } from '@monorepo/shared/feature-user-management';
// COMPONENTS
import { MyPageComponent } from './my-page/my-page.component';
let PagesModule = class PagesModule {
};
PagesModule = tslib_1.__decorate([
    NgModule({
        declarations: [MyPageComponent],
        exports: [],
        imports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            DataAccessCoreModule,
            PartialsModule,
            MailModule,
            ECommerceModule,
            UserManagementModule
        ],
        providers: []
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=pages.module.js.map