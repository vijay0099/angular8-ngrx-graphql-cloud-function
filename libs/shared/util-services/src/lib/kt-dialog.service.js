import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { BehaviorSubject } from 'rxjs';
let KtDialogService = class KtDialogService {
    // Public properties
    constructor() {
        this.currentState = new BehaviorSubject(false);
        this.ktDialog = new KTDialog({ type: 'loader', placement: 'top center', message: 'Loading ...' });
    }
    show() {
        this.currentState.next(true);
        this.ktDialog.show();
    }
    hide() {
        this.currentState.next(false);
        this.ktDialog.hide();
    }
    checkIsShown() {
        return this.currentState.value;
    }
};
KtDialogService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], KtDialogService);
export { KtDialogService };
//# sourceMappingURL=kt-dialog.service.js.map