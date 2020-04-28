// ANGULAR
import { AfterViewInit, Component, OnInit } from '@angular/core';

// SERVICES
import {
  LayoutConfigService,
  HtmlClassService
} from '@monorepo/shared/util-services';
import { ToggleOptions } from '@monorepo/shared/util-directives';

@Component({
  selector: 'client-brand',
  templateUrl: './brand.component.html'
})
export class BrandComponent implements OnInit, AfterViewInit {
  // Public properties
  headerLogo: string;
  headerStickyLogo: string;

  toggleOptions: ToggleOptions = {
    target: 'body',
    targetState: 'kt-aside--minimize',
    togglerState: 'kt-aside__brand-aside-toggler--active'
  };

  /**
   * Component constructor
   *
   * @param layoutConfigService: LayoutConfigService
   * @param htmlClassService: HtmlClassService
   */
  constructor(
    private layoutConfigService: LayoutConfigService,
    public htmlClassService: HtmlClassService
  ) {}

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    this.headerLogo = this.layoutConfigService.getLogo();
    this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
  }

  /**
   * On destroy
   */
  ngAfterViewInit(): void {}
}
