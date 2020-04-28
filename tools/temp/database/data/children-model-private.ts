// EXAMPLE NESTED DATA MODEL
// COLLECTION=CHILDREN, SUB COLLECTION=PRIVATE
// https://stackoverflow.com/questions/19891762/firebase-security-rules-public-vs-private-data

// This is a secure way of fetching data

// The problem with this approach is that requires 2/writes into database in update operation.

// APPLIED FIRESTORE SECURE RULES
// {
//   "rules": {
//     ".read": false,
//     ".write": false,
//     "child-profile-public": {
//       ".read": true,
//       "$signatureID": {
//         // ... public data here
//       }
//     },
//     "child-profile-private": {
//       "$signatureID": {
//         // ... private data here
//       }
//     }
//   }
// }

// child - profile; // "child-profile" [client-app]
// private; // "child-profile/private" [admin-app]

export const CHILDREN: any = {
  // PATRICIA'S PROFILE
  1: {
    // PUBLIC COLLECTION ---------------------------------------------------
    id: 1,
    child_id: '123-2', // COMPOSITE ID [PUBLIC]
    avatarUrl: 'https://example.com/my-avatar.png', // [PUBLIC]
    dob: 'date-of-birth', // [PUBLIC]
    firstName: 'Vijay', // [PUBLIC]
    gender: 'female', // [PUBLIC]

    measurements: {
      // [PUBLIC]
      footSize: '43',
      wardrobeSize: '14'
    },

    currentEdu: {
      // [PUBLIC]
      school: 'primary', // kinder garden, primary, secondary
      class: '2'
    },

    extracurricular: [
      // [PUBLIC]
      'Extracurricular activity 1',
      'Extracurricular activity 2'
    ],
    medicalConditions: [
      // [PUBLIC
      'Medical condition 1',
      'Medical condition 2'
    ],
    seqNo: 0
  },

  // MARCO'S PROFILE
  2: {
    id: 2,
    isActive: true,
    firstName: 'Marco',
    city: 'Zagreb',
    avatarUrl: 'https://example.com/my-avatar.png',
    dob: 'date-of-birth',
    gender: 'male',
    extracurricular: [
      'Extracurricular activity 1',
      'Extracurricular activity 2'
    ],
    measurements: {
      footSize: '13',
      wardrobeSize: '24'
    },
    medicalConditions: ['Medical condition 1', 'Medical condition 2'],
    wishes: ['Document Wish 1', 'Document Wish 2'],
    needsCount: 2,
    seqNo: 0
  },

  // GRETA'S PROFILE
  3: {
    id: 3,
    isActive: true,
    firstName: 'Greta',
    city: 'Dubrovnik',
    avatarUrl: 'https://example.com/my-avatar.png',
    dob: 'date-of-birth',
    gender: 'female',
    extracurricular: [
      'Extracurricular activity 1',
      'Extracurricular activity 2'
    ],
    measurements: {
      footSize: '43',
      wardrobeSize: '14'
    },
    medicalConditions: ['Medical condition 1', 'Medical condition 2'],
    wishes: ['Document Wish 1', 'Document Wish 2'],
    needsCount: 1,
    seqNo: 0
  }
};

// PRIVATE COLLECTIONS
export const PRIVATE = {
  // PATRICIA'S PRIVATE
  1: {
    id: 1,
    child_id: '123-2', // COMPOSITE ID [PUBLIC]
    avatarUrl: 'https://example.com/my-avatar.png', // [PUBLIC]
    dob: 'date-of-birth', // [PUBLIC]
    firstName: 'Vijay', // [PUBLIC]
    gender: 'female', // [PUBLIC]
    measurements: {
      // [PUBLIC]
      footSize: '43',
      wardrobeSize: '14'
    },
    lastName: 'LastName', // [PRIVATE]
    currentEdu: {
      // [PRIVATE]
      school: 'primary',
      class: '2',
      schoolName: '',
      schoolAddress: '',
      schoolContact: ''
    },
    extracurricular: [
      // [PUBLIC]
      'Extracurricular activity 1',
      'Extracurricular activity 2'
    ],
    medicalConditions: [
      // [PUBLIC
      'Medical condition 1',
      'Medical condition 2'
    ],
    wishes: [
      // [PRIVATE]
      'Document Wish 1',
      'Document Wish 2'
    ],
    seqNo: 0,
    childId: 1

    // isActive: true,
    // needsCount: 3,
  },
  2: {
    id: 2,
    child_id: '123-2', // COMPOSITE ID [PUBLIC]
    avatarUrl: 'https://example.com/my-avatar.png', // [PUBLIC]
    dob: 'date-of-birth', // [PUBLIC]
    firstName: 'Vijay', // [PUBLIC]
    gender: 'female', // [PUBLIC]
    measurements: {
      // [PUBLIC]
      footSize: '43',
      wardrobeSize: '14'
    },
    lastName: 'LastName', // [PRIVATE]
    currentEdu: {
      // [PRIVATE]
      school: 'primary',
      class: '2',
      schoolName: '',
      schoolAddress: '',
      schoolContact: ''
    },
    extracurricular: [
      // [PUBLIC]
      'Extracurricular activity 1',
      'Extracurricular activity 2'
    ],
    medicalConditions: [
      // [PUBLIC
      'Medical condition 1',
      'Medical condition 2'
    ],
    wishes: [
      // [PRIVATE]
      'Document Wish 1',
      'Document Wish 2'
    ],
    seqNo: 0,
    childId: 2

    // isActive: true,
    // needsCount: 3,
  },
  3: {
    id: 3,
    child_id: '123-2', // COMPOSITE ID [PUBLIC]
    avatarUrl: 'https://example.com/my-avatar.png', // [PUBLIC]
    dob: 'date-of-birth', // [PUBLIC]
    firstName: 'Vijay', // [PUBLIC]
    gender: 'female', // [PUBLIC]
    measurements: {
      // [PUBLIC]
      footSize: '43',
      wardrobeSize: '14'
    },
    lastName: 'LastName', // [PRIVATE]
    currentEdu: {
      // [PRIVATE]
      school: 'primary',
      class: '2',
      schoolName: '',
      schoolAddress: '',
      schoolContact: ''
    },
    extracurricular: [
      // [PUBLIC]
      'Extracurricular activity 1',
      'Extracurricular activity 2'
    ],
    medicalConditions: [
      // [PUBLIC
      'Medical condition 1',
      'Medical condition 2'
    ],
    wishes: [
      // [PRIVATE]
      'Document Wish 1',
      'Document Wish 2'
    ],
    seqNo: 0,
    childId: 3
    // isActive: true,
    // needsCount: 3,
  }
};

export function findChildrenById(childId: number) {
  return CHILDREN[childId];
}

export function findNeedsForChild(childId: number) {
  return Object.values(PRIVATE).filter(child => child.childId === childId);
}
