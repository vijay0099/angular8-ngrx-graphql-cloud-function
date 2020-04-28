import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { children, needs } from '@monorepo/graphql-playground/data-access-data';
let ChildService = class ChildService {
    constructor() {
        this.children = children;
        this.needs = needs;
    }
    // QUERIES ========================================================
    findChildById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.children.find(child => child.id === id);
        });
    }
    findAllChildren() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.children;
        });
    }
    // MUTATIONS ========================================================
    createNewChild(child) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newChild = Object.assign({ id: uuidv4() }, child);
            console.log('New child created: ', Object.assign({}, child));
            this.children.push(newChild);
            return newChild;
        });
    }
    // DELETE
    deleteChild(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userIndex = this.children.findIndex(child => child.id === id);
            if (userIndex === -1) {
                throw new Error('User not found.');
            }
            // DELETE CHILD
            const deletedChild = this.children.splice(userIndex, 1);
            let childNeeds;
            // DELETE CHILD NEEDS
            childNeeds = this.needs.filter(need => {
                const match = need.childId === id;
                return !match;
            });
            return deletedChild[0];
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    filterNeedsByChildId({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.needs.filter(need => need.childId === id);
        });
    }
};
ChildService = tslib_1.__decorate([
    Injectable()
], ChildService);
export { ChildService };
//# sourceMappingURL=child.service.js.map