import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { galleries } from '@monorepo/graphql-playground/data-access-data';
let GalleryService = class GalleryService {
    constructor() {
        this.galleries = galleries;
        // RELATIONSHIPS [ONE-TO-MANY] ======================================
    }
    // QUERIES ========================================================
    findGalleryById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleries.find(gallery => gallery.id === id);
        });
    }
    findGalleries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(this.galleries);
            return this.galleries;
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createNewGallery(gallery) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newGallery = Object.assign({ id: uuidv4() }, gallery);
            console.log('New gallery created: ', Object.assign({}, gallery));
            this.galleries.push(newGallery);
            return newGallery;
        });
    }
};
GalleryService = tslib_1.__decorate([
    Injectable()
], GalleryService);
export { GalleryService };
//# sourceMappingURL=gallery.service.js.map