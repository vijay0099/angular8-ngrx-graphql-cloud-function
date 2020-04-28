import * as tslib_1 from "tslib";
var _a;
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { environment } from '../../../../../apps/admin-app/src/environments/environment';
import { environment } from '@monorepo/shared/environments';
const API_USERS_URL = 'api/users';
const API_PERMISSION_URL = 'api/permissions';
const API_ROLES_URL = 'api/roles';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    // Authentication/Authorization
    login(email, password) {
        return this.http.post(API_USERS_URL, { email, password });
    }
    getUserByToken() {
        const userToken = localStorage.getItem(environment.authTokenKey);
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Authorization', 'Bearer ' + userToken);
        return this.http.get(API_USERS_URL, { headers: httpHeaders });
    }
    register(user) {
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
    /*
     * Submit forgot password request
     *
     * @param {string} email
     * @returns {Observable<any>}
     */
    requestPassword(email) {
        return this.http
            .get(API_USERS_URL + '/forgot?=' + email)
            .pipe(catchError(this.handleError('forgot-password', [])));
    }
    getAllUsers() {
        return this.http.get(API_USERS_URL);
    }
    getUserById(userId) {
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
        return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
    }
    // CREATE =>  POST: add a new user to the server
    createUser(user) {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders });
    }
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    findUsers(queryParams) {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL + '/findUsers', queryParams, { headers: httpHeaders });
    }
    // Permission
    getAllPermissions() {
        return this.http.get(API_PERMISSION_URL);
    }
    getRolePermissions(roleId) {
        return this.http.get(API_PERMISSION_URL + '/getRolePermission?=' + roleId);
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
    // Check Role Before deletion
    isRoleAssignedToUsers(roleId) {
        return this.http.get(API_ROLES_URL + '/checkIsRollAssignedToUser?roleId=' + roleId);
    }
    findRoles(queryParams) {
        // This code imitates server calls
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_ROLES_URL + '/findRoles', queryParams, { headers: httpHeaders });
    }
    /*
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map