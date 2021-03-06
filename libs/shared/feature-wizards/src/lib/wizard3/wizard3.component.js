import * as tslib_1 from "tslib";
var _a;
import { Component, ElementRef, ViewChild } from '@angular/core';
let Wizard3Component = class Wizard3Component {
    constructor() {
        this.model = {
            address1: 'Address Line 1',
            address2: 'Address Line 2',
            postcode: '3000',
            city: 'Melbourne',
            state: 'VIC',
            country: 'AU',
            package: 'Complete Workstation (Monitor, Computer, Keyboard & Mouse)',
            weight: '25',
            width: '110',
            height: '90',
            length: '150',
            delivery: 'overnight',
            packaging: 'regular',
            preferreddelivery: 'morning',
            locaddress1: 'Address Line 1',
            locaddress2: 'Address Line 2',
            locpostcode: '3072',
            loccity: 'Preston',
            locstate: 'VIC',
            loccountry: 'AU',
        };
        this.submitted = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // Initialize form wizard
        const wizard = new KTWizard(this.el.nativeElement, {
            startStep: 1
        });
        // Validation before going to next page
        wizard.on('beforeNext', (wizardObj) => {
            // https://angular.io/guide/forms
            // https://angular.io/guide/form-validation
            // validate the form and use below function to stop the wizard's step
            // wizardObj.stop();
        });
        // Change event
        wizard.on('change', () => {
            setTimeout(() => {
                KTUtil.scrollTop();
            }, 500);
        });
    }
    onSubmit() {
        this.submitted = true;
    }
};
tslib_1.__decorate([
    ViewChild('wizard', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object)
], Wizard3Component.prototype, "el", void 0);
Wizard3Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-wizard3',
        templateUrl: './wizard3.component.html',
        styleUrls: ['./wizard3.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Wizard3Component);
export { Wizard3Component };
//# sourceMappingURL=wizard3.component.js.map