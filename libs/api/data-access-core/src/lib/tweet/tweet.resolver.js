import * as tslib_1 from "tslib";
import { Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
// SERVICES
import { TweetService } from './tweet.service';
let TweetResolver = class TweetResolver {
    constructor(tweetService) {
        this.tweetService = tweetService;
    }
    // QUERIES ==========================================================
    getTweets() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.tweetService.getTweets();
        });
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
    author(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('user = ', user);
            return this.tweetService.findUserById(user);
        });
    }
};
tslib_1.__decorate([
    Query('tweets'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TweetResolver.prototype, "getTweets", null);
tslib_1.__decorate([
    ResolveField(),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TweetResolver.prototype, "author", null);
TweetResolver = tslib_1.__decorate([
    Resolver('Tweet'),
    tslib_1.__metadata("design:paramtypes", [TweetService])
], TweetResolver);
export { TweetResolver };
//# sourceMappingURL=tweet.resolver.js.map