import * as tslib_1 from "tslib";
// ANGULAR
import { Component, Input } from '@angular/core';
let SearchResultComponent = class SearchResultComponent {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], SearchResultComponent.prototype, "data", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SearchResultComponent.prototype, "noRecordText", void 0);
SearchResultComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-search-result',
        templateUrl: './search-result.component.html',
        styleUrls: ['./search-result.component.scss']
    })
], SearchResultComponent);
export { SearchResultComponent };
//# sourceMappingURL=search-result.component.js.map