// NGRX
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
// ACTIONS
import { PermissionActionTypes } from '../_actions/permission.actions';
export const adapter = createEntityAdapter();
export const initialPermissionsState = adapter.getInitialState({
    _isAllPermissionsLoaded: false
});
export function permissionsReducer(state = initialPermissionsState, action) {
    switch (action.type) {
        case PermissionActionTypes.AllPermissionsRequested:
            return Object.assign({}, state, { _isAllPermissionsLoaded: false });
        case PermissionActionTypes.AllPermissionsLoaded:
            return adapter.addAll(action.payload.permissions, Object.assign({}, state, { _isAllPermissionsLoaded: true }));
        default:
            return state;
    }
}
export const getRoleState = createFeatureSelector('permissions');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=permission.reducers.js.map