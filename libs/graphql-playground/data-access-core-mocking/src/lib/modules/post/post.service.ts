import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Post,
  PostInput,
  Comment
} from '@monorepo/graphql-playground/data-access-models';

import { posts, comments } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class PostService {
  private readonly posts: any[] = posts;
  private readonly comments: any[] = comments;
  // QUERIES ========================================================

  async findPostById(id: string): Promise<Post> {
    return this.posts.find(post => post.id === id);
  }

  async findAllPosts(): Promise<Post[]> {
    return this.posts;
  }

  // MUTATIONS ========================================================

  async createPost(post: PostInput): Promise<Post> {
    // const { name, gender, dob } = children;

    console.log('create new, passing data = ', post);

    const newPost: any = {
      id: uuidv4(),
      ...post
    };

    console.log('created new post: ', { ...newPost });

    this.posts.push(newPost);
    return newPost;
  }

  // DELETE
  async deletePost(id: string): Promise<any> {
    const index = this.posts.findIndex(post => post.id === id);

    if (index === -1) {
      throw new Error('Post not found.');
    }

    // DELETE CHILD
    const deletedPost = this.posts.splice(index, 1);

    let postComments;
    // DELETE POST COMMENTS
    postComments = this.comments.filter(comment => {
      const match = comment.postId === id;
      return !match;
    });

    return deletedPost[0];
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  async filterCommentsByPostId({ id }): Promise<Comment[]> {
    return this.comments.filter(comment => comment.postId === id);
  }
}
