// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
// ACTIONS
import { ProductSpecificationActionTypes } from '../_actions/product-specification.actions';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
export const adapter = createEntityAdapter();
export const initialProductSpecificationsState = adapter.getInitialState({
    loading: false,
    totalCount: 0,
    productId: undefined,
    lastCreatedProductSpecificationId: undefined,
    lastQuery: new QueryParamsModel({}),
    showInitWaitingMessage: true
});
export function productSpecificationsReducer(state = initialProductSpecificationsState, action) {
    switch (action.type) {
        case ProductSpecificationActionTypes.ProductSpecificationsPageToggleLoading:
            return Object.assign({}, state, { loading: action.payload.isLoading, lastCreatedProductSpecificationId: undefined });
        case ProductSpecificationActionTypes.ProductSpecificationOnServerCreated:
            return Object.assign({}, state, { loading: true });
        case ProductSpecificationActionTypes.ProductSpecificationCreated:
            return adapter.addOne(action.payload.productSpecification, Object.assign({}, state, { lastCreatedProductSpecificationId: action.payload.productSpecification.id }));
        case ProductSpecificationActionTypes.ProductSpecificationUpdated:
            return adapter.updateOne(action.payload.partialProductSpecification, state);
        case ProductSpecificationActionTypes.OneProductSpecificationDeleted:
            return adapter.removeOne(action.payload.id, state);
        case ProductSpecificationActionTypes.ManyProductSpecificationsDeleted:
            return adapter.removeMany(action.payload.ids, state);
        case ProductSpecificationActionTypes.ProductSpecificationsPageCancelled:
            return Object.assign({}, state, { totalCount: 0, loading: false, productId: undefined, lastQuery: new QueryParamsModel({}) });
        case ProductSpecificationActionTypes.ProductSpecificationsPageRequested:
            return Object.assign({}, state, { totalCount: 0, loading: true, productId: action.payload.productId, lastQuery: action.payload.page });
        case ProductSpecificationActionTypes.ProductSpecificationsPageLoaded:
            return adapter.addMany(action.payload.productSpecifications, Object.assign({}, initialProductSpecificationsState, { totalCount: action.payload.totalCount, loading: false, productId: state.productId, lastQuery: state.lastQuery, showInitWaitingMessage: false }));
        default:
            return state;
    }
}
export const getProductRemarlState = createFeatureSelector('productSpecifications');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=product-specification.reducers.js.map