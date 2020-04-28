const R = require('ramda');
// import { filterNestedObjById, findObjById } from './helpers';
import {
  initializeFirestore,
  createCollections,
  Settings,
  Naming
} from './helpers';

import {
  children,
  needs,
  posts,
  comments,
  galleries,
  notifications,
  notificationUsers,
  users
} from '../../../libs/graphql-playground/data-access-data/src/index';
// import { CHILDREN } from './data-children';
// import { NEEDS } from './data-needs';
// import { galleries, parents, children } from './data-galleries';
// import {
//   children,
//   needs,
//   posts,
//   comments,
//   galleries,
//   notifications
// } from '@monorepo/graphql-playground/data-access-data';

// // DODO'S TESTING DATABASE
// const firebaseConfig = {
//   apiKey: 'AIzaSyBrqAS_qGucZmznrYMCFCRWKYkj32UyUIg',
//   authDomain: 'little-dragon-testing-ff2f8.firebaseapp.com',
//   databaseURL: 'https://little-dragon-testing-ff2f8.firebaseio.com',
//   projectId: 'little-dragon-testing-ff2f8',
//   storageBucket: 'little-dragon-testing-ff2f8.appspot.com',
//   messagingSenderId: '648271456242',
//   appId: '1:648271456242:web:5653be9ffdaa3112a42d6b'
// };
// const database = initializeFirestore(firebaseConfig);

// DEVELOPMENT DATABASE
const firebaseConfig = {
  apiKey: 'AIzaSyAosPOFefrRMrl87oDWubXOstRogdKpywE',
  authDomain: 'little-dragon-ngo.firebaseapp.com',
  databaseURL: 'https://little-dragon-ngo.firebaseio.com',
  projectId: 'little-dragon-ngo',
  storageBucket: 'little-dragon-ngo.appspot.com',
  messagingSenderId: '663957558672',
  appId: '1:663957558672:web:72e98f97fb05bfde794f15'
};
const database = initializeFirestore(firebaseConfig);

// DATA >>> COLLECTIONS
const usersCollection: Settings = {
  root: {
    rootCollectionDataSource: users,
    rootCollectionName: 'users',
    rootDocNamingMethod: Naming.Simple,
    rootIndexDefinition: ['id']
  }
};

// DATA >>> COLLECTIONS
const notificationsCollection: Settings = {
  root: {
    rootCollectionDataSource: notifications,
    rootCollectionName: 'notifications',
    rootDocNamingMethod: Naming.Simple,
    rootIndexDefinition: ['notificationType']
  }
};

// DATA >>> COLLECTION + NESTED_COLLECTION
const notificationsUsersCollection: Settings = {
  root: {
    rootCollectionDataSource: notificationUsers,
    rootCollectionName: 'notificationUsers',
    rootDocNamingMethod: Naming.Combined,
    rootIndexDefinition: ['createdBy', 'notificationId'] // AA_BB
  }
};

// DATA >>> COLLECTION + NESTED_COLLECTION
const postsCommentsCollection: Settings = {
  root: {
    rootCollectionDataSource: posts,
    rootCollectionName: 'posts',
    rootDocNamingMethod: Naming.Simple,
    rootIndexDefinition: ['id'], // AA
    hasNestedCollection: true
  },
  nested: {
    nestedCollectionDataSource: comments,
    nestedCollectionName: 'comments',
    nestedDocNamingMethod: Naming.Auto,
    jointFieldName: 'belongsTo'
  }
};

// DATA >>> COLLECTION + NESTED_COLLECTION
const childrenNeedsCollection: Settings = {
  root: {
    rootCollectionDataSource: children,
    rootCollectionName: 'children',
    rootDocNamingMethod: Naming.Simple,
    rootIndexDefinition: ['id'],
    hasNestedCollection: true
  },
  nested: {
    nestedCollectionDataSource: needs,
    nestedCollectionName: 'needs',
    nestedDocNamingMethod: Naming.Combined,
    nestedIndexDefinition: ['belongsTo', 'id'], // AA_BB
    jointFieldName: 'belongsTo'
  }
};

// POPULATE DATABASE
async function populateFirestore(db) {
  try {
    // GENERATE NESTED COLLECTIONS
    await createCollections(usersCollection, db);
    await createCollections(childrenNeedsCollection, db); // nested
    // await createCollections(postsCommentsCollection, db); // nested
    // await createCollections(notificationsCollection, db);
    // await createCollections(notificationsUsersCollection, db);

    // GENERATE NON-NESTED COLLECTIONS
    // await createCollections(galleriesCollection, db);
  } catch (error) {
    console.log('An error occurred.');
  }
}
// RUN
populateFirestore(database);
