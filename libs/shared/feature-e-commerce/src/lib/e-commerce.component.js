import * as tslib_1 from "tslib";
// ANGULAR
import { Component, ChangeDetectionStrategy } from '@angular/core';
let ECommerceComponent = class ECommerceComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    constructor() { }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    ngOnInit() { }
};
ECommerceComponent = tslib_1.__decorate([
    Component({
        templateUrl: './e-commerce.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ECommerceComponent);
export { ECommerceComponent };
//# sourceMappingURL=e-commerce.component.js.map