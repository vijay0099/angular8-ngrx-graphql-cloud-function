import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
// ANGULAR
import { Component, ElementRef, HostBinding, HostListener, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
// RXJS
import { Observable } from 'rxjs';
// SERVICES
import { KtDialogService } from '@monorepo/shared/util-services';
// DIRECTIVES
import { StickyDirective } from '@monorepo/shared/util-directives';
let PortletHeaderComponent = class PortletHeaderComponent {
    constructor(el, platformId, ktDialogService) {
        this.el = el;
        this.platformId = platformId;
        this.ktDialogService = ktDialogService;
        this.viewLoading = false;
        this.classes = 'kt-portlet__head';
        this.lastScrollTop = 0;
        this.subscriptions = [];
        this.isScrollDown = false;
        this.stickyDirective = new StickyDirective(this.el, this.platformId);
    }
    onResize() {
        this.updateStickyPosition();
    }
    onScroll() {
        this.updateStickyPosition();
        const st = window.pageYOffset || document.documentElement.scrollTop;
        this.isScrollDown = st > this.lastScrollTop;
        this.lastScrollTop = st <= 0 ? 0 : st;
    }
    updateStickyPosition() {
        if (this.sticky) {
            Promise.resolve(null).then(() => {
                // get boundary top margin for sticky header
                const headerElement = document.querySelector('.kt-header');
                const subheaderElement = document.querySelector('.kt-subheader');
                const headerMobileElement = document.querySelector('.kt-header-mobile');
                let height = 0;
                if (headerElement != null) {
                    // mobile header
                    if (window.getComputedStyle(headerElement).height === '0px') {
                        height += headerMobileElement.offsetHeight;
                    }
                    else {
                        // desktop header
                        if (document.body.classList.contains('kt-header--minimize-topbar')) {
                            // hardcoded minimized header height
                            height = 60;
                        }
                        else {
                            // normal fixed header
                            if (document.body.classList.contains('kt-header--fixed')) {
                                height += headerElement.offsetHeight;
                            }
                            if (document.body.classList.contains('kt-subheader--fixed')) {
                                height += subheaderElement.offsetHeight;
                            }
                        }
                    }
                }
                this.stickyDirective.marginTop = height;
            });
        }
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (this.sticky) {
            this.stickyDirective.ngOnInit();
        }
    }
    ngAfterViewInit() {
        // append custom class
        this.classes += this.class ? ' ' + this.class : '';
        // hide icon's parent node if no icon provided
        this.hideIcon = this.refIcon.nativeElement.children.length === 0;
        // hide tools' parent node if no tools template is provided
        this.hideTools = this.refTools.nativeElement.children.length === 0;
        if (this.sticky) {
            this.updateStickyPosition();
            this.stickyDirective.ngAfterViewInit();
        }
        // initialize loading dialog
        if (this.viewLoading$) {
            const loadingSubscription = this.viewLoading$.subscribe(res => this.toggleLoading(res));
            this.subscriptions.push(loadingSubscription);
        }
    }
    toggleLoading(_incomingValue) {
        this.viewLoading = _incomingValue;
        if (_incomingValue && !this.ktDialogService.checkIsShown()) {
            this.ktDialogService.show();
        }
        if (!this.viewLoading && this.ktDialogService.checkIsShown()) {
            this.ktDialogService.hide();
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
        if (this.sticky) {
            this.stickyDirective.ngOnDestroy();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PortletHeaderComponent.prototype, "class", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PortletHeaderComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PortletHeaderComponent.prototype, "icon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortletHeaderComponent.prototype, "noTitle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortletHeaderComponent.prototype, "sticky", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], PortletHeaderComponent.prototype, "viewLoading$", void 0);
tslib_1.__decorate([
    HostBinding('class'),
    tslib_1.__metadata("design:type", Object)
], PortletHeaderComponent.prototype, "classes", void 0);
tslib_1.__decorate([
    HostBinding('attr.ktSticky'),
    tslib_1.__metadata("design:type", StickyDirective)
], PortletHeaderComponent.prototype, "stickyDirective", void 0);
tslib_1.__decorate([
    ViewChild('refIcon', { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object)
], PortletHeaderComponent.prototype, "refIcon", void 0);
tslib_1.__decorate([
    ViewChild('refTools', { static: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _c : Object)
], PortletHeaderComponent.prototype, "refTools", void 0);
tslib_1.__decorate([
    HostListener('window:resize', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PortletHeaderComponent.prototype, "onResize", null);
tslib_1.__decorate([
    HostListener('window:scroll', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PortletHeaderComponent.prototype, "onScroll", null);
PortletHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-portlet-header',
        styleUrls: ['portlet-header.component.scss'],
        template: `
    <div class="kt-portlet__head-label" [hidden]="noTitle">
      <span class="kt-portlet__head-icon" #refIcon [hidden]="hideIcon">
        <ng-content *ngIf="!icon" select="[ktPortletIcon]"></ng-content>
        <i *ngIf="icon" [ngClass]="icon"></i>
      </span>
      <ng-content *ngIf="!title" select="[ktPortletTitle]"></ng-content>
      <h3 *ngIf="title" class="kt-portlet__head-title" [innerHTML]="title"></h3>
    </div>
    <div class="kt-portlet__head-toolbar" #refTools [hidden]="hideTools">
      <ng-content select="[ktPortletTools]"></ng-content>
    </div>
  `
    }),
    tslib_1.__param(1, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _d : Object, String, KtDialogService])
], PortletHeaderComponent);
export { PortletHeaderComponent };
//# sourceMappingURL=portlet-header.component.js.map