import * as tslib_1 from "tslib";
import { Args, Query, Resolver, Mutation, ResolveField, Parent } from '@nestjs/graphql';
// SERVICES
import { NotificationService } from './notification.service';
let NotificationResolver = class NotificationResolver {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    // QUERIES ==========================================================
    getNotificationById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('notification(), @Args', id);
            return this.notificationService.findNotificationById(id);
        });
    }
    getAllNotifications() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationService.findAllNotifications();
        });
    }
    // MUTATIONS ========================================================
    createNotification(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationService.createNotification(data);
        });
    }
    deleteNotification(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationService.deleteNotification(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    getNotificationUsers({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationService.filterUsersByNotificationId({ id });
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    getNotificationCreatedBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationResolver.prototype, "getNotificationById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationResolver.prototype, "getAllNotifications", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationResolver.prototype, "createNotification", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationResolver.prototype, "deleteNotification", null);
tslib_1.__decorate([
    ResolveField('users'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationResolver.prototype, "getNotificationUsers", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationResolver.prototype, "getNotificationCreatedBy", null);
NotificationResolver = tslib_1.__decorate([
    Resolver('Notification'),
    tslib_1.__metadata("design:paramtypes", [NotificationService])
], NotificationResolver);
export { NotificationResolver };
//# sourceMappingURL=notification.resolver.js.map