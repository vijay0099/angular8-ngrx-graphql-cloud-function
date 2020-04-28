import * as tslib_1 from "tslib";
import { Args, Query, Resolver } from '@nestjs/graphql';
// SERVICES
import { UserService } from './user.service';
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    // QUERIES ==========================================================
    getUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Hello frm getUser(@Args("id")');
            return this.userService.findUserById(id);
        });
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findAlUsers();
        });
    }
};
tslib_1.__decorate([
    Query('user'),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
tslib_1.__decorate([
    Query('getUsers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
UserResolver = tslib_1.__decorate([
    Resolver('User'),
    tslib_1.__metadata("design:paramtypes", [UserService])
], UserResolver);
export { UserResolver };
//# sourceMappingURL=user.resolver.js.map