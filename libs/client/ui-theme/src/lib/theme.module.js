import * as tslib_1 from "tslib";
import { NgxPermissionsModule } from 'ngx-permissions';
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// ANGULAR Material
import { MatButtonModule, MatProgressBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
// NgBootstrap
import { NgbDropdownModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Translation
import { TranslateModule } from '@ngx-translate/core';
// Loading bar
import { LoadingBarModule } from '@ngx-loading-bar/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Ngx DatePicker
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Core Module
// import { CoreModule } from '../../core/core.module';
// import { PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '../../core/auth';
// CORE
import { DataAccessCoreModule, PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '@monorepo/shared/data-access-core';
// import { PartialsModule } from '../partials/partials.module';
// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';
// import { PagesModule } from '../pages/pages.module';
// PAGES
import { PagesModule } from '@monorepo/shared/ui-pages';
// import { HtmlClassService } from './html-class.service';
// SERVICES
import { HtmlClassService } from '@monorepo/shared/util-services';
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
            ErrorPageComponent,
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
            ErrorPageComponent,
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
            // CoreModule,
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
            NgbDropdownModule,
            NgbProgressbarModule,
            NgbTooltipModule
        ]
    })
], ThemeModule);
export { ThemeModule };
//# sourceMappingURL=theme.module.js.map