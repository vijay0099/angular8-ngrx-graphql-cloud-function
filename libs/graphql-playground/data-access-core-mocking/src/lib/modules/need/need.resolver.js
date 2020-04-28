import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { NeedService } from './need.service';
// AUTO GENERATED TYPES
import { NeedInput } from '@monorepo/graphql-playground/data-access-models';
let NeedResolver = class NeedResolver {
    constructor(needService) {
        this.needService = needService;
    }
    // QUERIES ========================================================
    getNeed(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.findNeedById(id);
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
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    // Need.childId > Child.id
    getChild({ childId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needService.findChildById({ childId });
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
    ResolveField('child'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NeedResolver.prototype, "getChild", null);
NeedResolver = tslib_1.__decorate([
    Resolver('Need'),
    tslib_1.__metadata("design:paramtypes", [NeedService])
], NeedResolver);
export { NeedResolver };
//# sourceMappingURL=need.resolver.js.map