import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { NeedService } from './need.service';
// AUTO GENERATED TYPES
import { NeedInput, NeedUpdateInput, FindInput, DeleteInput } from '@monorepo/graphql-playground/data-access-models';
let NeedResolver = class NeedResolver {
    constructor(needService) {
        this.needService = needService;
    }
    // QUERIES ========================================================
    getNeed(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.getNeed(id);
        });
    }
    getNeedById(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.findNeedById(data);
        });
    }
    getNeeds() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.findAllNeeds();
        });
    }
    // MUTATIONS ========================================================
    createNeed(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.createNewNeed(data);
        });
    }
    deleteNeed(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.deleteNeed(data);
        });
    }
    updateNeed(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.updateNeed(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    // Need.belongsTo > Child.id
    getChild({ belongsTo }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.findChildById({ belongsTo });
        });
    }
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "getNeed", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FindInput]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "getNeedById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "getNeeds", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [NeedInput]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "createNeed", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [DeleteInput]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "deleteNeed", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [NeedUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "updateNeed", null);
tslib_1.__decorate([
    ResolveField('child'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "getChild", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "createdBy", null);
NeedResolver = tslib_1.__decorate([
    Resolver('Need'),
    tslib_1.__metadata("design:paramtypes", [NeedService])
], NeedResolver);
export { NeedResolver };
//# sourceMappingURL=need.resolver.js.map