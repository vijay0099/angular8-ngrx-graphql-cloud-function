import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { FamilyService } from './family.service';
// AUTO GENERATED TYPES
import { FamilyFilterInput, FamilyInput, FamilyUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let FamilyResolver = class FamilyResolver {
    constructor(familiesService) {
        this.familiesService = familiesService;
    }
    // QUERIES ==========================================================
    getFamily(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.familiesService.findFamilyById(id);
        });
    }
    getFamilies(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(query);
            return this.familiesService.getAllFamilies(query);
        });
    }
    // MUTATIONS ========================================================
    createFamily(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.familiesService.createNewFamily(data);
        });
    }
    deleteFamily(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.familiesService.deleteFamily(id);
        });
    }
    updateFamily(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.familiesService.updateFamily(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    getFamilyChildren(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.familiesService.filterChildrenByFamilyId(data.id);
        });
    }
    getNotificationCreatedBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.familiesService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "getFamily", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FamilyFilterInput]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "getFamilies", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FamilyInput]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "createFamily", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "deleteFamily", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FamilyUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "updateFamily", null);
tslib_1.__decorate([
    ResolveField('children'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "getFamilyChildren", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamilyResolver.prototype, "getNotificationCreatedBy", null);
FamilyResolver = tslib_1.__decorate([
    Resolver('Family'),
    tslib_1.__metadata("design:paramtypes", [FamilyService])
], FamilyResolver);
export { FamilyResolver };
//# sourceMappingURL=family.resolver.js.map