import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let DeleteEntityDialogComponent = class DeleteEntityDialogComponent {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<DeleteEntityDialogComponent>
     * @param data: any
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Public properties
        this.viewLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
    }
    /**
     * Close dialog with false result
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * Close dialog with true result
     */
    onYesClick() {
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        setTimeout(() => {
            this.dialogRef.close(true); // Keep only this row
        }, 2500);
    }
};
DeleteEntityDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-delete-entity-dialog',
        templateUrl: './delete-entity-dialog.component.html'
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatDialogRef !== "undefined" && MatDialogRef) === "function" ? _a : Object, Object])
], DeleteEntityDialogComponent);
export { DeleteEntityDialogComponent };
//# sourceMappingURL=delete-entity-dialog.component.js.map