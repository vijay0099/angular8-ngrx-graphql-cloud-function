import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
// RXJS
import { BehaviorSubject } from 'rxjs';
// NGRX
import { Store } from '@ngrx/store';
// CORE
import { UserUpdated } from '@monorepo/shared/data-access-core';
// SERVICES
import { AuthService, LayoutUtilsService, MessageType } from '@monorepo/shared/util-services';
export class PasswordValidation {
    /**
     * MatchPassword
     *
     * @param AC: AbstractControl
     */
    static MatchPassword(AC) {
        const password = AC.get('password').value; // to get value in input tag
        const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    }
}
let ChangePasswordComponent = class ChangePasswordComponent {
    /**
     * Component constructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    constructor(fb, auth, store, 
    // tslint:disable-next-line:align
    layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.loadingSubject = new BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.loadData();
    }
    /**
     * Load data
     */
    loadData() {
        this.auth.getUserById(this.userId).subscribe(res => {
            this.user = res;
            this.createForm();
        });
    }
    /**
     * Init form
     */
    createForm() {
        this.changePasswordForm = this.fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }
    /**
     * Reset
     */
    reset() {
        this.hasFormErrors = false;
        this.loadingSubject.next(false);
        this.changePasswordForm.markAsPristine();
        this.changePasswordForm.markAsUntouched();
        this.changePasswordForm.updateValueAndValidity();
    }
    /**
     * Save data
     */
    onSubmit() {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        const controls = this.changePasswordForm.controls;
        /** check form */
        if (this.changePasswordForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        this.user.password = controls.password.value;
        const updatedUser = {
            id: this.user.id,
            changes: this.user
        };
        this.store.dispatch(new UserUpdated({
            partialUser: updatedUser,
            user: this.user
        }));
        this.loadData();
        this.loadingSubject.next(false);
        const message = `User password successfully has been changed.`;
        this.layoutUtilsService.showActionNotification(message, MessageType.Update, 5000, true, false);
        this.reset();
    }
    /**
     * Close alert
     *
     * @param $event: Event
     */
    onAlertClose($event) {
        this.hasFormErrors = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], ChangePasswordComponent.prototype, "userId", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ChangePasswordComponent.prototype, "loadingSubject", void 0);
ChangePasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-change-password',
        templateUrl: './change-password.component.html'
        // changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _a : Object, AuthService, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object, LayoutUtilsService])
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map