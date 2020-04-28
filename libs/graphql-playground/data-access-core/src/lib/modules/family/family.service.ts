import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import admin from 'firebase-admin';
import { async } from '@angular/core/testing';

// AUTO GENERATED TYPES
import {
  Family,
  FamilyFilterInput,
  FamilyInput,
  FamilyUpdateInput,
  Child,
  User
} from '@monorepo/graphql-playground/data-access-models';

import {
  deleteCollection,
  deleteDocument
} from '@monorepo/graphql-playground/util-helpers';

const colors = require('colors');
colors.enable();

// TODO: MUST CREATE HELPER FUNCTIONS FOR CUSTOM DOCUMENT_ID GENERATION
// TODO: CAN REUSE MIGRATIONS HELPERS

@Injectable()
export class FamilyService {
  // -------------------------------------------------------------------------
  //    MUTATIONS/READ OPERATIONS
  // -------------------------------------------------------------------------

  //::: DONE
  async findFamilyById(id: string): Promise<Family> {
    // LOGGING
    console.log(colors.brightMagenta('Reading from Firestore'));
    try {
      // ERROR HANDLING
      if (!id || id === '') {
        throw new Error('Error. Document id must be non-empty string.');
      }

      // GET DOCUMENT REFERENCE
      const familyRef = await admin
        .firestore()
        .collection('families')
        .doc(id)
        .get();

      // ERROR HANDLING
      if (!familyRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = familyRef.id as String | undefined;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const family = familyRef.data() as Family | undefined;

      // ERROR HANDLING
      if (!family) {
        throw new Error('Error. Document is undefined.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundFamily = {
        id: docId,
        ...family
      };

      // LOGGING DATA
      console.log(colors.brightMagenta(foundFamily));

      // RETURN TRANSFORMED DATA
      return foundFamily;
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

  //::: DONE
  async getAllFamilies(query: FamilyFilterInput): Promise<Family[]> {
    // LOGGING
    console.log(colors.brightMagenta('getFamilies()', query.search));

    try {
      // ARRAY TO HOLD TRANSFORMED DATA
      const familiesData = [];

      // GET DOCUMENT REFERENCE
      const familiesRef = await admin
        .firestore()
        .collection('families')
        .orderBy('carrierPrimary.email', 'desc')
       // .where('carrierPrimary.firstName', '==', query.search)
        .limit(query.limit)
        .offset(query.offset)
        .get();

      console.log(colors.brightMagenta(familiesRef.empty));

      // ERROR HANDLING
      if (familiesRef.empty) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // LOGGING
      console.log(colors.brightMagenta('Reading from Firestore'));

      console.log('familiesRef.size', familiesRef.size);

      // LOOP THROUGH FETCHED ARRAY OF OBJECTS [THAT IS THE FORMAT THAT FIRESTORE SDK RETURNS DATA]
      familiesRef.forEach(doc => {
        // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
        familiesData.push({
          // INSERT DOCUMENT_ID
          id: doc.id,
          createdAt: doc.createTime,
          updatedAt: doc.updateTime,
          ...doc.data()
        });
      });

      // LOGGING
      console.log(colors.brightMagenta(familiesData));

      // RETURN TRANSFORMED DATA
      return familiesData;
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

  // -------------------------------------------------------------------------
  //    MUTATIONS/CREATE OPERATIONS
  // -------------------------------------------------------------------------

  async createNewFamily(family: FamilyInput): Promise<Family> {
    try {
      const newFamily: any = {
        ...family
      };
      const docRef = await admin
        .firestore()
        .collection('families')
        .add(newFamily);
      console.log(docRef.id);

      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newFamily.id = docRef.id;
      console.log('newFamily', newFamily);
      return newFamily as Family | undefined;
    } catch (error) {
      throw new Error(error);
    }
  }

  // -------------------------------------------------------------------------
  //    MUTATIONS/DELETE OPERATIONS
  // -------------------------------------------------------------------------

  //::: DONE
  async deleteFamily(id: string): Promise<Family> {
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
        .collection('families')
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
      return deletedDoc as Family | undefined;
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

  async updateFamily(data: FamilyUpdateInput): Promise<Family> {
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
      const docRef = await admin
        .firestore()
        .collection('families')
        .doc(id);

      // GET DOCUMENT REFERENCE
      const familyRef = docRef.get();

      // ERROR HANDLING
      if (!(await familyRef).exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const updatedFamily = {
        ...data
      };

      console.log('newFamily ===', updatedFamily);

      // UPDATE DOCUMENT
      await docRef.update(updatedFamily);

      const returnDate = {
        id: id,
        ...data
      };
      // LOGGING DATA
      console.log(colors.brightMagenta(updatedFamily));
      return (returnDate as unknown) as Family | undefined;
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

  // -------------------------------------------------------------------------
  //    RELATIONSHIPS [ONE-TO-MANY]
  // -------------------------------------------------------------------------

  async filterChildrenByFamilyId(id: String): Promise<Child[]> {
    console.log(colors.brightMagenta('Reading from Firestore'));
    console.log('id', id);
    try {
      const docRef = await admin
        .firestore()
        .collection('children')
        .where('familyId', '==', id)
        .get();

      const childrenData = [];
      docRef.forEach(doc => {
        childrenData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return childrenData;
      // return childNeeds.docs.map(need => need.data()) as Need[];
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
