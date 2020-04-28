import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input } from '@angular/core';
// LODASH
import { shuffle } from 'lodash';
let Widget1Component = class Widget1Component {
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (!this.data) {
            this.data = shuffle([
                {
                    title: 'Member Profit',
                    desc: 'Awerage Weekly Profit',
                    value: '+$17,800',
                    valueClass: 'kt-font-brand'
                },
                {
                    title: 'Orders',
                    desc: 'Weekly Customer Orders',
                    value: '+$1,800',
                    valueClass: 'kt-font-danger'
                },
                {
                    title: 'Issue Reports',
                    desc: 'System bugs and issues',
                    value: '-27,49%',
                    valueClass: 'kt-font-success'
                }
            ]);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], Widget1Component.prototype, "data", void 0);
Widget1Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-widget1',
        templateUrl: './widget1.component.html',
        styleUrls: ['./widget1.component.scss']
    })
], Widget1Component);
export { Widget1Component };
//# sourceMappingURL=widget1.component.js.map