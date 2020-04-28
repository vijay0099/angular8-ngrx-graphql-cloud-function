import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
// AUTO GENERATED TYPES
import { Gallery } from '@monorepo/graphql-playground/data-access-models';
let GalleryService = class GalleryService {
    // QUERIES ========================================================
    findGalleryById(id) {
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
                    .collection('galleries')
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
    findGalleries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('findGalleries()'));
            try {
                // ARRAY TO HOLD TRANSFORMED DATA
                const docsData = [];
                // GET DOCUMENT REFERENCE
                const docsRef = yield admin
                    .firestore()
                    .collection('galleries')
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
    // CREATE
    createGallery(gallery) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newDoc = Object.assign({}, Gallery);
                const docRef = yield admin
                    .firestore()
                    .collection('galleries')
                    .add(newDoc);
                console.log(docRef.id);
                // ERROR HANDLING
                if (!docRef.id) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                newDoc.id = docRef.id;
                console.log('newPost', newDoc);
                return newDoc;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateGallery(data) {
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
                const docRef = yield admin
                    .firestore()
                    .collection('galleries')
                    .doc(id);
                // GET DOCUMENT REFERENCE
                const postRef = docRef.get();
                // ERROR HANDLING
                if (!(yield postRef).exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const updatedDoc = Object.assign({}, data);
                console.log('newDoc ===', updatedDoc);
                // UPDATE DOCUMENT
                yield docRef.update(updatedDoc);
                // LOGGING DATA
                console.log(colors.brightMagenta(updatedDoc));
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
    deleteGallery(id) {
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
                    .collection('galleries')
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
                const deletedDoc = Object.assign({ id: docId }, post);
                // RETURN TRANSFORMED DATA
                return deletedDoc;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
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
GalleryService = tslib_1.__decorate([
    Injectable()
], GalleryService);
export { GalleryService };
//# sourceMappingURL=gallery.service.js.map