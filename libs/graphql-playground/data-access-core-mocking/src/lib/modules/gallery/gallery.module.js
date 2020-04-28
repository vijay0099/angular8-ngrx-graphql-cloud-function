import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
let GalleryModule = class GalleryModule {
};
GalleryModule = tslib_1.__decorate([
    Module({
        providers: [GalleryService]
    })
], GalleryModule);
export { GalleryModule };
//# sourceMappingURL=gallery.module.js.map