import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Notification,
  NotificationInput,
  NotificationUser,
  User
} from '@monorepo/graphql-playground/data-access-models';

import {
  notifications,
  notificationUsers,
  users
} from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class NotificationService {
  private readonly notifications: any[] = notifications;
  private readonly notificationUsers: any[] = notificationUsers;
  private readonly users: any[] = users;

  // QUERIES ========================================================

  async findNotificationById(id: string): Promise<Notification> {
    return this.notifications.find(notification => notification.id === id);
  }

  async findAllNotifications(): Promise<Notification[]> {
    return this.notifications;
  }

  // MUTATIONS ========================================================

  async createNotification(
    notification: NotificationInput
  ): Promise<Notification> {
    console.log('create new, passing data = ', notification);

    const newNotification: any = {
      id: uuidv4(),
      ...notification
    };

    console.log('created new notification: ', { ...newNotification });

    this.notifications.push(newNotification);
    return newNotification;
  }

  // DELETE
  async deleteNotification(id: string): Promise<any> {
    const index = this.notifications.findIndex(
      notification => notification.id === id
    );
    if (index === -1) {
      throw new Error('User not found.');
    }
    const deletedNotification = this.notifications.splice(index, 1);
    return deletedNotification[0];
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  async filterUsersByNotificationId({ id }): Promise<NotificationUser[]> {
    console.log('filterUsersByNotificationId', id);
    return this.notificationUsers.filter(user => {
      const result = user.notificationId === id;
      console.log('result =', result);
      return result;
    });
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async createdBy({ createdBy }): Promise<User[]> {
    return this.users.find(user => user.id === createdBy);
  }
}
