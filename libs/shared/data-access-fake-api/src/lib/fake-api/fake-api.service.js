import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
// CONTEXT
import { AuthDataContext } from '@monorepo/shared/data-access-core';
// ECOMMERCE
import { ECommerceDataContext } from '@monorepo/shared/data-access-core';
// MODELS
import { CarsDb } from './fake-db/cars';
let FakeApiService = class FakeApiService {
    /**
     * Service Constructor
     */
    constructor() { }
    /**
     * Create Fake DB and API
     */
    createDb() {
        // tslint:disable-next-line:class-name
        const db = {
            // auth module
            users: AuthDataContext.users,
            roles: AuthDataContext.roles,
            permissions: AuthDataContext.permissions,
            // e-commerce
            // customers
            customers: ECommerceDataContext.customers,
            // products
            products: ECommerceDataContext.cars,
            productRemarks: ECommerceDataContext.remarks,
            productSpecs: ECommerceDataContext.carSpecs,
            // orders
            orders: ECommerceDataContext.orders,
            // data-table
            cars: CarsDb.cars
        };
        return db;
    }
};
FakeApiService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], FakeApiService);
export { FakeApiService };
//# sourceMappingURL=fake-api.service.js.map