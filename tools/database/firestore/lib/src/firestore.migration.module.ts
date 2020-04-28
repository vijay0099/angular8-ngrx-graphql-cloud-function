import * as firebase from 'firebase';
const R = require('ramda');

import { Settings } from './interfaces/settings.interface';

const colors = require('colors');
colors.enable();

// PROPERTY DEFINITION
const getId = R.prop('id');
const getIndex = R.prop('index');
const pluckId = R.pluck('id');
const pluckIndex = R.pluck('index');
const pickId = R.pick(['id']);
const pickIndex = R.pick(['index']);
const isDefined = R.complement(R.isNil);
const isItemDefined = R.filter(R.allPass([isDefined]));
const filterData = R.pipe(isItemDefined, R.uniqBy(getId));
const hasNested = R.has('nested');
const hasNestedCollectionDataSource = R.has('nestedCollectionDataSource');
const hasNestedCollectionName = R.has('nestedCollectionName');
const hasNestedDocNamingMethod = R.has('nestedDocNamingMethod');
const hasNestedDocNamingDefinition = R.has('nestedDocNamingDefinition');
const hasNestedCleaningDefinition = R.has('nestedCleaningDefinition');
const hasJointFieldName = R.has('jointFieldName');
const hasRootDocNamingDefinition = R.has('rootDocNamingDefinition');
const isNestedConfiguration = R.allPass([
  isDefined,
  hasNestedCollectionDataSource,
  hasNestedCollectionName,
  hasNestedDocNamingMethod,
  hasNestedDocNamingDefinition,
  hasNestedCleaningDefinition,
  hasJointFieldName
]);
const checkNestedSettings = R.pipe(isNestedConfiguration);

// FUNCTION DEFINITION
const firestoreAutoId = (): string => {
  const CHARS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return autoId;
};

function filterNestedObjById(jointFieldName: string, index: string, obj: any) {
  return Object.values(obj).filter(key => key[jointFieldName] === index);
}

function createObjectOutOfaList(value) {
  const objFromListWith = R.curry((fn, list) =>
    R.chain(R.zipObj, R.map(fn))(list)
  );
  return objFromListWith(R.prop('id'), value);
}

const removeKey = R.curry((keyName, data: any) => {
  const newData: any = { ...data };
  delete newData[keyName];
  return newData;
});

const removeIndex = removeKey('index');

const setSimpleDocName = R.curry((list, obj) =>
  R.pipe(R.pick(list), R.toPairs, R.pluck(1), R.join('_'))(obj)
);

const setCompositeDocName = R.curry((list, obj) =>
  R.pipe(R.pick(list), R.toPairs, R.pluck(1), R.join('_'))(obj)
);

// String -> String -> {k: v}
const copyPropAs = R.curry((from, to, obj) => R.assoc(to, obj[from], obj));

const replaceIndexWithFirestoreAutoId = R.evolve({
  index: () => firestoreAutoId()
});

const setCompositeDocIdentifier = ([p, s]: string[]) =>
  R.map(x => R.merge(x, { index: `${R.prop(p, x)}_${R.prop(s, x)}` }));

const transformBelongsTo = (o1, o2) => {
  if (o1.belongsTo === o2.id) {
    // SIDE EFFECTS TODO: TO FIX
    return (o1.belongsTo = o2.index);
  }
};

const copyIdAsIndex = copyPropAs('id', 'index');
const copyBelongsToAsIndex = copyPropAs('belongsTo', 'index');

const jointWith = R.curry((n, r) =>
  R.innerJoin(transformBelongsTo, R.clone(n), r)
);

// NAMING METHODS
const createIndexFromFirestoreId = R.pipe(
  filterData,
  R.map(R.pipe(copyIdAsIndex, replaceIndexWithFirestoreAutoId))
);

const createIndexFromId = R.pipe(filterData, R.map(copyIdAsIndex));

const createIndexFromBelongsTo = R.pipe(
  filterData,
  R.map(copyBelongsToAsIndex)
);

async function uploadDataToFirestore({ root, nested }: Settings, db) {
  const {
    rootCollectionDataSource,
    rootCollectionName,
    rootDocNamingMethod = 'AUTO',
    rootDocNamingDefinition = ['index'],
    rootCleaningDefinition = ['index'],
    hasNestedCollection = false
  } = root;

  const {
    nestedCollectionDataSource = null,
    nestedCollectionName = 'no_nested_collection',
    nestedDocNamingMethod = 'SIMPLE',
    nestedDocNamingDefinition = ['index'],
    nestedCleaningDefinition = ['index'],
    jointFieldName = 'index'
  } = nested || {};

  // OBJECTS
  let rootObj, nestedObj;

  // SET JOINTS
  const joint = nested
    ? jointWith(nestedCollectionDataSource)
    : R.identity(null);

  // SET DATABASE REFS
  const batch = db.batch();

  // SET FLAGS
  const isNestingEnabled =
    !!nested && hasNestedCollection && !!nestedCollectionDataSource;
  const isRootCleaningEnabled = !!root && !!rootCleaningDefinition;
  const isNestedCleaningEnabled =
    !!nested &&
    hasNestedCollection &&
    !!nestedCollectionDataSource &&
    !!nestedCleaningDefinition;
  const isRootAuto: boolean = R.equals(rootDocNamingMethod, 'AUTO');
  const isRootSimple: boolean = R.equals(rootDocNamingMethod, 'SIMPLE');
  const isRootComposite: boolean = R.equals(rootDocNamingMethod, 'COMPOSITE');
  const isNestedAuto: boolean = R.and(
    R.equals(isNestingEnabled, true),
    R.equals(nestedDocNamingMethod, 'AUTO')
  );
  const isNestedSimple: boolean = R.and(
    R.equals(isNestingEnabled, true),
    R.equals(nestedDocNamingMethod, 'SIMPLE')
  );
  const isNestedComposite: boolean = R.and(
    R.equals(isNestingEnabled, true),
    R.equals(nestedDocNamingMethod, 'COMPOSITE')
  );

  // SET SIMPLE NAMING
  const setRootSimpleDocName = setSimpleDocName(rootDocNamingDefinition);
  const setNestedSimpleDocName = setSimpleDocName(nestedDocNamingDefinition);

  // SET COMPOSITE NAMING
  const setRootCompositeDocName = setCompositeDocName(rootDocNamingDefinition);
  const setNestedCompositeDocName = setCompositeDocName(
    nestedDocNamingDefinition
  );

  // SET INDEX CREATION
  const createIndexCompositeId = R.pipe(
    filterData,
    R.map(copyIdAsIndex),
    setCompositeDocIdentifier(rootDocNamingDefinition)
  );

  // SETTINGS ERRORS
  if (isRootAuto && hasRootDocNamingDefinition(root)) {
    throw new Error(
      `\n\nSETTINGS ERROR. Since naming method is set to 'AUTO', 'rootDocNamingDefinition' field is not required.\n\n`
    );
  }

  if (isNestedAuto && hasNestedDocNamingDefinition(nested)) {
    throw new Error(
      `\n\nSETTINGS ERROR. Since naming method is set to 'AUTO', 'nestedDocNamingDefinition' field is not required.\n\n`
    );
  }

  if (hasNestedCollection && !nested) {
    throw new Error(
      `\n\nSETTINGS ERROR. The nested settings object does not exist.\n\n`
    );
  }

  if (!hasNestedCollection && nested) {
    throw new Error(
      `\n\nSETTINGS ERROR. Nesting is disabled. Nested settings object is not required.\n\n`
    );
  }

  // ROOT OBJECT
  isRootAuto
    ? (rootObj = createIndexFromFirestoreId(rootCollectionDataSource))
    : R.identity(rootObj);

  isRootSimple
    ? (rootObj = createIndexFromId(rootCollectionDataSource))
    : R.identity(rootObj);

  isRootComposite
    ? (rootObj = createIndexCompositeId(rootCollectionDataSource))
    : R.identity(rootObj);

  // NESTED OBJECT
  isRootAuto && (isNestedAuto || isNestedSimple || isNestedComposite)
    ? (nestedObj = joint(createIndexFromFirestoreId(rootCollectionDataSource)))
    : R.identity(nestedObj);

  isRootSimple && (isNestedAuto || isNestedSimple || isNestedComposite)
    ? (nestedObj = joint(createIndexFromId(rootCollectionDataSource)))
    : R.identity(nestedObj);

  isRootComposite && (isNestedAuto || isNestedSimple || isNestedComposite)
    ? (nestedObj = joint(createIndexCompositeId(rootCollectionDataSource)))
    : R.identity(nestedObj);

  // TRANSFORMATION::: 'belongsTo' -> 'index'
  isNestingEnabled
    ? (nestedObj = createIndexFromBelongsTo(nestedObj))
    : R.identity(nestedObj);

  // LOGGING
  console.log(colors.brightYellow('\n<object_root>\n\n', rootObj));

  isNestingEnabled
    ? console.log(colors.brightMagenta('\n<object_nested>\n\n', nestedObj))
    : console.log(
        colors.brightRed('\nNo <object_nested> since nesting is disabled!\n\n')
      );

  // TRANSFORMATION::: [OBJECTS] -> {id:{OBJECT}}
  rootObj = createObjectOutOfaList(rootObj);

  // LOGGING
  console.log(
    colors.bgGray(
      colors.black(`\n WRITING COLLECTION >>> "${rootCollectionName}"`)
    )
  );

  if (nestedCollectionName) {
    console.log(
      colors.bgWhite(
        colors.black(`\n WRITING COLLECTION >>> "${nestedCollectionName}"\n`)
      )
    );
  }

  // WRITING ROOT COLLECTION
  Object.values(rootObj).forEach(async (rootNode: any) => {
    let rootDocName;

    isRootAuto ? (rootDocName = firestoreAutoId()) : R.identity(rootDocName);

    isRootSimple
      ? // ? (rootDocName = rootDocName['index'])
        (rootDocName = setRootSimpleDocName(rootNode))
      : R.identity(rootDocName);

    isRootComposite
      ? (rootDocName = setRootCompositeDocName(rootNode))
      : R.identity('rootDocName > ', rootDocName);

    const docRef = db.collection(rootCollectionName).doc(rootDocName);

    const sanitizedRootDocument = isRootCleaningEnabled
      ? R.omit(rootCleaningDefinition, rootNode)
      : R.identity(rootNode);

    const rootDocument = removeIndex(sanitizedRootDocument);

    // LOGGING
    console.log(
      colors.bgGray(colors.black(`\n"${rootDocName}"\n`)),
      colors.bgGray(colors.black(rootDocument))
    );

    batch.set(docRef, rootDocument);

    // NESTED COLLECTION
    if (isNestingEnabled) {
      const nestedCollection = docRef.collection(nestedCollectionName);

      const filteredNestedObject = filterNestedObjById(
        jointFieldName,
        rootNode.index,
        nestedObj
      );

      // WRITING NESTED COLLECTION
      filteredNestedObject.forEach(async nestedNode => {
        let nestedDocName;

        isNestedAuto
          ? (nestedDocName = firestoreAutoId())
          : R.identity(nestedDocName);

        isNestedSimple
          ? // ? (nestedDocName = nestedNode['id'])
            (nestedDocName = setNestedSimpleDocName(nestedNode))
          : R.identity(nestedDocName);

        isNestedComposite
          ? (nestedDocName = setNestedCompositeDocName(nestedNode))
          : R.identity(nestedDocName);

        const sanitizedNestedDocument = isNestedCleaningEnabled
          ? R.omit(nestedCleaningDefinition, nestedNode)
          : R.identity(nestedNode);

        const nestedDocument = removeIndex(sanitizedNestedDocument);

        // LOGGING
        console.log(
          colors.bgWhite(colors.black(`\n"${nestedDocName}"\n`)),
          colors.bgWhite(colors.black(nestedDocument))
        );

        await nestedCollection.doc(nestedDocName).set(nestedDocument);
      });
    }
  });

  // SAVE TO DB
  return batch.commit();
}

// INIT FUNCTIONS
export function createCollections(settings: Settings, db) {
  uploadDataToFirestore(settings, db)
    .then(() => {
      console.log(
        colors.green('\nWriting data into Firestore, please wait...\n')
      );

      setTimeout(() => {
        console.log(
          colors.brightGreen.underline(
            '\nData Upload Successfully Completed!\n\n'
          )
        );
        process.exit(0);
      }, 10000);
    })
    .catch(err => {
      console.log(
        colors.brightRed.underline(
          '\n\nData upload failed, reason:',
          err,
          '\n\n'
        )
      );
      process.exit(-1);
    });
}

export function initializeFirestore(config) {
  console.log(
    colors.brightGreen(
      '\nUploading data to the database with the following config:\n'
    )
  );
  console.log(colors.green(JSON.stringify(config)));
  console.log(
    colors.brightRed.underline(
      '\n\nMake sure that this is your own database, so that you have write access to it.\n\n'
    )
  );
  const db = firebase.initializeApp(config);
  return db.firestore();
}
