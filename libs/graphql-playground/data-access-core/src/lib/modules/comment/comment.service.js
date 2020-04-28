import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
let CommentService = class CommentService {
    // QUERIES ========================================================
    findCommentById(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Fetching Needs.....');
            try {
                const docRef = yield admin
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
                const foundData = Object.assign({ id: docRef.id }, doc);
                return foundData;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    findAllComments() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Fetching Needs.....');
            try {
                const docsData = [];
                const docsRef = yield admin
                    .firestore()
                    .collectionGroup(`comments`)
                    .get();
                // ERROR HANDLING
                if (docsRef.empty) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                docsRef.forEach(doc => {
                    // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                    docsData.push(Object.assign({ id: doc.id }, doc.data()));
                });
                return docsData;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // MUTATIONS ========================================================
    createComment(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newDoc = Object.assign({}, comment);
                const docRef = yield admin
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
                return newDoc;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    updateComment(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // READ THE DOC FROM DATABASE
                const docRef = yield admin
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
                yield admin
                    .firestore()
                    .collection(`posts`)
                    .doc(comment.postId)
                    .collection(`comments`)
                    .doc(docRef.id)
                    .update(comment);
                const updatedDoc = Object.assign({ id: docRef.id }, comment);
                return updatedDoc;
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
    deleteComment(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // LOGGING
                console.log(colors.brightMagenta('Reading from Firestore'));
                // GET DOCUMENT REFERENCE
                const docRef = yield admin
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
                const docId = docRef.id;
                console.log('docRef.data()', docRef.data());
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const deletedDoc = Object.assign({ id: docId }, docRef.data());
                // REMOVE CHILD FROM DATABASE
                yield admin
                    .firestore()
                    .collection(`posts`)
                    .doc(comment.postId)
                    .collection(`comments`)
                    .doc(comment.id)
                    .delete();
                // LOGGING
                console.log(colors.brightMagenta(deletedDoc));
                // RETURN TRANSFORMED DATA
                return deletedDoc;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the Need.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    findPost({ postId: postId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = yield admin
                    .firestore()
                    .collection('posts')
                    .doc(postId)
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
                // LOGGING
                console.log(colors.brightMagenta('child:::', doc));
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const foundData = Object.assign({ id: docId }, doc);
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
    findUser({ userId: userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(userId);
            try {
                const userRef = yield admin
                    .firestore()
                    .collection('users')
                    .doc(userId)
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
                const foundChild = Object.assign({ id: docId }, user);
                return foundChild;
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
CommentService = tslib_1.__decorate([
    Injectable()
], CommentService);
export { CommentService };
//# sourceMappingURL=comment.service.js.map