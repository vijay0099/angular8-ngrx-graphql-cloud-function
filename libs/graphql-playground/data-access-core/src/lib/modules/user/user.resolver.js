import * as tslib_1 from "tslib";
const colors = require('colors');
colors.enable();
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
// SERVICES
import { UserService } from './user.service';
// AUTO GENERATED TYPES
import { UserInput, UserValidateInput } from '@monorepo/graphql-playground/data-access-models';
let UserResolver = 
// @UseInterceptors(LoggingInterceptor) // APPLY INTERCEPTOR ON THE RESOLVER LEVEL
class UserResolver {
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
    // @Query()
    // async getUser(@Args('id') id: string): Promise<User> {
    //   return this.userService.findUserById(id);
    // }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findUsers();
        });
    }
    // @Query()
    // async userLogin(@Args('query') data: UserLoginInput): Promise<User> {
    //   return this.userService.userLogin(data);
    // }
    validateUser(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.validateUser(data);
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    // @Mutation()
    // async createAdmin(@Args('data') data: AdminInput): Promise<User> {
    //   return this.userService.createNewAdmin(data);
    // }
    // @Mutation()
    // async createStaff(@Args('data') data: StaffInput): Promise<User> {
    //   return this.userService.createNewStaff(data);
    // }
    createUser(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.createUser(data);
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserValidateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "validateUser", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = tslib_1.__decorate([
    Resolver('User')
    // @UseInterceptors(LoggingInterceptor) // APPLY INTERCEPTOR ON THE RESOLVER LEVEL
    ,
    tslib_1.__metadata("design:paramtypes", [UserService])
], UserResolver);
export { UserResolver };
// https://graphql.org/learn/schema/#interfaces
// https://graphqlmastery.com/blog/graphql-interfaces-and-unions-how-to-design-graphql-schema
// https://docs.nestjs.com/graphql/interfaces
// @Resolver('Node')
// export class NodeResolver {
//   @ResolveField()
//   __resolveType(value) {
//     if ('age' in value) {
//       return Person;
//     }
//     return null;
//   }
// }
//# sourceMappingURL=user.resolver.js.map