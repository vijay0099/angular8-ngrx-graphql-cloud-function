import * as tslib_1 from "tslib";
import { COLLECTION } from './data/activity';
import * as firebase from 'firebase';
import { environment } from './../../libs/shared/environments/src/lib/environments/environment';
const config = environment.firebaseConfig;
console.log('Uploading data to the database with the following config:\n');
console.log(JSON.stringify(config));
console.log('\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n');
firebase.initializeApp(config);
const db = firebase.firestore();
function uploadData() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const batch = db.batch();
        const events = db.collection('activities');
        Object.values(COLLECTION)
            .sort((c1, c2) => c1.seqNo - c2.seqNo)
            .forEach((item) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newItem = removeId(item);
            yield events.add(newItem);
        }));
        return batch.commit();
    });
}
function removeId(data) {
    const newData = Object.assign({}, data);
    delete newData.id;
    return newData;
}
uploadData()
    .then(() => {
    console.log('Writing data, exiting in 10 seconds ...\n\n');
    setTimeout(() => {
        console.log('\n\n\nData Upload Completed.\n\n\n');
        process.exit(0);
    }, 10000);
})
    .catch(err => {
    console.log('Data upload failed, reason:', err, '\n\n\n');
    process.exit(-1);
});
//# sourceMappingURL=populate-single-activity.js.map