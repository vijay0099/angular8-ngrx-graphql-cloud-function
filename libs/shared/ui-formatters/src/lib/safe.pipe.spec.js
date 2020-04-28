import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Sanitize HTML
 */
let SafePipe = class SafePipe {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    }
};
SafePipe = tslib_1.__decorate([
    Pipe({
        name: 'safe'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" ? _a : Object])
], SafePipe);
export { SafePipe };
//# sourceMappingURL=safe.pipe.spec.js.map