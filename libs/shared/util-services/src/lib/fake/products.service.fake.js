import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { forkJoin, BehaviorSubject, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
// LODASH
import { each } from 'lodash';
// SERVICES
import { HttpUtilsService } from '../http-utils.service';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
const API_PRODUCTS_URL = 'api/products';
// Fake REST API (Mock)
// This method emulates server calls
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
    findProducts(queryParams) {
        return this.getAllProducts().pipe(mergeMap(res => {
            const result = this.httpUtils.baseFilter(res, queryParams, [
                'status',
                'condition'
            ]);
            return of(result);
        }));
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
        const tasks$ = [];
        each(products, element => {
            const _product = Object.assign({}, element);
            _product.status = status;
            tasks$.push(this.updateProduct(_product));
        });
        return forkJoin(tasks$);
    }
    // DELETE => delete the product from the server
    deleteProduct(productId) {
        const url = `${API_PRODUCTS_URL}/${productId}`;
        return this.http.delete(url);
    }
    deleteProducts(ids = []) {
        const tasks$ = [];
        const length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (let i = 0; i < length; i++) {
            tasks$.push(this.deleteProduct(ids[i]));
        }
        return forkJoin(tasks$);
    }
};
ProductsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.fake.js.map