import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
let NeedService = class NeedService {
    // QUERIES ========================================================
    getNeed(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                const childDoc = yield admin
                    .firestore()
                    .collection('children')
                    .doc('SnBMnvZGjOQ0oHTT7Brn')
                    .collection('needs')
                    .doc('zKhMrDf1f03MboL15oWn')
                    .get();
                console.log(childDoc.data());
                return childDoc.data();
            }
            catch (error) {
                throw new Error(error);
            }
            //  return this.needs.find(need => need.id === id);
        });
    }
    findNeedById(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Fetching Needs.....');
            try {
                const docRef = yield admin
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
                const foundData = Object.assign({ id: docRef.id }, need);
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
    findAllNeeds() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Fetching Needs.....');
            try {
                const needsData = [];
                const needsRef = yield admin
                    .firestore()
                    .collectionGroup(`needs`)
                    .get();
                // ERROR HANDLING
                if (needsRef.empty) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                needsRef.forEach(doc => {
                    // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                    needsData.push(Object.assign({ id: doc.id }, doc.data()));
                });
                return needsData;
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
    createNewNeed(need) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newNeed = Object.assign({}, need);
                const docRef = yield admin
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
                return newNeed;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    deleteNeed(need) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
    // -------------------------------------------------------------------------
    //    MUTATIONS/UPDATE OPERATIONS
    // -------------------------------------------------------------------------
    updateNeed(need) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // READ THE DOC FROM DATABASE
                const docRef = yield admin
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
                yield admin
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
                const updatedNeed = Object.assign({ id: docRef.id }, need);
                return updatedNeed;
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
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    findChildById({ belongsTo: belongsTo }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(belongsTo);
            try {
                const childRef = yield admin
                    .firestore()
                    .collection('children')
                    .doc(belongsTo)
                    .get();
                // ERROR HANDLING
                if (!childRef.exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // EXTRACT DOCUMENT_ID
                const docId = childRef.id;
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
                const foundChild = Object.assign({ id: docId }, child);
                return foundChild;
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
NeedService = tslib_1.__decorate([
    Injectable()
], NeedService);
export { NeedService };
//# sourceMappingURL=need.service.js.map