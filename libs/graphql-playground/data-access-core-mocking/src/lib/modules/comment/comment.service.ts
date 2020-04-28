import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Comment,
  CommentInput,
  Post,
  User
} from '@monorepo/graphql-playground/data-access-models';

import { comments, posts, users } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class CommentService {
  private readonly comments: any[] = comments;
  private readonly posts: any[] = posts;
  private readonly users: any[] = users;

  // QUERIES ========================================================

  async findCommentById(id: string): Promise<Comment> {
    return this.comments.find(post => post.id === id);
  }

  async findAllComments(): Promise<Comment[]> {
    return this.comments;
  }

  // MUTATIONS ========================================================

  async createComment(comment: CommentInput): Promise<Comment> {
    console.log('create new, passing data = ', comment);
    const newComment: any = {
      id: uuidv4(),
      ...comment
    };
    console.log('created new user: ', { ...newComment });
    this.comments.push(newComment);
    return newComment;
  }

  // DELETE
  async deleteComment(id: string): Promise<any> {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index === -1) {
      throw new Error('User not found.');
    }
    const deletedComment = this.comments.splice(index, 1);
    return deletedComment[0];
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  async findPost({ postId: postId }): Promise<Post[]> {
    return this.posts.find(post => post.id === postId);
  }

  async findUser({ userId: userId }): Promise<User[]> {
    return this.users.find(user => user.id === userId);
  }

}
