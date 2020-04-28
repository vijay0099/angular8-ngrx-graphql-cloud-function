const colors = require('colors');
colors.enable();

// NESTJS
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthenticationError } from 'apollo-server-express';

// FIRESTORE ADMIN SDK
import * as admin from 'firebase-admin';

// FIRESTORE CLIENT SDK
import * as client from 'firebase';

// FIELD VALUE EXAMPLE
// const FieldValue = admin.firestore.FieldValue

// HASHING
const bcrypt = require('bcrypt');
const saltRounds = 10;

// AUTO GENERATED TYPES
import {
  User,
  UserFilterInput,
  UserValidateInput,
  UserValidateOutput,
  UserLoginInput,
  UserInput,
  UserUpdateInput,
  AdminInput,
  StaffInput,
  NotificationUser
} from '@monorepo/graphql-playground/data-access-models';

@Injectable()
export class UserService {
  // QUERIES ========================================================

  async validateUser(data: UserValidateInput): Promise<UserValidateOutput> {
    try {
      const { username, id } = data;

      const usernameRef = await client
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
      console.log('usernameRef', usernameRef);

      if (!usernameRef.empty) {
        // throw new ApolloError('Username already exist.');
        throw new AuthenticationError('Username already exist.');
        // return { status: true };
      } else {
        return { status: false };
      }
    } catch (err) {
      console.log('validateUser() errorsss =', err);

      const newErr = {
        error: {
          code: 400,
          message: 'EMAIL_NOT_FOUND',
          errors: [
            {
              message: 'EMAIL_NOT_FOUND',
              domain: 'global',
              reason: 'invalid'
            }
          ]
        }
      };
      // LOGGING ERROR
      console.log(colors.brightRed(err.message));
      throw new AuthenticationError(err.message);
      // throw new HttpException(
      //   {
      //     status: HttpStatus.FORBIDDEN,
      //     error: err.message
      //   },
      //   HttpStatus.FORBIDDEN
      // );
    }
  }

  async getUser(id: string): Promise<User> {
    // LOGGING
    console.log(colors.brightMagenta('Reading from Firestore'));
    try {
      // ERROR HANDLING
      if (!id || id === '') {
        throw new Error('Error. Document id must be non-empty string.');
      }

      // GET DOCUMENT REFERENCE
      const docRef = await admin
        .firestore()
        .collection('users')
        .doc(id)
        .get();

      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = docRef.id as String | undefined;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const doc = docRef.data();

      // ERROR HANDLING
      if (!doc) {
        throw new Error('Error. Document is undefined.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundData = {
        id: docId,
        ...doc
      };

      // LOGGING DATA
      console.log(colors.brightMagenta(foundData));

      // RETURN TRANSFORMED DATA
      return foundData as User | undefined;
    } catch (error) {
      // LOGGING ERROR
      console.log(colors.brightRed(error.message));

      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  async findUsers(query: UserFilterInput): Promise<User[]> {
    // LOGGING
    console.log(colors.brightMagenta('getUsers()'));
    try {
      // ARRAY TO HOLD TRANSFORMED DATA
      const docsData = [];
      // GET DOCUMENT REFERENCE
      const docsRef = await admin
        .firestore()
        .collection('users')
        .get();
      console.log(colors.brightMagenta(docsRef.empty));
      // ERROR HANDLING
      if (docsRef.empty) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      // LOGGING
      console.log(colors.brightMagenta('Reading from Firestore'));
      docsRef.forEach(doc => {
        docsData.push({
          id: doc.id,
          createdAt: doc.createTime,
          ...doc.data()
        });
      });

      // LOGGING
      console.log(colors.brightMagenta(docsData));
      // RETURN TRANSFORMED DATA
      return docsData as User[] | undefined;
    } catch (error) {
      // LOGGING ERROR
      console.log(colors.brightRed(error.message));
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  // async findPrivateUserById(id: string): Promise<UserPrivate> {
  //   return this.users.find(user => user.id === id);
  // }

  // async findUsersPrivateProfile(): Promise<UserPrivate[]> {
  //   return this.usersPrivate;
  // }

  // MUTATIONS ========================================================

  // // CREATE
  // async createNewAdmin(user: AdminInput): Promise<User> {
  //   const { email } = user;
  //   const emailTaken = users.some(u => u.email === email);
  //   if (emailTaken) {
  //     throw new Error('Email taken.');
  //   }
  //   const newUser: any = {
  //     id: uuidv4(),
  //     ...user
  //   };
  //   console.log('New admin created: ', { ...user });
  //   this.users.push(newUser);
  //   return newUser;
  // }

  // async createNewStaff(user: StaffInput): Promise<User> {
  //   const { email } = user;
  //   const emailTaken = users.some(u => u.email === email);
  //   if (emailTaken) {
  //     throw new Error('Email taken.');
  //   }
  //   const newUser: any = {
  //     id: uuidv4(),
  //     ...user
  //   };
  //   console.log('New staff created: ', { ...user });

  //   this.users.push(newUser);
  //   return newUser;
  // }

  // CREATE USER
  async createUser(user: UserInput): Promise<User> {
    try {
      const { id } = user;
      const newDoc: any = {
        ...user
      };
      delete newDoc.id;
      await admin
        .firestore()
        .collection('users')
        .doc(id)
        .set(newDoc);
      newDoc.id = id;
      console.log('newDoc', newDoc);
      return newDoc as User | undefined;
    } catch (error) {
      // LOGGING ERROR
      console.log(colors.brightRed(error.message));
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  // UPDATE
  async updateUser(data: UserUpdateInput): Promise<User> {
    // TODO: FINISH THIS
    try {
      // GET DATA ID
      const { id } = data;

      // DELETE FIELD
      delete data.id;

      // ERROR HANDLING
      if (!id || id === '') {
        throw new Error('Error. Document id must be non-empty string.');
      }
      // GET DOCUMENT REFERENCE
      const docRef = admin
        .firestore()
        .collection('users')
        .doc(id);

      // GET DOCUMENT REFERENCE
      const doc = docRef.get();

      // ERROR HANDLING
      if (!(await doc).exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const updatedDoc = {
        ...data
      };

      console.log('newDoc ===', updatedDoc);

      // UPDATE DOCUMENT
      await docRef.update(updatedDoc);

      const docData: any = {
        id: docRef.id,
        ...(await doc).data()
      };

      // LOGGING DATA
      console.log('Doc Data', colors.brightMagenta(docData));
      return docData as User | undefined;
    } catch (error) {
      // LOGGING ERROR
      console.log(colors.brightRed(error.message));

      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  // UPDATE AUTH USER
  // async updateAuth(uid): Promise<User>{

  //   admin.auth().updateUser(uid, {
  //     email: 'modifiedUser@example.com',
  //     phoneNumber: '+11234567890',
  //     emailVerified: true,
  //     password: 'newPassword',
  //     displayName: 'Jane Doe',
  //     photoURL: 'http://www.example.com/12345678/photo.png',
  //     disabled: true
  //   })
  //     .then(function(userRecord) {
  //       // See the UserRecord reference doc for the contents of userRecord.
  //       console.log('Successfully updated user', userRecord.toJSON());
  //     })
  //     .catch(function(error) {
  //       console.log('Error updating user:', error);
  //     });
    
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

  // async filterNotificationUserByUserId({ id }): Promise<NotificationUser[]> {
  //   return this.notificationUsers.filter(
  //     notificationUser => notificationUser.userId === id
  //   );
  // }

  // async filterPostsByUserId({ id }): Promise<Post[]> {
  //   return this.posts.filter(post => post.author === id);
  // }

  // async filterCommentsByUserId({ id }): Promise<Comment[]> {
  //   return this.comments.filter(comment => comment.author === id);
  // }
}
