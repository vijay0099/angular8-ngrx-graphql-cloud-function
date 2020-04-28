// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// LODASH
import { each } from 'lodash';
// MODELS
import { QueryResultsModel, HttpExtenstionsModel } from '@monorepo/shared/data-access-models';
export const selectCustomersState = createFeatureSelector('customers');
export const selectCustomerById = (customerId) => createSelector(selectCustomersState, customersState => customersState.entities[customerId]);
export const selectCustomersPageLoading = createSelector(selectCustomersState, customersState => customersState.listLoading);
export const selectCustomersActionLoading = createSelector(selectCustomersState, customersState => customersState.actionsloading);
export const selectLastCreatedCustomerId = createSelector(selectCustomersState, customersState => customersState.lastCreatedCustomerId);
export const selectCustomersShowInitWaitingMessage = createSelector(selectCustomersState, customersState => customersState.showInitWaitingMessage);
export const selectCustomersInStore = createSelector(selectCustomersState, customersState => {
    const items = [];
    each(customersState.entities, element => {
        items.push(element);
    });
    const httpExtension = new HttpExtenstionsModel();
    const result = httpExtension.sortArray(items, customersState.lastQuery.sortField, customersState.lastQuery.sortOrder);
    return new QueryResultsModel(result, customersState.totalCount, '');
});
//# sourceMappingURL=customer.selectors.js.map