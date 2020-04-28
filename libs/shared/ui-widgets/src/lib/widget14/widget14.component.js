import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
// CHARTS
import { Chart } from 'chart.js/dist/Chart.min.js';
let Widget14Component = class Widget14Component {
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
        if (!this.data) {
            this.data = {
                labels: [
                    'Label 1',
                    'Label 2',
                    'Label 3',
                    'Label 4',
                    'Label 5',
                    'Label 6',
                    'Label 7',
                    'Label 8',
                    'Label 9',
                    'Label 10',
                    'Label 11',
                    'Label 12',
                    'Label 13',
                    'Label 14',
                    'Label 15',
                    'Label 16'
                ],
                datasets: [
                    {
                        // label: 'dataset 1',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
                        data: [
                            15,
                            20,
                            25,
                            30,
                            25,
                            20,
                            15,
                            20,
                            25,
                            30,
                            25,
                            20,
                            15,
                            10,
                            15,
                            20
                        ]
                    },
                    {
                        // label: 'dataset 2',
                        backgroundColor: '#f3f3fb',
                        data: [
                            15,
                            20,
                            25,
                            30,
                            25,
                            20,
                            15,
                            20,
                            25,
                            30,
                            25,
                            20,
                            15,
                            10,
                            15,
                            20
                        ]
                    }
                ]
            };
        }
        this.initChartJS();
    }
    /** Init chart */
    initChartJS() {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        const chart = new Chart(this.chart.nativeElement, {
            type: 'bar',
            data: this.data,
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                barRadius: 4,
                scales: {
                    xAxes: [
                        {
                            display: false,
                            gridLines: false,
                            stacked: true
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            stacked: true,
                            gridLines: false
                        }
                    ]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Widget14Component.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Widget14Component.prototype, "desc", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Widget14Component.prototype, "data", void 0);
tslib_1.__decorate([
    ViewChild('chart', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object)
], Widget14Component.prototype, "chart", void 0);
Widget14Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-widget14',
        templateUrl: './widget14.component.html',
        styleUrls: ['./widget14.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], Widget14Component);
export { Widget14Component };
//# sourceMappingURL=widget14.component.js.map