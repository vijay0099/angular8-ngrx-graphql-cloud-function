// author.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { UserService } from './user.service';
// AUTO GENERATED TYPES
import { UserInput, AdminInput, StaffInput } from '@monorepo/graphql-playground/data-access-models';
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    // QUERIES ==========================================================
    // @Query()
    // async userPublicProfile(@Args('id') id: string): Promise<User> {
    //   return this.userService.findPublicUserById(id);
    // }
    // @Query()
    // async usersPublicProfile(): Promise<User[]> {
    //   return this.userService.findUsersPublicProfile();
    // }
    getUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findUserById(id);
        });
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findUsers();
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createAdmin(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.createNewAdmin(data);
        });
    }
    createStaff(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.createNewStaff(data);
        });
    }
    createUser(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.createNewUser(data);
        });
    }
    // @Mutation()
    // async deleteUser(@Args('id') id): Promise<User> {
    //   return this.userService.deleteUser(id);
    // }
    // // RELATIONSHIPS [ONE-TO-MANY] ======================================
    getUserNotifications({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.filterNotificationUserByUserId({ id });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AdminInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "createAdmin", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StaffInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "createStaff", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
tslib_1.__decorate([
    ResolveField('notifications'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserNotifications", null);
UserResolver = tslib_1.__decorate([
    Resolver('User'),
    tslib_1.__metadata("design:paramtypes", [UserService])
], UserResolver);
export { UserResolver };
//# sourceMappingURL=user.resolver.js.map