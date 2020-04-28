import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f, _g;
import { Component, ElementRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// MATERIAL
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
// RXJS
import { debounceTime, distinctUntilChanged, tap, skip, take, delay } from 'rxjs/operators';
import { fromEvent, merge, of } from 'rxjs';
// LODASH
import { each, find } from 'lodash';
// NGRX
import { Store, select } from '@ngrx/store';
// CORE
import { UsersDataSource, UserDeleted, UsersPageRequested, selectAllRoles } from '@monorepo/shared/data-access-core';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
// SERVICES
import { SubheaderService, LayoutUtilsService, MessageType } from '@monorepo/shared/util-services';
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
let UsersListComponent = class UsersListComponent {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     */
    constructor(activatedRoute, store, router, layoutUtilsService, subheaderService, cdr) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.displayedColumns = [
            'select',
            'id',
            'username',
            'email',
            'fullname',
            '_roles',
            'actions'
        ];
        // Selection
        this.selection = new SelectionModel(true, []);
        this.usersResult = [];
        this.allRoles = [];
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
        // load roles list
        const rolesSubscription = this.store
            .pipe(select(selectAllRoles))
            .subscribe(res => (this.allRoles = res));
        this.subscriptions.push(rolesSubscription);
        // If the user changes the sort order, reset back to the first page.
        const sortSubscription = this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
            - when a pagination event occurs => this.paginator.page
            - when a sort event occurs => this.sort.sortChange
            **/
        const paginatorSubscriptions = merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => {
            this.loadUsersList();
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
            this.loadUsersList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('User management');
        // Init DataSource
        this.dataSource = new UsersDataSource(this.store);
        const entitiesSubscription = this.dataSource.entitySubject
            .pipe(skip(1), distinctUntilChanged())
            .subscribe(res => {
            this.usersResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First Load
        of(undefined)
            .pipe(take(1), delay(1000))
            .subscribe(() => {
            // Remove this line, just loading imitation
            this.loadUsersList();
        });
    }
    /**
     * On Destroy
     */
    ngOnDestroy() {
        this.subscriptions.forEach(el => el.unsubscribe());
    }
    /**
     * Load users list
     */
    loadUsersList() {
        this.selection.clear();
        const queryParams = new QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        this.store.dispatch(new UsersPageRequested({ page: queryParams }));
        this.selection.clear();
    }
    /** FILTRATION */
    filterConfiguration() {
        const filter = {};
        const searchText = this.searchInput.nativeElement.value;
        filter.lastName = searchText;
        filter.username = searchText;
        filter.email = searchText;
        filter.fillname = searchText;
        return filter;
    }
    /** ACTIONS */
    /**
     * Delete user
     *
     * @param _item: User
     */
    deleteUser(_item) {
        const _title = 'User Delete';
        const _description = 'Are you sure to permanently delete this user?';
        const _waitDesciption = 'User is deleting...';
        const _deleteMessage = `User has been deleted`;
        const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(res => {
            if (!res) {
                return;
            }
            this.store.dispatch(new UserDeleted({ id: _item.id }));
            this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
        });
    }
    /**
     * Fetch selected rows
     */
    fetchUsers() {
        const messages = [];
        this.selection.selected.forEach(elem => {
            messages.push({
                text: `${elem.fullname}, ${elem.email}`,
                id: elem.id.toString(),
                status: elem.username
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    }
    /**
     * Check all rows are selected
     */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.usersResult.length;
        return numSelected === numRows;
    }
    /**
     * Toggle selection
     */
    masterToggle() {
        if (this.selection.selected.length === this.usersResult.length) {
            this.selection.clear();
        }
        else {
            this.usersResult.forEach(row => this.selection.select(row));
        }
    }
    /* UI */
    /**
     * Returns user roles string
     *
     * @param user: User
     */
    getUserRolesStr(user) {
        const titles = [];
        each(user.roles, (roleId) => {
            const _role = find(this.allRoles, (role) => role.id === roleId);
            if (_role) {
                titles.push(_role.title);
            }
        });
        return titles.join(', ');
    }
    /**
     * Redirect to edit page
     *
     * @param id
     */
    editUser(id) {
        this.router.navigate(['../users/edit', id], {
            relativeTo: this.activatedRoute
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _a : Object)
], UsersListComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild('sort1', { static: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof MatSort !== "undefined" && MatSort) === "function" ? _b : Object)
], UsersListComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild('searchInput', { static: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _c : Object)
], UsersListComponent.prototype, "searchInput", void 0);
UsersListComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-users-list',
        templateUrl: './users-list.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _d : Object, typeof (_e = typeof Store !== "undefined" && Store) === "function" ? _e : Object, typeof (_f = typeof Router !== "undefined" && Router) === "function" ? _f : Object, LayoutUtilsService,
        SubheaderService, typeof (_g = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _g : Object])
], UsersListComponent);
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map