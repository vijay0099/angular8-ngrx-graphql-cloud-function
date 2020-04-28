import * as tslib_1 from "tslib";
import { initializeFirestore, createCollections } from '../lib/index';
import { Naming } from '../lib/src/enums/naming.enum';
// ENV
import { environment } from '../../../../libs/shared/environments/src';
// DATA
import { children, posts, comments, notifications, notificationUsers, users, usernames } from '../../../../libs/graphql-playground/data-access-data/src';
// COLLECTIONS DEFINITION ================================================================================
// DATA >>> COLLECTIONS
const usernamesCollection = {
    root: {
        rootCollectionDataSource: usernames,
        rootCollectionName: 'usernames',
        rootDocNamingMethod: Naming.SIMPLE,
        rootDocNamingDefinition: ['username'],
        rootCleaningDefinition: ['id']
    }
};
// DATA >>> COLLECTIONS
const usersCollection = {
    root: {
        rootCollectionDataSource: users,
        rootCollectionName: 'users',
        rootDocNamingMethod: Naming.SIMPLE,
        rootDocNamingDefinition: ['id'],
        rootCleaningDefinition: ['id']
    }
};
// DATA >>> COLLECTIONS
const notificationsCollection = {
    root: {
        rootCollectionDataSource: notifications,
        rootCollectionName: 'notifications',
        rootDocNamingMethod: Naming.SIMPLE,
        rootDocNamingDefinition: ['notificationType'],
        rootCleaningDefinition: ['id']
    }
};
// DATA >>> COLLECTION + NESTED_COLLECTION
const notificationsUsersCollection = {
    root: {
        rootCollectionDataSource: notificationUsers,
        rootCollectionName: 'notificationUsers',
        rootDocNamingMethod: Naming.COMPOSITE,
        rootDocNamingDefinition: ['createdBy', 'notificationId']
    }
};
// DATA >>> COLLECTION + NESTED_COLLECTION
const postsCommentsCollection = {
    root: {
        rootCollectionDataSource: posts,
        rootCollectionName: 'posts',
        rootDocNamingMethod: Naming.SIMPLE,
        rootDocNamingDefinition: ['id'],
        rootCleaningDefinition: ['id'],
        hasNestedCollection: true
    },
    nested: {
        nestedCollectionDataSource: comments,
        nestedCollectionName: 'comments',
        nestedDocNamingMethod: Naming.COMPOSITE,
        nestedDocNamingDefinition: ['createdBy', 'id'],
        nestedCleaningDefinition: ['id'],
        jointFieldName: 'belongsTo'
    }
};
// DATA >>> COLLECTION + NESTED_COLLECTION
const childrenNeedsCollection = {
    root: {
        rootCollectionDataSource: children,
        rootCollectionName: 'children',
        rootDocNamingMethod: Naming.AUTO
        // rootDocNamingDefinition: ['id'],
        // rootDocNamingDefinition: ['firstName', 'lastName'],
        // rootCleaningDefinition: ['id', 'familyId', 'firstName', 'lastName'],
        // hasNestedCollection: true
    }
    // nested: {
    //   nestedCollectionDataSource: needs,
    //   nestedCollectionName: 'needs',
    //   nestedDocNamingMethod: Naming.COMPOSITE,
    //   // nestedDocNamingDefinition: ['id'],
    //   nestedDocNamingDefinition: ['belongsTo', 'id', 'needType'],
    //   nestedCleaningDefinition: ['id', 'description'], // ['id', 'needType', 'title', 'description']
    //   jointFieldName: 'belongsTo'
    // }
};
// DATABASE DEFINITION ================================================================================
// POPULATE DATABASE
function populateFirestore(db) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            // [GENERATE ROOT COLLECTIONS]
            // await createCollections(usernamesCollection, db);
            // await createCollections(notificationsUsersCollection, db);
            // await createCollections(usersCollection, db);
            // await createCollections(notificationsCollection, db);
            // [GENERATE ROOT+NESTED COLLECTIONS]
            yield createCollections(childrenNeedsCollection, db);
            // await createCollections(postsCommentsCollection, db);
        }
        catch (error) {
            console.log('An error occurred.');
        }
    });
}
// INITIALIZATION ================================================================================
// INIT FIRESTORE
const database = initializeFirestore(environment.firebaseTestingConfig);
// RUN
populateFirestore(database);
//# sourceMappingURL=little-dragon-testing-ff2f8.js.map