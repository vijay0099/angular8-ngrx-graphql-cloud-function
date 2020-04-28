import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
// ANGULAR
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// RXJS
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
// TRANSLATE
import { TranslateService } from '@ngx-translate/core';
// SERVICES
import { AuthService, AuthNoticeService } from '@monorepo/shared/util-services';
let ForgotPasswordComponent = class ForgotPasswordComponent {
    /**
     * Component constructor
     *
     * @param authService
     * @param authNoticeService
     * @param translate
     * @param router
     * @param fb
     * @param cdr
     */
    constructor(authService, authNoticeService, translate, router, fb, cdr) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.router = router;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new Subject();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.initRegistrationForm();
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    }
    /**
     * Form initalization
     * Default params, validators
     */
    initRegistrationForm() {
        this.forgotPasswordForm = this.fb.group({
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.minLength(3),
                    Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ])
            ]
        });
    }
    /**
     * Form Submit
     */
    submit() {
        const controls = this.forgotPasswordForm.controls;
        /** check form */
        if (this.forgotPasswordForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.loading = true;
        const email = controls.email.value;
        this.authService
            .requestPassword(email)
            .pipe(tap(response => {
            if (response) {
                this.authNoticeService.setNotice(this.translate.instant('AUTH.FORGOT.SUCCESS'), 'success');
                this.router.navigateByUrl('/auth/login');
            }
            else {
                this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.NOT_FOUND', {
                    name: this.translate.instant('AUTH.INPUT.EMAIL')
                }), 'danger');
            }
        }), takeUntil(this.unsubscribe), finalize(() => {
            this.loading = false;
            this.cdr.markForCheck();
        }))
            .subscribe();
    }
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    isControlHasError(controlName, validationType) {
        const control = this.forgotPasswordForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
ForgotPasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'client-forgot-password',
        templateUrl: './forgot-password.component.html',
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        AuthNoticeService, typeof (_a = typeof TranslateService !== "undefined" && TranslateService) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _c : Object, typeof (_d = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _d : Object])
], ForgotPasswordComponent);
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map