import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_DATATABLE_URL = 'api/cars';
let DataTableService = class DataTableService {
    /**
     * Service Constructor
     *
     * @param http: HttpClient
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Returns data from fake server
     */
    getAllItems() {
        return this.http.get(API_DATATABLE_URL);
    }
};
DataTableService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
], DataTableService);
export { DataTableService };
//# sourceMappingURL=datatable.service.js.map