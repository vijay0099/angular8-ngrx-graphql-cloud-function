// NGRX
import { createSelector } from '@ngrx/store';
// LODASH
import { each, find, some } from 'lodash';
// SELECTORS
import { selectAllRoles } from './role.selectors';
import { selectAllPermissions } from './permission.selectors';
export const selectAuthState = state => state.auth;
export const isLoggedIn = createSelector(selectAuthState, auth => auth.loggedIn);
export const isLoggedOut = createSelector(isLoggedIn, loggedIn => !loggedIn);
export const currentAuthToken = createSelector(selectAuthState, auth => auth.authToken);
export const isUserLoaded = createSelector(selectAuthState, auth => auth.isUserLoaded);
export const getAuthError = createSelector(selectAuthState, auth => auth.error);
export const currentUser = createSelector(selectAuthState, auth => auth.user);
export const currentUserRoleIds = createSelector(currentUser, user => {
    if (!user) {
        return [];
    }
    return user.roles;
});
export const currentUserPermissionsIds = createSelector(currentUserRoleIds, selectAllRoles, (userRoleIds, allRoles) => {
    const result = getPermissionsIdsFrom(userRoleIds, allRoles);
    return result;
});
export const checkHasUserPermission = (permissionId) => createSelector(currentUserPermissionsIds, (ids) => {
    return ids.some(id => id === permissionId);
});
export const currentUserPermissions = createSelector(currentUserPermissionsIds, selectAllPermissions, (permissionIds, allPermissions) => {
    const result = [];
    each(permissionIds, id => {
        const userPermission = find(allPermissions, elem => elem.id === id);
        if (userPermission) {
            result.push(userPermission);
        }
    });
    return result;
});
function getPermissionsIdsFrom(userRolesIds = [], allRoles = []) {
    const userRoles = [];
    each(userRolesIds, (_id) => {
        const userRole = find(allRoles, (_role) => _role.id === _id);
        if (userRole) {
            userRoles.push(userRole);
        }
    });
    const result = [];
    each(userRoles, (_role) => {
        each(_role.permissions, id => {
            if (!some(result, _id => _id === id)) {
                result.push(id);
            }
        });
    });
    return result;
}
//# sourceMappingURL=auth.selectors.js.map