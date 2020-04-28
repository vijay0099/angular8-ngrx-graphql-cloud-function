// author.resolver.ts

import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { ActivityService } from './activity.service';

// AUTO GENERATED TYPES
import {
  Activity,
  ActivityInput,
  ActivityUpdateInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Activity')
export class ActivityResolver {
  constructor(private readonly activityService: ActivityService) {}

  // QUERIES ==========================================================

  @Query()
  async getActivity(@Args('id') id: string): Promise<Activity> {
    return this.activityService.findActivityById(id);
  }

  @Query()
  async getActivities(): Promise<Activity[]> {
    return this.activityService.findActivities();
  }

  // MUTATIONS ========================================================

  // CREATE
  @Mutation()
  async createActivity(@Args('data') data: ActivityInput): Promise<Activity> {
    return this.activityService.createNewActivity(data);
  }

  @Mutation()
  async deleteActivity(@Args('id') id): Promise<Activity> {
    return this.activityService.deleteActivity(id);
  }

  @Mutation()
  async updateActivity(
    @Args('data') data: ActivityUpdateInput
  ): Promise<Activity> {
    return this.activityService.updateActivity(data);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.activityService.createdBy({ createdBy });
  }
}
