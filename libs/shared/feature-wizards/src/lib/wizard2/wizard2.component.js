import * as tslib_1 from "tslib";
var _a;
import { Component, ElementRef, ViewChild } from '@angular/core';
let Wizard2Component = class Wizard2Component {
    constructor() {
        this.model = {
            fname: 'John',
            lname: 'Wick',
            phone: '+61412345678',
            email: 'john.wick@reeves.com',
            address1: 'Address Line 1',
            address2: 'Address Line 2',
            postcode: '3000',
            city: 'Melbourne',
            state: 'VIC',
            country: 'AU',
            delivery: 'overnight',
            packaging: 'regular',
            preferreddelivery: 'morning',
            locaddress1: 'Address Line 1',
            locaddress2: 'Address Line 2',
            locpostcode: '3072',
            loccity: 'Preston',
            locstate: 'VIC',
            loccountry: 'AU',
            ccname: 'John Wick',
            ccnumber: '4444 3333 2222 1111',
            ccmonth: '01',
            ccyear: '21',
            cccvv: '123',
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
], Wizard2Component.prototype, "el", void 0);
Wizard2Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-wizard2',
        templateUrl: './wizard2.component.html',
        styleUrls: ['./wizard2.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Wizard2Component);
export { Wizard2Component };
//# sourceMappingURL=wizard2.component.js.map