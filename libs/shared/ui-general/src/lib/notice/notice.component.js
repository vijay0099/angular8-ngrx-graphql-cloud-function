import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
let NoticeComponent = class NoticeComponent {
    /**
     * Component constructor
     */
    constructor() {
        // Public properties
        this.classes = '';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (this.icon) {
            this.classes += ' kt-alert--icon';
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NoticeComponent.prototype, "classes", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NoticeComponent.prototype, "icon", void 0);
NoticeComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-notice',
        templateUrl: './notice.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [])
], NoticeComponent);
export { NoticeComponent };
//# sourceMappingURL=notice.component.js.map