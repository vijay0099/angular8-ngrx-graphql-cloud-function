// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// LODASH
import { each } from 'lodash';
// MODELS
import { QueryResultsModel, HttpExtenstionsModel } from '@monorepo/shared/data-access-models';
export const selectProductRemarksState = createFeatureSelector('productRemarks');
export const selectProductRemarkById = (productRemarkId) => createSelector(selectProductRemarksState, productRemarksState => productRemarksState.entities[productRemarkId]);
export const selectProductRemarksPageLoading = createSelector(selectProductRemarksState, productRemarksState => productRemarksState.loading);
export const selectCurrentProductIdInStoreForProductRemarks = createSelector(selectProductRemarksState, productRemarksState => productRemarksState.productId);
export const selectLastCreatedProductRemarkId = createSelector(selectProductRemarksState, productRemarksState => productRemarksState.lastCreatedProductRemarkId);
export const selectPRShowInitWaitingMessage = createSelector(selectProductRemarksState, productRemarksState => productRemarksState.showInitWaitingMessage);
export const selectProductRemarksInStore = createSelector(selectProductRemarksState, productRemarksState => {
    const items = [];
    each(productRemarksState.entities, element => {
        items.push(element);
    });
    const httpExtension = new HttpExtenstionsModel();
    const result = httpExtension.sortArray(items, productRemarksState.lastQuery.sortField, productRemarksState.lastQuery.sortOrder);
    return new QueryResultsModel(items, productRemarksState.totalCount, '');
});
//# sourceMappingURL=product-remark.selectors.js.map