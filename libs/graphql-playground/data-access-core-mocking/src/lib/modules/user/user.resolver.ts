// author.resolver.ts

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
  UserInput,
  AdminInput,
  StaffInput,
  NotificationUser
  // Post,
  // PostInput
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('User')
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
    return this.userService.findUserById(id);
  }

  @Query()
  async getUsers(): Promise<User[]> {
    return this.userService.findUsers();
  }

  // MUTATIONS ========================================================

  // CREATE
  @Mutation()
  async createAdmin(@Args('data') data: AdminInput): Promise<User> {
    return this.userService.createNewAdmin(data);
  }

  @Mutation()
  async createStaff(@Args('data') data: StaffInput): Promise<User> {
    return this.userService.createNewStaff(data);
  }

  @Mutation()
  async createUser(@Args('data') data: UserInput): Promise<User> {
    return this.userService.createNewUser(data);
  }

  // @Mutation()
  // async deleteUser(@Args('id') id): Promise<User> {
  //   return this.userService.deleteUser(id);
  // }

  // // RELATIONSHIPS [ONE-TO-MANY] ======================================

  @ResolveField('notifications')
  async getUserNotifications(@Parent() { id }): Promise<NotificationUser[]> {
    return this.userService.filterNotificationUserByUserId({ id });
  }

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
