import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { forkJoin, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
// SERVICES
import { HttpUtilsService } from '../http-utils.service';
// CONST
import { SPECIFICATIONS_DICTIONARY } from '@monorepo/shared/util-dictionaries';
const API_PRODUCTSPECS_URL = 'api/productSpecs';
// Fake REST API (Mock)
// This code emulates server calls
let ProductSpecificationsService = class ProductSpecificationsService {
    constructor(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new product specification to the server
    createProductSpec(productSpec) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTSPECS_URL, productSpec, { headers: httpHeaders });
    }
    // READ
    getAllProductSpecsByProductId(productId) {
        const prodSpecs = this.http
            .get(API_PRODUCTSPECS_URL)
            .pipe(map(productSpecifications => productSpecifications.filter(ps => ps.carId === productId)));
        return prodSpecs.pipe(map(res => {
            const _prodSpecs = res;
            const result = [];
            _prodSpecs.forEach(item => {
                const _item = Object.assign({}, item);
                const specName = SPECIFICATIONS_DICTIONARY[_item.specId];
                if (specName) {
                    _item._specificationName = specName;
                }
                result.push(_item);
            });
            return result;
        }));
    }
    getProductSpecById(productSpecId) {
        return this.http.get(API_PRODUCTSPECS_URL + `/${productSpecId}`);
    }
    findProductSpecs(queryParams, productId) {
        return this.getAllProductSpecsByProductId(productId).pipe(mergeMap(res => {
            const result = this.httpUtils.baseFilter(res, queryParams, []);
            return of(result);
        }));
    }
    // UPDATE => PUT: update the product specification on the server
    updateProductSpec(productSpec) {
        return this.http.put(API_PRODUCTSPECS_URL, productSpec, {
            headers: this.httpUtils.getHTTPHeaders()
        });
    }
    // DELETE => delete the product specification from the server
    deleteProductSpec(productSpecId) {
        const url = `${API_PRODUCTSPECS_URL}/${productSpecId}`;
        return this.http.delete(url);
    }
    deleteProductSpecifications(ids = []) {
        const tasks$ = [];
        const length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (let i = 0; i < length; i++) {
            tasks$.push(this.deleteProductSpec(ids[i]));
        }
        return forkJoin(tasks$);
    }
    getSpecs() {
        return SPECIFICATIONS_DICTIONARY;
    }
};
ProductSpecificationsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], ProductSpecificationsService);
export { ProductSpecificationsService };
//# sourceMappingURL=product-specifications.service.fake.js.map