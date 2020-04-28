import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, Input } from '@angular/core';
// RXJS
import { BehaviorSubject } from 'rxjs';
// NGRX
import { Store, select } from '@ngrx/store';
// LODASH
import { each, find, remove } from 'lodash';
// CORE
import { selectAllRoles } from '@monorepo/shared/data-access-core';
let UserRolesListComponent = class UserRolesListComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    constructor(store) {
        this.store = store;
        // Public properties
        // Incoming data
        this.loadingSubject = new BehaviorSubject(false);
        this.allRoles = [];
        this.unassignedRoles = [];
        this.assignedRoles = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.allUserRoles$ = this.store.pipe(select(selectAllRoles));
        this.allUserRoles$.subscribe((res) => {
            each(res, (_role) => {
                this.allRoles.push(_role);
                this.unassignedRoles.push(_role);
            });
            each(this.rolesSubject.value, (roleId) => {
                const role = find(this.allRoles, (_role) => {
                    return _role.id === roleId;
                });
                if (role) {
                    this.assignedRoles.push(role);
                    remove(this.unassignedRoles, el => el.id === role.id);
                }
            });
        });
    }
    /**
     * Assign role
     */
    assignRole() {
        if (this.roleIdForAdding === 0) {
            return;
        }
        const role = find(this.allRoles, (_role) => {
            return _role.id === +this.roleIdForAdding;
        });
        if (role) {
            this.assignedRoles.push(role);
            remove(this.unassignedRoles, el => el.id === role.id);
            this.roleIdForAdding = 0;
            this.updateRoles();
        }
    }
    /**
     * Unassign role
     *
     * @param role: Role
     */
    unassingRole(role) {
        this.roleIdForAdding = 0;
        this.unassignedRoles.push(role);
        remove(this.assignedRoles, el => el.id === role.id);
        this.updateRoles();
    }
    /**
     * Update roles
     */
    updateRoles() {
        const _roles = [];
        each(this.assignedRoles, elem => _roles.push(elem.id));
        this.rolesSubject.next(_roles);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UserRolesListComponent.prototype, "loadingSubject", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof BehaviorSubject !== "undefined" && BehaviorSubject) === "function" ? _a : Object)
], UserRolesListComponent.prototype, "rolesSubject", void 0);
UserRolesListComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-user-roles-list',
        templateUrl: './user-roles-list.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], UserRolesListComponent);
export { UserRolesListComponent };
//# sourceMappingURL=user-roles-list.component.js.map