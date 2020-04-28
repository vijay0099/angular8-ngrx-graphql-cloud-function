import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { ValorizationService } from './valorization.service';
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
    getAllValorization() {
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
    deleteValorization(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.deleteValorization(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    // Valorization.userId > User.id
    getUser({ userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorizationService.findUser({ userId });
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
], ValorizationResolver.prototype, "getAllValorization", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ValorizationResolver.prototype, "createValorization", null);
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
ValorizationResolver = tslib_1.__decorate([
    Resolver('Valorization'),
    tslib_1.__metadata("design:paramtypes", [ValorizationService])
], ValorizationResolver);
export { ValorizationResolver };
//# sourceMappingURL=valorization.resolver.js.map