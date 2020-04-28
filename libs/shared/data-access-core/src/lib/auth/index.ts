// GUARDS
export { AuthGuard } from './_guards/auth.guard';
export { AuthAdminGuard } from './_guards/auth-admin.guard';
export { ModuleGuard } from './_guards/module.guard';

// CONTEXT
export { AuthDataContext } from './_server/auth.data-context';

// DATASOURCE
export { RolesDataSource } from './_data-sources/roles.datasource';
export { UsersDataSource } from './_data-sources/users.datasource';

// ACTIONS
export {
  Login,
  RegisterRequested,
  AdminLoginRequested,
  LoginRequested,
  SocialLogin,
  LogoutRequested,
  Logout,
  Register,
  UserRequested,
  UserLoaded,
  AuthActionTypes,
  SaveUser,
  AuthActions,
  GetUser,
  ForgotPasswordRequested,
  AuthError,
  AuthSuccess,
  AuthLoading
} from './_actions/auth.actions';
export {
  AllPermissionsRequested,
  AllPermissionsLoaded,
  PermissionActionTypes,
  PermissionActions
} from './_actions/permission.actions';
export {
  RoleOnServerCreated,
  RoleCreated,
  RoleUpdated,
  RoleDeleted,
  RolesPageRequested,
  RolesPageLoaded,
  RolesPageCancelled,
  AllRolesLoaded,
  AllRolesRequested,
  RoleActionTypes,
  RoleActions
} from './_actions/role.actions';
export {
  UserCreated,
  UserUpdated,
  UserDeleted,
  UserOnServerCreated,
  UsersPageLoaded,
  UsersPageCancelled,
  UsersPageToggleLoading,
  UsersPageRequested,
  UsersActionToggleLoading
} from './_actions/user.actions';

// EFFECTS
export { AuthEffects } from './_effects/auth.effects';
export { PermissionEffects } from './_effects/permission.effects';
export { RoleEffects } from './_effects/role.effects';
export { UserEffects } from './_effects/user.effects';

// REDUCERS
export { authReducer } from './_reducers/auth.reducers';
export { permissionsReducer } from './_reducers/permission.reducers';
export { rolesReducer } from './_reducers/role.reducers';
export { usersReducer } from './_reducers/user.reducers';

// SELECTORS
export {
  isLoggedIn,
  isLoggedOut,
  isUserLoaded,
  currentAuthToken,
  currentUser,
  currentUserRoleIds,
  currentUserPermissionsIds,
  currentUserPermissions,
  checkHasUserPermission,
  getAuthError,
  getAuthSuccess,
  getAuthLoading
} from './_selectors/auth.selectors';
export {
  selectPermissionById,
  selectAllPermissions,
  selectAllPermissionsIds,
  allPermissionsLoaded
} from './_selectors/permission.selectors';
export {
  selectRoleById,
  selectAllRoles,
  selectAllRolesIds,
  allRolesLoaded,
  selectLastCreatedRoleId,
  selectRolesPageLoading,
  selectQueryResult,
  selectRolesActionLoading,
  selectRolesShowInitWaitingMessage
} from './_selectors/role.selectors';
export {
  selectUserById,
  selectUsersPageLoading,
  selectLastCreatedUserId,
  selectUsersInStore,
  selectHasUsersInStore,
  selectUsersPageLastQuery,
  selectUsersActionLoading,
  selectUsersShowInitWaitingMessage
} from './_selectors/user.selectors';
