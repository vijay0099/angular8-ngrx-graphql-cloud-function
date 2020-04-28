// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPermissions from '../_reducers/permission.reducers';
export const selectPermissionsState = createFeatureSelector('permissions');
export const selectPermissionById = (permissionId) => createSelector(selectPermissionsState, ps => ps.entities[permissionId]);
export const selectAllPermissions = createSelector(selectPermissionsState, fromPermissions.selectAll);
export const selectAllPermissionsIds = createSelector(selectPermissionsState, fromPermissions.selectIds);
export const allPermissionsLoaded = createSelector(selectPermissionsState, ps => ps._isAllPermissionsLoaded);
//# sourceMappingURL=permission.selectors.js.map