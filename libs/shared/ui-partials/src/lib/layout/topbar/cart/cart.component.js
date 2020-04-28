import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input } from '@angular/core';
let CartComponent = class CartComponent {
    /**
     * Component constructor
     */
    constructor() {
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-shopping-cart-1';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ngAfterViewInit() {
    }
    /**
     * On init
     */
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CartComponent.prototype, "icon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CartComponent.prototype, "iconType", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CartComponent.prototype, "useSVG", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CartComponent.prototype, "bgImage", void 0);
CartComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map