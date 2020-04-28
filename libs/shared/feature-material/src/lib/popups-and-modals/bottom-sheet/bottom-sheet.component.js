import * as tslib_1 from "tslib";
var _a;
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';
const basic = {
    beforeCodeTitle: 'Bottom Sheet Overview',
    htmlCode: `
import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';\n
/**
* @title Bottom Sheet Overview
@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet-overview-example.html',
  styleUrls: ['bottom-sheet-overview-example.css'],
})
export class BottomSheetOverviewExample {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}\n

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let BottomSheetComponent = class BottomSheetComponent {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    openBottomSheet() {
        this.bottomSheet.open(BottomSheetExampleComponent);
    }
    ngOnInit() {
        this.exampleBasic = basic;
    }
};
BottomSheetComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-bottom-sheet',
        templateUrl: './bottom-sheet.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatBottomSheet !== "undefined" && MatBottomSheet) === "function" ? _a : Object])
], BottomSheetComponent);
export { BottomSheetComponent };
//# sourceMappingURL=bottom-sheet.component.js.map