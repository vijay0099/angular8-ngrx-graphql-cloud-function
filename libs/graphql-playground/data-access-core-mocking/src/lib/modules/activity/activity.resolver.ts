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
  ActivityInput
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

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
