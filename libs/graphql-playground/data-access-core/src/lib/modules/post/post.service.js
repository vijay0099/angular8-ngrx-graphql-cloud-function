import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
import { deleteCollection, deleteDocument } from '@monorepo/graphql-playground/util-helpers';
let PostService = class PostService {
    // QUERIES ========================================================
    findPostById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('Reading from Firestore'));
            try {
                // ERROR HANDLING
                if (!id || id === '') {
                    throw new Error('Error. Document id must be non-empty string.');
                }
                // GET DOCUMENT REFERENCE
                const docRef = yield admin
                    .firestore()
                    .collection('posts')
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
                const doc = docRef.data();
                // ERROR HANDLING
                if (!doc) {
                    throw new Error('Error. Document is undefined.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const foundData = Object.assign({ id: docId }, doc);
                // LOGGING DATA
                console.log(colors.brightMagenta(foundData));
                // RETURN TRANSFORMED DATA
                return foundData;
            }
            catch (error) {
                // LOGGING ERROR
                console.log(colors.brightRed(error.message));
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: error.message
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    findAllPosts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('getPosts()'));
            try {
                // ARRAY TO HOLD TRANSFORMED DATA
                const docsData = [];
                // GET DOCUMENT REFERENCE
                const docsRef = yield admin
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
                    docsData.push(Object.assign({ id: doc.id, createdAt: doc.createTime }, doc.data()));
                });
                // LOGGING
                console.log(colors.brightMagenta(docsData));
                // RETURN TRANSFORMED DATA
                return docsData;
            }
            catch (error) {
                // LOGGING ERROR
                console.log(colors.brightRed(error.message));
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: error.message
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // MUTATIONS ========================================================
    createPost(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newPost = Object.assign({}, post);
                const docRef = yield admin
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
                return newPost;
            }
            catch (error) {
                // LOGGING ERROR
                console.log(colors.brightRed(error.message));
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: error.message
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    updatePost(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                const postRef = docRef.get();
                // ERROR HANDLING
                if (!(yield postRef).exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const updatedPost = Object.assign({}, data);
                console.log('newPost ===', updatedPost);
                // UPDATE DOCUMENT
                yield docRef.update(updatedPost);
                // LOGGING DATA
                console.log(colors.brightMagenta(updatedPost));
                return updatedPost;
            }
            catch (error) {
                // LOGGING ERROR
                console.log(colors.brightRed(error.message));
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: error.message
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // DELETE
    deletePost(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('Reading from Firestore'));
            try {
                // ERROR HANDLING
                if (!id || id === '') {
                    throw new Error('Error. Document id must be non-empty string.');
                }
                // GET DOCUMENT REFERENCE
                const docRef = yield admin
                    .firestore()
                    .collection('posts')
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
                const post = docRef.data();
                // ERROR HANDLING
                if (!post) {
                    throw new Error('Error. Document is undefined.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const deletedPost = Object.assign({ id: docId }, post);
                // DELETION SETTINGS
                const database = admin.firestore();
                const collectionPath = `/posts/${docId}/comments`;
                const documentPath = `/posts`;
                // TODO: MOVE ERROR HANDLING IN deleteCollection()
                // REMOVE SUB COLLECTION
                yield deleteCollection(database, collectionPath, 25);
                // LOGGING
                console.log(colors.brightMagenta(`Collection deleted, ${collectionPath}`));
                // TODO: MOVE ERROR HANDLING IN deleteDocument()
                // REMOVE DOCUMENT
                yield deleteDocument(database, documentPath, docId);
                // LOGGING
                console.log(colors.brightMagenta(`Document deleted, ${documentPath}/${docId}`));
                // RETURN TRANSFORMED DATA
                return deletedPost;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    filterCommentsByPostId({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(colors.brightMagenta('Reading from Firestore'));
            console.log('id', id);
            try {
                const docsRef = yield admin
                    .firestore()
                    .collection('posts')
                    .doc(id)
                    .collection('comments')
                    .get();
                const docsData = [];
                docsRef.forEach(doc => {
                    docsData.push(Object.assign({ id: doc.id }, doc.data()));
                });
                return docsData;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'This is a custom message'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    createdBy({ createdBy: createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(createdBy);
            try {
                const userRef = yield admin
                    .firestore()
                    .collection('users')
                    .doc(createdBy)
                    .get();
                // ERROR HANDLING
                if (!userRef.exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // EXTRACT DOCUMENT_ID
                const docId = userRef.id;
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
                const foundDoc = Object.assign({ id: docId }, user);
                return foundDoc;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
};
PostService = tslib_1.__decorate([
    Injectable()
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map