import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
const colors = require('colors');
colors.enable();
// TODO: MUST CREATE HELPER FUNCTIONS FOR CUSTOM DOCUMENT_ID GENERATION
// TODO: CAN REUSE MIGRATIONS HELPERS
let FamilyService = class FamilyService {
    // -------------------------------------------------------------------------
    //    MUTATIONS/READ OPERATIONS
    // -------------------------------------------------------------------------
    //::: DONE
    findFamilyById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('Reading from Firestore'));
            try {
                // ERROR HANDLING
                if (!id || id === '') {
                    throw new Error('Error. Document id must be non-empty string.');
                }
                // GET DOCUMENT REFERENCE
                const familyRef = yield admin
                    .firestore()
                    .collection('families')
                    .doc(id)
                    .get();
                // ERROR HANDLING
                if (!familyRef.exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // EXTRACT DOCUMENT_ID
                const docId = familyRef.id;
                // ERROR HANDLING
                if (!docId) {
                    throw new Error('Error. Document id is undefined.');
                }
                // EXTRACT DATA
                const family = familyRef.data();
                // ERROR HANDLING
                if (!family) {
                    throw new Error('Error. Document is undefined.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const foundFamily = Object.assign({ id: docId }, family);
                // LOGGING DATA
                console.log(colors.brightMagenta(foundFamily));
                // RETURN TRANSFORMED DATA
                return foundFamily;
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
    //::: DONE
    getAllFamilies(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('getFamilies()', query.search));
            try {
                // ARRAY TO HOLD TRANSFORMED DATA
                const familiesData = [];
                // GET DOCUMENT REFERENCE
                const familiesRef = yield admin
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
                    familiesData.push(Object.assign({ 
                        // INSERT DOCUMENT_ID
                        id: doc.id, createdAt: doc.createTime, updatedAt: doc.updateTime }, doc.data()));
                });
                // LOGGING
                console.log(colors.brightMagenta(familiesData));
                // RETURN TRANSFORMED DATA
                return familiesData;
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
    // -------------------------------------------------------------------------
    //    MUTATIONS/CREATE OPERATIONS
    // -------------------------------------------------------------------------
    createNewFamily(family) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const newFamily = Object.assign({}, family);
                const docRef = yield admin
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
                return newFamily;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    // -------------------------------------------------------------------------
    //    MUTATIONS/DELETE OPERATIONS
    // -------------------------------------------------------------------------
    //::: DONE
    deleteFamily(id) {
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
                    .collection('families')
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
    // -------------------------------------------------------------------------
    //    MUTATIONS/UPDATE OPERATIONS
    // -------------------------------------------------------------------------
    updateFamily(data) {
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
                    .collection('families')
                    .doc(id);
                // GET DOCUMENT REFERENCE
                const familyRef = docRef.get();
                // ERROR HANDLING
                if (!(yield familyRef).exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const updatedFamily = Object.assign({}, data);
                console.log('newFamily ===', updatedFamily);
                // UPDATE DOCUMENT
                yield docRef.update(updatedFamily);
                const returnDate = Object.assign({ id: id }, data);
                // LOGGING DATA
                console.log(colors.brightMagenta(updatedFamily));
                return returnDate;
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
    // -------------------------------------------------------------------------
    //    RELATIONSHIPS [ONE-TO-MANY]
    // -------------------------------------------------------------------------
    filterChildrenByFamilyId(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(colors.brightMagenta('Reading from Firestore'));
            console.log('id', id);
            try {
                const docRef = yield admin
                    .firestore()
                    .collection('children')
                    .where('familyId', '==', id)
                    .get();
                const childrenData = [];
                docRef.forEach(doc => {
                    childrenData.push(Object.assign({ id: doc.id }, doc.data()));
                });
                return childrenData;
                // return childNeeds.docs.map(need => need.data()) as Need[];
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
FamilyService = tslib_1.__decorate([
    Injectable()
], FamilyService);
export { FamilyService };
//# sourceMappingURL=family.service.js.map