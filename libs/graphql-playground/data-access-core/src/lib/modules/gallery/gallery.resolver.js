// author.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { GalleryService } from './gallery.service';
// AUTO GENERATED TYPES
import { GalleryInput, GalleryUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let GalleryResolver = class GalleryResolver {
    constructor(galleryService) {
        this.galleryService = galleryService;
    }
    // QUERIES ==========================================================
    getGallery(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleryService.findGalleryById(id);
        });
    }
    getGalleries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleryService.findGalleries();
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createGallery(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleryService.createGallery(data);
        });
    }
    // UPDATE
    updateGallery(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleryService.updateGallery(data);
        });
    }
    // DELETE
    deleteGallery(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleryService.deleteGallery(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.galleryService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], GalleryResolver.prototype, "getGallery", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GalleryResolver.prototype, "getGalleries", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GalleryInput]),
    tslib_1.__metadata("design:returntype", Promise)
], GalleryResolver.prototype, "createGallery", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GalleryUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], GalleryResolver.prototype, "updateGallery", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GalleryResolver.prototype, "deleteGallery", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GalleryResolver.prototype, "createdBy", null);
GalleryResolver = tslib_1.__decorate([
    Resolver('Gallery'),
    tslib_1.__metadata("design:paramtypes", [GalleryService])
], GalleryResolver);
export { GalleryResolver };
//# sourceMappingURL=gallery.resolver.js.map