import * as tslib_1 from "tslib";
import { NgxPermissionsModule } from 'ngx-permissions';
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// MATERIAL
import { MatButtonModule, MatProgressBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
// NGBOOTSTRAP
import { NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// TRANSLATION
import { TranslateModule } from '@ngx-translate/core';
// LOADING BAR
import { LoadingBarModule } from '@ngx-loading-bar/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// NGX DATAPICKER
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// PERFECT SCROLLBAR
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// SVG INLINE
import { InlineSVGModule } from 'ng-inline-svg';
// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './brand/brand.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { BaseComponent } from './base/base.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';
// PAGES
import { PagesModule } from '@monorepo/shared/ui-pages';
// CORE
import { DataAccessCoreModule, PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '@monorepo/shared/data-access-core';
// SERVICES
import { HtmlClassService } from '@monorepo/shared/util-services';
let ThemeModule = class ThemeModule {
};
ThemeModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            BaseComponent,
            FooterComponent,
            // headers
            HeaderComponent,
            BrandComponent,
            HeaderMobileComponent,
            // subheader
            SubheaderComponent,
            // topbar components
            TopbarComponent,
            // aside left menu components
            AsideLeftComponent,
            // horizontal menu components
            MenuHorizontalComponent,
            ErrorPageComponent
        ],
        exports: [
            BaseComponent,
            FooterComponent,
            // headers
            HeaderComponent,
            BrandComponent,
            HeaderMobileComponent,
            // subheader
            SubheaderComponent,
            // topbar components
            TopbarComponent,
            // aside left menu components
            AsideLeftComponent,
            // horizontal menu components
            MenuHorizontalComponent,
            ErrorPageComponent
        ],
        providers: [HtmlClassService],
        imports: [
            CommonModule,
            RouterModule,
            NgxPermissionsModule.forChild(),
            StoreModule.forFeature('roles', rolesReducer),
            StoreModule.forFeature('permissions', permissionsReducer),
            EffectsModule.forFeature([PermissionEffects, RoleEffects]),
            PagesModule,
            PartialsModule,
            DataAccessCoreModule,
            PerfectScrollbarModule,
            FormsModule,
            MatProgressBarModule,
            MatTabsModule,
            MatButtonModule,
            MatTooltipModule,
            TranslateModule.forChild(),
            LoadingBarModule,
            NgxDaterangepickerMd,
            InlineSVGModule,
            // ng-bootstrap modules
            NgbProgressbarModule,
            NgbTooltipModule
        ]
    })
], ThemeModule);
export { ThemeModule };
//# sourceMappingURL=theme.module.js.map