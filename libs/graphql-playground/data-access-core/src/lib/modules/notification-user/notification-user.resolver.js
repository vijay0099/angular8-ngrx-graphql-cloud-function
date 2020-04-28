import * as tslib_1 from "tslib";
import { Args, Query, Resolver, Mutation, ResolveField, Parent } from '@nestjs/graphql';
// SERVICES
import { NotificationUserService } from './notification-user.service';
// AUTO GENERATED TYPES
import { NotificationUserInput, NotificationUserUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let NotificationUserResolver = class NotificationUserResolver {
    constructor(notificationUserService) {
        this.notificationUserService = notificationUserService;
    }
    // QUERIES ==========================================================
    getNotificationUserById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('notification user(), @Args', id);
            return this.notificationUserService.findNotificationUserById(id);
        });
    }
    getNotificationUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.findAllNotificationUsers();
        });
    }
    // MUTATIONS ========================================================
    createNotificationUser(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.createNotificationUser(data);
        });
    }
    updateNotificationUser(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.updateNotificationUser(data);
        });
    }
    deleteNotificationUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.deleteNotificationUser(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    getNotification({ notificationId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.findNotificationById({
                notificationId
            });
        });
    }
    getUser({ userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.findUserById({ userId });
        });
    }
    getNotificationCreatedBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUserService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "getNotificationUserById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "getNotificationUsers", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [NotificationUserInput]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "createNotificationUser", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [NotificationUserUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "updateNotificationUser", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "deleteNotificationUser", null);
tslib_1.__decorate([
    ResolveField('notification'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "getNotification", null);
tslib_1.__decorate([
    ResolveField('user'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "getUser", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationUserResolver.prototype, "getNotificationCreatedBy", null);
NotificationUserResolver = tslib_1.__decorate([
    Resolver('NotificationUser'),
    tslib_1.__metadata("design:paramtypes", [NotificationUserService])
], NotificationUserResolver);
export { NotificationUserResolver };
//# sourceMappingURL=notification-user.resolver.js.map