import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
const basic = {
    beforeCodeTitle: 'Basic icons',
    htmlCode: `
<mat-icon>home</mat-icon>
<mat-icon>queue music</mat-icon>
<mat-icon>call split</mat-icon>
<mat-icon>event note</mat-icon>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic icons
*/
@Component({
  selector: 'icon-overview-example',
  templateUrl: 'icon-overview-example.html',
  styleUrls: ['icon-overview-example.css']
})
export class IconOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const sVG = {
    beforeCodeTitle: 'SVG icons',
    htmlCode: `<mat-icon svgIcon="thumbs-up"></mat-icon>`,
    tsCode: `
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';\n\n
/**
* @title SVG icons
*/
@Component({
  selector: 'icon-svg-example',
  templateUrl: 'icon-svg-example.html',
  styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon(
    'thumbs-up',
     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let IconComponent = class IconComponent {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('exchange', sanitizer.bypassSecurityTrustResourceUrl('./assets/media/icons/exchange.svg'));
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleSVG = sVG;
    }
};
IconComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-icon',
        templateUrl: './icon.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatIconRegistry !== "undefined" && MatIconRegistry) === "function" ? _a : Object, typeof (_b = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" ? _b : Object])
], IconComponent);
export { IconComponent };
//# sourceMappingURL=icon.component.js.map