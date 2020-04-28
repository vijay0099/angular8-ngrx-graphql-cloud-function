import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';

const colors = require('colors');
colors.enable();

// AUTO GENERATED TYPES
import {
  Notification,
  NotificationInput,
  NotificationUpdateInput,
  NotificationUser,
  User
} from '@monorepo/graphql-playground/data-access-models';

import {
  deleteCollection,
  deleteDocument
} from '@monorepo/graphql-playground/util-helpers';

@Injectable()
export class NotificationService {

  // QUERIES ========================================================

  async findNotificationById(id: string): Promise<Notification> {
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
        .collection('notifications')
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
      return foundData as Notification | undefined;
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

  async findAllNotifications(): Promise<Notification[]> {
    // LOGGING
    console.log(colors.brightMagenta('findAllNotifications()'));
    try {
      // ARRAY TO HOLD TRANSFORMED DATA
      const docsData = [];
      // GET DOCUMENT REFERENCE
      const docsRef = await admin
        .firestore()
        .collection('notifications')
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
      return docsData as Notification[] | undefined;
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

  async createNotification(notification: NotificationInput): Promise<Notification> {
    try {
      const newDoc: any = {
        ...notification
      };
      const docRef = await admin
        .firestore()
        .collection('notifications')
        .add(newDoc);
        console.log(docRef.id);
       
      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newDoc.id = docRef.id;
      console.log('newDoc', newDoc);
      return newDoc as Notification | undefined;
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

  async updateNotification(data: NotificationUpdateInput): Promise<Notification> {
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
        .collection('notifications')
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

      // LOGGING DATA
      console.log(colors.brightMagenta(updatedDoc));
      return updatedDoc as Notification | undefined;
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
  async deleteNotification(id: string): Promise<Notification> {
    // LOGGING
    console.log(colors.brightMagenta('Reading from Firestore'));
    try {
      // ERROR HANDLING
      if (!id || id === '') {
        throw new Error('Error. Document id must be non-empty string.');
      }

      // GET DOCUMENT REFERENCE
      const docQuery = admin
        .firestore()
        .collection('notifications')
        .doc(id);

      const doc = await docQuery.get();

      // ERROR HANDLING
      if (!doc.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = doc.id as String;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

    //  await docQuery.delete();

      // EXTRACT DATA
      const docData = doc.data();

      // ERROR HANDLING
      if (!docData) {
        throw new Error('Error. Document is undefined.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const deletedDoc = {
        id: docId,
        ...docData
      };
      
      // First perform the query
      await admin.firestore().collection('notification_users').where('notificationId','==',id).get()
      .then(function(querySnapshot) {
            // Once we get the results, begin a batch
            const batch = admin.firestore().batch();
            querySnapshot.forEach(function(docVal) {
                // For each doc, add a delete operation to the batch
                console.log(docVal.ref);
                batch.delete(docVal.ref);
            });
            // Commit the batch
            batch.commit();
      }).then(function() {
          // Delete completed!
          // ...
      }); 


      // // DELETE RELATION DOCUMENT
      // const relDoc = await admin
      //   .firestore()
      //   .collection('notification_users').where('notification_id','==',id).get() .then(function(querySnapshot) {
      //     // Once we get the results, begin a batch
      //     const batch = admin.firestore().batch();
      //     querySnapshot.forEach(function(doc) {
      //         // For each doc, add a delete operation to the batch
      //         batch.delete(doc.ref);
      //     });
      //     // Commit the batch
      //     batch.commit();
      // }).then(function() {
      //     // Delete completed!
      //     // ...
      // }); 
      
      // RETURN TRANSFORMED DATA
      return deletedDoc  as Notification | undefined;
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

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  async filterUsersByNotificationId({ id }): Promise<NotificationUser[]> {
    console.log(colors.brightMagenta('Reading from Firestore'));
    console.log('id', id);
    try {
      const docRef = await admin
        .firestore()
        .collection('notification_users')
        .where('notificationId', '==', id)
        .get();

      const docsData = [];
      docRef.forEach(doc => {
        docsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return docsData as NotificationUser[] | undefined;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message'
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async createdBy({ createdBy: createdBy }): Promise<User> {
    console.log('createdBy', createdBy);
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
