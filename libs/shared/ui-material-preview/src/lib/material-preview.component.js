import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input } from '@angular/core';
let MaterialPreviewComponent = class MaterialPreviewComponent {
    /**
     * Component constructor
     */
    constructor() {
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
     * Toggle visibility
     */
    changeCodeVisibility() {
        this.viewItem.isCodeVisible = !this.viewItem.isCodeVisible;
    }
    /**
     * Check examples existing
     */
    hasExampleSource() {
        if (!this.viewItem) {
            return false;
        }
        if (!this.viewItem.cssCode && !this.viewItem.htmlCode && !this.viewItem.scssCode && !this.viewItem.tsCode) {
            return false;
        }
        return true;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MaterialPreviewComponent.prototype, "viewItem", void 0);
MaterialPreviewComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-material-preview',
        templateUrl: './material-preview.component.html',
        styleUrls: ['./material-preview.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MaterialPreviewComponent);
export { MaterialPreviewComponent };
//# sourceMappingURL=material-preview.component.js.map