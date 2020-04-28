import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { RewardService } from './reward.service';
// AUTO GENERATED TYPES
import { RewardInput, RewardUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let RewardResolver = class RewardResolver {
    constructor(rewardService) {
        this.rewardService = rewardService;
    }
    // QUERIES ==========================================================
    getRewardById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('reward(), @Args', id);
            return this.rewardService.findRewardById(id);
        });
    }
    getAllRewards() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewardService.findAllRewards();
        });
    }
    // MUTATIONS ========================================================
    createReward(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewardService.createReward(data);
        });
    }
    deleteReward(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewardService.deleteReward(id);
        });
    }
    updateReward(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewardService.updateReward(data);
        });
    }
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewardService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardResolver.prototype, "getRewardById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], RewardResolver.prototype, "getAllRewards", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RewardInput]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardResolver.prototype, "createReward", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardResolver.prototype, "deleteReward", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RewardUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardResolver.prototype, "updateReward", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardResolver.prototype, "createdBy", null);
RewardResolver = tslib_1.__decorate([
    Resolver('Reward'),
    tslib_1.__metadata("design:paramtypes", [RewardService])
], RewardResolver);
export { RewardResolver };
//# sourceMappingURL=reward.resolver.js.map