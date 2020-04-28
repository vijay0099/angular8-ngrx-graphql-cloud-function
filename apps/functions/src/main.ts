import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// admin.initializeApp(functions.config().firebase);

const serviceAccount = require('../../../service-account/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// GRAPHQL SERVER | NESTJS APP
import { createNestServer, server } from './graphql-api/src/main';

// CREATE SERVER
createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

//  EXPOSE GRAPHQL SERVER
export const api = functions.https.onRequest(server);

// ============================================================================

// import {COMMENT_EVENT, LIKE_EVENT} from "./constants";
// import * as notificationFunctions from './notifications/index'
// import * as atomicFunctions from './atomic-operations/index'

// export const firestoreInstance = admin.firestore();

// export const newFollowerNotification = functions.firestore
//     .document('PublicUserData/{followerId}/Followers/{followedId}')
//     .onCreate(event => {
//         return notificationFunctions.sendNewFollowerNotification(event);
//     });

// export const newLikeNotification = functions.firestore
//     .document('Posts/{postId}/Likes/{likeId}')
//     .onCreate(event => {
//         return notificationFunctions.sendPostNotication(event, LIKE_EVENT)
//     });

// export const newCommentNotification = functions.firestore
//     .document('Posts/{postId}/Comments/{commentId}')
//     .onCreate(event => {
//         return notificationFunctions.sendPostNotication(event, COMMENT_EVENT)
//     });

// export const updateFeedAfterFollow = functions.firestore
//     .document('PublicUserData/{followerId}/Following/{followedId}')
//     .onCreate(event => {
//         return atomicFunctions.updateFeedAfterUserAction(event, true);
//     });

// export const updateFeedAfterUserNewWorkout = functions.firestore
//     .document('Posts/{postId}')
//     .onCreate(event => {
//         return atomicFunctions.updateFollowersFeed(event, false)
//     });

// export const updateFeedAfterUnFollow = functions.firestore
//     .document('PublicUserData/{followerId}/Following/{followedId}')
//     .onDelete(event => {
//         return atomicFunctions.updateFeedAfterUserAction(event, false);
//     });
