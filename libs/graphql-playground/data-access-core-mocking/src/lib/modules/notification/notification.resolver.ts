import {
  Args,
  Query,
  Resolver,
  Mutation,
  ResolveField,
  Parent
} from '@nestjs/graphql';

// SERVICES
import { NotificationService } from './notification.service';

// AUTO GENERATED TYPES
import {
  Notification,
  NotificationInput,
  NotificationUser,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Notification')
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  // QUERIES ==========================================================

  @Query()
  async getNotificationById(@Args('id') id: string): Promise<Notification> {
    console.log('notification(), @Args', id);
    return this.notificationService.findNotificationById(id);
  }

  @Query()
  async getAllNotifications(): Promise<Notification[]> {
    return this.notificationService.findAllNotifications();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createNotification(@Args('data') data): Promise<Notification> {
    return this.notificationService.createNotification(data);
  }

  @Mutation()
  async deleteNotification(@Args('id') id): Promise<Notification> {
    return this.notificationService.deleteNotification(id);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  @ResolveField('users')
  async getNotificationUsers(@Parent() { id }): Promise<NotificationUser[]> {
    return this.notificationService.filterUsersByNotificationId({ id });
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================
  @ResolveField('createdBy')
  async getNotificationCreatedBy(@Parent() { createdBy }): Promise<User[]> {
    return this.notificationService.createdBy({ createdBy });
  }
}
