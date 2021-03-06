// EXAMPLE NESTED DATA MODEL
// COLLECTION=CHILDREN, SUB COLLECTION=NEEDS
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
child - profile; // "child-profile" [client-app]
private; // "child-profile/private" [admin-app]
export const CHILDREN = {
    // PATRICIA'S PROFILE
    1: {
        // PUBLIC COLLECTION ---------------------------------------------------
        id: 1,
        child_id: '123-2',
        avatarUrl: 'https://example.com/my-avatar.png',
        dob: 'date-of-birth',
        firstName: 'Vijay',
        gender: 'female',
        measurements: {
            // [PUBLIC]
            footSize: '43',
            wardrobeSize: '14'
        },
        currentEdu: {
            // [PUBLIC]
            school: 'primary',
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
        // PRIVATE COLLECTION ---------------------------------------------------
        child_id: '123-2',
        avatarUrl: 'https://example.com/my-avatar.png',
        dob: 'date-of-birth',
        firstName: 'Vijay',
        gender: 'female',
        measurements: {
            // [PUBLIC]
            footSize: '43',
            wardrobeSize: '14'
        },
        lastName: 'LastName',
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
        seqNo: 0
        // isActive: true,
        // needsCount: 3,
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
export const NEEDS = {
    // PATRICIA'S NEEDS
    1: {
        id: 1,
        type: 'material',
        title: 'A birthday present',
        description: 'Something suitable for a girl/boy her/his age.',
        isLongTermNeed: true,
        isActive: true,
        seqNo: 1,
        childId: 1
    },
    2: {
        id: 2,
        type: 'financial',
        title: 'Financial aid monthly',
        description: '$200 per month.',
        isLongTermNeed: true,
        isActive: true,
        seqNo: 1,
        childId: 1
    },
    3: {
        id: 3,
        type: 'educational',
        title: 'Tutelage',
        description: 'Instructions for Math',
        isLongTermNeed: true,
        isActive: true,
        seqNo: 1,
        childId: 1
    },
    // MARCO'S NEEDS
    4: {
        id: 4,
        type: 'material',
        title: 'A birthday present',
        description: 'Something suitable for a girl/boy her/his age.',
        isLongTermNeed: true,
        isActive: true,
        seqNo: 1,
        childId: 2
    },
    5: {
        id: 5,
        type: 'financial',
        title: 'Financial aid monthly',
        description: '$200 per month.',
        isLongTermNeed: true,
        isActive: true,
        seqNo: 1,
        childId: 2
    },
    // GRETA'S NEEDS
    6: {
        id: 6,
        type: 'material',
        title: 'A birthday present',
        description: 'Something suitable for a girl/boy her/his age.',
        isLongTermNeed: true,
        isActive: true,
        seqNo: 1,
        childId: 3
    }
};
export function findChildrenById(childId) {
    return CHILDREN[childId];
}
export function findNeedsForChild(childId) {
    return Object.values(NEEDS).filter(child => child.childId === childId);
}
//# sourceMappingURL=temp.js.map