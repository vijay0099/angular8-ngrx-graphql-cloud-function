import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// RXJS
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
// LODASH
import { each, find, some } from 'lodash';
import { Store, select } from '@ngrx/store';
// CORE
import { selectRoleById, RoleUpdated, selectAllPermissions, selectLastCreatedRoleId, RoleOnServerCreated } from '@monorepo/shared/data-access-core';
// MODELS
import { Role, Permission } from '@monorepo/shared/data-access-models';
let RoleEditDialogComponent = class RoleEditDialogComponent {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<RoleEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    constructor(dialogRef, data, store) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.rolePermissions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (this.data.roleId) {
            this.role$ = this.store.pipe(select(selectRoleById(this.data.roleId)));
        }
        else {
            const newRole = new Role();
            newRole.clear();
            this.role$ = of(newRole);
        }
        this.role$.subscribe(res => {
            if (!res) {
                return;
            }
            this.role = new Role();
            this.role.id = res.id;
            this.role.title = res.title;
            this.role.permissions = res.permissions;
            this.role.isCoreRole = res.isCoreRole;
            this.allPermissions$ = this.store.pipe(select(selectAllPermissions));
            this.loadPermissions();
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    }
    /**
     * Load permissions
     */
    loadPermissions() {
        this.allPermissions$.subscribe(_allPermissions => {
            if (!_allPermissions) {
                return;
            }
            const mainPermissions = _allPermissions.filter(el => !el.parentId);
            mainPermissions.forEach((element) => {
                const hasUserPermission = this.role.permissions.some(t => t === element.id);
                const rootPermission = new Permission();
                rootPermission.clear();
                rootPermission.isSelected = hasUserPermission;
                rootPermission._children = [];
                rootPermission.id = element.id;
                rootPermission.level = element.level;
                rootPermission.parentId = element.parentId;
                rootPermission.title = element.title;
                const children = _allPermissions.filter(el => el.parentId && el.parentId === element.id);
                children.forEach(child => {
                    const hasUserChildPermission = this.role.permissions.some(t => t === child.id);
                    const childPermission = new Permission();
                    childPermission.clear();
                    childPermission.isSelected = hasUserChildPermission;
                    childPermission._children = [];
                    childPermission.id = child.id;
                    childPermission.level = child.level;
                    childPermission.parentId = child.parentId;
                    childPermission.title = child.title;
                    rootPermission._children.push(childPermission);
                });
                this.rolePermissions.push(rootPermission);
            });
        });
    }
    /** ACTIONS */
    /**
     * Returns permissions ids
     */
    preparePermissionIds() {
        const result = [];
        each(this.rolePermissions, (_root) => {
            if (_root.isSelected) {
                result.push(_root.id);
                each(_root._children, (_child) => {
                    if (_child.isSelected) {
                        result.push(_child.id);
                    }
                });
            }
        });
        return result;
    }
    /**
     * Returns role for save
     */
    prepareRole() {
        const _role = new Role();
        _role.id = this.role.id;
        _role.permissions = this.preparePermissionIds();
        // each(this.assignedRoles, (_role: Role) => _user.roles.push(_role.id));
        _role.title = this.role.title;
        _role.isCoreRole = this.role.isCoreRole;
        return _role;
    }
    /**
     * Save data
     */
    onSubmit() {
        this.hasFormErrors = false;
        this.loadingAfterSubmit = false;
        /** check form */
        if (!this.isTitleValid()) {
            this.hasFormErrors = true;
            return;
        }
        const editedRole = this.prepareRole();
        if (editedRole.id > 0) {
            this.updateRole(editedRole);
        }
        else {
            this.createRole(editedRole);
        }
    }
    /**
     * Update role
     *
     * @param _role: Role
     */
    updateRole(_role) {
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        /* Server loading imitation. Remove this on real code */
        const updateRole = {
            id: this.role.id,
            changes: _role
        };
        this.store.dispatch(new RoleUpdated({
            partialrole: updateRole,
            role: _role
        }));
        of(undefined)
            .pipe(delay(1000))
            .subscribe(() => {
            // Remove this line
            this.viewLoading = false;
            this.dialogRef.close({
                _role,
                isEdit: true
            });
        }); // Remove this line
    }
    /**
     * Create role
     *
     * @param _role: Role
     */
    createRole(_role) {
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        this.store.dispatch(new RoleOnServerCreated({ role: _role }));
        this.componentSubscriptions = this.store
            .pipe(delay(1000), // Remove this line
        select(selectLastCreatedRoleId))
            .subscribe(res => {
            if (!res) {
                return;
            }
            this.viewLoading = false;
            this.dialogRef.close({
                _role,
                isEdit: false
            });
        });
    }
    /**
     * Close alert
     *
     * @param $event: Event
     */
    onAlertClose($event) {
        this.hasFormErrors = false;
    }
    /**
     * Check is selected changes
     *
     * @param $event: Event
     * @param permission: Permission
     */
    isSelectedChanged($event, permission) {
        if (permission._children.length === 0 && permission.isSelected) {
            const _root = find(this.rolePermissions, (item) => item.id === permission.parentId);
            if (_root && !_root.isSelected) {
                _root.isSelected = true;
            }
            return;
        }
        if (permission._children.length === 0 && !permission.isSelected) {
            const _root = find(this.rolePermissions, (item) => item.id === permission.parentId);
            if (_root && _root.isSelected) {
                if (!some(_root._children, (item) => item.isSelected === true)) {
                    _root.isSelected = false;
                }
            }
            return;
        }
        if (permission._children.length > 0 && permission.isSelected) {
            each(permission._children, (item) => (item.isSelected = true));
            return;
        }
        if (permission._children.length > 0 && !permission.isSelected) {
            each(permission._children, (item) => {
                item.isSelected = false;
            });
            return;
        }
    }
    /** UI */
    /**
     * Returns component title
     */
    getTitle() {
        if (this.role && this.role.id) {
            // tslint:disable-next-line:no-string-throw
            return `Edit role '${this.role.title}'`;
        }
        // tslint:disable-next-line:no-string-throw
        return 'New role';
    }
    /**
     * Returns is title valid
     */
    isTitleValid() {
        return this.role && this.role.title && this.role.title.length > 0;
    }
};
RoleEditDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-role-edit-dialog',
        templateUrl: './role-edit.dialog.component.html',
        changeDetection: ChangeDetectionStrategy.Default
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof MatDialogRef !== "undefined" && MatDialogRef) === "function" ? _a : Object, Object, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], RoleEditDialogComponent);
export { RoleEditDialogComponent };
//# sourceMappingURL=role-edit.dialog.component.js.map