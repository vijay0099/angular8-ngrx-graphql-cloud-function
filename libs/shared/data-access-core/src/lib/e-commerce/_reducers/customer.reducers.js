// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
// ACTIONS
import { CustomerActionTypes } from '../_actions/customer.actions';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
export const adapter = createEntityAdapter();
export const initialCustomersState = adapter.getInitialState({
    customerForEdit: null,
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastCreatedCustomerId: undefined,
    lastQuery: new QueryParamsModel({}),
    showInitWaitingMessage: true
});
export function customersReducer(state = initialCustomersState, action) {
    switch (action.type) {
        case CustomerActionTypes.CustomersPageToggleLoading: {
            return Object.assign({}, state, { listLoading: action.payload.isLoading, lastCreatedCustomerId: undefined });
        }
        case CustomerActionTypes.CustomerActionToggleLoading: {
            return Object.assign({}, state, { actionsloading: action.payload.isLoading });
        }
        case CustomerActionTypes.CustomerOnServerCreated:
            return Object.assign({}, state);
        case CustomerActionTypes.CustomerCreated:
            return adapter.addOne(action.payload.customer, Object.assign({}, state, { lastCreatedCustomerId: action.payload.customer.id }));
        case CustomerActionTypes.CustomerUpdated:
            return adapter.updateOne(action.payload.partialCustomer, state);
        case CustomerActionTypes.CustomersStatusUpdated: {
            const _partialCustomers = [];
            // tslint:disable-next-line:prefer-const
            for (let i = 0; i < action.payload.customers.length; i++) {
                _partialCustomers.push({
                    id: action.payload.customers[i].id,
                    changes: {
                        status: action.payload.status
                    }
                });
            }
            return adapter.updateMany(_partialCustomers, state);
        }
        case CustomerActionTypes.OneCustomerDeleted:
            return adapter.removeOne(action.payload.id, state);
        case CustomerActionTypes.ManyCustomersDeleted:
            return adapter.removeMany(action.payload.ids, state);
        case CustomerActionTypes.CustomersPageCancelled: {
            return Object.assign({}, state, { listLoading: false, lastQuery: new QueryParamsModel({}) });
        }
        case CustomerActionTypes.CustomersPageLoaded: {
            return adapter.addMany(action.payload.customers, Object.assign({}, initialCustomersState, { totalCount: action.payload.totalCount, listLoading: false, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        }
        default:
            return state;
    }
}
export const getCustomerState = createFeatureSelector('customers');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=customer.reducers.js.map