import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// SERVICES
import { HttpUtilsService } from './http-utils.service';
const API_ORDERS_URL = 'api/orders';
let OrdersService = class OrdersService {
    constructor(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
        this.httpOptions = this.httpUtils.getHTTPHeaders();
    }
};
OrdersService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map