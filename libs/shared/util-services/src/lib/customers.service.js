import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// SERVICES
import { HttpUtilsService } from './http-utils.service';
const API_CUSTOMERS_URL = 'api/customers';
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
    // Server should return filtered/sorted result
    findCustomers(queryParams) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const httpParams = this.httpUtils.getFindHTTPParams(queryParams);
        const url = API_CUSTOMERS_URL + '/find';
        return this.http.get(url, {
            headers: httpHeaders,
            params: httpParams
        });
    }
    // UPDATE => PUT: update the customer on the server
    updateCustomer(customer) {
        const httpHeader = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_CUSTOMERS_URL, customer, { headers: httpHeader });
    }
    // UPDATE Status
    updateStatusForCustomer(customers, status) {
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const body = {
            customersForUpdate: customers,
            newStatus: status
        };
        const url = API_CUSTOMERS_URL + '/updateStatus';
        return this.http.put(url, body, { headers: httpHeaders });
    }
    // DELETE => delete the customer from the server
    deleteCustomer(customerId) {
        const url = `${API_CUSTOMERS_URL}/${customerId}`;
        return this.http.delete(url);
    }
    deleteCustomers(ids = []) {
        const url = API_CUSTOMERS_URL + '/deleteCustomers';
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const body = { customerIdsForDelete: ids };
        return this.http.put(url, body, {
            headers: httpHeaders
        });
    }
};
CustomersService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], CustomersService);
export { CustomersService };
//# sourceMappingURL=customers.service.js.map