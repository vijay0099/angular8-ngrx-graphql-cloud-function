import * as tslib_1 from "tslib";
var _a, _b, _c;
// ANGULAR
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// RXJS
import { BehaviorSubject } from 'rxjs';
// NGRX
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
// MODELS
import { Address } from '@monorepo/shared/data-access-models';
// SERVICES
import { AuthService, LayoutUtilsService } from '@monorepo/shared/util-services';
let AddressComponent = class AddressComponent {
    /**
     * Component Constructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    constructor(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (!this.addressSubject.value) {
            const newAddress = new Address();
            newAddress.clear();
            this.addressSubject.next(newAddress);
        }
        this.createForm();
        this.addressForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        distinctUntilChanged(), // This operator will eliminate duplicate values
        tap(() => {
            this.updateAddress();
        }))
            .subscribe();
    }
    /**
     * Init form
     */
    createForm() {
        this.addressForm = this.fb.group({
            addressLine: [this.addressSubject.value.addressLine, Validators.required],
            city: [this.addressSubject.value.city, Validators.required],
            state: [this.addressSubject.value.state, Validators.required],
            postCode: [this.addressSubject.value.postCode, Validators.required]
        });
    }
    /**
     * Update address
     */
    updateAddress() {
        this.hasFormErrors = false;
        const controls = this.addressForm.controls;
        /** check form */
        if (this.addressForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            this.hasFormErrors = true;
            return;
        }
        const newAddress = new Address();
        newAddress.clear();
        newAddress.addressLine = controls.addressLine.value;
        newAddress.city = controls.city.value;
        newAddress.postCode = controls.postCode.value;
        newAddress.state = controls.state.value;
        this.addressSubject.next(newAddress);
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
    tslib_1.__metadata("design:type", typeof (_a = typeof BehaviorSubject !== "undefined" && BehaviorSubject) === "function" ? _a : Object)
], AddressComponent.prototype, "addressSubject", void 0);
AddressComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-address',
        templateUrl: './address.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _b : Object, AuthService, typeof (_c = typeof Store !== "undefined" && Store) === "function" ? _c : Object, LayoutUtilsService])
], AddressComponent);
export { AddressComponent };
//# sourceMappingURL=address.component.js.map