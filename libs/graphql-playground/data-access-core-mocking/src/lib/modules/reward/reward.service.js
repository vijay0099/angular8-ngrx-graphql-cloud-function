import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { rewards } from '@monorepo/graphql-playground/data-access-data';
let RewardService = class RewardService {
    constructor() {
        this.rewards = rewards;
    }
    // QUERIES ========================================================
    findRewardById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewards.find(reward => reward.id === id);
        });
    }
    findAllRewards() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.rewards;
        });
    }
    // MUTATIONS ========================================================
    createReward(reward) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('create new, passing data = ', reward);
            const newReward = Object.assign({ id: uuidv4() }, reward);
            console.log('created new user: ', Object.assign({}, newReward));
            this.rewards.push(newReward);
            return newReward;
        });
    }
    // DELETE
    deleteReward(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = this.rewards.findIndex(reward => reward.id === id);
            if (index === -1) {
                throw new Error('User not found.');
            }
            const deletedReward = this.rewards.splice(index, 1);
            return deletedReward[0];
        });
    }
};
RewardService = tslib_1.__decorate([
    Injectable()
], RewardService);
export { RewardService };
//# sourceMappingURL=reward.service.js.map