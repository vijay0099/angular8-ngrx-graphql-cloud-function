import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { CommentService } from './comment.service';

// AUTO GENERATED TYPES
import {
  Comment,
  CommentInput,
  CommentUpdateInput,
  CommentFindInput,
  CommentDeleteInput,
  Post,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // QUERIES ==========================================================

  @Query()
  async getComment(@Args('query') query: CommentFindInput): Promise<Comment> {
    console.log('comment(), @Args', query);
    return this.commentService.findCommentById(query);
  }

  @Query()
  async getComments(): Promise<Comment[]> {
    return this.commentService.findAllComments();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createComment(@Args('data') data: CommentInput): Promise<Comment> {
    return this.commentService.createComment(data);
  }

  @Mutation()
  async updateComment(
    @Args('data') data: CommentUpdateInput
  ): Promise<Comment> {
    return this.commentService.updateComment(data);
  }

  @Mutation()
  async deleteCommentDoc(
    @Args('data') data: CommentDeleteInput
  ): Promise<Comment> {
    return this.commentService.deleteComment(data);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // Comment.postId > Post.id
  @ResolveField('post')
  async getPost(@Parent() { postId }): Promise<Post> {
    return this.commentService.findPost({ postId });
  }

  // Comment.userId > User.id
  @ResolveField('user')
  async getUser(@Parent() { userId }): Promise<User> {
    return this.commentService.findUser({ userId });
  }
}
