import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input } from '@angular/core';
// SERVICES
import { SubheaderService } from '@monorepo/shared/util-services';
let Subheader2Component = class Subheader2Component {
    /**
     * Component constructor
     *
     * @param subheaderService: SubheaderService
     */
    constructor(subheaderService) {
        this.subheaderService = subheaderService;
        this.today = Date.now();
        this.title = '';
        this.desc = '';
        this.breadcrumbs = [];
        // Private properties
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
    }
    /**
     * After view init
     */
    ngAfterViewInit() {
        this.subscriptions.push(this.subheaderService.title$.subscribe(bt => {
            // breadcrumbs title sometimes can be undefined
            if (bt) {
                Promise.resolve(null).then(() => {
                    this.title = bt.title;
                    this.desc = bt.desc;
                });
            }
        }));
        this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(bc => {
            Promise.resolve(null).then(() => {
                this.breadcrumbs = bc;
            });
        }));
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], Subheader2Component.prototype, "fluid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], Subheader2Component.prototype, "clear", void 0);
Subheader2Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-subheader2',
        templateUrl: './subheader2.component.html',
        styleUrls: ['./subheader2.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [SubheaderService])
], Subheader2Component);
export { Subheader2Component };
//# sourceMappingURL=subheader2.component.js.map