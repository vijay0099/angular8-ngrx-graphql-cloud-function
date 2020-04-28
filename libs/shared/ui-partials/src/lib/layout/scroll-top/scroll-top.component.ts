// ANGULAR
import { Component } from '@angular/core';

// DIRECTIVES
import { ScrollTopOptions } from '@monorepo/shared/util-directives';

@Component({
  selector: 'monorepo-scroll-top',
  templateUrl: './scroll-top.component.html'
})
export class ScrollTopComponent {
  // Public properties
  scrollTopOptions: ScrollTopOptions = {
    offset: 300,
    speed: 600
  };
}
