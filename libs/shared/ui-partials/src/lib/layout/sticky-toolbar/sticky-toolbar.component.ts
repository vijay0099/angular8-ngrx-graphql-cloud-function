// ANGULAR
import { Component } from '@angular/core';

// DIRECTIVES
import { OffcanvasOptions } from '@monorepo/shared/util-directives';

// SERVICES
import { LayoutConfigService } from '@monorepo/shared/util-services';

@Component({
  selector: 'monorepo-sticky-toolbar',
  templateUrl: './sticky-toolbar.component.html',
  styleUrls: ['./sticky-toolbar.component.scss']
})
export class StickyToolbarComponent {
  // Public properties
  demoPanelOptions: OffcanvasOptions = {
    overlay: true,
    baseClass: 'kt-demo-panel',
    closeBy: 'kt_demo_panel_close',
    toggleBy: 'kt_demo_panel_toggle'
  };

  baseHref: string;

  constructor(private layoutConfigService: LayoutConfigService) {
    this.baseHref = 'https://keenthemes.com/metronic/preview/angular/';
  }

  isActiveDemo(demo) {
    return demo === this.layoutConfigService.getConfig('demo');
  }
}
