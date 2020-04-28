import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { notifications, notificationUsers, users } from '@monorepo/graphql-playground/data-access-data';
let NotificationService = class NotificationService {
    constructor() {
        this.notifications = notifications;
        this.notificationUsers = notificationUsers;
        this.users = users;
    }
    // QUERIES ========================================================
    findNotificationById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notifications.find(notification => notification.id === id);
        });
    }
    findAllNotifications() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notifications;
        });
    }
    // MUTATIONS ========================================================
    createNotification(notification) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('create new, passing data = ', notification);
            const newNotification = Object.assign({ id: uuidv4() }, notification);
            console.log('created new notification: ', Object.assign({}, newNotification));
            this.notifications.push(newNotification);
            return newNotification;
        });
    }
    // DELETE
    deleteNotification(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = this.notifications.findIndex(notification => notification.id === id);
            if (index === -1) {
                throw new Error('User not found.');
            }
            const deletedNotification = this.notifications.splice(index, 1);
            return deletedNotification[0];
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    filterUsersByNotificationId({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('filterUsersByNotificationId', id);
            return this.notificationUsers.filter(user => {
                const result = user.notificationId === id;
                console.log('result =', result);
                return result;
            });
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === createdBy);
        });
    }
};
NotificationService = tslib_1.__decorate([
    Injectable()
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map