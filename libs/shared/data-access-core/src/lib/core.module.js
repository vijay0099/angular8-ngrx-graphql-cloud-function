import * as tslib_1 from "tslib";
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// DIRECTIVES
import { ContentAnimateDirective, HeaderDirective, MenuDirective, OffcanvasDirective, ScrollTopDirective, SparklineChartDirective, StickyDirective, TabClickEventDirective, ToggleDirective } from '@monorepo/shared/util-directives';
// PIPES
import { FirstLetterPipe, GetObjectPipe, JoinPipe, SafePipe, TimeElapsedPipe } from '@monorepo/shared/ui-formatters';
let DataAccessCoreModule = class DataAccessCoreModule {
};
DataAccessCoreModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [
            // directives
            ScrollTopDirective,
            HeaderDirective,
            OffcanvasDirective,
            ToggleDirective,
            MenuDirective,
            TabClickEventDirective,
            SparklineChartDirective,
            ContentAnimateDirective,
            StickyDirective,
            // pipes
            TimeElapsedPipe,
            JoinPipe,
            GetObjectPipe,
            SafePipe,
            FirstLetterPipe
        ],
        exports: [
            // directives
            ScrollTopDirective,
            HeaderDirective,
            OffcanvasDirective,
            ToggleDirective,
            MenuDirective,
            TabClickEventDirective,
            SparklineChartDirective,
            ContentAnimateDirective,
            StickyDirective,
            // pipes
            TimeElapsedPipe,
            JoinPipe,
            GetObjectPipe,
            SafePipe,
            FirstLetterPipe
        ],
        providers: []
    })
], DataAccessCoreModule);
export { DataAccessCoreModule };
//# sourceMappingURL=core.module.js.map