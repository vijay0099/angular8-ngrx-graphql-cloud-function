import * as tslib_1 from "tslib";
var AccordionControlModule_1;
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// CONFIG
import { AccordionControlConfig } from './accordion-control.config';
import { AccordionControlComponent, AccordionControlPanelDirective, AccordionControlPanelTitleDirective, AccordionControlPanelContentDirective } from './accordion-control.component';
export { AccordionControlConfig } from './accordion-control.config';
export { AccordionControlComponent, AccordionControlPanelDirective, AccordionControlPanelTitleDirective, AccordionControlPanelContentDirective } from './accordion-control.component';
const ACCORDION_CONTROL_DIRECTIVES = [
    AccordionControlComponent,
    AccordionControlPanelDirective,
    AccordionControlPanelTitleDirective,
    AccordionControlPanelContentDirective
];
let AccordionControlModule = AccordionControlModule_1 = class AccordionControlModule {
    static forRoot() {
        return {
            ngModule: AccordionControlModule_1,
            providers: [AccordionControlConfig]
        };
    }
};
AccordionControlModule = AccordionControlModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        exports: ACCORDION_CONTROL_DIRECTIVES,
        declarations: ACCORDION_CONTROL_DIRECTIVES
    })
], AccordionControlModule);
export { AccordionControlModule };
//# sourceMappingURL=accordion-control.module.js.map