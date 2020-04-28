import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { needs, children } from '@monorepo/graphql-playground/data-access-data';
let NeedService = class NeedService {
    constructor() {
        this.needs = needs;
        this.children = children;
    }
    // QUERIES ========================================================
    findNeedById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needs.find(need => need.id === id);
        });
    }
    findAllNeeds() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needs;
        });
    }
    // MUTATIONS ========================================================
    createNewNeed(need) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newNeed = Object.assign({ id: `${need.belongsTo}_${uuidv4()}` }, need);
            console.log('New need created: ', Object.assign({}, newNeed));
            this.needs.push(newNeed);
            return newNeed;
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    findChildById({ childId: childId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.children.find(user => user.id === childId);
        });
    }
};
NeedService = tslib_1.__decorate([
    Injectable()
], NeedService);
export { NeedService };
//# sourceMappingURL=need.service.js.map