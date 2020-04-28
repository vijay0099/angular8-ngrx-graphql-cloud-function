import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';

const colors = require('colors');
colors.enable();

// AUTO GENERATED TYPES
import {
  Post,
  PostInput,
  PostUpdateInput,
  Comment,
  User
} from '@monorepo/graphql-playground/data-access-models';

import {
  deleteCollection,
  deleteDocument
} from '@monorepo/graphql-playground/util-helpers';

@Injectable()
export class PostService {
  
  // QUERIES ========================================================

  async findPostById(id: string): Promise<Post> {
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
        .collection('posts')
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

  async findAllPosts(): Promise<Post[]> {
    // LOGGING
    console.log(colors.brightMagenta('getPosts()'));
    try {
      // ARRAY TO HOLD TRANSFORMED DATA
      const docsData = [];
      // GET DOCUMENT REFERENCE
      const docsRef = await admin
        .firestore()
        .collection('posts')
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
      return docsData as Post[] | undefined;
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

  async createPost(post: PostInput): Promise<Post> {
    try {
      const newPost: any = {
        ...post
      };
      const docRef = await admin
        .firestore()
        .collection('posts')
        .add(newPost);
        console.log(docRef.id);
       
      // ERROR HANDLING
      if (!docRef.id) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }
      newPost.id = docRef.id;
      console.log('newPost', newPost);
      return newPost as Post | undefined;
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

  async updatePost(data: PostUpdateInput): Promise<Post> {
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
        .collection('posts')
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
      return docData as Post | undefined;
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
  async deletePost(id: string): Promise<Post> {
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
        .collection('posts')
        .doc(id)
        .get();

      // ERROR HANDLING
      if (!docRef.exists) {
        throw new Error('Error. Requested data does not exist in Firestore.');
      }

      // EXTRACT DOCUMENT_ID
      const docId = docRef.id as String;

      // ERROR HANDLING
      if (!docId) {
        throw new Error('Error. Document id is undefined.');
      }

      // EXTRACT DATA
      const post = docRef.data();

      // ERROR HANDLING
      if (!post) {
        throw new Error('Error. Document is undefined.');
      }

      // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
      const deletedPost = {
        id: docId,
        ...post
      };

      // DELETION SETTINGS
      const database = admin.firestore();
      const collectionPath = `/posts/${docId}/comments`;
      const documentPath = `/posts`;

      // TODO: MOVE ERROR HANDLING IN deleteCollection()
      // REMOVE SUB COLLECTION
      await deleteCollection(database, collectionPath, 25);

      // LOGGING
      console.log(
        colors.brightMagenta(`Collection deleted, ${collectionPath}`)
      );

      // TODO: MOVE ERROR HANDLING IN deleteDocument()
      // REMOVE DOCUMENT
      await deleteDocument(database, documentPath, docId);

      // LOGGING
      console.log(
        colors.brightMagenta(`Document deleted, ${documentPath}/${docId}`)
      );

      // RETURN TRANSFORMED DATA
      return deletedPost  as Post | undefined;
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

  async filterCommentsByPostId({ id }): Promise<Comment[]> {
    console.log(colors.brightMagenta('Reading from Firestore'));
    console.log('id', id);
    try {
      const docsRef = await admin
        .firestore()
        .collection('posts')
        .doc(id)
        .collection('comments')
        .get();

      const docsData = [];
      docsRef.forEach(doc => {
        docsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return docsData as Comment[] | undefined;
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
