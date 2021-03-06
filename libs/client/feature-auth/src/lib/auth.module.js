import * as tslib_1 from "tslib";
var AuthModule_1;
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// ANGULAR MATERIAL
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// TRANSLATE
import { TranslateModule } from '@ngx-translate/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// SERVICES
import { AuthService, InterceptService } from '@monorepo/shared/util-services';
// COMPONENTS
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
// CORE
import { AuthEffects, AuthGuard, authReducer } from '@monorepo/shared/data-access-core';
const routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent,
                data: { returnUrl: window.location.pathname }
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            }
        ]
    }
];
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule_1,
            providers: [AuthService, AuthGuard]
        };
    }
};
AuthModule = AuthModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
            RouterModule.forChild(routes),
            MatInputModule,
            MatFormFieldModule,
            MatCheckboxModule,
            TranslateModule.forChild(),
            StoreModule.forFeature('auth', authReducer),
            EffectsModule.forFeature([AuthEffects])
        ],
        providers: [
            InterceptService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: InterceptService,
                multi: true
            }
        ],
        exports: [AuthComponent],
        declarations: [
            AuthComponent,
            LoginComponent,
            RegisterComponent,
            ForgotPasswordComponent,
            AuthNoticeComponent
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map