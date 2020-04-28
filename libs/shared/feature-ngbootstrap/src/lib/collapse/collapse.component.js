import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
const demo = {
    beforeCodeTitle: 'Demo',
    htmlCode: `
<div class="kt-section">
  <div class="kt-section__content">
    <button type="button"
      class="btn btn-primary"
      (click)="isCollapsed = !isCollapsed"
      [attr.aria-expanded]="!isCollapsed"
      aria-controls="collapseExample">
      Toggle
    </button>
  </div>
  <div id="collapseExample" [ngbCollapse]="isCollapsed">
    <div class="card">
      <div class="card-body">
        You can collapse this card by clicking Toggle
      </div>
    </div>
  </div>
</div>
`,
    tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-collapse-basic',
    templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
    public isCollapsed = false;
}
`,
    isCodeVisible: false,
    isExampleExpanded: true
};
let CollapseComponent = class CollapseComponent {
    constructor() {
        this.isCollapsed = false;
    }
    ngOnInit() {
        this.exampleDemo = demo;
    }
};
CollapseComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-collapse',
        templateUrl: './collapse.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CollapseComponent);
export { CollapseComponent };
//# sourceMappingURL=collapse.component.js.map