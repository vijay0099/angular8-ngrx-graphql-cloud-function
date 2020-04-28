import * as tslib_1 from "tslib";
var _a, _b, _c;
import { ChangeDetectorRef } from '@angular/core';
// ANGULAR
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
// MATERIAL
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// RXJS
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
// TESTING
import { SPECIFICATIONS_DICTIONARY } from '@monorepo/shared/util-dictionaries';
let SpecificationEditDialogComponent = class SpecificationEditDialogComponent {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<SpecificationEditDialogComponent>
     * @param data: any
     */
    constructor(dialogRef, data, fb, cdr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.cdr = cdr;
        this.viewLoading = true;
        this.loadingAfterSubmit = false;
        this.specificationsDictionary = SPECIFICATIONS_DICTIONARY;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.initSpecificationForm();
        /* Server loading imitation. Remove this on real code */
        of(undefined)
            .pipe(delay(1000))
            .subscribe(() => {
            // Remove this line
            this.viewLoading = false; // Remove this line
            this.cdr.detectChanges(); // Remove this line
        }); // Remove this line
    }
    /**
     * Form initalization
     * Default params, validators
     */
    initSpecificationForm() {
        const specName = !this.data.specId
            ? ''
            : this.specificationsDictionary[this.data.specId];
        const specText = this.data.value;
        this.specificationEditForm = this.fb.group({
            name: [specName, [Validators.required]],
            text: [
                specText,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ]
        });
    }
    /**
     * Close dialog
     */
    onNoClick() {
        this.dialogRef.close({ isUpdated: false });
    }
    /**
     * Save specification
     */
    save() {
        const controls = this.specificationEditForm.controls;
        /** check form */
        if (this.specificationEditForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        const specId = this.getSpecificationIndexByName(controls.name.value);
        const specName = controls.name.value;
        const specValue = controls.text.value;
        /* Server loading imitation. Remove this on real code */
        of(undefined)
            .pipe(delay(1000))
            .subscribe(() => {
            // Remove this line
            this.viewLoading = false;
            this.closeDialog(specId, specName, specValue);
        }); // Remove this line
    }
    /**
     * Close dialog
     *
     * @param specId: any
     */
    closeDialog(specId, specName, specValue) {
        this.dialogRef.close({
            isUpdated: true,
            value: specValue,
            specId,
            _specificationName: specName
        });
    }
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    isControlHasError(controlName, validationType) {
        const control = this.specificationEditForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    getSpecificationIndexByName(name) {
        return this.specificationsDictionary.findIndex(el => el === name);
    }
};
SpecificationEditDialogComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'monorepo-specification-edit-dialog',
        templateUrl: './specification-edit-dialog.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatDialogRef !== "undefined" && MatDialogRef) === "function" ? _a : Object, Object, typeof (_b = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _b : Object, typeof (_c = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _c : Object])
], SpecificationEditDialogComponent);
export { SpecificationEditDialogComponent };
//# sourceMappingURL=specification-edit-dialog.component.js.map