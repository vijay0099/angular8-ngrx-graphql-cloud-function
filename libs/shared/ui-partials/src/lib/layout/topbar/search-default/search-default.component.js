import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
let SearchDefaultComponent = class SearchDefaultComponent {
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    constructor(cdr) {
        this.cdr = cdr;
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-search-1';
    }
    /**
     * On init
     */
    ngOnInit() {
        // simulate result from API
        // type 0|1 as separator or item
        this.result = [
            {
                text: 'Documents',
                type: 0
            }, {
                icon: '<i class="flaticon-interface-3 kt-font-warning">',
                text: 'Annual finance report',
                type: 1
            }, {
                icon: '<i class="flaticon-share kt-font-success"></i>',
                text: 'Company meeting schedule',
                type: 1
            }, {
                icon: '<i class="flaticon-paper-plane kt-font-info"></i>',
                text: 'Project quotations',
                type: 1
            }, {
                text: 'Customers',
                type: 0
            }, {
                img: '<img src="assets/media/users/user1.jpg" alt="">',
                text: 'Amanda Anderson',
                type: 1
            }, {
                img: '<img src="assets/media/users/user2.jpg" alt="">',
                text: 'Kennedy Lloyd',
                type: 1
            }, {
                img: '<img src="assets/media/users/user3.jpg" alt="">',
                text: 'Megan Weldon',
                type: 1
            }, {
                img: '<img src="assets/media/users/user4.jpg" alt="">',
                text: 'Marc-André ter Stegen',
                type: 1
            }, {
                text: 'Files',
                type: 0
            }, {
                icon: '<i class="flaticon-lifebuoy kt-font-warning"></i>',
                text: 'Revenue report',
                type: 1
            }, {
                icon: '<i class="flaticon-coins kt-font-primary"></i>',
                text: 'Anual finance report',
                type: 1
            }, {
                icon: '<i class="flaticon-calendar kt-font-danger"></i>',
                text: 'Tax calculations',
                type: 1
            }
        ];
    }
    /**
     * Search
     * @param e: Event
     */
    search(e) {
        this.data = null;
        if (e.target.value.length > 2) {
            this.loading = true;
            // simulate getting search result
            setTimeout(() => {
                this.data = this.result;
                this.loading = false;
                this.cdr.markForCheck();
            }, 500);
        }
    }
    /**
     * Clear search
     *
     * @param e: Event
     */
    clear(e) {
        this.data = null;
        this.searchInput.nativeElement.value = '';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SearchDefaultComponent.prototype, "icon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SearchDefaultComponent.prototype, "useSVG", void 0);
tslib_1.__decorate([
    ViewChild('searchInput', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object)
], SearchDefaultComponent.prototype, "searchInput", void 0);
SearchDefaultComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-search-default',
        templateUrl: './search-default.component.html',
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _b : Object])
], SearchDefaultComponent);
export { SearchDefaultComponent };
//# sourceMappingURL=search-default.component.js.map