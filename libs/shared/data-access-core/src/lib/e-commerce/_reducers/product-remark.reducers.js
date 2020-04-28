// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
// ACTIONS
import { ProductRemarkActionTypes } from '../_actions/product-remark.actions';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
export const adapter = createEntityAdapter();
export const initialProductRemarksState = adapter.getInitialState({
    loading: false,
    totalCount: 0,
    productId: undefined,
    lastCreatedProductRemarkId: undefined,
    lastQuery: new QueryParamsModel({}),
    showInitWaitingMessage: true
});
export function productRemarksReducer(state = initialProductRemarksState, action) {
    switch (action.type) {
        case ProductRemarkActionTypes.ProductRemarksPageToggleLoading:
            return Object.assign({}, state, { loading: action.payload.isLoading, lastCreatedProductRemarkId: undefined });
        case ProductRemarkActionTypes.ProductRemarkOnServerCreated:
            return Object.assign({}, state, { loading: true });
        case ProductRemarkActionTypes.ProductRemarkCreated:
            return adapter.addOne(action.payload.productRemark, Object.assign({}, state, { lastCreatedProductRemarkId: action.payload.productRemark.id }));
        case ProductRemarkActionTypes.ProductRemarkUpdated:
            return adapter.updateOne(action.payload.partialProductRemark, state);
        case ProductRemarkActionTypes.ProductRemarkStoreUpdated:
            return adapter.updateOne(action.payload.productRemark, state);
        case ProductRemarkActionTypes.OneProductRemarkDeleted:
            return adapter.removeOne(action.payload.id, state);
        case ProductRemarkActionTypes.ManyProductRemarksDeleted:
            return adapter.removeMany(action.payload.ids, state);
        case ProductRemarkActionTypes.ProductRemarksPageCancelled:
            return Object.assign({}, state, { totalCount: 0, loading: false, productId: undefined, lastQuery: new QueryParamsModel({}) });
        case ProductRemarkActionTypes.ProductRemarksPageRequested:
            return Object.assign({}, state, { totalCount: 0, loading: true, productId: action.payload.productId, lastQuery: action.payload.page });
        case ProductRemarkActionTypes.ProductRemarksPageLoaded:
            return adapter.addMany(action.payload.productRemarks, Object.assign({}, initialProductRemarksState, { totalCount: action.payload.totalCount, loading: false, productId: state.productId, lastQuery: state.lastQuery, showInitWaitingMessage: false }));
        default:
            return state;
    }
}
export const getProductRemarlState = createFeatureSelector('productRemarks');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=product-remark.reducers.js.map