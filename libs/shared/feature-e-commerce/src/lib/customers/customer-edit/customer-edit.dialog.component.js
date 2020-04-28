import * as tslib_1 from "tslib";
var _a, _b, _c;
// ANGULAR
import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// MATERIAL
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// RXJS
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
// SERVICES
import { TypesUtilsService } from '@monorepo/shared/util-services';
// CORE
import { CustomerUpdated, CustomerOnServerCreated, selectLastCreatedCustomerId, selectCustomersActionLoading } from '@monorepo/shared/data-access-core';
// MODELS
import { CustomerModel } from '@monorepo/shared/data-access-models';
let CustomerEditDialogComponent = class CustomerEditDialogComponent {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<CustomerEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    constructor(dialogRef, data, fb, store, typesUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.typesUtilsService = typesUtilsService;
        this.hasFormErrors = false;
        this.viewLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.store
            .pipe(select(selectCustomersActionLoading))
            .subscribe(res => (this.viewLoading = res));
        this.customer = this.data.customer;
        this.createForm();
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    }
    createForm() {
        this.customerForm = this.fb.group({
            firstName: [this.customer.firstName, Validators.required],
            lastName: [this.customer.lastName, Validators.required],
            email: [
                this.customer.email,
                Validators.compose([Validators.required, Validators.email])
            ],
            dob: [
                this.typesUtilsService.getDateFromString(this.customer.dateOfBbirth),
                Validators.compose([Validators.nullValidator])
            ],
            userName: [
                this.customer.userName,
                Validators.compose([Validators.required])
            ],
            gender: [this.customer.gender, Validators.compose([Validators.required])],
            ipAddress: [
                this.customer.ipAddress,
                Validators.compose([Validators.required])
            ],
            type: [
                this.customer.type.toString(),
                Validators.compose([Validators.required])
            ]
        });
    }
    /**
     * Returns page title
     */
    getTitle() {
        if (this.customer.id > 0) {
            return `Edit customer '${this.customer.firstName} ${this.customer.lastName}'`;
        }
        return 'New customer';
    }
    /**
     * Check control is invalid
     * @param controlName: string
     */
    isControlInvalid(controlName) {
        const control = this.customerForm.controls[controlName];
        const result = control.invalid && control.touched;
        return result;
    }
    /** ACTIONS */
    /**
     * Returns prepared customer
     */
    prepareCustomer() {
        const controls = this.customerForm.controls;
        const _customer = new CustomerModel();
        _customer.id = this.customer.id;
        const _date = controls.dob.value;
        if (_date) {
            _customer.dateOfBbirth = this.typesUtilsService.dateFormat(_date);
        }
        else {
            _customer.dateOfBbirth = '';
        }
        _customer.firstName = controls.firstName.value;
        _customer.lastName = controls.lastName.value;
        _customer.email = controls.email.value;
        _customer.userName = controls.userName.value;
        _customer.gender = controls.gender.value;
        _customer.ipAddress = controls.ipAddress.value;
        _customer.type = +controls.type.value;
        _customer.status = this.customer.status;
        return _customer;
    }
    /**
     * On Submit
     */
    onSubmit() {
        this.hasFormErrors = false;
        const controls = this.customerForm.controls;
        /** check form */
        if (this.customerForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            this.hasFormErrors = true;
            return;
        }
        const editedCustomer = this.prepareCustomer();
        if (editedCustomer.id > 0) {
            this.updateCustomer(editedCustomer);
        }
        else {
            this.createCustomer(editedCustomer);
        }
    }
    /**
     * Update customer
     *
     * @param _customer: CustomerModel
     */
    updateCustomer(_customer) {
        const updateCustomer = {
            id: _customer.id,
            changes: _customer
        };
        this.store.dispatch(new CustomerUpdated({
            partialCustomer: updateCustomer,
            customer: _customer
        }));
        // Remove this line
        of(undefined)
            .pipe(delay(1000))
            .subscribe(() => this.dialogRef.close({ _customer, isEdit: true }));
        // Uncomment this line
        // this.dialogRef.close({ _customer, isEdit: true }
    }
    /**
     * Create customer
     *
     * @param _customer: CustomerModel
     */
    createCustomer(_customer) {
        this.store.dispatch(new CustomerOnServerCreated({ customer: _customer }));
        this.componentSubscriptions = this.store
            .pipe(select(selectLastCreatedCustomerId), delay(1000) // Remove this line
        )
            .subscribe(res => {
            if (!res) {
                return;
            }
            this.dialogRef.close({ _customer, isEdit: false });
        });
    }
    /** Alect Close event */
    onAlertClose($event) {
        this.hasFormErrors = false;
    }
};
CustomerEditDialogComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'monorepo-customers-edit-dialog',
        templateUrl: './customer-edit.dialog.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatDialogRef !== "undefined" && MatDialogRef) === "function" ? _a : Object, Object, typeof (_b = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _b : Object, typeof (_c = typeof Store !== "undefined" && Store) === "function" ? _c : Object, TypesUtilsService])
], CustomerEditDialogComponent);
export { CustomerEditDialogComponent };
//# sourceMappingURL=customer-edit.dialog.component.js.map