import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
let UpdateStatusDialogComponent = class UpdateStatusDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedStatusForUpdate = new FormControl('');
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
    }
    ngOnInit() {
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        setTimeout(() => {
            this.viewLoading = false;
        }, 2500);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    updateStatus() {
        if (this.selectedStatusForUpdate.value.length === 0) {
            return;
        }
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        this.loadingAfterSubmit = true;
        setTimeout(() => {
            this.dialogRef.close(this.selectedStatusForUpdate.value); // Keep only this row
        }, 2500);
    }
};
UpdateStatusDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-update-status-dialog',
        templateUrl: './update-status-dialog.component.html'
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatDialogRef !== "undefined" && MatDialogRef) === "function" ? _a : Object, Object])
], UpdateStatusDialogComponent);
export { UpdateStatusDialogComponent };
//# sourceMappingURL=update-status-dialog.component.js.map