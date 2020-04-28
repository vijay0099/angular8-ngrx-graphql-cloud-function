import * as tslib_1 from "tslib";
var _a, _b, _c;
// ANGULAR
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
// OBJECT-PATH
import * as objectPath from 'object-path';
// LOADING BAR
import { LoadingBarService } from '@ngx-loading-bar/core';
// GRAPHQL
import { GetUsersGQL } from '@monorepo/admin/data-access-models';
// SERVICES
import { HtmlClassService, LayoutRefService, LayoutConfigService } from '@monorepo/shared/util-services';
import { map } from 'rxjs/operators';
let HeaderComponent = class HeaderComponent {
    /**
     * Component constructor
     *
     * @param router: Router
     * @param layoutRefService: LayoutRefService
     * @param layoutConfigService: LayoutConfigService
     * @param loader: LoadingBarService
     * @param htmlClassService: HtmlClassService
     */
    constructor(router, layoutRefService, layoutConfigService, loader, htmlClassService, getUsersGQL) {
        this.router = router;
        this.layoutRefService = layoutRefService;
        this.layoutConfigService = layoutConfigService;
        this.loader = loader;
        this.htmlClassService = htmlClassService;
        this.getUsersGQL = getUsersGQL;
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
    ngOnInit() {
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
        console.log('client-side data');
        this.users$ = this.getUsersGQL
            .watch()
            .valueChanges.pipe(map(result => result.data.getUsers));
        console.log('we are in web client =', this.users$);
    }
    ngAfterViewInit() {
        // keep header element in the service
        this.layoutRefService.addElement('header', this.ktHeader.nativeElement);
    }
};
tslib_1.__decorate([
    ViewChild('ktHeader', { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object)
], HeaderComponent.prototype, "ktHeader", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'admin-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, LayoutRefService,
        LayoutConfigService, typeof (_c = typeof LoadingBarService !== "undefined" && LoadingBarService) === "function" ? _c : Object, HtmlClassService,
        GetUsersGQL])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map