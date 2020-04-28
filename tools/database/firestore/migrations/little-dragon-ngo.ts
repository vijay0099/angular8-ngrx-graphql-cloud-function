import { initializeFirestore, createCollections } from '../lib/index';
import { Settings } from '../lib/src/interfaces/settings.interface';
import { Naming } from '../lib/src/enums/naming.enum';

// ENV
import { environment } from '../../../../libs/shared/environments/src';

// DATA
import {
  children,
  needs,
  posts,
  comments,
  galleries,
  notifications,
  notificationUsers,
  users,
  usernames,
  families,
  categories
} from '../../../../libs/graphql-playground/data-access-data/src';

// COLLECTIONS DEFINITION ================================================================================

// DATA >>> COLLECTIONS
const usernamesCollection: Settings = {
  root: {
    rootCollectionDataSource: usernames,
    rootCollectionName: 'usernames',
    rootDocNamingMethod: Naming.SIMPLE,
    rootDocNamingDefinition: ['username'],
    rootCleaningDefinition: ['id']
  }
};

// DATA >>> COLLECTIONS
const usersCollection: Settings = {
  root: {
    rootCollectionDataSource: users,
    rootCollectionName: 'users',
    rootDocNamingMethod: Naming.SIMPLE,
    rootDocNamingDefinition: ['id'],
    rootCleaningDefinition: ['id']
  }
};

// DATA >>> COLLECTIONS
const notificationsCollection: Settings = {
  root: {
    rootCollectionDataSource: notifications,
    rootCollectionName: 'notifications',
    rootDocNamingMethod: Naming.SIMPLE,
    rootDocNamingDefinition: ['notificationType'],
    rootCleaningDefinition: ['id']
  }
};

// DATA >>> COLLECTION + NESTED_COLLECTION
const notificationsUsersCollection: Settings = {
  root: {
    rootCollectionDataSource: notificationUsers,
    rootCollectionName: 'notificationUsers',
    rootDocNamingMethod: Naming.COMPOSITE,
    rootDocNamingDefinition: ['createdBy', 'notificationId']
  }
};

// DATA >>> COLLECTION + NESTED_COLLECTION
const postsCommentsCollection: Settings = {
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
const childrenNeedsCollection: Settings = {
  root: {
    rootCollectionDataSource: children,
    rootCollectionName: 'children',
    rootDocNamingMethod: Naming.COMPOSITE,
    // rootDocNamingDefinition: ['id'],
    rootDocNamingDefinition: ['firstName', 'lastName'],
    rootCleaningDefinition: ['id'], // ['id', 'familyId', 'firstName', 'lastName']
    hasNestedCollection: true
  },
  nested: {
    nestedCollectionDataSource: needs,
    nestedCollectionName: 'needs',
    nestedDocNamingMethod: Naming.COMPOSITE,
    // nestedDocNamingDefinition: ['id'],
    nestedDocNamingDefinition: ['belongsTo', 'id', 'needType'],
    nestedCleaningDefinition: ['id', 'description'], // ['id', 'needType', 'title', 'description']
    jointFieldName: 'belongsTo'
  }
};

// DATA >>> COLLECTIONS
const categoriesCollection: Settings = {
  root: {
    rootCollectionDataSource: categories,
    rootCollectionName: 'categories',
    rootDocNamingMethod: Naming.SIMPLE,
    rootDocNamingDefinition: ['id'],
    rootCleaningDefinition: ['id']
  }
};

// DATABASE DEFINITION ================================================================================

// POPULATE DATABASE
async function populateFirestore(db) {
  try {
    // [GENERATE ROOT COLLECTIONS]
    // await createCollections(usernamesCollection, db);
    // await createCollections(notificationsUsersCollection, db);
    // await createCollections(usersCollection, db);
    // await createCollections(notificationsCollection, db);
    // [GENERATE ROOT+NESTED COLLECTIONS]
    //await createCollections(childrenNeedsCollection, db);
    // await createCollections(postsCommentsCollection, db);
    await createCollections(categoriesCollection, db);
  } catch (error) {
    console.log('An error occurred.');
  }
}

// INITIALIZATION ================================================================================

// INIT FIRESTORE
const database = initializeFirestore(environment.firebaseConfig);

// RUN
populateFirestore(database);
