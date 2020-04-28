import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e;
// ANGULAR
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// TRANSLATE
import { TranslateService } from '@ngx-translate/core';
// NGRX
import { Store } from '@ngrx/store';
// CORE
import { RegisterRequested } from '@monorepo/shared/data-access-core';
// SERVICES
import { AuthService, AuthNoticeService } from '@monorepo/shared/util-services';
import { Subject } from 'rxjs';
import { ConfirmPasswordValidator } from './confirm-password.validator';
let RegisterComponent = class RegisterComponent {
    /**
     * Component constructor
     *
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param router: Router
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     */
    constructor(authNoticeService, translate, router, auth, store, fb, cdr) {
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new Subject();
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.initRegisterForm();
    }
    /*
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
    initRegisterForm() {
        this.registerForm = this.fb.group({
            fullName: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.minLength(3),
                    // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                    Validators.maxLength(320)
                ])
            ],
            username: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            confirmPassword: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            agree: [false, Validators.compose([Validators.required])]
        }, {
            validator: ConfirmPasswordValidator.MatchPassword
        });
    }
    /**
     * Form Submit
     */
    submit() {
        const controls = this.registerForm.controls;
        // check form
        if (this.registerForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.loading = true;
        if (!controls.agree.value) {
            // you must agree the terms and condition
            // checkbox cannot work inside mat-form-field https://github.com/angular/material2/issues/7891
            this.authNoticeService.setNotice('You must agree the terms and condition', 'danger');
            return;
        }
        // const _user: User = new User();
        const _user = this.registerForm.value;
        console.log('_user', _user);
        this.store.dispatch(new RegisterRequested({ user: _user }));
    }
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    isControlHasError(controlName, validationType) {
        const control = this.registerForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'client-register',
        templateUrl: './register.component.html',
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [AuthNoticeService, typeof (_a = typeof TranslateService !== "undefined" && TranslateService) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, AuthService, typeof (_c = typeof Store !== "undefined" && Store) === "function" ? _c : Object, typeof (_d = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _d : Object, typeof (_e = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _e : Object])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map