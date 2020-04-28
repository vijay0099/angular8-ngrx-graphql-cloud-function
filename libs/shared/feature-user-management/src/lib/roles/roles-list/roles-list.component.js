import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f;
// ANGULAR
import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
// MATERIAL
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
// RXJS
import { debounceTime, distinctUntilChanged, tap, skip, take, delay } from 'rxjs/operators';
import { fromEvent, merge, of } from 'rxjs';
import { Store } from '@ngrx/store';
// SERVICES
import { LayoutUtilsService, MessageType } from '@monorepo/shared/util-services';
// MODELS
import { Role, QueryParamsModel } from '@monorepo/shared/data-access-models';
// CORE
import { RolesDataSource, RoleDeleted, RolesPageRequested } from '@monorepo/shared/data-access-core';
// COMPONENTS
import { RoleEditDialogComponent } from '../role-edit/role-edit.dialog.component';
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
let RolesListComponent = class RolesListComponent {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     */
    constructor(store, dialog, snackBar, layoutUtilsService) {
        this.store = store;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', 'id', 'title', 'actions'];
        // Selection
        this.selection = new SelectionModel(true, []);
        this.rolesResult = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // If the user changes the sort order, reset back to the first page.
        const sortSubscription = this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
            - when a pagination event occurs => this.paginator.page
            - when a sort event occurs => this.sort.sortChange
            **/
        const paginatorSubscriptions = merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => {
            this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        const searchSubscription = fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(
        // tslint:disable-next-line:max-line-length
        debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        distinctUntilChanged(), // This operator will eliminate duplicate values
        tap(() => {
            this.paginator.pageIndex = 0;
            this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Init DataSource
        this.dataSource = new RolesDataSource(this.store);
        const entitiesSubscription = this.dataSource.entitySubject
            .pipe(skip(1), distinctUntilChanged())
            .subscribe(res => {
            this.rolesResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First load
        of(undefined)
            .pipe(take(1), delay(1000))
            .subscribe(() => {
            // Remove this line, just loading imitation
            this.loadRolesList();
        });
    }
    /**
     * On Destroy
     */
    ngOnDestroy() {
        this.subscriptions.forEach(el => el.unsubscribe());
    }
    /**
     * Load Roles List
     */
    loadRolesList() {
        this.selection.clear();
        const queryParams = new QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new RolesPageRequested({ page: queryParams }));
        this.selection.clear();
    }
    /**
     * Returns object for filter
     */
    filterConfiguration() {
        const filter = {};
        const searchText = this.searchInput.nativeElement.value;
        filter.title = searchText;
        return filter;
    }
    /** ACTIONS */
    /**
     * Delete role
     *
     * @param _item: Role
     */
    deleteRole(_item) {
        const _title = 'User Role';
        const _description = 'Are you sure to permanently delete this role?';
        const _waitDesciption = 'Role is deleting...';
        const _deleteMessage = `Role has been deleted`;
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.store.dispatch(new RoleDeleted({ id: _item.id }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
            this.loadRolesList();
        });
    }
    /** Fetch */
    /**
     * Fetch selected rows
     */
    fetchRoles() {
        const messages = [];
        this.selection.selected.forEach(elem => {
            messages.push({
                text: `${elem.title}`,
                id: elem.id.toString()
                // status: elem.username
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    }
    /**
     * Add role
     */
    addRole() {
        const newRole = new Role();
        newRole.clear(); // Set all defaults fields
        this.editRole(newRole);
    }
    /**
     * Edit role
     *
     * @param role: Role
     */
    editRole(role) {
        const _saveMessage = `Role successfully has been saved.`;
        const _messageType = role.id ? MessageType.Update : MessageType.Create;
        const dialogRef = this.dialog.open(RoleEditDialogComponent, {
            data: { roleId: role.id }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.layoutUtilsService.showActionNotification(_saveMessage, _messageType, 10000, true, true);
            this.loadRolesList();
        });
    }
    /**
     * Check all rows are selected
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.rolesResult.length;
        return numSelected === numRows;
    }
    /**
     * Toggle selection
     */
    masterToggle() {
        if (this.selection.selected.length === this.rolesResult.length) {
            this.selection.clear();
        }
        else {
            this.rolesResult.forEach(row => this.selection.select(row));
        }
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _a : Object)
], RolesListComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild('sort1', { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof MatSort !== "undefined" && MatSort) === "function" ? _b : Object)
], RolesListComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild('searchInput', { static: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _c : Object)
], RolesListComponent.prototype, "searchInput", void 0);
RolesListComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-roles-list',
        templateUrl: './roles-list.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof Store !== "undefined" && Store) === "function" ? _d : Object, typeof (_e = typeof MatDialog !== "undefined" && MatDialog) === "function" ? _e : Object, typeof (_f = typeof MatSnackBar !== "undefined" && MatSnackBar) === "function" ? _f : Object, LayoutUtilsService])
], RolesListComponent);
export { RolesListComponent };
//# sourceMappingURL=roles-list.component.js.map