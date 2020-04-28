// import { Pipe } from '@angular/core';
import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f;
// ANGULAR
import { Component, ElementRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
// MATERIAL
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
// RXJS
import { debounceTime, distinctUntilChanged, tap, delay } from 'rxjs/operators';
import { fromEvent, merge, Observable, of } from 'rxjs';
// NGRX
import { Store, select } from '@ngrx/store';
// CORE
import { ProductSpecificationsDataSource, ProductSpecificationsPageRequested, OneProductSpecificationDeleted, ManyProductSpecificationsDeleted, ProductSpecificationUpdated, ProductSpecificationOnServerCreated, selectLastCreatedProductSpecificationId } from '@monorepo/shared/data-access-core';
// MODELS
import { QueryParamsModel, ProductSpecificationModel } from '@monorepo/shared/data-access-models';
// SERVICES
import { LayoutUtilsService, MessageType } from '@monorepo/shared/util-services';
// COMPONENTS
import { SpecificationEditDialogComponent } from '../specification-edit/specification-edit-dialog.component';
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
let SpecificationsListComponent = class SpecificationsListComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState></AppState>
     * @param dialog: MatDialog
     * @param layoutUtilsService: LayoutUtilsService
     */
    constructor(store, dialog, layoutUtilsService) {
        this.store = store;
        this.dialog = dialog;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', '_specificationName', 'value', 'actions'];
        // Selection
        this.selection = new SelectionModel(true, []);
        this.productSpecificationsResult = [];
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
            this.loadSpecsList();
        }))
            .subscribe();
        // Filtration, bind to searchInput
        fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(debounceTime(150), distinctUntilChanged(), tap(() => {
            this.paginator.pageIndex = 0;
            this.loadSpecsList();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new ProductSpecificationsDataSource(this.store);
        this.dataSource.entitySubject.subscribe(res => (this.productSpecificationsResult = res));
        this.productId$.subscribe(res => {
            if (!res) {
                return;
            }
            this.productId = res;
            of(undefined)
                .pipe(delay(1000))
                .subscribe(() => {
                // Remove this line, just loading imitation
                this.loadSpecsList();
            }); // Remove this line, just loading imitation
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    }
    /**
     * Load Specs List
     */
    loadSpecsList() {
        this.selection.clear();
        const queryParams = new QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new ProductSpecificationsPageRequested({
            page: queryParams,
            productId: this.productId
        }));
    }
    /**
     * Retirns object for filter
     */
    filterConfiguration() {
        const filter = {};
        const searchText = this.searchInput.nativeElement.value;
        filter._specificationName = searchText;
        filter.value = searchText;
        return filter;
    }
    /**
     * Check all rows are selected
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.productSpecificationsResult.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productSpecificationsResult.forEach(row => this.selection.select(row));
        }
    }
    /** ACTIONS */
    /**
     * Delete spec
     *
     * @param _item: ProductSpecificationModel
     */
    deleteSpec(_item) {
        const _title = 'Specification Delete';
        const _description = 'Are you sure to permanently delete this specification?';
        const _waitDesciption = 'Specification is deleting...';
        const _deleteMessage = `Specification has been deleted`;
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.store.dispatch(new OneProductSpecificationDeleted({ id: _item.id }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
            this.loadSpecsList();
        });
    }
    /**
     * Delete specs
     */
    deleteSpecs() {
        const _title = 'Specifications Delete';
        const _description = 'Are you sure to permanently delete selected specifications?';
        const _waitDesciption = 'Specifications are deleting...';
        const _deleteMessage = 'Selected specifications have been deleted';
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            const length = this.selection.selected.length;
            const idsForDeletion = [];
            for (let i = 0; i < length; i++) {
                idsForDeletion.push(this.selection.selected[i].id);
            }
            this.store.dispatch(new ManyProductSpecificationsDeleted({ ids: idsForDeletion }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
            this.selection.clear();
        });
    }
    /**
     * Fetch selected specs
     */
    fetchSpecs() {
        const messages = [];
        this.selection.selected.forEach(elem => {
            messages.push({
                text: `${elem._specificationName}: ${elem.value}`,
                id: elem.id
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    }
    /**
     * Open add spec dialog and save data
     */
    addSpec() {
        // tslint:disable-next-line:prefer-const
        let newSpec = new ProductSpecificationModel();
        newSpec.clear(this.productId);
        const dialogRef = this.dialog.open(SpecificationEditDialogComponent, {
            data: {
                specId: undefined,
                value: '',
                isNew: true
            },
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.isUpdated) {
                newSpec._specificationName = res._specificationName;
                newSpec.specId = res.specId;
                newSpec.value = res.value;
                this.store.dispatch(new ProductSpecificationOnServerCreated({
                    productSpecification: newSpec
                }));
                this.componentSubscriptions = this.store
                    .pipe(select(selectLastCreatedProductSpecificationId))
                    .subscribe(result => {
                    if (!result) {
                        return;
                    }
                    const saveMessage = `Specification has been created`;
                    this.layoutUtilsService.showActionNotification(saveMessage, MessageType.Create, 10000, true, true);
                });
            }
        });
    }
    /**
     * Edit add spec dialog ans save data
     *
     * @param item: ProductSpecificationModel
     */
    editSpec(item) {
        const _item = Object.assign({}, item);
        const dialogRef = this.dialog.open(SpecificationEditDialogComponent, {
            data: {
                specId: _item.specId,
                value: _item.value,
                isNew: false
            },
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.isUpdated) {
                _item._specificationName = res._specificationName;
                _item.specId = res.specId;
                _item.value = res.value;
                const updateProductSpecification = {
                    id: _item.id,
                    changes: _item
                };
                this.store.dispatch(new ProductSpecificationUpdated({
                    partialProductSpecification: updateProductSpecification,
                    productSpecification: _item
                }));
                const saveMessage = `Specification has been updated`;
                this.layoutUtilsService.showActionNotification(saveMessage, MessageType.Update, 10000, true, true);
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Observable !== "undefined" && Observable) === "function" ? _a : Object)
], SpecificationsListComponent.prototype, "productId$", void 0);
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
], SpecificationsListComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof MatSort !== "undefined" && MatSort) === "function" ? _c : Object)
], SpecificationsListComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild('searchInput', { static: true }),
    tslib_1.__metadata("design:type", typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _d : Object)
], SpecificationsListComponent.prototype, "searchInput", void 0);
SpecificationsListComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'monorepo-specifications-list',
        templateUrl: './specifications-list.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof Store !== "undefined" && Store) === "function" ? _e : Object, typeof (_f = typeof MatDialog !== "undefined" && MatDialog) === "function" ? _f : Object, LayoutUtilsService])
], SpecificationsListComponent);
export { SpecificationsListComponent };
//# sourceMappingURL=specifications-list.component.js.map