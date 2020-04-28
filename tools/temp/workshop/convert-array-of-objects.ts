const R = require('ramda');

const idToSelect = '789';

const peopleArray = [
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

// const arrayToObject = (arr, keyField) =>
//   Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));

// const arrayToObject = (array, keyField) =>
//   array.reduce((obj, item) => {
//     obj[item[keyField]] = item;
//     return obj;
//   }, {});

// const peopleObject = arrayToObject(peopleArray, 'id');
// // console.log(peopleObject);

// const deepCopyWithRamdaClone = R.clone(peopleObject);

// const wrapperArr = Array.of(deepCopyWithRamdaClone);
// // const result = wrapperArr.push(peopleObject);

// // // console.log(peopleObject[idToSelect]);
// console.log(wrapperArr);

// function renameKeys(obj, newKeys) {
//   const keyValues = Object.keys(obj).map(key => {
//     const newKey = newKeys[key] || key;
//     return { [newKey]: obj[key] };
//   });
//   return Object.assign({}, ...keyValues);
// }

// const obj = { a: '1', b: '2' };
// const newKeys = { a: 1, c: 2 };
// const renamedObj = renameKeys(obj, newKeys);
// console.log(renamedObj);
// // {A:"1", b:"2"}

// let res = states.map((val) => {
//   const country = Object.keys(val)[0]; // Get the name of the country, e.g. USA
//   return { // Return the new object structure
//     label: country,
//     items: val[country].map((item) => ({label: item.abbreviation, value: item.name}))
//   }
// });

// // Log the value
// console.log(res);

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

// // 1) INSERT A KEY IN EACH OBJECT WITH INCREMENTED VALUE

// const transformedArr = galleries.map((item, index) =>
//   Object.assign({}, item, { idx: index + 1 })
// );

// console.log('transformedArr = ', transformedArr);

// 1) MAKE AN OBJECT OUT OF A LIST, WITH KEYS DERIVED FROM EACH ELEMENT
const objFromListWith = R.curry((fn, list) =>
  R.chain(R.zipObj, R.map(fn))(list)
);

const objectOutOfaList = objFromListWith(R.prop('id'), galleries);

console.log('objectOutOfaList = ', objectOutOfaList);

// 2) WRAP IT IN ARRAY
const deepCopyWithRamdaClone = R.clone(objectOutOfaList);

const wrappedInArray = Array.of(deepCopyWithRamdaClone);

console.log(wrappedInArray);

// const myprop = transformedArr.filter(function(props) {
//   delete props.idx;
//   return true;
// });
// console.log(myprop);

// ==========================================================

// const deepCopyWithRamdaClone = R.clone(objectOutOfaList);

// const wrappedInArray = Array.of(deepCopyWithRamdaClone);

// console.log(wrappedInArray);

// console.log(wrappedInArray[0]);

// const friends = [
//   {
//     age: 10,
//     name: 'Castillo'
//   },
//   {
//     age: 11,
//     name: 'Daugherty'
//   },
//   {
//     age: 12,
//     name: 'Travis'
//   }
// ];

// Using .map() to add incrementing values to JS objects

// const newArr = friends.map((friend, index) =>
//   Object.assign({}, friend, { id: index + 1 })
// );

// console.log(newArr);
