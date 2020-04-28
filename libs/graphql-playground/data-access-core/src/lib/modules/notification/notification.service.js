import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
let NotificationService = class NotificationService {
    // QUERIES ========================================================
    findNotificationById(id) {
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
                    .collection('notifications')
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
    findAllNotifications() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('findAllNotifications()'));
            try {
                // ARRAY TO HOLD TRANSFORMED DATA
                const docsData = [];
                // GET DOCUMENT REFERENCE
                const docsRef = yield admin
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
    createNotification(notification) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newDoc = Object.assign({}, notification);
                const docRef = yield admin
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
    updateNotification(data) {
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
                    .collection('notifications')
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
    deleteNotification(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                const doc = yield docQuery.get();
                // ERROR HANDLING
                if (!doc.exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // EXTRACT DOCUMENT_ID
                const docId = doc.id;
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
                const deletedDoc = Object.assign({ id: docId }, docData);
                // First perform the query
                yield admin.firestore().collection('notification_users').where('notificationId', '==', id).get()
                    .then(function (querySnapshot) {
                    // Once we get the results, begin a batch
                    const batch = admin.firestore().batch();
                    querySnapshot.forEach(function (docVal) {
                        // For each doc, add a delete operation to the batch
                        console.log(docVal.ref);
                        batch.delete(docVal.ref);
                    });
                    // Commit the batch
                    batch.commit();
                }).then(function () {
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
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    filterUsersByNotificationId({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(colors.brightMagenta('Reading from Firestore'));
            console.log('id', id);
            try {
                const docRef = yield admin
                    .firestore()
                    .collection('notification_users')
                    .where('notificationId', '==', id)
                    .get();
                const docsData = [];
                docRef.forEach(doc => {
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
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    createdBy({ createdBy: createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('createdBy', createdBy);
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
NotificationService = tslib_1.__decorate([
    Injectable()
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map