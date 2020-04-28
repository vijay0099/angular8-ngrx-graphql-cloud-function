import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
// RXJS
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
let ActionNotificationComponent = class ActionNotificationComponent {
    /**
     * Component constructor
     *
     * @param data: any
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (!this.data.showUndoButton || (this.data.undoButtonDuration >= this.data.duration)) {
            return;
        }
        this.delayForUndoButton(this.data.undoButtonDuration).subscribe(() => {
            this.data.showUndoButton = false;
        });
    }
    /*
     *	Returns delay
     *
     * @param timeToDelay: any
     */
    delayForUndoButton(timeToDelay) {
        return of('').pipe(delay(timeToDelay));
    }
    /**
     * Dismiss with Action
     */
    onDismissWithAction() {
        this.data.snackBar.dismiss();
    }
    /**
     * Dismiss
     */
    onDismiss() {
        this.data.snackBar.dismiss();
    }
};
ActionNotificationComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-action-natification',
        templateUrl: './action-notification.component.html',
        changeDetection: ChangeDetectionStrategy.Default
    }),
    tslib_1.__param(0, Inject(MAT_SNACK_BAR_DATA)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ActionNotificationComponent);
export { ActionNotificationComponent };
//# sourceMappingURL=action-notification.component.js.map