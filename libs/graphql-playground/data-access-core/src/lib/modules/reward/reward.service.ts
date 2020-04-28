import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';

const colors = require('colors');
colors.enable();

// AUTO GENERATED TYPES
import {
  Reward,
  RewardInput,
  RewardUpdateInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Injectable()
export class RewardService {

  // QUERIES ========================================================

  async findRewardById(id: string): Promise<Reward> {
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
        .collection('rewards')
        .doc(id)
        .get();

      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = docRef.id;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const post = docRef.data() as Reward | undefined;

      // ERROR HANDLING
      if (!post) {
        throw new Error('Error. Document is undefined.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundData = {
        id: docId,
        ...post
      };

      // LOGGING DATA
      console.log(colors.brightMagenta(foundData));

      // RETURN TRANSFORMED DATA
      return foundData as Reward | undefined;
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

  async findAllRewards(): Promise<Reward[]> {
    // LOGGING
    console.log(colors.brightMagenta('findAllRewards()'));
    try {
      // ARRAY TO HOLD TRANSFORMED DATA
      const docsData = [];
      // GET DOCUMENT REFERENCE
      const docsRef = await admin
        .firestore()
        .collection('rewards')
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
      return docsData as Reward[] | undefined;
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

  async createReward(reward: RewardInput): Promise<Reward> {
    try {
      const newDoc: any = {
        ...reward
      };
      const docRef = await admin
        .firestore()
        .collection('rewards')
        .add(newDoc);
        console.log(docRef.id);
       
      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newDoc.id = docRef.id;
      console.log('newReward', newDoc);
      return newDoc as Reward | undefined;
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

  async updateReward(data: RewardUpdateInput): Promise<Reward> {
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
        .collection('rewards')
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
        ...data
      };

      // LOGGING DATA
      console.log(colors.brightMagenta(docData));
      return docData as Reward | undefined;
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
  async deleteReward(id: string): Promise<Reward> {
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
        .collection('rewards')
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
      return deletedDoc as Reward | undefined;
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
