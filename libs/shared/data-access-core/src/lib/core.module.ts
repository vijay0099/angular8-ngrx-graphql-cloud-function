// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// DIRECTIVES
import {
  ContentAnimateDirective,
  HeaderDirective,
  MenuDirective,
  OffcanvasDirective,
  ScrollTopDirective,
  SparklineChartDirective,
  StickyDirective,
  TabClickEventDirective,
  ToggleDirective
} from '@monorepo/shared/util-directives';

// PIPES
import {
  FirstLetterPipe,
  GetObjectPipe,
  JoinPipe,
  SafePipe,
  TimeElapsedPipe
} from '@monorepo/shared/ui-formatters';

@NgModule({
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
export class DataAccessCoreModule {}
