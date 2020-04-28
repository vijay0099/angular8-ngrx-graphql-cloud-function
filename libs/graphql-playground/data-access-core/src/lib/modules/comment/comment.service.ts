import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';

const colors = require('colors');
colors.enable();

// AUTO GENERATED TYPES
import {
  Comment,
  CommentFindInput,
  CommentInput,
  CommentDeleteInput,
  CommentUpdateInput,
  Post,
  User
} from '@monorepo/graphql-playground/data-access-models';


@Injectable()
export class CommentService {

  // QUERIES ========================================================

  async findCommentById(data : CommentFindInput): Promise<Comment> {
    console.log('Fetching Needs.....');
    try {
      const docRef = await admin
        .firestore()
        .collection('children')
        .doc(data.postId)
        .collection('needs')
        .doc(data.id)
        .get();
      console.log(docRef.data());
      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DATA
      const doc = docRef.data();

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundData = {
        id: docRef.id,
        ...doc
      };

      return foundData as Comment | undefined;
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

  async findAllComments(): Promise<Comment[]> {
    console.log('Fetching Needs.....');
    try {
      const docsData = [];
      const docsRef = await admin
        .firestore()
        .collectionGroup(`comments`)
        .get();

      // ERROR HANDLING
      if (docsRef.empty) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      docsRef.forEach(doc => {
        // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
        docsData.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return docsData as Comment[];
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

  async createComment(comment: CommentInput): Promise<Comment> {
    try {
      const newDoc: any = {
        ...comment
      };
      const docRef = await admin
        .firestore()
        .collection('posts')
        .doc(newDoc.postId)
        .collection('needs')
        .add(newDoc);

      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newDoc.id = docRef.id;
      console.log('newChild', newDoc);
      return newDoc as Comment | undefined;
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

  async updateComment(comment: CommentUpdateInput): Promise<Comment>{
    try {
      // READ THE DOC FROM DATABASE
      const docRef = await admin
        .firestore()
        .collection(`children`)
        .doc(comment.postId)
        .collection(`needs`)
        .doc(comment.id)
        .get();

      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      delete comment.id;
      console.log(docRef.id);
      // UPDATE
      await admin
        .firestore()
        .collection(`posts`)
        .doc(comment.postId)
        .collection(`comments`)
        .doc(docRef.id)
        .update(comment);

      const updatedDoc: any = {
        id: docRef.id,
        ...comment
      };
      return updatedDoc as Comment | undefined;
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
  async deleteComment(comment: CommentDeleteInput): Promise<Comment> {
    try {
      // LOGGING
      console.log(colors.brightMagenta('Reading from Firestore'));
      // GET DOCUMENT REFERENCE
      const docRef = await admin
        .firestore()
        .collection('posts')
        .doc(comment.postId)
        .collection('comments')
        .doc(comment.id)
        .get();

      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = docRef.id as String;
      console.log('docRef.data()', docRef.data());

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const deletedDoc = {
        id: docId,
        ...docRef.data()
      };

      // REMOVE CHILD FROM DATABASE
      await admin
        .firestore()
        .collection(`posts`)
        .doc(comment.postId)
        .collection(`comments`)
        .doc(comment.id)
        .delete();
      // LOGGING
      console.log(colors.brightMagenta(deletedDoc));

      // RETURN TRANSFORMED DATA
      return deletedDoc as Comment | undefined;
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

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  async findPost({ postId: postId }): Promise<Post> {
    try {
      const docRef = await admin
        .firestore()
        .collection('posts')
        .doc(postId)
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
      console.log(colors.brightMagenta('child:::', doc));

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const foundData = {
        id: docId,
        ...doc
      };

      return foundData as Post | undefined;
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

  async findUser({ userId: userId }): Promise<User> {
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
      const foundChild = {
        id: docId,
        ...user
      };

      return foundChild as User | undefined;
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
