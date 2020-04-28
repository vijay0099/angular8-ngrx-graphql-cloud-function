import { UsersTable } from './users.table';
import { PermissionsTable } from './permissions.table';
import { RolesTable } from './roles.table';
// Wrapper class
export class AuthDataContext {
}
AuthDataContext.users = UsersTable.users;
AuthDataContext.roles = RolesTable.roles;
AuthDataContext.permissions = PermissionsTable.permissions;
//# sourceMappingURL=auth.data-context.js.map