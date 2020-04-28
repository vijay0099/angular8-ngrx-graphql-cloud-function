import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { PostService } from './post.service';

// AUTO GENERATED TYPES
import {
  Post,
  PostInput,
  PostUpdateInput,
  Comment,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // QUERIES ==========================================================

  @Query()
  async getPostById(@Args('id') id: string): Promise<Post> {
    return this.postService.findPostById(id);
  }

  @Query()
  async getAllPosts(): Promise<Post[]> {
    return this.postService.findAllPosts();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createPost(@Args('data') data: PostInput): Promise<Post> {
    return this.postService.createPost(data);
  }

  @Mutation()
  async updatePost(@Args('data') data: PostUpdateInput): Promise<Post> {
    return this.postService.updatePost(data);
  }

  @Mutation()
  async deletePost(@Args('id') id): Promise<Post> {
    return this.postService.deletePost(id);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // Post.comments > Post.id
  @ResolveField('comments')
  async getChildComments(@Parent() { id }): Promise<Comment[]> {
    return this.postService.filterCommentsByPostId({ id });
  }

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.postService.createdBy({ createdBy });
  }
}
