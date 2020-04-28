import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// SERVICES
import { HttpUtilsService } from './http-utils.service';
const API_PRODUCTREMARKS_URL = 'api/productRemarks';
// Real REST API
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
    // Server should return filtered remarks by productId
    getAllProductRemarksByProductId(productId) {
        const url = API_PRODUCTREMARKS_URL + '?productId=' + productId;
        return this.http.get(url);
    }
    getProductRemarkById(productRemarkId) {
        return this.http.get(API_PRODUCTREMARKS_URL + `/${productRemarkId}`);
    }
    // Server should return sorted/filtered remarks and merge with items from state
    findProductRemarks(queryParams, productId) {
        const url = API_PRODUCTREMARKS_URL + '/find?productId=' + productId;
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const body = {
            query: queryParams
        };
        return this.http.post(url, body, {
            headers: httpHeaders
        });
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
        const url = API_PRODUCTREMARKS_URL + '/deleteProductRemarks';
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        const body = { productRemarkIdsForDelete: ids };
        return this.http.put(url, body, { headers: httpHeaders });
    }
};
ProductRemarksService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], ProductRemarksService);
export { ProductRemarksService };
//# sourceMappingURL=product-remarks.service.js.map