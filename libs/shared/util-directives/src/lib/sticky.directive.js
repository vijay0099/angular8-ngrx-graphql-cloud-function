import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, isDevMode, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { filter, map, share, startWith, takeUntil, throttleTime } from 'rxjs/operators';
let StickyDirective = class StickyDirective {
    constructor(stickyElement, platformId) {
        this.stickyElement = stickyElement;
        this.platformId = platformId;
        this.filterGate = false;
        this.marginTop$ = new BehaviorSubject(0);
        this.marginBottom$ = new BehaviorSubject(0);
        this.enable$ = new BehaviorSubject(true);
        this.sticky = false;
        this.boundaryReached = false;
        /**
         * The field represents some position values in normal (not sticky) mode.
         * If the browser size or the content of the page changes, this value must be recalculated.
         */
        this.scroll$ = new Subject();
        this.resize$ = new Subject();
        this.extraordinaryChange$ = new BehaviorSubject(undefined);
        this.componentDestroyed = new Subject();
        this.listener = (e) => {
            const upperScreenEdgeAt = e.target.scrollTop || window.pageYOffset;
            this.scroll$.next(upperScreenEdgeAt);
        };
        /** Throttle the scroll to animation frame (around 16.67ms) */
        this.scrollThrottled$ = this.scroll$.pipe(throttleTime(0, animationFrame), share());
        /** Throttle the resize to animation frame (around 16.67ms) */
        this.resizeThrottled$ = this.resize$.pipe(throttleTime(0, animationFrame), 
        // emit once since we are currently using combineLatest
        startWith(null), share());
        this.status$ = combineLatest(this.enable$, this.scrollThrottled$, this.marginTop$, this.marginBottom$, this.extraordinaryChange$, this.resizeThrottled$).pipe(filter(([enabled]) => this.checkEnabled(enabled)), map(([enabled, pageYOffset, marginTop, marginBottom]) => this.determineStatus(this.determineElementOffsets(), pageYOffset, marginTop, marginBottom, enabled)), share());
    }
    set marginTop(value) {
        this.marginTop$.next(value);
    }
    set marginBottom(value) {
        this.marginBottom$.next(value);
    }
    set enable(value) {
        this.enable$.next(value);
    }
    ngAfterViewInit() {
        this.status$
            .pipe(takeUntil(this.componentDestroyed))
            .subscribe(status => this.setSticky(status));
    }
    recalculate() {
        if (isPlatformBrowser(this.platformId)) {
            // Make sure to be in the next tick by using timeout
            setTimeout(() => {
                this.extraordinaryChange$.next(undefined);
            }, 0);
        }
    }
    /**
     * This is nasty code that should be refactored at some point.
     *
     * The Problem is, we filter for enabled. So that the code doesn't run
     * if @Input enabled = false. But if the user disables, we need exactly 1
     * emit in order to reset and call removeSticky. So this method basically
     * turns the filter in "filter, but let the first pass".
     */
    checkEnabled(enabled) {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }
        if (enabled) {
            // reset the gate
            this.filterGate = false;
            return true;
        }
        else {
            if (this.filterGate) {
                // gate closed, first emit has happened
                return false;
            }
            else {
                // this is the first emit for enabled = false,
                // let it pass, and activate the gate
                // so the next wont pass.
                this.filterGate = true;
                return true;
            }
        }
    }
    onWindowResize() {
        if (isPlatformBrowser(this.platformId)) {
            this.resize$.next();
        }
    }
    setupListener() {
        if (isPlatformBrowser(this.platformId)) {
            const target = this.getScrollTarget();
            target.addEventListener('scroll', this.listener);
        }
    }
    removeListener() {
        if (isPlatformBrowser(this.platformId)) {
            const target = this.getScrollTarget();
            target.removeEventListener('scroll', this.listener);
        }
    }
    ngOnInit() {
        // this.checkSetup();
        this.setupListener();
    }
    ngOnDestroy() {
        this.componentDestroyed.next();
        this.removeListener();
    }
    getComputedStyle(el) {
        return el.getBoundingClientRect();
    }
    getScrollTarget() {
        let target;
        if (this.scrollContainer && typeof this.scrollContainer === 'string') {
            target = document.querySelector(this.scrollContainer);
        }
        else if (this.scrollContainer &&
            this.scrollContainer instanceof HTMLElement) {
            target = this.scrollContainer;
        }
        else {
            target = window;
        }
        return target;
    }
    determineStatus(originalVals, pageYOffset, marginTop, marginBottom, enabled) {
        const stickyElementHeight = this.getComputedStyle(this.stickyElement.nativeElement).height;
        const reachedLowerEdge = this.boundaryElement &&
            window.pageYOffset + stickyElementHeight + marginBottom >=
                originalVals.bottomBoundary - marginTop;
        return {
            isSticky: enabled && pageYOffset > originalVals.offsetY,
            reachedLowerEdge,
            marginBottom,
            marginTop
        };
    }
    /**
     * Gets the offset for element. If the element
     * currently is sticky, it will get removed
     * to access the original position. Other
     * wise this would just be 0 for fixed elements.
     */
    determineElementOffsets() {
        if (this.sticky) {
            this.removeSticky();
        }
        let bottomBoundary = null;
        if (this.boundaryElement) {
            const boundaryElementHeight = this.getComputedStyle(this.boundaryElement)
                .height;
            const boundaryElementOffset = getPosition(this.boundaryElement).y;
            bottomBoundary = boundaryElementHeight + boundaryElementOffset;
        }
        return {
            offsetY: getPosition(this.stickyElement.nativeElement).y - this.marginTop$.value,
            bottomBoundary
        };
    }
    makeSticky(boundaryReached = false, marginTop, marginBottom) {
        this.boundaryReached = boundaryReached;
        // do this before setting it to pos:fixed
        const { width, height, left } = this.getComputedStyle(this.stickyElement.nativeElement);
        const offSet = boundaryReached
            ? this.getComputedStyle(this.boundaryElement).bottom -
                height -
                this.marginBottom$.value
            : this.marginTop$.value;
        this.sticky = true;
        this.stickyElement.nativeElement.style.position = 'sticky';
        this.stickyElement.nativeElement.style.backgroundColor = '#fff';
        this.stickyElement.nativeElement.style.top = this.marginTop$.value + 'px';
        // this.stickyElement.nativeElement.style.left = left + 'px';
        this.stickyElement.nativeElement.style.width = `${width}px`;
        this.stickyElement.nativeElement.style.zIndex = `2`;
        if (this.spacerElement) {
            const spacerHeight = marginBottom + height + marginTop;
            this.spacerElement.style.height = `${spacerHeight}px`;
        }
    }
    checkSetup() {
        if (isDevMode() && !this.spacerElement) {
            console.warn(`******There might be an issue with your sticky directive!******

You haven't specified a spacer element. This will cause the page to jump.

Best practise is to provide a spacer element (e.g. a div) right before/after the sticky element.
Then pass the spacer element as input:

<div #spacer></div>

<div stickyThing="" [spacer]="spacer">
    I am sticky!
</div>`);
        }
    }
    setSticky(status) {
        if (status.isSticky) {
            this.makeSticky(status.reachedLowerEdge, status.marginTop, status.marginBottom);
        }
        else {
            this.removeSticky();
        }
    }
    removeSticky() {
        this.boundaryReached = false;
        this.sticky = false;
        this.stickyElement.nativeElement.style.position = '';
        this.stickyElement.nativeElement.style.width = 'auto';
        this.stickyElement.nativeElement.style.left = 'auto';
        this.stickyElement.nativeElement.style.top = 'auto';
        if (this.spacerElement) {
            this.spacerElement.style.height = '0';
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], StickyDirective.prototype, "scrollContainer", void 0);
tslib_1.__decorate([
    Input('spacerElement'),
    tslib_1.__metadata("design:type", typeof (_b = typeof HTMLElement !== "undefined" && HTMLElement) === "function" ? _b : Object)
], StickyDirective.prototype, "spacerElement", void 0);
tslib_1.__decorate([
    Input('boundaryElement'),
    tslib_1.__metadata("design:type", typeof (_c = typeof HTMLElement !== "undefined" && HTMLElement) === "function" ? _c : Object)
], StickyDirective.prototype, "boundaryElement", void 0);
tslib_1.__decorate([
    HostBinding('class.is-sticky'),
    tslib_1.__metadata("design:type", Object)
], StickyDirective.prototype, "sticky", void 0);
tslib_1.__decorate([
    HostBinding('class.boundary-reached'),
    tslib_1.__metadata("design:type", Object)
], StickyDirective.prototype, "boundaryReached", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], StickyDirective.prototype, "marginTop", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], StickyDirective.prototype, "marginBottom", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], StickyDirective.prototype, "enable", null);
tslib_1.__decorate([
    HostListener('window:resize', []),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StickyDirective.prototype, "onWindowResize", null);
StickyDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktSticky]'
    }),
    tslib_1.__param(1, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _d : Object, String])
], StickyDirective);
export { StickyDirective };
// Thanks to https://stanko.github.io/javascript-get-element-offset/
function getPosition(el) {
    let top = 0;
    let left = 0;
    let element = el;
    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);
    return {
        y: top,
        x: left
    };
}
//# sourceMappingURL=sticky.directive.js.map