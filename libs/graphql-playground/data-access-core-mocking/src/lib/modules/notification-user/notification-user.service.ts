import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  NotificationUser,
  NotificationUserInput,
  Notification,
  User
} from '@monorepo/graphql-playground/data-access-models';

import { notificationUsers, notifications, users } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class NotificationUserService {
  private readonly notificationUsers: any[] = notificationUsers;
  private readonly notifications: any[] = notifications;
  private readonly users: any[] = users;

  // QUERIES ========================================================

  async findNotificationUserById(id: string): Promise<NotificationUser> {
    return this.notificationUsers.find(notification => notification.id === id);
  }

  async findAllNotificationUsers(): Promise<NotificationUser[]> {
    return this.notificationUsers;
  }

  // MUTATIONS ========================================================

  async createNotificationUser(notificationUser: NotificationUserInput): Promise<NotificationUser> {
    console.log('create new, passing data = ', notificationUser);

    const newNotificationUser: any = {
      id: uuidv4(),
      ...notificationUser
    };

    console.log('created new notification user: ', { ...newNotificationUser });

    this.notificationUsers.push(newNotificationUser);
    return newNotificationUser;
  }

  // DELETE
  async deleteNotificationUser(id: string): Promise<any> {
    const index = this.notificationUsers.findIndex(notificationUser => notificationUser.id === id);
    if (index === -1) {
      throw new Error('User not found.');
    }
    const deletedNotificationUser = this.notificationUsers.splice(index, 1);
    return deletedNotificationUser[0];
  } 

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async findNotificationById({ notificationId: notificationId }): Promise<Notification[]> {
    return this.notifications.find(notification => notification.id === notificationId);
  }

  async findUserById({ userId: userId }): Promise<User[]> {
    return this.users.find(user => user.id === userId);
  }

}
