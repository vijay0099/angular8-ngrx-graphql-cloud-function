import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

// AUTO GENERATED TYPES
import { User, Tweet } from '@monorepo/api/data-access-models';

@Injectable()
export class UserService {
  // private readonly users: any[] = users;
  // private readonly posts: any[] = posts;
  // private readonly comments: any[] = comments;

  // QUERIES ========================================================
  async findUserById(id: string) {
    console.log('We are in findUserById(id: string)');
    try {
      const userDoc = await admin
        .firestore()
        .doc(`users/${id}`)
        .get();
      const user = userDoc.data() as User | undefined;

      console.log('user from firestore', user);

      return user || new Error('User ID not found');
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAlUsers(): Promise<User[]> {
    console.log('We are in findUserById(id: string)');
    try {
      const users = await admin
        .firestore()
        .collection('users')
        .get();
      const result = users.docs.map(user => user.data()) as User[];
      console.log('result =', result);
      return result;
    } catch (error) {
      throw new Error(error);
    }

    // try {
    //   const userDoc = await admin
    //     .firestore()
    //     .collection('users')
    //     .doc()
    //     .get();
    //   const user = userDoc.data() as User | undefined;

    //   console.log('user from firestore', user);

    //   return user || new Error('User ID not found');
    // } catch (error) {
    //   throw new Error(error);
    // }
  }

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
  // async filterPostsByUserId({ id }): Promise<Post[]> {
  //   return this.posts.filter(post => post.author === id);
  // }

  async filterTweetsByUserId({ id }) {
    console.log('We are in findUserById(id: string)');
    try {
      const userTweets = await admin
        .firestore()
        .collection('tweets')
        .where('userId', '==', id)
        .get();
      return userTweets.docs.map(tweet => tweet.data()) as Tweet[];
    } catch (error) {
      throw new Error(error);
    }
  }
}
