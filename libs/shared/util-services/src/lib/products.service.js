import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { BehaviorSubject } from 'rxjs';
// SERVICES
import { HttpUtilsService } from './http-utils.service';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
const API_PRODUCTS_URL = 'api/products';
// Real REST API
let ProductsService = class ProductsService {
    constructor(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
        this.lastFilter$ = new BehaviorSubject(new QueryParamsModel({}, 'asc', '', 0, 10));
    }
    // CREATE =>  POST: add a new product to the server
    createProduct(product) {
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTS_URL, product, {
            headers: httpHeaders
        });
    }
    // READ
    getAllProducts() {
        return this.http.get(API_PRODUCTS_URL);
    }
    getProductById(productId) {
        return this.http.get(API_PRODUCTS_URL + `/${productId}`);
    }
    // Server should return filtered/sorted result
    findProducts(queryParams) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const httpParams = this.httpUtils.getFindHTTPParams(queryParams);
        const url = API_PRODUCTS_URL + '/find';
        return this.http.get(url, {
            headers: httpHeaders,
            params: httpParams
        });
    }
    // UPDATE => PUT: update the product on the server
    updateProduct(product) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_PRODUCTS_URL, product, { headers: httpHeaders });
    }
    // UPDATE Status
    // Comment this when you start work with real server
    // This code imitates server calls
    updateStatusForProduct(products, status) {
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const body = {
            productsForUpdate: products,
            newStatus: status
        };
        const url = API_PRODUCTS_URL + '/updateStatus';
        return this.http.put(url, body, { headers: httpHeaders });
    }
    // DELETE => delete the product from the server
    deleteProduct(productId) {
        const url = `${API_PRODUCTS_URL}/${productId}`;
        return this.http.delete(url);
    }
    deleteProducts(ids = []) {
        const url = API_PRODUCTS_URL + '/delete';
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const body = { prdocutIdsForDelete: ids };
        return this.http.put(url, body, {
            headers: httpHeaders
        });
    }
};
ProductsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map