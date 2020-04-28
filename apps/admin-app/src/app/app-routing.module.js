import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// THEME
import { BaseComponent, ErrorPageComponent } from '@monorepo/admin/ui-theme';
// CORE
import { AuthGuard } from '@monorepo/shared/data-access-core';
const routes = [
    {
        path: 'auth',
        loadChildren: () => import('@monorepo/admin/feature-auth').then(m => m.AuthModule)
    },
    {
        path: '',
        component: BaseComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('@monorepo/shared/feature-dashboard').then(m => m.DashboardModule)
            },
            {
                path: 'mail',
                loadChildren: () => import('@monorepo/shared/feature-mail').then(m => m.MailModule)
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@monorepo/shared/feature-e-commerce').then(m => m.ECommerceModule)
            },
            {
                path: 'ngbootstrap',
                loadChildren: () => import('@monorepo/shared/feature-ngbootstrap').then(m => m.NgbootstrapModule)
            },
            {
                path: 'material',
                loadChildren: () => import('@monorepo/shared/feature-material').then(m => m.MaterialModule)
            },
            {
                path: 'user-management',
                loadChildren: () => import('@monorepo/shared/feature-user-management').then(m => m.UserManagementModule)
            },
            {
                path: 'wizard',
                loadChildren: () => import('@monorepo/shared/feature-wizards').then(m => m.WizardModule)
            },
            {
                path: 'builder',
                loadChildren: () => import('@monorepo/shared/feature-builder').then(m => m.BuilderModule)
            },
            {
                path: 'error/403',
                component: ErrorPageComponent,
                data: {
                    type: 'error-v6',
                    code: 403,
                    title: '403... Access forbidden',
                    desc: "Looks like you don't have permission to access for requested page.<br> Please, contact administrator"
                }
            },
            { path: 'error/:type', component: ErrorPageComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'error/403', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map