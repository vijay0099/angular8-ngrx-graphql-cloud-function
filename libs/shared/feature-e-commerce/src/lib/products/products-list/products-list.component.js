import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f, _g;
// ANGULAR
import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// MATERIAL
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
// RXJS
import { fromEvent, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, skip, delay } from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
// CORE
import { 
// E-COMMERCE
ProductsDataSource, ProductsPageRequested, OneProductDeleted, ManyProductsDeleted, ProductsStatusUpdated, selectProductsPageLastQuery } from '@monorepo/shared/data-access-core';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
// SERVICES
import { SubheaderService, LayoutUtilsService, MessageType } from '@monorepo/shared/util-services';
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
let ProductsListComponent = class ProductsListComponent {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     */
    constructor(dialog, activatedRoute, router, subheaderService, layoutUtilsService, store) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.displayedColumns = [
            'select',
            'VINCode',
            'manufacture',
            'model',
            'modelYear',
            'color',
            'price',
            'condition',
            'status',
            'actions'
        ];
        this.filterStatus = '';
        this.filterCondition = '';
        // Selection
        this.selection = new SelectionModel(true, []);
        this.productsResult = [];
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // If the user changes the sort order, reset back to the first page.
        const sortSubscription = this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
            - when a pagination event occurs => this.paginator.page
            - when a sort event occurs => this.sort.sortChange
            **/
        const paginatorSubscriptions = merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => this.loadProductsList()))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        const searchSubscription = fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(debounceTime(150), distinctUntilChanged(), tap(() => {
            this.paginator.pageIndex = 0;
            this.loadProductsList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('Products');
        // Init DataSource
        this.dataSource = new ProductsDataSource(this.store);
        const entitiesSubscription = this.dataSource.entitySubject
            .pipe(skip(1), distinctUntilChanged())
            .subscribe(res => {
            this.productsResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        const lastQuerySubscription = this.store
            .pipe(select(selectProductsPageLastQuery))
            .subscribe(res => (this.lastQuery = res));
        // Load last query from store
        this.subscriptions.push(lastQuerySubscription);
        // Read from URL itemId, for restore previous state
        const routeSubscription = this.activatedRoute.queryParams.subscribe(params => {
            if (params.id) {
                this.restoreState(this.lastQuery, +params.id);
            }
            // First load
            of(undefined)
                .pipe(delay(1000))
                .subscribe(() => {
                // Remove this line, just loading imitation
                this.loadProductsList();
            }); // Remove this line, just loading imitation
        });
        this.subscriptions.push(routeSubscription);
    }
    /**
     * On Destroy
     */
    ngOnDestroy() {
        this.subscriptions.forEach(el => el.unsubscribe());
    }
    /**
     * Load Products List
     */
    loadProductsList() {
        this.selection.clear();
        const queryParams = new QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new ProductsPageRequested({ page: queryParams }));
        this.selection.clear();
    }
    /**
     * Returns object for filter
     */
    filterConfiguration() {
        const filter = {};
        const searchText = this.searchInput.nativeElement.value;
        if (this.filterStatus && this.filterStatus.length > 0) {
            filter.status = +this.filterStatus;
        }
        if (this.filterCondition && this.filterCondition.length > 0) {
            filter.condition = +this.filterCondition;
        }
        filter.model = searchText;
        filter.manufacture = searchText;
        filter.color = searchText;
        filter.VINCode = searchText;
        return filter;
    }
    /**
     * Restore state
     *
     * @param queryParams: QueryParamsModel
     * @param id: number
     */
    restoreState(queryParams, id) {
        if (!queryParams.filter) {
            return;
        }
        if ('condition' in queryParams.filter) {
            this.filterCondition = queryParams.filter.condition.toString();
        }
        if ('status' in queryParams.filter) {
            this.filterStatus = queryParams.filter.status.toString();
        }
        if (queryParams.filter.model) {
            this.searchInput.nativeElement.value = queryParams.filter.model;
        }
    }
    /** ACTIONS */
    /**
     * Delete product
     *
     * @param _item: ProductModel
     */
    deleteProduct(_item) {
        const _title = 'Product Delete';
        const _description = 'Are you sure to permanently delete this product?';
        const _waitDesciption = 'Product is deleting...';
        const _deleteMessage = `Product has been deleted`;
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.store.dispatch(new OneProductDeleted({ id: _item.id }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
        });
    }
    /**
     * Delete products
     */
    deleteProducts() {
        const _title = 'Products Delete';
        const _description = 'Are you sure to permanently delete selected products?';
        const _waitDesciption = 'Products are deleting...';
        const _deleteMessage = 'Selected products have been deleted';
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            const idsForDeletion = [];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.selection.selected.length; i++) {
                idsForDeletion.push(this.selection.selected[i].id);
            }
            this.store.dispatch(new ManyProductsDeleted({ ids: idsForDeletion }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
            this.selection.clear();
        });
    }
    /**
     * Fetch selected products
     */
    fetchProducts() {
        // tslint:disable-next-line:prefer-const
        let messages = [];
        this.selection.selected.forEach(elem => {
            messages.push({
                text: `${elem.manufacture} ${elem.model} ${elem.modelYear}`,
                id: elem.VINCode,
                status: elem.status
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    }
    /**
     * Update status dialog
     */
    updateStatusForProducts() {
        const _title = 'Update status for selected products';
        const _updateMessage = 'Status has been updated for selected products';
        const _statuses = [
            { value: 0, text: 'Selling' },
            { value: 1, text: 'Sold' }
        ];
        const _messages = [];
        this.selection.selected.forEach(elem => {
            _messages.push({
                text: `${elem.manufacture} ${elem.model} ${elem.modelYear}`,
                id: elem.VINCode,
                status: elem.status,
                statusTitle: this.getItemStatusString(elem.status),
                statusCssClass: this.getItemCssClassByStatus(elem.status)
            });
        });
        const dialogRef = this.layoutUtilsService.updateStatusForEntities(_title, _statuses, _messages);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                this.selection.clear();
                return;
            }
            this.store.dispatch(new ProductsStatusUpdated({
                status: +res,
                products: this.selection.selected
            }));
            this.layoutUtilsService.showActionNotification(_updateMessage, MessageType.Update);
            this.selection.clear();
        });
    }
    /**
     * Redirect to edit page
     *
     * @param id: any
     */
    editProduct(id) {
        this.router.navigate(['../products/edit', id], {
            relativeTo: this.activatedRoute
        });
    }
    createProduct() {
        this.router.navigateByUrl('/ecommerce/products/add');
    }
    /**
     * Check all rows are selected
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.productsResult.length;
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
            this.productsResult.forEach(row => this.selection.select(row));
        }
    }
    /* UI */
    /**
     * Returns status string
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
     * Returns CSS Class by status
     *
     * @param status: number
     */
    getItemCssClassByStatus(status = 0) {
        switch (status) {
            case 0:
                return 'success';
            case 1:
                return 'metal';
        }
        return '';
    }
    /**
     * Rerurns condition string
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
     * Returns CSS Class by condition
     *
     * @param condition: number
     */
    getItemCssClassByCondition(condition = 0) {
        switch (condition) {
            case 0:
                return 'accent';
            case 1:
                return 'primary';
        }
        return '';
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _a : Object)
], ProductsListComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild('sort1', { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof MatSort !== "undefined" && MatSort) === "function" ? _b : Object)
], ProductsListComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild('searchInput', { static: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _c : Object)
], ProductsListComponent.prototype, "searchInput", void 0);
ProductsListComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'monorepo-products-list',
        templateUrl: './products-list.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof MatDialog !== "undefined" && MatDialog) === "function" ? _d : Object, typeof (_e = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _e : Object, typeof (_f = typeof Router !== "undefined" && Router) === "function" ? _f : Object, SubheaderService,
        LayoutUtilsService, typeof (_g = typeof Store !== "undefined" && Store) === "function" ? _g : Object])
], ProductsListComponent);
export { ProductsListComponent };
//# sourceMappingURL=products-list.component.js.map