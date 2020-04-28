import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Activity,
  ActivityInput
  // Post,
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import { activities } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class ActivityService {
  private readonly activities: any[] = activities;

  // QUERIES ========================================================

  async findActivityById(id: string): Promise<Activity> {
    return this.activities.find(user => user.id === id);
  }

  async findActivities(): Promise<Activity[]> {
    console.log(this.activities);
    return this.activities;
  }

  // MUTATIONS ========================================================

  // CREATE
  async createNewActivity(activity: ActivityInput): Promise<Activity> {
    const newActivity: any = {
      id: uuidv4(),
      ...activity
    };
    console.log('New activity created: ', { ...activity });
    this.activities.push(newActivity);
    return newActivity;
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
