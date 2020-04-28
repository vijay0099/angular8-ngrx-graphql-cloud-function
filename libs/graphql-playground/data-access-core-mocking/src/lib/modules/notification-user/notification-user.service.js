import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { notificationUsers, notifications, users } from '@monorepo/graphql-playground/data-access-data';
let NotificationUserService = class NotificationUserService {
    constructor() {
        this.notificationUsers = notificationUsers;
        this.notifications = notifications;
        this.users = users;
    }
    // QUERIES ========================================================
    findNotificationUserById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUsers.find(notification => notification.id === id);
        });
    }
    findAllNotificationUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUsers;
        });
    }
    // MUTATIONS ========================================================
    createNotificationUser(notificationUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('create new, passing data = ', notificationUser);
            const newNotificationUser = Object.assign({ id: uuidv4() }, notificationUser);
            console.log('created new notification user: ', Object.assign({}, newNotificationUser));
            this.notificationUsers.push(newNotificationUser);
            return newNotificationUser;
        });
    }
    // DELETE
    deleteNotificationUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = this.notificationUsers.findIndex(notificationUser => notificationUser.id === id);
            if (index === -1) {
                throw new Error('User not found.');
            }
            const deletedNotificationUser = this.notificationUsers.splice(index, 1);
            return deletedNotificationUser[0];
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    findNotificationById({ notificationId: notificationId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notifications.find(notification => notification.id === notificationId);
        });
    }
    findUserById({ userId: userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === userId);
        });
    }
};
NotificationUserService = tslib_1.__decorate([
    Injectable()
], NotificationUserService);
export { NotificationUserService };
//# sourceMappingURL=notification-user.service.js.map