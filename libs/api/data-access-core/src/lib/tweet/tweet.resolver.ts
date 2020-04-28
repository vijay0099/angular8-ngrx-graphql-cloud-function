import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { TweetService } from './tweet.service';

// AUTO GENERATED TYPES
import { Tweet } from '@monorepo/api/data-access-models';

@Resolver('Tweet')
export class TweetResolver {
  constructor(private readonly tweetService: TweetService) {}

  // QUERIES ==========================================================

  @Query('tweets')
  async getTweets() {
    return this.tweetService.getTweets();
  }

  // @Query('users')
  // async getUsers(): Promise<User[]> {
  //   return this.tweetService.findAlUsers();
  // }

  // MUTATIONS ========================================================

  // @Mutation('createUser')
  // async addNewUser(@Args('data') data: UserInput): Promise<User> {
  //   return this.tweetService.createNewUser(data);
  // }

  // @Mutation()
  // async deleteUser(@Args('id') id): Promise<User> {
  //   return this.tweetService.deleteUser(id);
  // }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // // Tweet.userId > User.id
  // @ResolveField('user')
  // async user(@Parent() { id }) {
  //   console.log('parent id = ', id);

  //   return this.tweetService.getTweetAuthor(id);
  // }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  // Tweet.author > User.id
  @ResolveField()
  async author(@Parent() user) {
    console.log('user = ', user);
    return this.tweetService.findUserById(user);
  }

  // // User.comments > Comment.id
  // @ResolveField('comments')
  // async getUserComments(@Parent() { id }): Promise<Comment[]> {
  //   return this.tweetService.filterCommentsByUserId({ id });
  // }
}
