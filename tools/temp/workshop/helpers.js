import * as tslib_1 from "tslib";
const colors = require('colors');
colors.enable();
const R = require('ramda');
import * as firebase from 'firebase';
export var Naming;
(function (Naming) {
    Naming["Auto"] = "AUTO";
    Naming["Simple"] = "SIMPLE";
    Naming["Combined"] = "COMBINED"; // AA_BB
})(Naming || (Naming = {}));
function checkDocumentNameMethod(method, IndexDefinition, data) {
    switch (method) {
        case 'COMBINED':
            return setCombinedDocName(method, IndexDefinition, data);
            break;
        case 'SIMPLE':
            return setSimpleDocName(method, IndexDefinition, data);
            break;
        case 'AUTO':
            return data;
            break;
        default:
            return;
    }
}
function setCombinedDocName(opt, [prefix, suffix], data) {
    console.log(colors.bold.white(`${opt} document naming is used with a combination of fields: ${suffix}, ${prefix}\n`));
    const findValues = R.when(R.has(prefix), R.has(suffix), x => R.merge(x, {
        index: `${R.prop(prefix, x)}_${R.prop(suffix, x)}`
    }));
    return R.map(findValues, data);
}
function setSimpleDocName(opt, [name], data) {
    console.log(colors.bold.white(`${opt} document naming is used with a field: ${name}\n`));
    const findValues = R.when(R.has(name), x => R.merge(x, {
        index: R.prop(name, x)
    }));
    return R.map(findValues, data);
}
function findObjById(obj, id) {
    return obj[id];
}
function createObjectOutOfaList(data) {
    const objFromListWith = R.curry((fn, list) => R.chain(R.zipObj, R.map(fn))(list));
    return objFromListWith(R.prop('id'), data);
}
function filterNestedObjById(jointFieldName, id, nestedObj) {
    return Object.values(nestedObj).filter(key => key[jointFieldName] === id);
}
function removeKey(keyName, data) {
    const newData = Object.assign({}, data);
    delete newData[keyName];
    return newData;
}
export function initializeFirestore(config) {
    console.log(colors.brightGreen('\nUploading data to the database with the following config:\n'));
    console.log(colors.green(JSON.stringify(config)));
    console.log(colors.brightRed.underline('\n\nMake sure that this is your own database, so that you have write access to it.\n\n'));
    const db = firebase.initializeApp(config);
    return db.firestore();
}
function uploadDataToFirestore({ root, nested }, db) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { rootCollectionDataSource, rootCollectionName, rootDocNamingMethod, rootIndexDefinition, hasNestedCollection } = root;
        const { nestedCollectionDataSource = null, nestedCollectionName = 'default', // IF FIELD DOES NOT EXISTS, NON-EMPTY STRING IS REQUIRED
        nestedDocNamingMethod = true, // IF FIELD DOES NOT EXISTS RETURNS TRUE
        nestedIndexDefinition = [], jointFieldName = 'belongsTo' } = nested || {};
        const isNestedEnabled = nested && hasNestedCollection && nestedCollectionDataSource;
        const rootCollectionConfig = `Root collection config:
      rootCollectionDataSource: 'data source provided',
      rootCollectionName: '${root.rootCollectionName}',
      rootDocNamingMethod: '${root.rootDocNamingMethod}',
      rootIndexDefinition: '${root.rootIndexDefinition}',
      hasNestedCollection: '${root.hasNestedCollection}',
      `;
        console.log(colors.brightGreen(rootCollectionConfig));
        if (isNestedEnabled) {
            const nestedCollectionConfig = `Nested collection config:
        nestedCollectionDataSource: 'data source provided',
        nestedCollectionName: '${nested.nestedCollectionName}',
        nestedDocNamingMethod: '${nested.nestedDocNamingMethod}',
        nestedIndexDefinition: '${nested.nestedIndexDefinition}'
        jointFieldName: '${nested.jointFieldName}'
    `;
            console.log(colors.brightGreen(nestedCollectionConfig));
        }
        const batch = db.batch();
        const rootCollection = db.collection(rootCollectionName);
        const rootObjWithAddedIndex = checkDocumentNameMethod(rootDocNamingMethod, rootIndexDefinition, rootCollectionDataSource);
        // console.log(colors.red(nested));
        let nestedDataWithIndexProp;
        isNestedEnabled
            ? (nestedDataWithIndexProp = checkDocumentNameMethod(nestedDocNamingMethod, nestedIndexDefinition, nestedCollectionDataSource))
            : (nestedDataWithIndexProp = undefined);
        // TRANSFORMATION :: ARRAY OF OBJECTS >>> OBJECT
        const transformedRootObj = createObjectOutOfaList(rootObjWithAddedIndex);
        let transformedNestedObj;
        isNestedEnabled
            ? (transformedNestedObj = createObjectOutOfaList(nestedDataWithIndexProp))
            : console.log(colors.brightMagenta('\nNesting is disabled.\n'));
        // [AUTO && AUTO]
        if (rootDocNamingMethod === 'AUTO' && nestedDocNamingMethod === 'AUTO') {
            Object.values(transformedRootObj).forEach((rootNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log(colors.bgGray(colors.black('rootNode = ', rootNode)));
                // [AUTO]
                const rootCollectionRef = yield rootCollection.add(rootNode);
                if (isNestedEnabled) {
                    const nestedCollection = rootCollectionRef.collection(nestedCollectionName);
                    const filteredNestedObject = filterNestedObjById(jointFieldName, rootNode.id, transformedNestedObj);
                    filteredNestedObject.forEach((nestedNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        console.log(colors.bgYellow(colors.black('nestedNode = ', nestedNode)));
                        // [AUTO]
                        yield nestedCollection.add(nestedNode);
                    }));
                }
            }));
        }
        // [NON_AUTO && NON_AUTO]
        if (rootDocNamingMethod !== 'AUTO' && nestedDocNamingMethod !== 'AUTO') {
            Object.values(transformedRootObj).forEach((rootNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log(colors.bgGray(colors.black('rootNode = ', rootNode)));
                // [NON_AUTO]
                const rootDocName = rootNode['index'];
                rootNode = removeKey('index', rootNode);
                const docRef = db.collection(rootCollectionName).doc(rootDocName);
                batch.set(docRef, rootNode);
                if (isNestedEnabled) {
                    const nestedCollection = docRef.collection(nestedCollectionName);
                    const filteredNestedObject = filterNestedObjById(jointFieldName, rootNode.id, transformedNestedObj);
                    filteredNestedObject.forEach((nestedNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        console.log(colors.bgYellow(colors.black('nestedNode = ', nestedNode)));
                        // [NON_AUTO]
                        const nestedDocName = nestedNode['index'];
                        nestedNode = removeKey('index', nestedNode);
                        yield nestedCollection.doc(nestedDocName).set(nestedNode);
                    }));
                }
            }));
        }
        // [AUTO && NON_AUTO]
        if (rootDocNamingMethod === 'AUTO' && nestedDocNamingMethod !== 'AUTO') {
            Object.values(transformedRootObj).forEach((rootNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log(colors.bgGray(colors.black('rootNode = ', rootNode)));
                // [AUTO]
                const rootCollectionRef = yield rootCollection.add(rootNode);
                if (isNestedEnabled) {
                    const nestedCollection = rootCollectionRef.collection(nestedCollectionName);
                    const filteredNestedObject = filterNestedObjById(jointFieldName, rootNode.id, transformedNestedObj);
                    filteredNestedObject.forEach((nestedNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        console.log(colors.bgYellow(colors.black('nestedNode = ', nestedNode)));
                        // [NON_AUTO]
                        const nestedDocName = nestedNode['index'];
                        nestedNode = removeKey('index', nestedNode);
                        yield nestedCollection.doc(nestedDocName).set(nestedNode);
                    }));
                }
            }));
        }
        // [NON_AUTO && AUTO]
        if (rootDocNamingMethod !== 'AUTO' && nestedDocNamingMethod === 'AUTO') {
            Object.values(transformedRootObj).forEach((rootNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log(colors.bgGray(colors.black('rootNode = ', rootNode)));
                // [NON_AUTO]
                const rootDocName = rootNode['index'];
                rootNode = removeKey('index', rootNode);
                const docRef = db.collection(rootCollectionName).doc(rootDocName);
                batch.set(docRef, rootNode);
                if (isNestedEnabled) {
                    console.log(colors.brightGreen(colors.black('hasNestedCollection = ', hasNestedCollection)));
                    const nestedCollection = docRef.collection(nestedCollectionName);
                    const filteredNestedObject = filterNestedObjById(jointFieldName, rootNode.id, transformedNestedObj);
                    filteredNestedObject.forEach((nestedNode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        console.log(colors.bgYellow(colors.black('nestedNode = ', nestedNode)));
                        // [AUTO]
                        yield nestedCollection.add(nestedNode);
                    }));
                }
            }));
        }
        // SAVE TO DB
        return batch.commit();
    });
}
export function createCollections(settings, db) {
    uploadDataToFirestore(settings, db)
        .then(() => {
        console.log(colors.green('\nWriting data into Firestore, please wait...\n'));
        setTimeout(() => {
            console.log(colors.brightGreen.underline('\nData Upload Successfully Completed!\n\n'));
            process.exit(0);
        }, 10000);
    })
        .catch(err => {
        console.log(colors.brightRed.underline('\n\nData upload failed, reason:', err, '\n\n'));
        process.exit(-1);
    });
}
//# sourceMappingURL=helpers.js.map