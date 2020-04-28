// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
// ACTIONS
import { ProductActionTypes } from '../_actions/product.actions';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
export const adapter = createEntityAdapter();
export const initialProductsState = adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery: new QueryParamsModel({}),
    lastCreatedProductId: undefined,
    showInitWaitingMessage: true
});
export function productsReducer(state = initialProductsState, action) {
    switch (action.type) {
        case ProductActionTypes.ProductsPageToggleLoading:
            return Object.assign({}, state, { listLoading: action.payload.isLoading, lastCreatedProductId: undefined });
        case ProductActionTypes.ProductsActionToggleLoading:
            return Object.assign({}, state, { actionsloading: action.payload.isLoading });
        case ProductActionTypes.ProductOnServerCreated:
            return Object.assign({}, state);
        case ProductActionTypes.ProductCreated:
            return adapter.addOne(action.payload.product, Object.assign({}, state, { lastCreatedProductId: action.payload.product.id }));
        case ProductActionTypes.ProductUpdated:
            return adapter.updateOne(action.payload.partialProduct, state);
        case ProductActionTypes.ProductsStatusUpdated: {
            const _partialProducts = [];
            for (let i = 0; i < action.payload.products.length; i++) {
                _partialProducts.push({
                    id: action.payload.products[i].id,
                    changes: {
                        status: action.payload.status
                    }
                });
            }
            return adapter.updateMany(_partialProducts, state);
        }
        case ProductActionTypes.OneProductDeleted:
            return adapter.removeOne(action.payload.id, state);
        case ProductActionTypes.ManyProductsDeleted:
            return adapter.removeMany(action.payload.ids, state);
        case ProductActionTypes.ProductsPageCancelled:
            return Object.assign({}, state, { listLoading: false, lastQuery: new QueryParamsModel({}) });
        case ProductActionTypes.ProductsPageLoaded:
            return adapter.addMany(action.payload.products, Object.assign({}, initialProductsState, { totalCount: action.payload.totalCount, listLoading: false, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        default:
            return state;
    }
}
export const getProductState = createFeatureSelector('products');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=product.reducers.js.map