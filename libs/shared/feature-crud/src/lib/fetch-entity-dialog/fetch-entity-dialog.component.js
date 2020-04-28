import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let FetchEntityDialogComponent = class FetchEntityDialogComponent {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<FetchEntityDialogComponent>,
     * @param data: any
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * Close dialog with false result
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /** UI */
    /**
     * Returns CSS Class Name by status type
     * @param status: number
     */
    getItemCssClassByStatus(status = 0) {
        switch (status) {
            case 0: return 'success';
            case 1: return 'metal';
            case 2: return 'danger';
            default: return 'success';
        }
    }
};
FetchEntityDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-fetch-entity-dialog',
        templateUrl: './fetch-entity-dialog.component.html'
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatDialogRef !== "undefined" && MatDialogRef) === "function" ? _a : Object, Object])
], FetchEntityDialogComponent);
export { FetchEntityDialogComponent };
//# sourceMappingURL=fetch-entity-dialog.component.js.map