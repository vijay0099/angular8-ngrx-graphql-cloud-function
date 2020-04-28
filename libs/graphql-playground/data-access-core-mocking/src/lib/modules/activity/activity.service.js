import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { activities } from '@monorepo/graphql-playground/data-access-data';
let ActivityService = class ActivityService {
    constructor() {
        this.activities = activities;
        // RELATIONSHIPS [ONE-TO-MANY] ======================================
    }
    // QUERIES ========================================================
    findActivityById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activities.find(user => user.id === id);
        });
    }
    findActivities() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(this.activities);
            return this.activities;
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createNewActivity(activity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newActivity = Object.assign({ id: uuidv4() }, activity);
            console.log('New activity created: ', Object.assign({}, activity));
            this.activities.push(newActivity);
            return newActivity;
        });
    }
};
ActivityService = tslib_1.__decorate([
    Injectable()
], ActivityService);
export { ActivityService };
//# sourceMappingURL=activity.service.js.map