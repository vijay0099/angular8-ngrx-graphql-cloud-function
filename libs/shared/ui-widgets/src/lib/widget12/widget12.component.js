import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
/**
 * Sample components with sample data
 */
let Widget12Component = class Widget12Component {
    /**
     * Component constructor
     * @param layoutConfigService
     */
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.type = 'line';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (!this.data) {
            const color = Chart.helpers.color;
            this.data = {
                labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'],
                datasets: [
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0.6)
                            .rgbString(),
                        borderColor: color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0)
                            .rgbString(),
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: Chart.helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [20, 40, 50, 25, 35, 60, 30]
                    },
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0.2)
                            .rgbString(),
                        borderColor: color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0)
                            .rgbString(),
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: Chart.helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [25, 45, 55, 30, 40, 65, 35]
                    }
                ]
            };
        }
        this.initChart();
    }
    initChart() {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        const chart = new Chart(this.chart.nativeElement, {
            type: this.type,
            data: this.data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [
                        {
                            categoryPercentage: 0.35,
                            barPercentage: 0.7,
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            },
                            gridLines: false,
                            ticks: {
                                display: true,
                                beginAtZero: true,
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
                                fontSize: 13,
                                padding: 10
                            }
                        }
                    ],
                    yAxes: [
                        {
                            categoryPercentage: 0.35,
                            barPercentage: 0.7,
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value'
                            },
                            gridLines: {
                                color: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                drawBorder: false,
                                offsetGridLines: false,
                                drawTicks: false,
                                borderDash: [3, 4],
                                zeroLineWidth: 1,
                                zeroLineColor: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                zeroLineBorderDash: [3, 4]
                            },
                            ticks: {
                                max: 70,
                                stepSize: 10,
                                display: true,
                                beginAtZero: true,
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
                                fontSize: 13,
                                padding: 10
                            }
                        }
                    ]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10,
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    titleFontColor: '#ffffff',
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Widget12Component.prototype, "data", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Widget12Component.prototype, "type", void 0);
tslib_1.__decorate([
    ViewChild('chart', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object)
], Widget12Component.prototype, "chart", void 0);
Widget12Component = tslib_1.__decorate([
    Component({
        selector: 'monorepo-widget12',
        templateUrl: './widget12.component.html',
        styleUrls: ['./widget12.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LayoutConfigService])
], Widget12Component);
export { Widget12Component };
//# sourceMappingURL=widget12.component.js.map