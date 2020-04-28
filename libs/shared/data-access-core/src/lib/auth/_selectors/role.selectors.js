// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// MODELS
import { QueryResultsModel, HttpExtenstionsModel } from '@monorepo/shared/data-access-models';
import * as fromRole from '../_reducers/role.reducers';
import { each } from 'lodash';
export const selectRolesState = createFeatureSelector('roles');
export const selectRoleById = (roleId) => createSelector(selectRolesState, rolesState => rolesState.entities[roleId]);
export const selectAllRoles = createSelector(selectRolesState, fromRole.selectAll);
export const selectAllRolesIds = createSelector(selectRolesState, fromRole.selectIds);
export const allRolesLoaded = createSelector(selectRolesState, rolesState => rolesState.isAllRolesLoaded);
export const selectRolesPageLoading = createSelector(selectRolesState, rolesState => rolesState.listLoading);
export const selectRolesActionLoading = createSelector(selectRolesState, rolesState => rolesState.actionsloading);
export const selectLastCreatedRoleId = createSelector(selectRolesState, rolesState => rolesState.lastCreatedRoleId);
export const selectRolesShowInitWaitingMessage = createSelector(selectRolesState, rolesState => rolesState.showInitWaitingMessage);
export const selectQueryResult = createSelector(selectRolesState, rolesState => {
    const items = [];
    each(rolesState.entities, element => {
        items.push(element);
    });
    const httpExtension = new HttpExtenstionsModel();
    const result = httpExtension.sortArray(items, rolesState.lastQuery.sortField, rolesState.lastQuery.sortOrder);
    return new QueryResultsModel(rolesState.queryResult, rolesState.queryRowsCount);
});
//# sourceMappingURL=role.selectors.js.map