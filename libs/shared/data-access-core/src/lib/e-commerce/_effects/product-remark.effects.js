import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
import { mergeMap, map, tap } from 'rxjs/operators';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// SERVICES
import { ProductRemarksService } from '@monorepo/shared/util-services';
// ACTIONS
import { ProductRemarkActionTypes, ProductRemarksPageLoaded, ProductRemarksPageToggleLoading, ProductRemarkCreated } from '../_actions/product-remark.actions';
let ProductRemarkEffects = class ProductRemarkEffects {
    constructor(actions$, productRemarksService, store) {
        this.actions$ = actions$;
        this.productRemarksService = productRemarksService;
        this.store = store;
        // showLoadingDistpatcher = new ProcutRemarksPageToggleLoading({ isLoading: true });
        this.hideLoadingDistpatcher = new ProductRemarksPageToggleLoading({
            isLoading: false
        });
        this.loadProductRemarksPage$ = this.actions$.pipe(ofType(ProductRemarkActionTypes.ProductRemarksPageRequested), mergeMap(({ payload }) => {
            return this.productRemarksService.findProductRemarks(payload.page, payload.productId);
        }), map((result) => {
            return new ProductRemarksPageLoaded({
                productRemarks: result.items,
                totalCount: result.totalCount
            });
        }));
        this.deleteProductRemark$ = this.actions$.pipe(ofType(ProductRemarkActionTypes.OneProductRemarkDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
            return this.productRemarksService.deleteProductRemark(payload.id);
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
        this.deleteProductRemarks$ = this.actions$.pipe(ofType(ProductRemarkActionTypes.ManyProductRemarksDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
            return this.productRemarksService.deleteProductRemarks(payload.ids);
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
        this.updateProductRemark$ = this.actions$.pipe(ofType(ProductRemarkActionTypes.ProductRemarkUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
            return this.productRemarksService.updateProductRemark(payload.productRemark);
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
        this.createProductRemark$ = this.actions$.pipe(ofType(ProductRemarkActionTypes.ProductRemarkOnServerCreated), mergeMap(({ payload }) => {
            this.store.dispatch(new ProductRemarksPageToggleLoading({ isLoading: true }));
            return this.productRemarksService
                .createProductRemark(payload.productRemark)
                .pipe(tap(res => {
                this.store.dispatch(new ProductRemarkCreated({ productRemark: res }));
            }));
        }), map(() => {
            return this.hideLoadingDistpatcher;
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductRemarkEffects.prototype, "loadProductRemarksPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductRemarkEffects.prototype, "deleteProductRemark$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductRemarkEffects.prototype, "deleteProductRemarks$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductRemarkEffects.prototype, "updateProductRemark$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProductRemarkEffects.prototype, "createProductRemark$", void 0);
ProductRemarkEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Actions !== "undefined" && Actions) === "function" ? _a : Object, ProductRemarksService, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], ProductRemarkEffects);
export { ProductRemarkEffects };
//# sourceMappingURL=product-remark.effects.js.map