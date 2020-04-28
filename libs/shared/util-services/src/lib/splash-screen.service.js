import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';
let SplashScreenService = class SplashScreenService {
    /**
     * Service constctuctor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped) {
            return;
        }
        const player = this.animationBuilder.build([
            style({ opacity: '1' }),
            animate(800, style({ opacity: '0' }))
        ]).create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 300);
    }
};
SplashScreenService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AnimationBuilder !== "undefined" && AnimationBuilder) === "function" ? _a : Object])
], SplashScreenService);
export { SplashScreenService };
//# sourceMappingURL=splash-screen.service.js.map