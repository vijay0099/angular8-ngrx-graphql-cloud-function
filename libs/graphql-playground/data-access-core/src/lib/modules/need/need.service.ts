import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';

const colors = require('colors');
colors.enable();

// AUTO GENERATED TYPES
import {
  Need,
  FindInput,
  NeedInput,
  Child,
  NeedUpdateInput,
  DeleteInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Injectable()
export class NeedService {
  // QUERIES ========================================================

  async getNeed(id): Promise<Need> {
    console.log('Fetching Needs.....');

    const collectionRef = admin.firestore().collection('users');

    collectionRef.add({ foo: 'bar' }).then(documentReference => {
      const firestore = documentReference.firestore;
      console.log(`Root location for document is ${firestore.collection.name}`);
    });

    // console.log(colors.blue(test));

    // TODO: HOW TO GET THE PARENT DOCUMENT ID???

    // .cod().parent.parent.id

    // read children
    try {
      const childDoc = await admin
        .firestore()
        .collection('children')
        .doc('SnBMnvZGjOQ0oHTT7Brn')
        .collection('needs')
        .doc('zKhMrDf1f03MboL15oWn')
        .get();
      console.log(childDoc.data());
      return childDoc.data() as Need | undefined;
    } catch (error) {
      throw new Error(error);
    }

    //  return this.needs.find(need => need.id === id);
  }

  async findNeedById(data : FindInput): Promise<Need> {
    console.log('Fetching Needs.....');
    try {
      const docRef = await admin
        .firestore()
        .collection('children')
        .doc(data.belongsTo)
        .collection('needs')
        .doc(data.id)
        .get();
      console.log(docRef.data());
      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DATA
      const need = docRef.data();

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundData = {
        id: docRef.id,
        ...need
      };

      return foundData as Need | undefined;
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

  async findAllNeeds(): Promise<Need[]> {
    console.log('Fetching Needs.....');
    try {
      const needsData = [];
      const needsRef = await admin
        .firestore()
        .collectionGroup(`needs`)
        .get();

      // ERROR HANDLING
      if (needsRef.empty) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      needsRef.forEach(doc => {
        // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
        needsData.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return needsData as Need[];
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

  // MUTATIONS ========================================================

  async createNewNeed(need: NeedInput): Promise<Need> {
    try {
      const newNeed: any = {
        ...need
      };
      const docRef = await admin
        .firestore()
        .collection('children')
        .doc(newNeed.belongsTo)
        .collection('needs')
        .add(newNeed);

      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newNeed.id = docRef.id;
      console.log('newChild', newNeed);
      return newNeed as Need | undefined;
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

  async deleteNeed(need: DeleteInput): Promise<Need> {
    try {
      // LOGGING
      console.log(colors.brightMagenta('Reading from Firestore'));
      // GET DOCUMENT REFERENCE
      const docQuery = admin
        .firestore()
        .collection('children')
        .doc(need.belongsTo)
        .collection('needs')
        .doc(need.id);

        const doc = await docQuery.get();

      // ERROR HANDLING
      if (!doc.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = doc.id as String;
      console.log('docQuery.data()', doc.data());
      // EXTRACT DATA
      const docData = doc.data() as Need | undefined;

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
      return deletedDoc;
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

  // -------------------------------------------------------------------------
  //    MUTATIONS/UPDATE OPERATIONS
  // -------------------------------------------------------------------------

  async updateNeed(need: NeedUpdateInput): Promise<Need> {
    try {
      // READ THE DOC FROM DATABASE
      const docRef = await admin
        .firestore()
        .collection(`children`)
        .doc(need.belongsTo)
        .collection(`needs`)
        .doc(need.id)
        .get();

      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      delete need.id;
      console.log(docRef.id);
      // UPDATE
      await admin
        .firestore()
        .collection(`children`)
        .doc(need.belongsTo)
        .collection(`needs`)
        .doc(docRef.id)
        .update(need)
        .then(data => {
          console.log('Need has been updated in Firestore');
          console.log(data.writeTime);
          return true;
        });

      const updatedNeed: any = {
        id: docRef.id,
        ...need
      };
      return updatedNeed as Need | undefined;
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

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async findChildById({ belongsTo: belongsTo }): Promise<Child> {
    console.log(belongsTo);
    try {
      const childRef = await admin
        .firestore()
        .collection('children')
        .doc(belongsTo)
        .get();

      // ERROR HANDLING
      if (!childRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = childRef.id as String | undefined;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const child = childRef.data();

      // ERROR HANDLING
      if (!child) {
        throw new Error('Error. Document is undefined.');
      }

      // LOGGING
      console.log(colors.brightMagenta('child:::', child));

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundChild = {
        id: docId,
        ...child
      };

      return foundChild as Child | undefined;
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
