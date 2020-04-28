// children.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { ChildService } from './child.service';
// AUTO GENERATED TYPES
import { ChildInput, ChildUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let ChildResolver = class ChildResolver {
    constructor(childrenService) {
        this.childrenService = childrenService;
    }
    // QUERIES ==========================================================
    getChild(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.childrenService.findChildById(id);
        });
    }
    getChildren() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.childrenService.getAllChildren();
        });
    }
    // MUTATIONS ========================================================
    createChild(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.childrenService.createNewChild(data);
        });
    }
    deleteChild(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.childrenService.deleteChild(id);
        });
    }
    updateChild(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.childrenService.updateChild(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    // User.posts > User.id
    getChildNeeds(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.childrenService.filterNeedsByChildId(data.id);
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ChildResolver.prototype, "getChild", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ChildResolver.prototype, "getChildren", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ChildInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ChildResolver.prototype, "createChild", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChildResolver.prototype, "deleteChild", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ChildUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ChildResolver.prototype, "updateChild", null);
tslib_1.__decorate([
    ResolveField('needs'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChildResolver.prototype, "getChildNeeds", null);
ChildResolver = tslib_1.__decorate([
    Resolver('Child'),
    tslib_1.__metadata("design:paramtypes", [ChildService])
], ChildResolver);
export { ChildResolver };
//# sourceMappingURL=child.resolver.js.map