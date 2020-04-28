// ANGULAR
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

// RXJS
import { Observable, Subscription } from 'rxjs';

// OBJECT-PATH
import * as objectPath from 'object-path';

// SERVICES
import {
  HtmlClassService,
  MenuConfigService,
  PageConfigService,
  LayoutConfigService
} from '@monorepo/shared/util-services';

// CORE
import {
  AppState,
  currentUserPermissions
} from '@monorepo/shared/data-access-core';

// CONFIGS
import {
  LayoutConfig,
  MenuConfig,
  PageConfig
} from '@monorepo/admin/util-config';

// USER PERMISSIONS
import { NgxPermissionsService } from 'ngx-permissions';

// MODELS
import { Permission } from '@monorepo/shared/data-access-models';

// STORE
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'admin-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit, OnDestroy {
  // Public variables
  selfLayout: string;
  asideDisplay: boolean;
  asideSecondary: boolean;
  subheaderDisplay: boolean;
  desktopHeaderDisplay: boolean;
  fitTop: boolean;
  fluid: boolean;

  // Private properties
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private currentUserPermissions$: Observable<Permission[]>;

  /**
   * Component constructor
   *
   * @param layoutConfigService: LayoutConfigService
   * @param menuConfigService: MenuConfigService
   * @param pageConfigService: PageConfigService
   * @param htmlClassService: HtmlClassService
   * @param store
   * @param permissionsService
   */
  constructor(
    private layoutConfigService: LayoutConfigService,
    private menuConfigService: MenuConfigService,
    private pageConfigService: PageConfigService,
    private htmlClassService: HtmlClassService,
    private store: Store<AppState>,
    private permissionsService: NgxPermissionsService
  ) {
    this.loadRolesWithPermissions();

    // register configs by demos
    this.layoutConfigService.loadConfigs(new LayoutConfig().configs);
    this.menuConfigService.loadConfigs(new MenuConfig().configs);
    this.pageConfigService.loadConfigs(new PageConfig().configs);

    // setup element classes
    this.htmlClassService.setConfig(this.layoutConfigService.getConfig());

    const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(
      layoutConfig => {
        // reset body class based on global and page level layout config, refer to html-class.service.ts
        document.body.className = '';
        this.htmlClassService.setConfig(layoutConfig);
      }
    );
    this.unsubscribe.push(subscr);
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    const config = this.layoutConfigService.getConfig();
    this.selfLayout = objectPath.get(config, 'self.layout');
    this.asideDisplay = objectPath.get(config, 'aside.self.display');
    this.subheaderDisplay = objectPath.get(config, 'subheader.display');
    this.desktopHeaderDisplay = objectPath.get(
      config,
      'header.self.fixed.desktop'
    );
    this.fitTop = objectPath.get(config, 'content.fit-top');
    this.fluid = objectPath.get(config, 'content.width') === 'fluid';

    // let the layout type change
    const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(cfg => {
      setTimeout(() => {
        this.selfLayout = objectPath.get(cfg, 'self.layout');
      });
    });
    this.unsubscribe.push(subscr);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  /**
   * NGX Permissions, init roles
   */
  loadRolesWithPermissions() {
    this.currentUserPermissions$ = this.store.pipe(
      select(currentUserPermissions)
    );
    const subscr = this.currentUserPermissions$.subscribe(res => {
      if (!res || res.length === 0) {
        return;
      }

      this.permissionsService.flushPermissions();
      res.forEach((pm: Permission) =>
        this.permissionsService.addPermission(pm.name)
      );
    });
    this.unsubscribe.push(subscr);
  }
}
