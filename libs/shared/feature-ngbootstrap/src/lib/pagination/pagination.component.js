import * as tslib_1 from "tslib";
var _a;
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
const basicPagination = {
    beforeCodeTitle: 'Basic pagination',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    Default pagination:
  </span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="70" [(page)]="page" aria-label="Default pagination"></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <span class="kt-section__sub">
    No direction links:
  </span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="70" [(page)]="page" [directionLinks]="false"></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
  <div class="kt-section">
    <span class="kt-section__sub">
      With boundary links:
    </span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="70" [(page)]="page" [boundaryLinks]="true"></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
   <div class="kt-section__content">
     <pre>Current page: {{page}}</pre>
  </div>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-pagination-basic',
    templateUrl: './pagination-basic.html'
})
export class NgbdPaginationBasic {
    page = 4;
}
	`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const advancedPagination = {
    beforeCodeTitle: 'Advanced pagination',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    Restricted size, no rotation:
  </span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="120" [(page)]="page2" [maxSize]="5" [boundaryLinks]="true"></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <span class="kt-section__sub">
    Restricted size with rotation:
  </span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="120" [(page)]="page2" [maxSize]="5" [rotate]="true" [boundaryLinks]="true"></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <span class="kt-section__sub">
    Restricted size with rotation and no ellipses:
  </span>
  <div class="kt-section__content">
	<ngb-pagination [collectionSize]="120" [(page)]="page2" [maxSize]="5" [rotate]="true" [ellipses]="false"
      [boundaryLinks]="true"></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
  <div class="kt-section">
    <div class="kt-section__content">
      <pre>Current page: {{page2}}</pre>
  </div>
</div>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-pagination-advanced',
    templateUrl: './pagination-advanced.html'
})
export class NgbdPaginationAdvanced {
    page = 1;
}
		`,
    viewCode: ``,
    isCodeVisible: false
};
const paginationSize = {
    beforeCodeTitle: 'Pagination size',
    htmlCode: `
<div class="kt-section">
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="lg"></ngb-pagination>
    <ngb-pagination [collectionSize]="50" [(page)]="currentPage"></ngb-pagination>
    <ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="sm"></ngb-pagination>
  </div>
</div>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-pagination-size',
    templateUrl: './pagination-size.html'
})
export class NgbdPaginationSize {
    currentPage = 3;
}
		`,
    viewCode: ``,
    isCodeVisible: false
};
const paginationAlignment = {
    beforeCodeTitle: 'Pagination alignment',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    Change the alignment of pagination components with flexbox utilities
  </span>
  <div class="kt-section__content">
    <ngb-pagination class="d-flex justify-content-start" [collectionSize]="70" [(page)]="page3"></ngb-pagination>
    <ngb-pagination class="d-flex justify-content-center" [collectionSize]="70" [(page)]="page3"></ngb-pagination>
    <ngb-pagination class="d-flex justify-content-end" [collectionSize]="70" [(page)]="page3"></ngb-pagination>
  </div>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-pagination-justify',
    templateUrl: './pagination-justify.html'
})
export class NgbdPaginationJustify {
    page = 4;
}
`,
    viewCode: ``,
    isCodeVisible: false
};
const disabledPagination = {
    beforeCodeTitle: 'Disabled pagination',
    htmlCode: `
<div class="kt-section">
  <span class="kt-section__sub">
    Pagination control can be disabled:</span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="70" [(page)]="page4" [disabled]='isDisabled'></ngb-pagination>
  </div>
</div>
<div class="kt-separator kt-separator--dashed"></div>
<div class="kt-section">
  <div class="kt-section__content">
    <button class="btn btn-sm btn-primary" (click)="toggleDisabled()">
      Toggle disabled
    </button>
  </div>
</div>
		`,
    tsCode: `
import {Component} from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-pagination-disabled',
    templateUrl: './pagination-disabled.html'
})
export class NgbdPaginationDisabled {
    page = 3;
    isDisabled = true;\n
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
}`,
    viewCode: ``,
    isCodeVisible: false
};
const globalConfiguration = {
    beforeCodeTitle: 'Global configuration',
    htmlCode: `
<div class="kt-section">
  <h3 class="kt-section__heading">Self closing</h3>
  <span class="kt-section__sub">
	This pagination uses custom default values
  </span>
  <div class="kt-section__content">
    <ngb-pagination [collectionSize]="70" [(page)]="page5" [size]="'sm'" [boundaryLinks]="'true'"></ngb-pagination>
  </div>
</div>
		`,
    tsCode: `
import {Component} from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-pagination-config',
    templateUrl: './pagination-config.html',
    providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class NgbdPaginationConfig {
    page = 4;\n
    constructor(config: NgbPaginationConfig) {
        // customize default values of paginations used by this component tree
        config.size = 'sm';
        config.boundaryLinks = true;
    }
}
		`,
    viewCode: ``,
    isCodeVisible: false
};
let PaginationComponent = class PaginationComponent {
    constructor(config) {
        this.exampleBasicPagination = basicPagination;
        this.exampleAdvancedPagination = advancedPagination;
        this.examplePaginationSize = paginationSize;
        this.examplePaginationAlignment = paginationAlignment;
        this.exampleDisabledPagination = disabledPagination;
        this.exampleGlobalConfiguration = globalConfiguration;
        this.page = 4;
        this.page2 = 1;
        this.page3 = 4;
        this.currentPage = 3;
        this.page4 = 3;
        this.isDisabled = true;
        this.page5 = 4;
        // customize default values of paginations used by this component tree
        // config.size = 'sm';
        // config.boundaryLinks = true;
    }
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
    ngOnInit() {
    }
};
PaginationComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-pagination',
        templateUrl: './pagination.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof NgbPaginationConfig !== "undefined" && NgbPaginationConfig) === "function" ? _a : Object])
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map