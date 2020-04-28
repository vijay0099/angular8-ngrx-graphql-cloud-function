// Get me all children for this family

export let families = [
  {
    id: '1',
    // id: '12332', // ID! - NUMERIC / INCREMENTED >>> CHILD ID IS DERIVED FROM '12332-1','12332-2'
    category: 'INFANT', // ENUM!
    // childrenNumber: 3, // Number!
    // children: ['childId', 'childId', 'childId'], // ONE_TO_MANY

    isFacebookMember: true, // Boolean
    isActive: true, // Boolean!
    carrierPrimary: {
      firstName: 'Vijay', // String!
      lastName: 'Thakur', // String!
      email: 'example@example.com', // String
      phone: '6895698569', // String
      mobile: '5698548596' // String
    },
    carrierSecondary: {
      firstName: 'Vijay',
      lastName: 'Thakur',
      email: 'example@example.com',
      phone: '5698748569',
      mobile: '9658326598'
    },
    address: {
      addressLine1: 'Phase 8B', // String!
      addressLine2: 'Mohali', // String
      postalCode: '160002', // String!
      city: 'Mohali' // String!
    }
  },
  {
    id: '2',
    //  id: '12345', // ID! - NUMERIC / INCREMENTED >>> CHILD ID IS DERIVED FROM '12332-1','12332-2'
    category: 'TODDLER', // ENUM!
    // childrenNumber: 3, // Number!
    // children: ['childId', 'childId', 'childId'], // ONE_TO_MANY

    isFacebookMember: true, // Boolean
    isActive: true, // Boolean!

    carrierPrimary: {
      firstName: 'Vijay', // String!
      lastName: 'Thakur', // String!
      email: 'example@example.com', // String
      phone: '6895698569', // String
      mobile: '5698548596' // String
    },
    carrierSecondary: {
      firstName: 'Vijay',
      lastName: 'Thakur',
      email: 'example@example.com',
      phone: '5698748569',
      mobile: '9658326598'
    },
    address: {
      addressLine1: 'Phase 8B', // String!
      addressLine2: 'Mohali', // String
      postalCode: '160002', // String!
      city: 'Mohali' // String!
    }
  }
];
export const users = [
  {
    // COMMON FIELDS
    username: 'jane_unknown',
    id: 'user1',
    firstName: 'Vijay',
    lastName: 'Thakur',
    email: 'example@example.com',
    password: '123456',
    phoneNumber: '5698458965',
    dob: '1995-11-03',

    // // SPECIFIC FIELDS
    hasDrivingLicence: true,
    hasVehicle: true,
    foreignLanguages: ['english', 'hindi'],
    comment: 'this is testing comments',
    currentStatus: 'Employed', // [Employed, Unemployed etc]
    profession: 'Doctor', // [Doctor, Student etc]
    activities: ['activity-1', 'activity-2'],
    // FLAGS
    isTutor: false,
    isSponsor: false,
    isSupporter: false,
    isVolunteer: false,
    isVerified: true,
    isActive: true,
    isDeleted: false,
    role: 'ADMIN'
    // // RELATIONAL
    // roleId: 'role-1',

    // // METADATA
    // metadata: {
    //   createdAt: '1995-11-03',
    //   updatedAt: '1995-11-03'
    // }
  },
  {
    username: 'joe1877',
    // COMMON FIELDS
    id: 'user2',
    firstName: 'Dodo',
    lastName: 'Something',
    email: 'vijay@gmail.com',
    password: '123456',
    phoneNumber: '5698458965',
    dob: '1995-11-03',
    role: 'USER'

    // // SPECIFIC FIELDS
    // hasDrivingLicence: true,
    // hasVehicle: true,
    // foreignLanguages: ['english', 'italian'],
    // comment: 'Blah Blah Blah',
    // currentStatus: 'Employed', // [Employed, Unemployed etc]
    // profession: 'Genius', // [Doctor, Student etc]
    // activities: ['activity-3', 'activity-4'],
    // // FLAGS
    // isTutor: false,
    // isSponsor: false,
    // isSupporter: false,
    // isVolunteer: false,
    // isVerified: true,
    // isActive: true,
    // isDeleted: false,
    // // RELATIONAL
    // roleId: 'role-2',

    // // METADATA
    // metadata: {
    //   createdAt: '1995-11-03',
    //   updatedAt: '1995-11-03'
    // }
  }
];

export const usernames = [
  {
    id: '1',
    username: 'jane_unknown',
    firstName: 'Jane',
    lastName: 'Doe'
  },
  {
    id: '2',
    username: 'joe1877',
    firstName: 'Joe',
    lastName: 'Doe'
  }
];

export const galleries = [
  {
    id: 'gallery1',
    galleryType: 'EVENT_GALLERY',
    title: 'MyGallery',
    description: 'This is my gallery',
    images: ['https://image1.jpg', 'https://image2.gif', 'https://image3.png'],
    isActive: true,
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  },
  {
    id: 'gallery2',
    galleryType: 'MISC_GALLERY',
    title: 'MyGallery',
    description: 'This is my gallery',
    images: ['https://image1.jpg', 'https://image2.gif', 'https://image3.png'],
    createdBy: 'user1',
    isActive: true,
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  }
];

export const payments = [
  {
    id: 'payment1',
    paymentType: 'P1',
    userId: 'user1',
    eventId: 'event1',
    isLabeled: false,
    amount: '150',
    currency: 'USD',
    remarks: 'This is test payment',
    status: 'PENDING',
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  },
  {
    id: 'payment2',
    paymentType: 'P2',
    userId: 'user2',
    eventId: 'event2',
    isLabeled: false,
    amount: '270',
    currency: 'USD',
    remarks: 'This is test payment',
    status: 'PAID',
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  }
];

export const expenses = [
  {
    id: 'expense1',
    expenseType: 'RENT',
    title: 'Office Rent',
    description: 'Office Rent ....',
    isLabeled: false,
    amount: '120',
    currency: 'USD',
    expenseDate: '2020-02-02',
    createdBy: 'user1',
    isActive: true,
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  },
  {
    id: 'expense2',
    expenseType: 'FUEL',
    title: 'Office Fuel',
    description: 'Office Fuel ....',
    isLabeled: false,
    amount: '120',
    currency: 'USD',
    expenseDate: '2020-02-02',
    createdBy: 'user1',
    isActive: true,
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  }
];

export const activities = [
  {
    id: 'activity1',
    activityType: 'T1',
    activity: 'Activity 1',
    description: 'Test Description',
    isActive: true,
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  },
  {
    id: 'activity2',
    activityType: 'T2',
    activity: 'Activity 2',
    description: 'Test Description',
    isActive: true,
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  }
];

export const children = [
  {
    id: 'child1',
    familyId: '1', // ONE_TO_ONE
    firstName: 'Karl child1',
    lastName: 'Marx',
    gender: 'MALE',
    dob: '2020-01-02',
    childAge: 'NEWBORN',

    isActive: true,
    city: 'Zagreb',
    avatarUrl: 'https://example.com/my-avatar.png',
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
  {
    id: 'child2',
    familyId: '2', // ONE_TO_ONE
    firstName: 'child2',
    lastName: 'Roga',
    gender: 'FEMALE',
    dob: '666-06-06',
    childAge: 'ADOLESCENT',

    isActive: true,
    avatarUrl: 'https://example.com/my-avatar.png',
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
  {
    id: 'child3',
    familyId: '2', // ONE_TO_ONE
    firstName: 'child3',
    lastName: 'Roga',
    gender: 'FEMALE',
    dob: '666-06-06',
    childAge: 'ADOLESCENT',

    isActive: true,
    avatarUrl: 'https://example.com/my-avatar.png',
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
  {
    id: 'child3',
    firstName: 'Hans-Georg',
    lastName: 'Gadamer',
    gender: 'MALE',
    dob: '666-06-06',
    childAge: 'ADOLESCENT',

    isActive: true,
    avatarUrl: 'https://example.com/my-avatar.png',
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
  }
];

export const needs = [
  // PATRICIA'S NEEDS
  {
    id: 'need1',
    needType: 'MATERIAL',
    title: 'A birthday present',
    description: 'Something suitable for a girl/boy her/his age.',
    isLongTermNeed: true,
    isActive: true,
    seqNo: 1,

    // JOINTS
    belongsTo: 'child1'
  },
  {
    id: 'need2',
    needType: 'FINANCIAL',
    title: 'Financial aid monthly',
    description: '$200 per month.',
    isLongTermNeed: true,
    isActive: true,
    seqNo: 1,

    // JOINTS
    belongsTo: 'child2'
  },
  {
    id: 'need3',
    needType: 'EDUCATIONAL',
    title: 'Tutelage',
    description: 'Instructions for Math',
    isLongTermNeed: true,
    isActive: true,
    seqNo: 1,

    // JOINTS
    belongsTo: 'child1'
  },
  {
    id: 'need4',
    needType: 'EDUCATIONAL',
    title: 'Need 4',
    description: 'Instructions for Math',
    isLongTermNeed: true,
    isActive: true,
    seqNo: 1,

    // JOINTS
    belongsTo: 'child2'
  },
  {
    id: 'need5',
    needType: 'EDUCATIONAL',
    title: 'Need 5',
    description: 'Instructions for Math',
    isLongTermNeed: true,
    isActive: true,
    seqNo: 1,

    // JOINTS
    belongsTo: 'child2'
  }
];

export const events = [
  {
    eventType: 'VOLUNTEER_EVENT',
    id: '10',
    title: 'Event 10 Title!',
    subtitle: 'Event 10 Title',
    isActive: true
  },
  {
    eventType: 'VOLUNTEER_EVENT',
    id: '20',
    title: 'Event 10 Title',
    subtitle: 'Event 10 Title',
    isActive: true
  }
];

export const posts = [
  {
    id: 'post1',
    title: 'Post I',
    image: 'post1.jpg',
    longDescription: 'Post I Long Description!',
    shortDescription: 'Post I Short Description!',
    isActive: true,
    isDeleted: false,
    createdBy: 'user1',
    metadata: {
      lastUpdated: '2020-03-07 12:21',
      createdAt: '2020-03-07 12:21'
    }
  },
  {
    id: 'post2',
    title: 'Post II',
    image: 'post2.jpg',
    longDescription: 'Post II Long Description!',
    shortDescription: 'Post II Short Description!',
    isActive: true,
    isDeleted: false,
    createdBy: 'user2',
    metadata: {
      lastUpdated: '2020-03-07 12:21',
      createdAt: '2020-03-07 12:21'
    }
  }
];

export const comments = [
  {
    id: 'comment1',
    comment: 'Comment 1',
    isDeleted: false,
    belongsTo: 'post1',
    createdBy: 'user1',
    metadata: {
      lastUpdated: '2020-03-07 12:21',
      createdAt: '2020-03-07 12:21'
    }
  },
  {
    id: 'comment2',
    comment: 'Comment 2',
    isDeleted: false,
    belongsTo: 'post2',
    createdBy: 'user2',
    metadata: {
      lastUpdated: '2020-03-07 12:21',
      createdAt: '2020-03-07 12:21'
    }
  },
  {
    id: 'comment3',
    comment: 'Comment 3',
    isDeleted: false,
    belongsTo: 'post1',
    createdBy: 'user3',
    metadata: {
      lastUpdated: '2020-03-07 12:21',
      createdAt: '2020-03-07 12:21'
    }
  }
];

export const rewards = [
  {
    id: 'reward1',
    level: 'BRONZE',
    startPoint: 0,
    endPoint: 5,
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  },
  {
    id: 'reward2',
    level: 'SILVER',
    startPoint: 5,
    endPoint: 10,
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  },
  {
    id: 'reward3',
    lavel: 'GOLD',
    startPoint: 10,
    endPoint: 15,
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  }
];

export const valorization = [
  {
    id: 'valorization1',
    userId: 'user1',
    point: 1,
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  },
  {
    id: 'valorization2',
    userId: 'user1',
    point: 2,
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  }
];

// HOLDS ALL NOTIFICATIONS
export const notifications = [
  {
    id: 'notification1',
    notificationType: 'CHRISTMAS_GIFT',
    title: 'Christmas Gift',
    message: 'Christmas Gift Notification',
    content: {
      id: 'event1'
    },
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  },
  {
    id: 'notification2',
    notificationType: 'EASTER_GIFT',
    title: 'Easter Gift',
    message: 'Easter Gift Notification',
    content: {
      id: 'event2'
    },
    createdBy: 'user2',
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  }
];

// HOLDS NOTIFICATIONS OF USERS
export const notificationUsers = [
  {
    id: 'notifuser1',
    notificationId: 'notification1',
    userId: 'user1',
    isRead: false,
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  },
  {
    id: 'notifuser2',
    notificationId: 'notification2',
    userId: 'user2',
    isRead: false,
    createdBy: 'user1',
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  },
  {
    id: 'notifuser3',
    notificationId: 'notification3',
    userId: 'user1',
    createdBy: 'user1',
    isRead: false,
    isDeleted: false,
    createdAt: '2020-03-07 12:44'
  }
];


// HOLDS NOTIFICATIONS OF USERS
export const categories = [
  {
    id: 'family',
    values : [
      'FAMILY',
      'SAFE HOUSE',
      'ORPHANAGE',
      'SANCTUARY',
      'REFUGEE CAMP'
    ],
  },
  {
    id: 'child',
    values : [
      'NEWBORN',
      'INFANT',
      'TODDLER',
      'PRESCOOLER',
      'STUDENT',
      'ADOLESCENT'
    ],
  },
  {
    id: 'event',
    values : [
      'SUPPORTER_EVENT',
      'SPONSOR_EVENT',
      'VOLUNTEER_EVENT'
    ],
  }

]