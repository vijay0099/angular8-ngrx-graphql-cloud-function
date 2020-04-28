import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';

// SERVICES
import { RewardService } from './reward.service';

// AUTO GENERATED TYPES
import {
  Reward,
  RewardInput
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Reward')
export class RewardResolver {
  constructor(private readonly rewardService: RewardService) {}

  // QUERIES ==========================================================

  @Query()
  async getRewardById(@Args('id') id: string): Promise<Reward> {
    console.log('reward(), @Args', id);
    return this.rewardService.findRewardById(id);
  }

  @Query()
  async getAllRewards(): Promise<Reward[]> {
    return this.rewardService.findAllRewards();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createReward(@Args('data') data): Promise<Reward> {
    return this.rewardService.createReward(data);
  }

  @Mutation()
  async deleteReward(@Args('id') id): Promise<Reward> {
    return this.rewardService.deleteReward(id);
  }
}
