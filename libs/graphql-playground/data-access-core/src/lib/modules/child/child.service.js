import * as tslib_1 from "tslib";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import admin from 'firebase-admin';
import { deleteCollection, deleteDocument } from '@monorepo/graphql-playground/util-helpers';
const colors = require('colors');
colors.enable();
// TODO: MUST CREATE HELPER FUNCTIONS FOR CUSTOM DOCUMENT_ID GENERATION
// TODO: CAN REUSE MIGRATIONS HELPERS
let ChildService = class ChildService {
    // -------------------------------------------------------------------------
    //    MUTATIONS/READ OPERATIONS
    // -------------------------------------------------------------------------
    //::: DONE
    findChildById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('Reading from Firestore'));
            try {
                // ERROR HANDLING
                if (!id || id === '') {
                    throw new Error('Error. Document id must be non-empty string.');
                }
                // GET DOCUMENT REFERENCE
                const childRef = yield admin
                    .firestore()
                    .collection('children')
                    .doc(id)
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
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const foundChild = Object.assign({ id: docId }, child);
                // LOGGING DATA
                console.log(colors.brightMagenta(foundChild));
                // RETURN TRANSFORMED DATA
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
    //::: DONE
    getAllChildren() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('getChildren()'));
            try {
                // ARRAY TO HOLD TRANSFORMED DATA
                const childrenData = [];
                // GET DOCUMENT REFERENCE
                const childrenRef = yield admin
                    .firestore()
                    .collection('children')
                    .get();
                console.log(colors.brightMagenta(childrenRef.empty));
                // ERROR HANDLING
                if (childrenRef.empty) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // LOGGING
                console.log(colors.brightMagenta('Reading from Firestore'));
                // LOOP THROUGH FETCHED ARRAY OF OBJECTS [THAT IS THE FORMAT THAT FIRESTORE SDK RETURNS DATA]
                childrenRef.forEach(doc => {
                    // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                    childrenData.push(Object.assign({ 
                        // INSERT DOCUMENT_ID
                        id: doc.id, createdAt: doc.createTime }, doc.data()));
                });
                // LOGGING
                console.log(colors.brightMagenta(childrenData));
                // RETURN TRANSFORMED DATA
                return childrenData;
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
    createNewChild(child) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // TODO: CHILD HAS SPECIAL COMPOSITE ID. WRITE FUNCTION childIdGenerator(),
            // TODO: formatted as:  number-number (for example: 123-2)
            // TODO: OR: TO USE DOCUMENT FIELD FOR THIS ID???
            // TODO: IN THAT CASE CAN FORMAT THIS ID AS A FLOAT NUMBER (123.2) WHICH CAN BE PARSED FURTHER
            // CREATE
            try {
                const newChild = Object.assign({}, child);
                const docRef = yield admin
                    .firestore()
                    .collection('children')
                    .add(newChild);
                console.log(docRef.id);
                // ERROR HANDLING
                if (!docRef.id) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                newChild.id = docRef.id;
                console.log('newChild', newChild);
                return newChild;
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
    deleteChild(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // LOGGING
            console.log(colors.brightMagenta('Reading from Firestore'));
            try {
                // ERROR HANDLING
                if (!id || id === '') {
                    throw new Error('Error. Document id must be non-empty string.');
                }
                // GET DOCUMENT REFERENCE
                const childRef = yield admin
                    .firestore()
                    .collection('children')
                    .doc(id)
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
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const deletedChild = Object.assign({ id: docId }, child);
                // DELETION SETTINGS
                const database = admin.firestore();
                const collectionPath = `/children/${docId}/needs`;
                const documentPath = `/children`;
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
                return deletedChild;
            }
            catch (error) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Error. Could not remove the child.'
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
    // -------------------------------------------------------------------------
    //    MUTATIONS/UPDATE OPERATIONS
    // -------------------------------------------------------------------------
    // async updateChild(id: string, child: ChildInput): Promise<Child> {
    // async updateChild(id: string, data: ChildInput): Promise<any> {
    updateChild(data) {
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
                    .collection('children')
                    .doc(id);
                // GET DOCUMENT REFERENCE
                const childRef = docRef.get();
                // ERROR HANDLING
                if (!(yield childRef).exists) {
                    throw new Error('Error. Requested data does not exist in Firestore.');
                }
                // CREATE A NEW DATA OBJECT WITH MERGED id FIELD
                const updatedChild = Object.assign({}, data);
                console.log('newChild ===', updatedChild);
                // UPDATE DOCUMENT
                yield docRef.update(updatedChild);
                // LOGGING DATA
                console.log(colors.brightMagenta(updatedChild));
                return updatedChild;
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
    filterNeedsByChildId(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(colors.brightMagenta('Reading from Firestore'));
            console.log('id', id);
            try {
                const needsRef = yield admin
                    .firestore()
                    .collection('children')
                    .doc(id)
                    .collection('needs')
                    .get();
                const needsData = [];
                needsRef.forEach(doc => {
                    needsData.push(Object.assign({ id: doc.id }, doc.data()));
                });
                return needsData;
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
};
ChildService = tslib_1.__decorate([
    Injectable()
], ChildService);
export { ChildService };
//# sourceMappingURL=child.service.js.map