import {
  Args,
  Query,
  Resolver,
  Mutation,
  ResolveField,
  Parent
} from '@nestjs/graphql';

// SERVICES
import { NotificationUserService } from './notification-user.service';

// AUTO GENERATED TYPES
import {
  NotificationUser,
  NotificationUserInput,
  NotificationUserUpdateInput,
  Notification,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('NotificationUser')
export class NotificationUserResolver {
  constructor(
    private readonly notificationUserService: NotificationUserService
  ) {}

  // QUERIES ==========================================================

  @Query()
  async getNotificationUserById(
    @Args('id') id: string
  ): Promise<NotificationUser> {
    console.log('notification user(), @Args', id);
    return this.notificationUserService.findNotificationUserById(id);
  }

  @Query()
  async getNotificationUsers(): Promise<NotificationUser[]> {
    return this.notificationUserService.findAllNotificationUsers();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createNotificationUser(
    @Args('data') data: NotificationUserInput
  ): Promise<NotificationUser> {
    return this.notificationUserService.createNotificationUser(data);
  }

  @Mutation()
  async updateNotificationUser(
    @Args('data') data: NotificationUserUpdateInput
  ): Promise<NotificationUser> {
    return this.notificationUserService.updateNotificationUser(data);
  }

  @Mutation()
  async deleteNotificationUser(@Args('id') id): Promise<NotificationUser> {
    return this.notificationUserService.deleteNotificationUser(id);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  @ResolveField('notification')
  async getNotification(@Parent() { notificationId }): Promise<Notification> {
    return this.notificationUserService.findNotificationById({
      notificationId
    });
  }

  @ResolveField('user')
  async getUser(@Parent() { userId }): Promise<User> {
    return this.notificationUserService.findUserById({ userId });
  }

  @ResolveField('createdBy')
  async getNotificationCreatedBy(@Parent() { createdBy }): Promise<User> {
    return this.notificationUserService.createdBy({ createdBy });
  }
}
