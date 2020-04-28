import * as tslib_1 from "tslib";
var _a;
import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
let BottomSheetExampleComponent = class BottomSheetExampleComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    openLink(event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
};
BottomSheetExampleComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-bottom-sheet-example',
        templateUrl: './bottom-sheet-example.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatBottomSheetRef !== "undefined" && MatBottomSheetRef) === "function" ? _a : Object])
], BottomSheetExampleComponent);
export { BottomSheetExampleComponent };
//# sourceMappingURL=bottom-sheet-example.component.js.map