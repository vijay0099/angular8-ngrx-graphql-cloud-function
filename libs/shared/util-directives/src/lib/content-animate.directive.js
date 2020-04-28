import * as tslib_1 from "tslib";
var _a, _b, _c;
// ANGULAR
import { Directive, ElementRef } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
/**
 * Page load animation
 *
 */
let ContentAnimateDirective = class ContentAnimateDirective {
    /**
     * Directive Consturctor
     * @param el: ElementRef
     * @param router: Router
     * @param animationBuilder: AnimationBuilder
     */
    constructor(el, router, animationBuilder) {
        this.el = el;
        this.router = router;
        this.animationBuilder = animationBuilder;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // animate the content
        this.initAnimate();
        // animate page load
        this.events = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.player.play();
            }
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.events.unsubscribe();
        this.player.destroy();
    }
    /**
     * Animate page load
     */
    initAnimate() {
        this.player = this.animationBuilder
            .build([
            // style({opacity: 0, transform: 'translateY(15px)'}),
            // animate(500, style({opacity: 1, transform: 'translateY(0)'})),
            // style({transform: 'none'}),
            style({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ])
            .create(this.el.nativeElement);
    }
};
ContentAnimateDirective = tslib_1.__decorate([
    Directive({
        selector: '[ktContentAnimate]'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof AnimationBuilder !== "undefined" && AnimationBuilder) === "function" ? _c : Object])
], ContentAnimateDirective);
export { ContentAnimateDirective };
//# sourceMappingURL=content-animate.directive.js.map