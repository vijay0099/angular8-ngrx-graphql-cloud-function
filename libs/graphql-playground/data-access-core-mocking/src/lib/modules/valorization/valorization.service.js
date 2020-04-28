import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { valorization, users } from '@monorepo/graphql-playground/data-access-data';
let ValorizationService = class ValorizationService {
    constructor() {
        this.valorization = valorization;
        this.users = users;
    }
    // QUERIES ========================================================
    findValorizationById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorization.find(data => data.id === id);
        });
    }
    findAllValorization() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.valorization;
        });
    }
    // MUTATIONS ========================================================
    createValorization(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('create new, passing data = ', data);
            const newValorization = Object.assign({ id: uuidv4() }, data);
            console.log('created new user: ', Object.assign({}, newValorization));
            this.valorization.push(newValorization);
            return newValorization;
        });
    }
    // DELETE
    deleteValorization(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = this.valorization.findIndex(data => data.id === id);
            if (index === -1) {
                throw new Error('User not found.');
            }
            const deletedValorization = this.valorization.splice(index, 1);
            return deletedValorization[0];
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    findUser({ userId: userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === userId);
        });
    }
};
ValorizationService = tslib_1.__decorate([
    Injectable()
], ValorizationService);
export { ValorizationService };
//# sourceMappingURL=valorization.service.js.map