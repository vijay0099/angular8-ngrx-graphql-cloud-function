import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
// LODASH
import { each } from 'lodash';
// SERVICES
import { HttpUtilsService } from '../http-utils.service';
const API_CUSTOMERS_URL = 'api/customers';
// Fake REST API (Mock)
// This code emulates server calls
let CustomersService = class CustomersService {
    constructor(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new customer to the server
    createCustomer(customer) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_CUSTOMERS_URL, customer, {
            headers: httpHeaders
        });
    }
    // READ
    getAllCustomers() {
        return this.http.get(API_CUSTOMERS_URL);
    }
    getCustomerById(customerId) {
        return this.http.get(API_CUSTOMERS_URL + `/${customerId}`);
    }
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    findCustomers(queryParams) {
        // This code imitates server calls
        const url = API_CUSTOMERS_URL;
        return this.http.get(API_CUSTOMERS_URL).pipe(mergeMap(res => {
            const result = this.httpUtils.baseFilter(res, queryParams, [
                'status',
                'type'
            ]);
            return of(result);
        }));
    }
    // UPDATE => PUT: update the customer on the server
    updateCustomer(customer) {
        const httpHeader = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_CUSTOMERS_URL, customer, { headers: httpHeader });
    }
    // UPDATE Status
    updateStatusForCustomer(customers, status) {
        const tasks$ = [];
        each(customers, element => {
            const _customer = Object.assign({}, element);
            _customer.status = status;
            tasks$.push(this.updateCustomer(_customer));
        });
        return forkJoin(tasks$);
    }
    // DELETE => delete the customer from the server
    deleteCustomer(customerId) {
        const url = `${API_CUSTOMERS_URL}/${customerId}`;
        return this.http.delete(url);
    }
    deleteCustomers(ids = []) {
        const tasks$ = [];
        const length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (let i = 0; i < length; i++) {
            tasks$.push(this.deleteCustomer(ids[i]));
        }
        return forkJoin(tasks$);
    }
};
CustomersService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], CustomersService);
export { CustomersService };
//# sourceMappingURL=customers.service.fake.js.map