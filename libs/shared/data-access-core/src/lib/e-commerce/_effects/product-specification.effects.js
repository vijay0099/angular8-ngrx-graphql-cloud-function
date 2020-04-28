import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
import { mergeMap, map, tap } from 'rxjs/operators';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// SERVICES
import { ProductSpecificationsService } from '@monorepo/shared/util-services';
// ACTIONS
import { ProductSpecificationActionTypes, ProductSpecificationsPageLoaded, ProductSpecificationsPageToggleLoading, ProductSpecificationCreated } from '../_actions/product-specification.actions';
let ProductSpecificationEffects = class ProductSpecificationEffects {
    constructor(actions$, productSpecificationsService, store) {
        this.actions$ = actions$;
        this.productSpecificationsService = productSpecificationsService;
        this.store = store;
        // showLoadingDistpatcher = new ProcutSpecificationsPageToggleLoading({ isLoading: true });
        this.hideLoadingDistpatcher = new ProductSpecificationsPageToggleLoading({
            isLoading: false
        });
        this.loadProductSpecificationsPage$ = this.actions$.pipe(ofType(ProductSpecificationActionTypes.ProductSpecificationsPageRequested), mergeMap(({ payload }) => this.productSpecificationsService.findProductSpecs(payload.page, payload.productId)), map((result) => {
            return new ProductSpecificationsPageLoaded({
                productSpecifications: result.items,
                totalCount: result.totalCount
            });
        }));
        this.deleteProductSpecification$ = this.actions$.pipe(ofType(ProductSpecificationActionTypes.OneProductSpecificationDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return this.productSpecificationsService.deleteProductSpec(payload.id);
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
        this.deleteProductSpecifications$ = this.actions$.pipe(ofType(ProductSpecificationActionTypes.ManyProductSpecificationsDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return this.productSpecificationsService.deleteProductSpecifications(payload.ids);
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
        this.updateProductSpecification$ = this.actions$.pipe(ofType(ProductSpecificationActionTypes.ProductSpecificationUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return this.productSpecificationsService.updateProductSpec(payload.productSpecification);
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
        this.createProductSpecification$ = this.actions$.pipe(ofType(ProductSpecificationActionTypes.ProductSpecificationOnServerCreated), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return this.productSpecificationsService
                .createProductSpec(payload.productSpecification)
                .pipe(tap(res => {
                this.store.dispatch(new ProductSpecificationCreated({ productSpecification: res }));
            }));
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductSpecificationEffects.prototype, "loadProductSpecificationsPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductSpecificationEffects.prototype, "deleteProductSpecification$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductSpecificationEffects.prototype, "deleteProductSpecifications$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductSpecificationEffects.prototype, "updateProductSpecification$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductSpecificationEffects.prototype, "createProductSpecification$", void 0);
ProductSpecificationEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Actions !== "undefined" && Actions) === "function" ? _a : Object, ProductSpecificationsService, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], ProductSpecificationEffects);
export { ProductSpecificationEffects };
//# sourceMappingURL=product-specification.effects.js.map