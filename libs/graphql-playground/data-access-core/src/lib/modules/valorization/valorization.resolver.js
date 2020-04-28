import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { ValorizationService } from './valorization.service';
// AUTO GENERATED TYPES
import { ValorizationInput, ValorizationUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let ValorizationResolver = class ValorizationResolver {
    constructor(valorizationService) {
        this.valorizationService = valorizationService;
    }
    // QUERIES ==========================================================
    getValorizationById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Valorization(), @Args', id);
            return this.valorizationService.findValorizationById(id);
        });
    }
    getValorization() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.findAllValorization();
        });
    }
    // MUTATIONS ========================================================
    createValorization(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.createValorization(data);
        });
    }
    updateValorization(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.updateValorization(data);
        });
    }
    deleteValorization(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.deleteValorization(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    // Valorization.userId > User.id
    getUser({ userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.findUser({ userId });
        });
    }
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "getValorizationById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "getValorization", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ValorizationInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "createValorization", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ValorizationUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "updateValorization", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "deleteValorization", null);
tslib_1.__decorate([
    ResolveField('user'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "getUser", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "createdBy", null);
ValorizationResolver = tslib_1.__decorate([
    Resolver('Valorization'),
    tslib_1.__metadata("design:paramtypes", [ValorizationService])
], ValorizationResolver);
export { ValorizationResolver };
//# sourceMappingURL=valorization.resolver.js.map