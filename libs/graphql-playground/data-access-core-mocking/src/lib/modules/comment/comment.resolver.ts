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
  Post,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // QUERIES ==========================================================

  @Query()
  async getCommentById(@Args('id') id: string): Promise<Comment> {
    console.log('comment(), @Args', id);
    return this.commentService.findCommentById(id);
  }

  @Query()
  async getAllComments(): Promise<Comment[]> {
    return this.commentService.findAllComments();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createComment(@Args('data') data): Promise<Comment> {
    return this.commentService.createComment(data);
  }

  @Mutation()
  async deleteComment(@Args('id') id): Promise<Comment> {
    return this.commentService.deleteComment(id);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // Comment.postId > Post.id
  @ResolveField('post')
  async getPost(@Parent() { postId }): Promise<Post[]> {
    return this.commentService.findPost({ postId });
  }

  // Comment.userId > User.id
  @ResolveField('user')
  async getUser(@Parent() { userId }): Promise<User[]> {
    return this.commentService.findUser({ userId });
  }
}
