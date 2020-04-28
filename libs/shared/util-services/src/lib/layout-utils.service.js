import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
// Partials for CRUD
// import {
//   ActionNotificationComponent,
//   DeleteEntityDialogComponent,
//   FetchEntityDialogComponent,
//   UpdateStatusDialogComponent
// } from '../../../../views/partials/content/crud';
// import {
//   ActionNotificationComponent,
//   DeleteEntityDialogComponent,
//   FetchEntityDialogComponent,
//   UpdateStatusDialogComponent
// } from '../../../../../apps/admin-app/src/app/views/partials/content/crud';
import { ActionNotificationComponent, DeleteEntityDialogComponent, FetchEntityDialogComponent, UpdateStatusDialogComponent } from '@monorepo/shared/feature-crud';
export var MessageType;
(function (MessageType) {
    MessageType[MessageType["Create"] = 0] = "Create";
    MessageType[MessageType["Read"] = 1] = "Read";
    MessageType[MessageType["Update"] = 2] = "Update";
    MessageType[MessageType["Delete"] = 3] = "Delete";
})(MessageType || (MessageType = {}));
let LayoutUtilsService = class LayoutUtilsService {
    /**
     * Service constructor
     *
     * @param snackBar: MatSnackBar
     * @param dialog: MatDialog
     */
    constructor(snackBar, dialog) {
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    /**
     * Showing (Mat-Snackbar) Notification
     *
     * @param message: string
     * @param type: MessageType
     * @param duration: number
     * @param showCloseButton: boolean
     * @param showUndoButton: boolean
     * @param undoButtonDuration: number
     * @param verticalPosition: 'top' | 'bottom' = 'top'
     */
    showActionNotification(_message, _type = MessageType.Create, _duration = 10000, _showCloseButton = true, _showUndoButton = true, _undoButtonDuration = 3000, _verticalPosition = 'bottom') {
        const _data = {
            message: _message,
            snackBar: this.snackBar,
            showCloseButton: _showCloseButton,
            showUndoButton: _showUndoButton,
            undoButtonDuration: _undoButtonDuration,
            verticalPosition: _verticalPosition,
            type: _type,
            action: 'Undo'
        };
        return this.snackBar.openFromComponent(ActionNotificationComponent, {
            duration: _duration,
            data: _data,
            verticalPosition: _verticalPosition
        });
    }
    /**
     * Showing Confirmation (Mat-Dialog) before Entity Removing
     *
     * @param title: string
     * @param description: string
     * @param waitDesciption: string
     */
    deleteElement(title = '', description = '', waitDesciption = '') {
        return this.dialog.open(DeleteEntityDialogComponent, {
            data: { title, description, waitDesciption },
            width: '440px'
        });
    }
    /**
     * Showing Fetching Window(Mat-Dialog)
     *
     * @param _data: any
     */
    fetchElements(_data) {
        return this.dialog.open(FetchEntityDialogComponent, {
            data: _data,
            width: '400px'
        });
    }
    /**
     * Showing Update Status for Entities Window
     *
     * @param title: string
     * @param statuses: string[]
     * @param messages: string[]
     */
    updateStatusForEntities(title, statuses, messages) {
        return this.dialog.open(UpdateStatusDialogComponent, {
            data: { title, statuses, messages },
            width: '480px'
        });
    }
};
LayoutUtilsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatSnackBar !== "undefined" && MatSnackBar) === "function" ? _a : Object, typeof (_b = typeof MatDialog !== "undefined" && MatDialog) === "function" ? _b : Object])
], LayoutUtilsService);
export { LayoutUtilsService };
//# sourceMappingURL=layout-utils.service.js.map