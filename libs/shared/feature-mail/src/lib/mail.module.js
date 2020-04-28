import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Component
import { MailComponent } from './mail.component';
let MailModule = class MailModule {
};
MailModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: MailComponent
                }
            ])
        ],
        declarations: [MailComponent]
    })
], MailModule);
export { MailModule };
//# sourceMappingURL=mail.module.js.map