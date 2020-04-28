import * as firebase from 'firebase';

export function initializeFirestore(config) {
  const db = firebase.initializeApp(config);
  return db.firestore();
}
