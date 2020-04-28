import {
  Args,
  Query,
  Resolver,
  ResolveProperty,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { UserService } from './user.service';

// AUTO GENERATED TYPES
import { User } from '@monorepo/api/data-access-models';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // QUERIES ==========================================================

  @Query('user')
  async getUser(@Args('id') id: string) {
    console.log('Hello frm getUser(@Args("id")');

    return this.userService.findUserById(id);
  }

  @Query('getUsers')
  async getUsers(): Promise<User[]> {
    return this.userService.findAlUsers();
  }

  // @Query('users')
  // async getUsers(): Promise<User[]> {
  //   return this.userService.findAlUsers();
  // }

  // MUTATIONS ========================================================

  // @Mutation('createUser')
  // async addNewUser(@Args('data') data: UserInput): Promise<User> {
  //   return this.userService.createNewUser(data);
  // }

  // @Mutation()
  // async deleteUser(@Args('id') id): Promise<User> {
  //   return this.userService.deleteUser(id);
  // }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // Tweets.id > User.id
  // @ResolveField('tweets')
  // async getUserTweets(@Parent() { id }) {
  //   return this.userService.filterTweetsByUserId({ id });
  // }

  // // User.comments > Comment.id
  // @ResolveField('comments')
  // async getUserComments(@Parent() { id }): Promise<Comment[]> {
  //   return this.userService.filterCommentsByUserId({ id });
  // }
}
