import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input } from '@angular/core';
// LODASH
import { shuffle } from 'lodash';
let Widget5Component = class Widget5Component {
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
                    pic: './assets/media/products/product6.jpg',
                    title: 'Great Logo Designn',
                    desc: 'Metronic admin themes.',
                    info: '<span>Author:</span><span class="kt-font-info">Keenthemes</span>' +
                        '<span>Released:</span><span class="kt-font-info">23.08.17</span>',
                    largeInfo: '<div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">19,200</span>\n' +
                        ' <span class="kt-widget5__sales">sales</span>\n' +
                        ' </div>\n' +
                        ' <div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">1046</span>\n' +
                        ' <span class="kt-widget5__votes">votes</span>\n' +
                        ' </div>'
                },
                {
                    pic: './assets/media/products/product10.jpg',
                    title: 'Branding Mockup',
                    desc: 'Metronic bootstrap themes.',
                    info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
                        '<span>Released:</span><span class="kt-font-info">23.08.17</span>',
                    largeInfo: '<div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">24,583</span>\n' +
                        ' <span class="kt-widget5__sales">sales</span>\n' +
                        ' </div>\n' +
                        ' <div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">3809</span>\n' +
                        ' <span class="kt-widget5__votes">votes</span>\n' +
                        ' </div>'
                },
                {
                    pic: './assets/media/products/product11.jpg',
                    title: 'Awesome Mobile App',
                    desc: 'Metronic admin themes. Lorem Ipsum Amet.',
                    info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
                        '<span>Released:</span><span class="kt-font-info">23.08.17</span>',
                    largeInfo: '<div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">210,054</span>\n' +
                        ' <span class="kt-widget5__sales">sales</span>\n' +
                        ' </div>\n' +
                        ' <div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">1103</span>\n' +
                        ' <span class="kt-widget5__votes">votes</span>\n' +
                        ' </div>'
                }
            ]);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], Widget5Component.prototype, "data", void 0);
Widget5Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-widget5',
        templateUrl: './widget5.component.html',
        styleUrls: ['./widget5.component.scss']
    })
], Widget5Component);
export { Widget5Component };
//# sourceMappingURL=widget5.component.js.map