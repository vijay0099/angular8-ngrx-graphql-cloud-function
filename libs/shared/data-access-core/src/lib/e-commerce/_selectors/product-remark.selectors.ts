// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';

// LODASH
import { each } from 'lodash';

// MODELS
import {
  QueryResultsModel,
  HttpExtenstionsModel,
  ProductRemarkModel
} from '@monorepo/shared/data-access-models';

// STATE
import { ProductRemarksState } from '../_reducers/product-remark.reducers';

export const selectProductRemarksState = createFeatureSelector<
  ProductRemarksState
>('productRemarks');

export const selectProductRemarkById = (productRemarkId: number) =>
  createSelector(
    selectProductRemarksState,
    productRemarksState => productRemarksState.entities[productRemarkId]
  );

export const selectProductRemarksPageLoading = createSelector(
  selectProductRemarksState,
  productRemarksState => productRemarksState.loading
);

export const selectCurrentProductIdInStoreForProductRemarks = createSelector(
  selectProductRemarksState,
  productRemarksState => productRemarksState.productId
);

export const selectLastCreatedProductRemarkId = createSelector(
  selectProductRemarksState,
  productRemarksState => productRemarksState.lastCreatedProductRemarkId
);

export const selectPRShowInitWaitingMessage = createSelector(
  selectProductRemarksState,
  productRemarksState => productRemarksState.showInitWaitingMessage
);

export const selectProductRemarksInStore = createSelector(
  selectProductRemarksState,
  productRemarksState => {
    const items: ProductRemarkModel[] = [];
    each(productRemarksState.entities, element => {
      items.push(element);
    });
    const httpExtension = new HttpExtenstionsModel();
    const result: ProductRemarkModel[] = httpExtension.sortArray(
      items,
      productRemarksState.lastQuery.sortField,
      productRemarksState.lastQuery.sortOrder
    );

    return new QueryResultsModel(items, productRemarksState.totalCount, '');
  }
);
