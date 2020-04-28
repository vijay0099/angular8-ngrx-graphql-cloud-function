export const galleries = [
  {
    id: 'gallery1',
    galleryType: 'EVENT_GALLERY',
    title: 'MyGallery',
    description: 'This is my gallery',
    images: ['https://image1.jpg', 'https://image2.gif', 'https://image3.png'],
    isActive: true,
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
    isActive: true,
    isDeleted: false,
    createdAt: '2020-02-02',
    updatedAt: '2020-02-03'
  }
];

export const parents = [
  {
    id: 'Felix',
    title: 'Parent Felix'
  },
  {
    id: 'Angel',
    title: 'Parent Angel'
  },
  {
    id: 'Anna',
    title: 'Parent Anna'
  }
];

export const children = [
  {
    id: '1',
    title: 'Child 1',
    parentId: 'Angel'
  },
  {
    id: '2',
    title: 'Child 2',
    parentId: 'Angel'
  },
  {
    id: '3',
    title: 'Child 3',
    parentId: 'Angel'
  },
  {
    id: '4',
    title: 'Child 2',
    parentId: 'Felix'
  },
  {
    id: '5',
    title: 'Child 3',
    parentId: 'Anna'
  }
];
