// NGRX
import { createEntityAdapter } from '@ngrx/entity';
// ACTIONS
import { RoleActionTypes } from '../_actions/role.actions';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
export const adapter = createEntityAdapter();
export const initialRolesState = adapter.getInitialState({
    isAllRolesLoaded: false,
    queryRowsCount: 0,
    queryResult: [],
    lastCreatedRoleId: undefined,
    listLoading: false,
    actionsloading: false,
    lastQuery: new QueryParamsModel({}),
    showInitWaitingMessage: true
});
export function rolesReducer(state = initialRolesState, action) {
    switch (action.type) {
        case RoleActionTypes.RolesPageToggleLoading:
            return Object.assign({}, state, { listLoading: action.payload.isLoading, lastCreatedRoleId: undefined });
        case RoleActionTypes.RolesActionToggleLoading:
            return Object.assign({}, state, { actionsloading: action.payload.isLoading });
        case RoleActionTypes.RoleOnServerCreated:
            return Object.assign({}, state);
        case RoleActionTypes.RoleCreated:
            return adapter.addOne(action.payload.role, Object.assign({}, state, { lastCreatedRoleId: action.payload.role.id }));
        case RoleActionTypes.RoleUpdated:
            return adapter.updateOne(action.payload.partialrole, state);
        case RoleActionTypes.RoleDeleted:
            return adapter.removeOne(action.payload.id, state);
        case RoleActionTypes.AllRolesLoaded:
            return adapter.addAll(action.payload.roles, Object.assign({}, state, { isAllRolesLoaded: true }));
        case RoleActionTypes.RolesPageCancelled:
            return Object.assign({}, state, { listLoading: false, queryRowsCount: 0, queryResult: [], lastQuery: new QueryParamsModel({}) });
        case RoleActionTypes.RolesPageLoaded:
            return adapter.addMany(action.payload.roles, Object.assign({}, initialRolesState, { listLoading: false, queryRowsCount: action.payload.totalCount, queryResult: action.payload.roles, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        default:
            return state;
    }
}
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=role.reducers.js.map