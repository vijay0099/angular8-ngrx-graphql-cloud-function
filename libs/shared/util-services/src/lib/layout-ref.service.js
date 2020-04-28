import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { BehaviorSubject } from 'rxjs';
let LayoutRefService = class LayoutRefService {
    constructor() {
        // Public properties
        this.layoutRefs$ = new BehaviorSubject({});
        this.layoutRefs = {};
    }
    /**
     * Add element to Ref
     *
     * @param name: any
     * @param element: any
     */
    addElement(name, element) {
        const obj = {};
        obj[name] = element;
        this.layoutRefs = Object.assign({}, this.layoutRefs, obj);
        this.layoutRefs$.next(this.layoutRefs);
    }
};
LayoutRefService = tslib_1.__decorate([
    Injectable()
], LayoutRefService);
export { LayoutRefService };
//# sourceMappingURL=layout-ref.service.js.map