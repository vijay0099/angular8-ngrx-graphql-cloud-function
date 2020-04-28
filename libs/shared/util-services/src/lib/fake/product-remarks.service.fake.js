import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { of, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
// SERVICES
import { HttpUtilsService } from '../http-utils.service';
const API_PRODUCTREMARKS_URL = 'api/productRemarks';
// Fake REST API (Mock)
// This code emulates server calls
let ProductRemarksService = class ProductRemarksService {
    constructor(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new product remark to the server
    createProductRemark(productRemark) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTREMARKS_URL, productRemark, { headers: httpHeaders });
    }
    // READ
    getAllProductRemarksByProductId(productId) {
        return this.http.get(API_PRODUCTREMARKS_URL).pipe(map(productRemarks => {
            return productRemarks.filter(rem => rem.carId === productId);
        }));
    }
    getProductRemarkById(productRemarkId) {
        return this.http.get(API_PRODUCTREMARKS_URL + `/${productRemarkId}`);
    }
    findProductRemarks(queryParams, productId) {
        return this.getAllProductRemarksByProductId(productId).pipe(mergeMap(res => {
            const result = this.httpUtils.baseFilter(res, queryParams, []);
            return of(result);
        }));
    }
    // UPDATE => PUT: update the product remark
    updateProductRemark(productRemark) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_PRODUCTREMARKS_URL, productRemark, {
            headers: httpHeaders
        });
    }
    // DELETE => delete the product remark
    deleteProductRemark(productRemarkId) {
        const url = `${API_PRODUCTREMARKS_URL}/${productRemarkId}`;
        return this.http.delete(url);
    }
    deleteProductRemarks(ids = []) {
        const tasks$ = [];
        const length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (let i = 0; i < length; i++) {
            tasks$.push(this.deleteProductRemark(ids[i]));
        }
        return forkJoin(tasks$);
    }
};
ProductRemarksService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], ProductRemarksService);
export { ProductRemarksService };
//# sourceMappingURL=product-remarks.service.fake.js.map