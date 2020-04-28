import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

// AUTO GENERATED TYPES
import { User, Tweet } from '@monorepo/api/data-access-models';

// FAKE DATA
// import {
//   users,
//   posts,
//   comments
// } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class TweetService {
  // private readonly users: any[] = users;
  // private readonly posts: any[] = posts;
  // private readonly comments: any[] = comments;

  // QUERIES ========================================================
  async getTweets() {
    const tweets = await admin
      .firestore()
      .collection('tweets')
      .get();
    return tweets.docs.map(tweet => tweet.data()) as Tweet[];
  }

  // async findAlUsers(): Promise<User[]> {
  //   return this.users;
  // }

  // MUTATIONS ========================================================
  // CREATE
  // async createNewUser(user: UserInput): Promise<User> {
  //   const { email, name, age } = user;
  //   const emailTaken = users.some(u => u.email === user.email);
  //   console.log('emailTaken =', emailTaken);
  //   if (emailTaken) {
  //     throw new Error('Email taken.');
  //   }
  //   const newUser: any = {
  //     id: uuidv4(),
  //     name,
  //     email,
  //     age
  //   };
  //   console.log('created new user: ', { ...user });
  //   this.users.push(newUser);
  //   return newUser;
  // }
  // DELETE
  // async deleteUser(id: string): Promise<any> {
  //   const userIndex = users.findIndex(user => user.id === id);
  //   if (userIndex === -1) {
  //     throw new Error('User not found.');
  //   }
  //   // DELETE USER
  //   const deletedUsers = users.splice(userIndex, 1);
  //   let userPosts;
  //   let userComments;
  //   // DELETE USER'S POSTS
  //   userPosts = posts.filter(post => {
  //     const match = post.author === id;
  //     if (match) {
  //       userComments = comments.filter(comment => comment.post !== post.id);
  //     }
  //     return !match;
  //   });
  //   userComments = comments.filter(comment => comment.author !== id);
  //   return deletedUsers[0];
  // }
  // RELATIONSHIPS [ONE-TO-MANY] ======================================
  async findUserById(id) {
    try {
      const tweetAuthor = await admin
        .firestore()
        .doc(`users/${id}`)
        .get();
      return tweetAuthor.data() as User;
    } catch (error) {
      throw new Error(error);
    }
  }
  // async filterCommentsByUserId({ id }): Promise<Comment[]> {
  //   return this.comments.filter(comment => comment.author === id);
  // }
}
