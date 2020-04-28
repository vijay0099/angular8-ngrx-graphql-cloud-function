import * as tslib_1 from "tslib";
var _a;
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RXJS
import { of, forkJoin } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
// LODASH
import { filter, some, find, each } from 'lodash';
// ENV
import { environment } from '@monorepo/shared/environments';
// SERVICES
import { HttpUtilsService } from '../http-utils.service';
// CONST
const API_USERS_URL = 'api/users';
const API_PERMISSION_URL = 'api/permissions';
const API_ROLES_URL = 'api/roles';
let AuthService = class AuthService {
    constructor(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // Authentication/Authorization
    login(email, password) {
        if (!email || !password) {
            return of(null);
        }
        return this.getAllUsers().pipe(map((result) => {
            if (result.length <= 0) {
                return null;
            }
            const user = find(result, (item) => {
                return (item.email.toLowerCase() === email.toLowerCase() &&
                    item.password === password);
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    }
    loginUser(email, password) {
        if (!email || !password) {
            return of(null);
        }
        return this.getAllUsers().pipe(map((result) => {
            if (result.length <= 0) {
                return null;
            }
            const user = find(result, (item) => {
                return (item.email.toLowerCase() === email.toLowerCase() &&
                    item.password === password);
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    }
    register(user) {
        user.roles = [2]; // Manager
        user.accessToken = 'access-token-' + Math.random();
        user.refreshToken = 'access-token-' + Math.random();
        user.pic = './assets/media/users/default.jpg';
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http
            .post(API_USERS_URL, user, { headers: httpHeaders })
            .pipe(map((res) => {
            return res;
        }), catchError(err => {
            return null;
        }));
    }
    requestPassword(email) {
        return this.http.get(API_USERS_URL).pipe(map((users) => {
            if (users.length <= 0) {
                return null;
            }
            const user = find(users, (item) => {
                return item.email.toLowerCase() === email.toLowerCase();
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }), catchError(this.handleError('forgot-password', [])));
    }
    getUserByToken() {
        const userToken = localStorage.getItem(environment.authTokenKey);
        if (!userToken) {
            return of(null);
        }
        return this.getAllUsers().pipe(map((result) => {
            if (result.length <= 0) {
                return null;
            }
            const user = find(result, (item) => {
                return item.accessToken === userToken.toString();
            });
            if (!user) {
                return null;
            }
            user.password = undefined;
            return user;
        }));
    }
    // Users
    // CREATE =>  POST: add a new user to the server
    createUser(user) {
        const httpHeaders = new HttpHeaders();
        // Note: Add headers if needed (tokens/bearer)
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders });
    }
    // READ
    getAllUsers() {
        return this.http.get(API_USERS_URL);
    }
    getUserById(userId) {
        if (!userId) {
            return of(null);
        }
        return this.http.get(API_USERS_URL + `/${userId}`);
    }
    // DELETE => delete the user from the server
    deleteUser(userId) {
        const url = `${API_USERS_URL}/${userId}`;
        return this.http.delete(url);
    }
    // UPDATE => PUT: update the user on the server
    updateUser(_user) {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_USERS_URL, _user, { headers: httpHeaders }).pipe(catchError(err => {
            return of(null);
        }));
    }
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    findUsers(queryParams) {
        // This code imitates server calls
        return this.getAllUsers().pipe(mergeMap((response) => {
            const result = this.httpUtils.baseFilter(response, queryParams, []);
            return of(result);
        }));
    }
    // Permissions
    getAllPermissions() {
        return this.http.get(API_PERMISSION_URL);
    }
    getRolePermissions(roleId) {
        const allRolesRequest = this.http.get(API_PERMISSION_URL);
        const roleRequest = roleId ? this.getRoleById(roleId) : of(null);
        return forkJoin(allRolesRequest, roleRequest).pipe(map(res => {
            const _allPermissions = res[0];
            const _role = res[1];
            if (!_allPermissions || _allPermissions.length === 0) {
                return [];
            }
            const _rolePermission = _role ? _role.permissions : [];
            const result = this.getRolePermissionsTree(_allPermissions, _rolePermission);
            return result;
        }));
    }
    getRolePermissionsTree(_allPermission = [], _rolePermissionIds = []) {
        const result = [];
        const _root = filter(_allPermission, (item) => !item.parentId);
        each(_root, (_rootItem) => {
            _rootItem._children = [];
            _rootItem._children = this.collectChildrenPermission(_allPermission, _rootItem.id, _rolePermissionIds);
            _rootItem.isSelected = some(_rolePermissionIds, (id) => id === _rootItem.id);
            result.push(_rootItem);
        });
        return result;
    }
    collectChildrenPermission(_allPermission = [], _parentId, _rolePermissionIds = []) {
        const result = [];
        const _children = filter(_allPermission, (item) => item.parentId === _parentId);
        if (_children.length === 0) {
            return result;
        }
        each(_children, (_childItem) => {
            _childItem._children = [];
            _childItem._children = this.collectChildrenPermission(_allPermission, _childItem.id, _rolePermissionIds);
            _childItem.isSelected = some(_rolePermissionIds, (id) => id === _childItem.id);
            result.push(_childItem);
        });
        return result;
    }
    // Roles
    getAllRoles() {
        return this.http.get(API_ROLES_URL);
    }
    getRoleById(roleId) {
        return this.http.get(API_ROLES_URL + `/${roleId}`);
    }
    // CREATE =>  POST: add a new role to the server
    createRole(role) {
        // Note: Add headers if needed (tokens/bearer)
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_ROLES_URL, role, { headers: httpHeaders });
    }
    // UPDATE => PUT: update the role on the server
    updateRole(role) {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
    }
    // DELETE => delete the role from the server
    deleteRole(roleId) {
        const url = `${API_ROLES_URL}/${roleId}`;
        return this.http.delete(url);
    }
    findRoles(queryParams) {
        // This code imitates server calls
        return this.http.get(API_ROLES_URL).pipe(mergeMap(res => {
            const result = this.httpUtils.baseFilter(res, queryParams, []);
            return of(result);
        }));
    }
    // Check Role Before deletion
    isRoleAssignedToUsers(roleId) {
        return this.getAllUsers().pipe(map((users) => {
            if (some(users, (user) => some(user.roles, (_roleId) => _roleId === roleId))) {
                return true;
            }
            return false;
        }));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object, HttpUtilsService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.fake.js.map