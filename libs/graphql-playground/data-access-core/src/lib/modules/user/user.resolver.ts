const colors = require('colors');
colors.enable();

import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { UserService } from './user.service';

// AUTO GENERATED TYPES
import {
  User,
  UserFilterInput,
  UserInput,
  UserUpdateInput,
  AdminInput,
  StaffInput,
  UserValidateInput,
  UserValidateOutput,
  UserLoginInput,
  NotificationUser
} from '@monorepo/graphql-playground/data-access-models';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '@monorepo/graphql-playground/util-helpers';

@Resolver('User')
// @UseInterceptors(LoggingInterceptor) // APPLY INTERCEPTOR ON THE RESOLVER LEVEL
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // QUERIES ==========================================================

  // @Query()
  // async userPublicProfile(@Args('id') id: string): Promise<User> {
  //   return this.userService.findPublicUserById(id);
  // }

  // @Query()
  // async usersPublicProfile(): Promise<User[]> {
  //   return this.userService.findUsersPublicProfile();
  // }

  @Query()
  async getUser(@Args('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Query()
  async getUsers(@Args('query') query: UserFilterInput): Promise<User[]> {
    console.log(query);
    return this.userService.findUsers(query);
  }

  // @Query()
  // async userLogin(@Args('query') data: UserLoginInput): Promise<User> {
  //   return this.userService.userLogin(data);
  // }

  @Query()
  async validateUser(
    @Args('query') data: UserValidateInput
  ): Promise<UserValidateOutput> {
    return this.userService.validateUser(data);
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

  @Mutation()
  async createUser(@Args('data') data: UserInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Mutation()
  async updateUser(@Args('data') data: UserUpdateInput): Promise<User> {
    return this.userService.updateUser(data);
  }

  // @Mutation()
  // async deleteUser(@Args('id') id): Promise<User> {
  //   return this.userService.deleteUser(id);
  // }

  // // RELATIONSHIPS [ONE-TO-MANY] ======================================
  // @ResolveField('notifications')
  // async getUserNotifications(@Parent() { id }): Promise<NotificationUser[]> {
  //   return this.userService.filterNotificationUserByUserId({ id });
  // }

  // // User.posts > User.id
  // @ResolveField('posts')
  // async getUserPosts(@Parent() { id }): Promise<Post[]> {
  //   return this.userService.filterPostsByUserId({ id });
  // }

  // // User.comments > Comment.id
  // @ResolveField('comments')
  // async getUserComments(@Parent() { id }): Promise<Comment[]> {
  //   return this.userService.filterCommentsByUserId({ id });
  // }
}

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
