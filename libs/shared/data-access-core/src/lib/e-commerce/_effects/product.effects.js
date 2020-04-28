import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { forkJoin } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// SERVICES
import { ProductsService } from '@monorepo/shared/util-services';
// ACTIONS
import { ProductActionTypes, ProductsPageLoaded, ProductsPageToggleLoading, ProductCreated } from '../_actions/product.actions';
import { of } from 'rxjs';
let ProductEffects = class ProductEffects {
    // @Effect()
    // init$: Observable<Action> = defer(() => {
    //     const queryParams = new QueryParamsModel({});
    //     return of(new ProductsPageRequested({ page: queryParams }));
    // });
    constructor(actions$, productsService, store) {
        this.actions$ = actions$;
        this.productsService = productsService;
        this.store = store;
        this.showPageLoadingDistpatcher = new ProductsPageToggleLoading({
            isLoading: true
        });
        this.showLoadingDistpatcher = new ProductsPageToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new ProductsPageToggleLoading({
            isLoading: false
        });
        this.loadProductsPage$ = this.actions$.pipe(ofType(ProductActionTypes.ProductsPageRequested), mergeMap(({ payload }) => {
            this.store.dispatch(this.showPageLoadingDistpatcher);
            const requestToServer = this.productsService.findProducts(payload.page);
            const lastQuery = of(payload.page);
            return forkJoin(requestToServer, lastQuery);
        }), map(response => {
            const result = response[0];
            const lastQuery = response[1];
            return new ProductsPageLoaded({
                products: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteProduct$ = this.actions$.pipe(ofType(ProductActionTypes.OneProductDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(this.showLoadingDistpatcher);
            return this.productsService.deleteProduct(payload.id);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.deleteProducts$ = this.actions$.pipe(ofType(ProductActionTypes.ManyProductsDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(this.showLoadingDistpatcher);
            return this.productsService.deleteProducts(payload.ids);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.updateProductsStatus$ = this.actions$.pipe(ofType(ProductActionTypes.ProductsStatusUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showLoadingDistpatcher);
            return this.productsService.updateStatusForProduct(payload.products, payload.status);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.updateProduct$ = this.actions$.pipe(ofType(ProductActionTypes.ProductUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showLoadingDistpatcher);
            return this.productsService.updateProduct(payload.product);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.createProduct$ = this.actions$.pipe(ofType(ProductActionTypes.ProductOnServerCreated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showLoadingDistpatcher);
            return this.productsService.createProduct(payload.product).pipe(tap(res => {
                this.store.dispatch(new ProductCreated({ product: res }));
            }));
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductEffects.prototype, "loadProductsPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductEffects.prototype, "deleteProduct$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductEffects.prototype, "deleteProducts$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductEffects.prototype, "updateProductsStatus$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductEffects.prototype, "updateProduct$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductEffects.prototype, "createProduct$", void 0);
ProductEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Actions !== "undefined" && Actions) === "function" ? _a : Object, ProductsService, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], ProductEffects);
export { ProductEffects };
//# sourceMappingURL=product.effects.js.map