import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';

const colors = require('colors');
colors.enable();

// AUTO GENERATED TYPES
import {
  NotificationUser,
  NotificationUserInput,
  NotificationUserUpdateInput,
  Notification,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Injectable()
export class NotificationUserService {

  // QUERIES ========================================================

  async findNotificationUserById(id: string): Promise<NotificationUser> {
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
        .collection('notification_users')
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
      return foundData as NotificationUser | undefined;
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

  async findAllNotificationUsers(): Promise<NotificationUser[]> {
    // LOGGING
    console.log(colors.brightMagenta('getPosts()'));
    try {
      // ARRAY TO HOLD TRANSFORMED DATA
      const docsData = [];
      // GET DOCUMENT REFERENCE
      const docsRef = await admin
        .firestore()
        .collection('notification_users')
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
      return docsData as NotificationUser[] | undefined;
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

  // MUTATIONS ========================================================

  async createNotificationUser(notificationUser: NotificationUserInput): Promise<NotificationUser> {
    try {
      const newDoc: any = {
        ...notificationUser
      };
      const docRef = await admin
        .firestore()
        .collection('notification_users')
        .add(newDoc);
        console.log(docRef.id);
       
      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newDoc.id = docRef.id;
      console.log('newDoc', newDoc);
      return newDoc as NotificationUser | undefined;
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

  async updateNotificationUser(data: NotificationUserUpdateInput): Promise<NotificationUser> {
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
      const docQuery = admin
        .firestore()
        .collection('notification_users')
        .doc(id);

      // GET DOCUMENT REFERENCE
      const docRef = docQuery.get();

      // ERROR HANDLING
      if (!(await docRef).exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const updatedDoc = {
        ...data
      };

      console.log('newPost ===', updatedDoc);

      // UPDATE DOCUMENT
      await docQuery.update(updatedDoc);

      const docData: any = {
        id: id,
        ...data
      };

      // LOGGING DATA
      console.log(colors.brightMagenta(docData));
      return docData as NotificationUser | undefined;
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

  // DELETE
  async deleteNotificationUser(id: string): Promise<NotificationUser> {
    try {
      // LOGGING
      console.log(colors.brightMagenta('Reading from Firestore'));

      // ERROR HANDLING
      if (!id || id === '') {
        throw new Error('Error. Document id must be non-empty string.');
      }
      // GET DOCUMENT REFERENCE
      const docQuery = admin
        .firestore()
        .collection('notification_users')
        .doc(id);

        const doc = await docQuery.get();

      // ERROR HANDLING
      if (!doc.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = doc.id as String;
      console.log('docQuery.data()', doc.data());
      // EXTRACT DATA
      const docData = doc.data();

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const deletedDoc = {
        id: docId,
        ...docData
      };

      // REMOVE CHILD FROM DATABASE
      await docQuery.delete();
      // LOGGING
      console.log(colors.brightMagenta(deletedDoc));
      // RETURN TRANSFORMED DATA
      return deletedDoc as NotificationUser | undefined;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Error. Could not remove the Need.'
        },
        HttpStatus.FORBIDDEN
      );
    }
  } 

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async findNotificationById({ notificationId: notificationId }): Promise<Notification> {
    console.log(notificationId);
    try {
      const docRef = await admin
        .firestore()
        .collection('notifications')
        .doc(notificationId)
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

      // LOGGING
      console.log(colors.brightMagenta('doc:::', doc));

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundDoc = {
        id: docId,
        ...doc
      };

      return foundDoc as Notification | undefined;
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

  async findUserById({ userId: userId }): Promise<User> {
    console.log(userId);
    try {
      const userRef = await admin
        .firestore()
        .collection('users')
        .doc(userId)
        .get();

      // ERROR HANDLING
      if (!userRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = userRef.id as String | undefined;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const user = userRef.data();

      // ERROR HANDLING
      if (!user) {
        throw new Error('Error. Document is undefined.');
      }

      // LOGGING
      console.log(colors.brightMagenta('user:::', user));

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundDoc = {
        id: docId,
        ...user
      };

      return foundDoc as User | undefined;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Error. Could not remove the child.'
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  async createdBy({ createdBy: createdBy }): Promise<User> {
    console.log(createdBy);
    try {
      const userRef = await admin
        .firestore()
        .collection('users')
        .doc(createdBy)
        .get();

      // ERROR HANDLING
      if (!userRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = userRef.id as String | undefined;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const user = userRef.data();

      // ERROR HANDLING
      if (!user) {
        throw new Error('Error. Document is undefined.');
      }

      // LOGGING
      console.log(colors.brightMagenta('user:::', user));

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundDoc = {
        id: docId,
        ...user
      };

      return foundDoc as User | undefined;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Error. Could not remove the child.'
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

}
