// ANGULAR
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from '@angular/router';

// OBJECT-PATH
import * as objectPath from 'object-path';

// LOADING BAR
import { LoadingBarService } from '@ngx-loading-bar/core';

// GRAPHQL
// import { GetUsersGQL } from '@monorepo/admin/data-access-models';
import { User } from '@monorepo/shared/data-access-models';

// SERVICES
import {
  HtmlClassService,
  LayoutRefService,
  LayoutConfigService
} from '@monorepo/shared/util-services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  // GRAPHQL
 // users$: Observable<any[]>;

  // Public properties
  menuHeaderDisplay: boolean;
  fluid: boolean;

  @ViewChild('ktHeader', { static: true }) ktHeader: ElementRef;

  /**
   * Component constructor
   *
   * @param router: Router
   * @param layoutRefService: LayoutRefService
   * @param layoutConfigService: LayoutConfigService
   * @param loader: LoadingBarService
   * @param htmlClassService: HtmlClassService
   */
  constructor(
    private router: Router,
    private layoutRefService: LayoutRefService,
    private layoutConfigService: LayoutConfigService,
    public loader: LoadingBarService,
    public htmlClassService: HtmlClassService,
  //  private getUsersGQL: GetUsersGQL
  ) {
    // page progress bar percentage
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // set page progress bar loading to start on NavigationStart event router
        this.loader.start();
      }
      if (event instanceof RouteConfigLoadStart) {
        this.loader.increment(35);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loader.increment(75);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        // set page progress bar loading to end on NavigationEnd event router
        this.loader.complete();
      }
    });
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    const config = this.layoutConfigService.getConfig();

    // get menu header display option
    this.menuHeaderDisplay = objectPath.get(config, 'header.menu.self.display');

    // header width fluid
    this.fluid = objectPath.get(config, 'header.self.width') === 'fluid';

    // animate the header minimize the height on scroll down. to be removed, not applicable for default demo
    /*if (objectPath.get(config, 'header.self.fixed.desktop.enabled') || objectPath.get(config, 'header.self.fixed.desktop')) {
			// header minimize on scroll down
			this.ktHeader.nativeElement.setAttribute('data-ktheader-minimize', '1');
    }*/

    // GRAPHQL
    // this.posts$ = this.getPostsGQL.watch().valueChanges.pipe(map((result) => result.data.allSets));
    // console.log('client-side data');
    // this.users$ = this.getUsersGQL
    //   .watch()
    //   .valueChanges.pipe(map(result => result.data.getUsers));

    // console.log('we are in web client =', this.users$);
  }

  ngAfterViewInit(): void {
    // keep header element in the service
    this.layoutRefService.addElement('header', this.ktHeader.nativeElement);
  }
}
