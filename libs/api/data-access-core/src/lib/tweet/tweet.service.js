import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
// FAKE DATA
// import {
//   users,
//   posts,
//   comments
// } from '@monorepo/graphql-playground/data-access-data';
let TweetService = class TweetService {
    // private readonly users: any[] = users;
    // private readonly posts: any[] = posts;
    // private readonly comments: any[] = comments;
    // QUERIES ========================================================
    getTweets() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tweets = yield admin
                .firestore()
                .collection('tweets')
                .get();
            return tweets.docs.map(tweet => tweet.data());
        });
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
    findUserById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const tweetAuthor = yield admin
                    .firestore()
                    .doc(`users/${id}`)
                    .get();
                return tweetAuthor.data();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
};
TweetService = tslib_1.__decorate([
    Injectable()
], TweetService);
export { TweetService };
//# sourceMappingURL=tweet.service.js.map