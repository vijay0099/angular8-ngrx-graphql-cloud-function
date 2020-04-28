// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// LODASH
import { each } from 'lodash';
//  MODELS
import { QueryResultsModel, HttpExtenstionsModel } from '@monorepo/shared/data-access-models';
export const selectProductSpecificationsState = createFeatureSelector('productSpecifications');
export const selectProductSpecificationById = (productSpecificationId) => createSelector(selectProductSpecificationsState, productSpecificationsState => productSpecificationsState.entities[productSpecificationId]);
export const selectProductSpecificationsPageLoading = createSelector(selectProductSpecificationsState, productSpecificationsState => productSpecificationsState.loading);
export const selectCurrentProductIdInStoreForProductSpecs = createSelector(selectProductSpecificationsState, productSpecificationsState => productSpecificationsState.productId);
export const selectLastCreatedProductSpecificationId = createSelector(selectProductSpecificationsState, productSpecificationsState => productSpecificationsState.lastCreatedProductSpecificationId);
export const selectPSShowInitWaitingMessage = createSelector(selectProductSpecificationsState, productSpecificationsState => productSpecificationsState.showInitWaitingMessage);
export const selectProductSpecificationsInStore = createSelector(selectProductSpecificationsState, productSpecificationsState => {
    const items = [];
    each(productSpecificationsState.entities, element => {
        items.push(element);
    });
    const httpExtension = new HttpExtenstionsModel();
    const result = httpExtension.sortArray(items, productSpecificationsState.lastQuery.sortField, productSpecificationsState.lastQuery.sortOrder);
    return new QueryResultsModel(result, productSpecificationsState.totalCount, '');
});
//# sourceMappingURL=product-specification.selectors.js.map