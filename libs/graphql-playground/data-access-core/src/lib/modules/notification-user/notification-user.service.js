import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
let NotificationUserService = class NotificationUserService {
    // QUERIES ========================================================
    findNotificationUserById(id) {
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
                    .collection('notification_users')
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
    findAllNotificationUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('getPosts()'));
            try {
                // ARRAY TO HOLD TRANSFORMED DATA
                const docsData = [];
                // GET DOCUMENT REFERENCE
                const docsRef = yield admin
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
    createNotificationUser(notificationUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newDoc = Object.assign({}, notificationUser);
                const docRef = yield admin
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
                return newDoc;
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
    updateNotificationUser(data) {
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
                const docQuery = admin
                    .firestore()
                    .collection('notification_users')
                    .doc(id);
                // GET DOCUMENT REFERENCE
                const docRef = docQuery.get();
                // ERROR HANDLING
                if (!(yield docRef).exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const updatedDoc = Object.assign({}, data);
                console.log('newPost ===', updatedDoc);
                // UPDATE DOCUMENT
                yield docQuery.update(updatedDoc);
                const docData = Object.assign({ id: id }, data);
                // LOGGING DATA
                console.log(colors.brightMagenta(docData));
                return docData;
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
    deleteNotificationUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                const doc = yield docQuery.get();
                // ERROR HANDLING
                if (!doc.exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // EXTRACT DOCUMENT_ID
                const docId = doc.id;
                console.log('docQuery.data()', doc.data());
                // EXTRACT DATA
                const needData = doc.data();
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const deletedDoc = Object.assign({ id: docId }, needData);
                // REMOVE CHILD FROM DATABASE
                yield docQuery.delete();
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
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    findNotificationById({ notificationId: notificationId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(notificationId);
            try {
                const docRef = yield admin
                    .firestore()
                    .collection('notifications')
                    .doc(notificationId)
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
                console.log(colors.brightMagenta('doc:::', doc));
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const foundDoc = Object.assign({ id: docId }, doc);
                return foundDoc;
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
    findUserById({ userId: userId }) {
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
NotificationUserService = tslib_1.__decorate([
    Injectable()
], NotificationUserService);
export { NotificationUserService };
//# sourceMappingURL=notification-user.service.js.map