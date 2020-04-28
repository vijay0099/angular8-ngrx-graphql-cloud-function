const firestoreAutoId = (): string => {
  const CHARS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let autoId = '';

  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return autoId;
};

//=============================================

import * as R from 'ramda';

// DATA
import {
  children,
  needs
} from '../../libs/graphql-playground/data-access-data/src';

const isNestedEnabled = true;
const isRootCleaningEnabled = false;
const isNestedCleaningEnabled = false;

// DATA
const rootCollectionDataSource = children;
const nestedCollectionDataSource = needs;

const rootDocNamingDefinition = ['id', 'firstName'];
const nestedDocNamingDefinition = ['belongsTo', 'id'];
/*
X filter/extract all unique child_id
generate list of unique_id (unique_id.length === children.length)
generate pairs child_id <> doc_id
replace child_id > doc_id
*/
const getId = R.prop('id');
const getIndex = R.prop('index');
const pluckId = R.pluck('id');
const pluckIndex = R.pluck('index');
const pickId = R.pick(['id']);
const pickIndex = R.pick(['index']);

const isDefined = R.complement(R.isNil);
const isItemDefined = R.filter(R.allPass([isDefined]));
const filterData = R.pipe(isItemDefined, R.uniqBy(getId));

// FUNCTION DEFINITION

// String -> String -> {k: v}
const copyPropAs = R.curry((from, to, obj) => R.assoc(to, obj[from], obj));
const removeProp = prop => R.omit(prop);
const removeProps = R.curry((props, data) => R.map(R.omit(props), data));
const renameKey = R.curry((oldKey, newKey, obj) =>
  R.assoc(newKey, R.prop(oldKey, obj), R.dissoc(oldKey, obj))
);
const findValues = (key, value) =>
  R.when(R.has(key), x => R.pick([key], value));

const replaceIndexWithFirestoreAutoId = R.evolve({
  index: () => firestoreAutoId()
});

// const setCombinedDocIdentifier = ([p, s]) => R.map(R.when(R.has(p), R.has(s), x =>
// R.merge(x, { index: `${R.prop(p, x)}_${R.prop(s, x)}`}))
const setCompositeDocIdentifier = ([p, s]: string[]) =>
  R.map(x => R.merge(x, { index: `${R.prop(p, x)}_${R.prop(s, x)}` }));
const extractIdsIndexes = R.map(R.pick(['id', 'index']));

// TODO: FIX IMPURE FUNCTION, MUTATION item = item1.belongsTo = item2.index;
// const transformBelongsTo = (item1, item2) => {
//   // let item ;
//   if (item1.belongsTo === item2.id) {
//     return (item1.belongsTo = item2.index);
//   }
//   // return item;
// };

// const isJoin = (root, nested) => root.belongsTo === nested.id;
// const transformBelongsTo = (item1, item2) => R.filter(isJoin(item1, item2), item1);

const transformBelongsTo = (o1, o2) => {
  if (o1.belongsTo === o2.id) {
    return (o1.belongsTo = o2.index);
  }
};

// const transformIndexToAuto = ({ belongsTo }, { id, index}) => {
//   let item;
//   if (belongsTo === id) {
//     item = belongsTo = index;
//     item;
//     return item;
//   }
// };

// const transformIndex = (item1, item2) => {
//   if (item1.belongsTo === item2.id) {
//     return { belongsTo: item2.index, ...item1 };
//   }
//   return item1;
// };

// const transformIndexToSimple = (item1, item2) => {
//   const item = item1.belongsTo === item2.id;
//   return item;
//   // return item1.belongsTo === item2.id;
// };

// -????
removeProps(rootDocNamingDefinition, rootCollectionDataSource);
// --------------------------------------------------------------------

// DERIVATIONS
const renameIndexToId = renameKey('index', 'id');
const removeIndex = removeProps(['index']);
const copyIdAsIndex = copyPropAs('id', 'index');
const transformIdsToAuto = R.pipe(
  copyIdAsIndex,
  replaceIndexWithFirestoreAutoId,
  renameIndexToId
);

// NAMING METHODS
const addAutoMethod = R.pipe(filterData, R.map(transformIdsToAuto));
const addIndexAsAutoId = R.pipe(
  filterData,
  R.map(R.pipe(copyIdAsIndex, replaceIndexWithFirestoreAutoId))
);
const addRootSimpleMethod = R.pipe(filterData, R.map(copyIdAsIndex));
const addNestedSimpleMethod = R.pipe(filterData, R.map(copyIdAsIndex));
const addRootCompositeMethod = R.pipe(
  filterData,
  R.map(copyIdAsIndex),
  setCompositeDocIdentifier(rootDocNamingDefinition)
);
const addNestedCompositeMethod = R.pipe(
  filterData,
  copyIdAsIndex,
  setCompositeDocIdentifier(nestedDocNamingDefinition)
);

// ROOT COLLECTIONS --------------------------------------------------------------------
// const rootAuto = addAutoMethod(children);
const rootIndexAuto = addIndexAsAutoId(rootCollectionDataSource);
const rootIndexSimple = addRootSimpleMethod(rootCollectionDataSource);
const rootIndexComposite = addRootCompositeMethod(rootCollectionDataSource);

// NESTED COLLECTIONS --------------------------------------------------------------------

const nestedIndexAuto = R.innerJoin(
  transformBelongsTo,
  R.clone(nestedCollectionDataSource),
  rootIndexAuto
);
const nestedIndexSimple = R.innerJoin(
  transformBelongsTo,
  R.clone(nestedCollectionDataSource),
  rootIndexSimple
);
const nestedIndexComposite = R.innerJoin(
  transformBelongsTo,
  R.clone(nestedCollectionDataSource),
  rootIndexComposite
);
