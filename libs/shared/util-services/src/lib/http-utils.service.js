import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
// MODELS
import { HttpExtenstionsModel } from '@monorepo/shared/data-access-models';
let HttpUtilsService = class HttpUtilsService {
    /**
     * Prepare query http params
     * @param queryParams: QueryParamsModel
     */
    getFindHTTPParams(queryParams) {
        const params = new HttpParams()
            .set('lastNamefilter', queryParams.filter)
            .set('sortOrder', queryParams.sortOrder)
            .set('sortField', queryParams.sortField)
            .set('pageNumber', queryParams.pageNumber.toString())
            .set('pageSize', queryParams.pageSize.toString());
        return params;
    }
    /**
     * get standard content-type
     */
    getHTTPHeaders() {
        const result = new HttpHeaders();
        result.set('Content-Type', 'application/json');
        return result;
    }
    baseFilter(_entities, _queryParams, _filtrationFields = []) {
        const httpExtention = new HttpExtenstionsModel();
        return httpExtention.baseFilter(_entities, _queryParams, _filtrationFields);
    }
    sortArray(_incomingArray, _sortField = '', _sortOrder = 'asc') {
        const httpExtention = new HttpExtenstionsModel();
        return httpExtention.sortArray(_incomingArray, _sortField, _sortOrder);
    }
    searchInArray(_incomingArray, _queryObj, _filtrationFields = []) {
        const httpExtention = new HttpExtenstionsModel();
        return httpExtention.searchInArray(_incomingArray, _queryObj, _filtrationFields);
    }
};
HttpUtilsService = tslib_1.__decorate([
    Injectable()
], HttpUtilsService);
export { HttpUtilsService };
//# sourceMappingURL=http-utils.service.js.map