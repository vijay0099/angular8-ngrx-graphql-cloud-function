import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
// LODASH
import { shuffle } from 'lodash';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
let Widget4Component = class Widget4Component {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // dummy data
        if (!this.data) {
            this.data = shuffle([
                {
                    pic: './assets/media/files/doc.svg',
                    title: 'Metronic Documentation',
                    url: 'https://keenthemes.com.my/metronic'
                },
                {
                    pic: './assets/media/files/jpg.svg',
                    title: 'Project Launch Evgent',
                    url: 'https://keenthemes.com.my/metronic'
                },
                {
                    pic: './assets/media/files/pdf.svg',
                    title: 'Full Developer Manual For 4.7',
                    url: 'https://keenthemes.com.my/metronic'
                },
                {
                    pic: './assets/media/files/javascript.svg',
                    title: 'Make JS Development',
                    url: 'https://keenthemes.com.my/metronic'
                },
                {
                    pic: './assets/media/files/zip.svg',
                    title: 'Download Ziped version OF 5.0',
                    url: 'https://keenthemes.com.my/metronic'
                },
                {
                    pic: './assets/media/files/pdf.svg',
                    title: 'Finance Report 2016/2017',
                    url: 'https://keenthemes.com.my/metronic'
                }
            ]);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], Widget4Component.prototype, "data", void 0);
tslib_1.__decorate([
    ContentChild('actionTemplate', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof TemplateRef !== "undefined" && TemplateRef) === "function" ? _a : Object)
], Widget4Component.prototype, "actionTemplate", void 0);
Widget4Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-widget4',
        templateUrl: './widget4.component.html',
        styleUrls: ['./widget4.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], Widget4Component);
export { Widget4Component };
//# sourceMappingURL=widget4.component.js.map