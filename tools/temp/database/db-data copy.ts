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

export const CHILDREN: any = {
  // PATRICIA'S PROFILE
  1: {
    id: 1,
    isActive: true,
    firstName: 'Vijay',
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
    needsCount: 3,
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

export const EVENTS: any = {
  1: {
    event_id: 1,
    event_type: 'type',
    event_logo: 'https://example.com/my-avatar.png',
    title: 'First Event',
    subtitle: 'Event',
    supporter: 1,
    volunteer: 1,
    sponsor: 0,
    labor: 0,
    items: 1,
    money: 1,
    frequency: 'Permanent/One-time',
    needs: 'Single-need/Multiple-need',
    payment_frequency: 'One-time/Recurring',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    short_description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    start_date: '2019-03-01',
    end_date: '2019-03-10',
    start_time: '10:00',
    end_time: '18:00',
    location: 'Location',
    volunteer_job: 'JOB',
    volunteer_number: '12154',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  },
  2: {
    event_id: 2,
    event_type: 'type',
    event_logo: 'https://example.com/my-avatar.png',
    title: 'Second Event',
    subtitle: 'Event',
    supporter: 1,
    volunteer: 1,
    sponsor: 0,
    Labor: 0,
    Items: 1,
    Money: 1,
    frequency: 'Permanent/One-time',
    needs: 'Single-need/Multiple-need',
    payment_frequency: 'One-time/Recurring',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    short_description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    start_date: '2019-03-10',
    end_date: '2019-03-20',
    start_time: '09:00',
    end_time: '17:00',
    location: 'Location',
    volunteer_job: 'JOB',
    volunteer_number: '12154',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const VOLUNTEER: any = {
  1: {
    id: 1,
    birthday_date: '1995-05-18',
    location: 'Event',
    contact: '6598569856',
    has_driving_licence: 1,
    has_vehicle: 1,
    foreign_languages: ['English', 'Deutch'],
    comments:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    activities: ['physical labour', 'projects creating'],
    tutor: [],
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const SPONSER: any = {
  1: {
    id: 1,
    birthday_date: '1995-05-18',
    location: 'Event',
    contact: '6598569856',
    has_driving_licence: 1,
    has_vehicle: 1,
    foreign_languages: ['English', 'Deutch'],
    comments:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    activities: ['physical labour', 'projects creating'],
    tutor: [],
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const EMPLOYEES: any = {
  1: {
    id: 1,
    birthday_date: '1995-05-18',
    location: 'Event',
    contact: '6598569856',
    has_driving_licence: 1,
    has_vehicle: 1,
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const POSTS: any = {
  1: {
    id: 1,
    title: '1995-05-18',
    image: 'https://example.com/my-avatar.png',
    long_description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    short_description: 'Reference site about Lorem Ipsum.',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const GALLERY_TYPE: any = {
  1: {
    id: 1,
    name: 'Chlidren',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const GALLERIES: any = {
  1: {
    id: 1,
    title: '1995-05-18',
    image: 'https://example.com/my-avatar.png',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const ACTIVITY: any = {
  1: {
    id: 1,
    activity: 'type',
    description: 'Project creatiing',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const TUTELAGE_AREAS: any = {
  1: {
    id: 1,
    subject: 'History',
    level: 'High School',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const REWARDS_LEVELS: any = {
  1: {
    id: 1,
    lavel: 'Iron',
    start_point: 1,
    end_point: 5,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const VALORIZATION: any = {
  1: {
    id: 1,
    user_id: 1,
    point: 5,
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const EXPENSES: any = {
  1: {
    id: 1,
    type: 'rent',
    is_labeled: 1,
    currency: 'USD',
    amount: '05.00',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export const PAYMENTS: any = {
  1: {
    id: 1,
    user_id: 1,
    event_id: 1,
    is_labeled: 1,
    currency: 'USD',
    amount: '05.00',
    remarks:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export function findChildrenById(childId: number) {
  return CHILDREN[childId];
}

export function findNeedsForChild(childId: number) {
  return Object.values(NEEDS).filter(child => child.childId === childId);
}
