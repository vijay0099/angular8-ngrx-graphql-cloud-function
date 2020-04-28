import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
/**
 * Configuration service for the MAccordionControl component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
let AccordionControlConfig = class AccordionControlConfig {
    /**
     * Configuration service for the MAccordionControl component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the accordions used in the application.
     */
    constructor() {
        this.closeOthers = false;
    }
};
AccordionControlConfig = tslib_1.__decorate([
    Injectable()
], AccordionControlConfig);
export { AccordionControlConfig };
//# sourceMappingURL=accordion-control.config.js.map