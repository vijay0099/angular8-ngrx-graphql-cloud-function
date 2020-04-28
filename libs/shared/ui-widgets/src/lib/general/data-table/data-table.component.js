import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
// RXJS
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
// SERVICES
import { DataTableService } from '@monorepo/shared/util-services';
import { DataTableDataSource } from './data-table.data-source';
let DataTableComponent = class DataTableComponent {
    /**
     * Component constructor
     *
     * @param dataTableService: DataTableService
     */
    constructor(dataTableService) {
        this.dataTableService = dataTableService;
        this.displayedColumns = [
            'id',
            'cManufacture',
            'cModel',
            'cMileage',
            'cColor',
            'cPrice',
            'cCondition',
            'cStatus',
            'actions'
        ];
        this.selection = new SelectionModel(true, []);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        /* Data load will be triggered in two cases:
            - when a pagination event occurs => this.paginator.page
            - when a sort event occurs => this.sort.sortChange
            **/
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => {
            this.loadItems();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new DataTableDataSource(this.dataTableService);
        // First load
        this.loadItems(true);
    }
    /**
     * Load items
     *
     * @param firstLoad: boolean
     */
    loadItems(firstLoad = false) {
        const queryParams = new QueryParamsModel({}, this.sort.direction, this.sort.active, this.paginator.pageIndex, firstLoad ? 6 : this.paginator.pageSize);
        this.dataSource.loadItems(queryParams);
        this.selection.clear();
    }
    /* UI */
    /**
     * Returns item status
     *
     * @param status: number
     */
    getItemStatusString(status = 0) {
        switch (status) {
            case 0:
                return 'Selling';
            case 1:
                return 'Sold';
        }
        return '';
    }
    /**
     * Returens item CSS Class Name by status
     *
     * @param status: number
     */
    getItemCssClassByStatus(status = 0) {
        switch (status) {
            case 0:
                return 'success';
            case 1:
                return 'info';
        }
        return '';
    }
    /**
     * Returns item condition
     *
     * @param condition: number
     */
    getItemConditionString(condition = 0) {
        switch (condition) {
            case 0:
                return 'New';
            case 1:
                return 'Used';
        }
        return '';
    }
    /**
     * Returns CSS Class name by condition
     *
     * @param condition: number
     */
    getItemCssClassByCondition(condition = 0) {
        switch (condition) {
            case 0:
                return 'success';
            case 1:
                return 'info';
        }
        return '';
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _a : Object)
], DataTableComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof MatSort !== "undefined" && MatSort) === "function" ? _b : Object)
], DataTableComponent.prototype, "sort", void 0);
DataTableComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-data-table',
        templateUrl: './data-table.component.html',
        styleUrls: ['./data-table.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DataTableService])
], DataTableComponent);
export { DataTableComponent };
//# sourceMappingURL=data-table.component.js.map