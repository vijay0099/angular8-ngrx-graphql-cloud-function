import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Reward,
  RewardInput
} from '@monorepo/graphql-playground/data-access-models';

import { rewards } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class RewardService {
  private readonly rewards: any[] = rewards;

  // QUERIES ========================================================

  async findRewardById(id: string): Promise<Reward> {
    return this.rewards.find(reward => reward.id === id);
  }

  async findAllRewards(): Promise<Reward[]> {
    return this.rewards;
  }

  // MUTATIONS ========================================================

  async createReward(reward: RewardInput): Promise<Reward> {
    console.log('create new, passing data = ', reward);

    const newReward: any = {
      id: uuidv4(),
      ...reward
    };

    console.log('created new user: ', { ...newReward });

    this.rewards.push(newReward);
    return newReward;
  }

  // DELETE
  async deleteReward(id: string): Promise<any> {
    const index = this.rewards.findIndex(reward => reward.id === id);
    if (index === -1) {
      throw new Error('User not found.');
    }
    const deletedReward = this.rewards.splice(index, 1);
    return deletedReward[0];
  } 

}
