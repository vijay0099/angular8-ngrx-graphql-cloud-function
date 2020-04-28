import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Directive, ElementRef, Input } from '@angular/core';
// Chart
import { Chart } from 'chart.js/dist/Chart.min.js';
// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';
/**
 * Configure sparkline chart
 */
let SparklineChartDirective = class SparklineChartDirective {
    /**
     * Directive Constructor
     *
     * @param el: ElementRef
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(el, layoutConfigService) {
        this.el = el;
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ngAfterViewInit() {
        this.initChart(this.el.nativeElement, this.options.data, this.options.color, this.options.border, this.options.fill, this.options.tooltip);
    }
    /**
     * Init chart
     * @param src: any
     * @param data: any
     * @param color: any
     * @param border: any
     * @param fill: any
     * @param tooltip: any
     */
    initChart(src, data, color, border, fill, tooltip) {
        if (src.length === 0) {
            return;
        }
        // set default values
        fill = typeof fill !== 'undefined' ? fill : false;
        tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
        const config = {
            type: 'line',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October'
                ],
                datasets: [
                    {
                        label: '',
                        borderColor: color,
                        borderWidth: border,
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
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.danger'),
                        pointHoverBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        fill: false,
                        data
                    }
                ]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    enabled: false,
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };
        this.chart = new Chart(src, config);
    }
    /**
     * Returns the chart
     */
    getChart() {
        return this.chart;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SparklineChartDirective.prototype, "options", void 0);
SparklineChartDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktSparklineChart]',
        exportAs: 'ktSparklineChart'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object, LayoutConfigService])
], SparklineChartDirective);
export { SparklineChartDirective };
//# sourceMappingURL=sparkline-chart.directive.js.map