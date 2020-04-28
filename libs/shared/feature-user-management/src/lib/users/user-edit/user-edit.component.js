import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
// ANGULAR
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// RXJS
import { BehaviorSubject } from 'rxjs';
// NGRX
import { Store, select } from '@ngrx/store';
// CORE
import { UserUpdated, selectUserById, UserOnServerCreated, selectLastCreatedUserId, selectUsersActionLoading } from '@monorepo/shared/data-access-core';
// SERVICES
import { LayoutUtilsService, MessageType, SubheaderService, LayoutConfigService } from '@monorepo/shared/util-services';
// MODELS
import { User, Address, SocialNetworks } from '@monorepo/shared/data-access-models';
let UserEditComponent = class UserEditComponent {
    /**
     * Component constructor
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param userFB: FormBuilder
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(activatedRoute, router, userFB, subheaderService, layoutUtilsService, store, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userFB = userFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.rolesSubject = new BehaviorSubject([]);
        this.addressSubject = new BehaviorSubject(new Address());
        this.soicialNetworksSubject = new BehaviorSubject(new SocialNetworks());
        this.hasFormErrors = false;
        // Private properties
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.loading$ = this.store.pipe(select(selectUsersActionLoading));
        const routeSubscription = this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id && id > 0) {
                this.store.pipe(select(selectUserById(id))).subscribe(res => {
                    if (res) {
                        this.user = res;
                        this.rolesSubject.next(this.user.roles);
                        this.addressSubject.next(this.user.address);
                        this.soicialNetworksSubject.next(this.user.socialNetworks);
                        this.oldUser = Object.assign({}, this.user);
                        this.initUser();
                    }
                });
            }
            else {
                this.user = new User();
                this.user.clear();
                this.rolesSubject.next(this.user.roles);
                this.addressSubject.next(this.user.address);
                this.soicialNetworksSubject.next(this.user.socialNetworks);
                this.oldUser = Object.assign({}, this.user);
                this.initUser();
            }
        });
        this.subscriptions.push(routeSubscription);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    /**
     * Init user
     */
    initUser() {
        this.createForm();
        if (!this.user.id) {
            this.subheaderService.setTitle('Create user');
            this.subheaderService.setBreadcrumbs([
                { title: 'User Management', page: `user-management` },
                { title: 'Users', page: `user-management/users` },
                { title: 'Create user', page: `user-management/users/add` }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit user');
        this.subheaderService.setBreadcrumbs([
            { title: 'User Management', page: `user-management` },
            { title: 'Users', page: `user-management/users` },
            {
                title: 'Edit user',
                page: `user-management/users/edit`,
                queryParams: { id: this.user.id }
            }
        ]);
    }
    /**
     * Create form
     */
    createForm() {
        this.userForm = this.userFB.group({
            username: [this.user.username, Validators.required],
            fullname: [this.user.fullname, Validators.required],
            email: [this.user.email, Validators.email],
            phone: [this.user.phone],
            companyName: [this.user.companyName],
            occupation: [this.user.occupation]
        });
    }
    /**
     * Redirect to list
     *
     */
    goBackWithId() {
        const url = `/user-management/users`;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    }
    /**
     * Refresh user
     *
     * @param isNew: boolean
     * @param id: number
     */
    refreshUser(isNew = false, id = 0) {
        let url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = `/user-management/users/edit/${id}`;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    }
    /**
     * Reset
     */
    reset() {
        this.user = Object.assign({}, this.oldUser);
        this.createForm();
        this.hasFormErrors = false;
        this.userForm.markAsPristine();
        this.userForm.markAsUntouched();
        this.userForm.updateValueAndValidity();
    }
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    onSumbit(withBack = false) {
        this.hasFormErrors = false;
        const controls = this.userForm.controls;
        /** check form */
        if (this.userForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        const editedUser = this.prepareUser();
        if (editedUser.id > 0) {
            this.updateUser(editedUser, withBack);
            return;
        }
        this.addUser(editedUser, withBack);
    }
    /**
     * Returns prepared data for save
     */
    prepareUser() {
        const controls = this.userForm.controls;
        const _user = new User();
        _user.clear();
        _user.roles = this.rolesSubject.value;
        _user.address = this.addressSubject.value;
        _user.socialNetworks = this.soicialNetworksSubject.value;
        _user.accessToken = this.user.accessToken;
        _user.refreshToken = this.user.refreshToken;
        _user.pic = this.user.pic;
        _user.id = this.user.id;
        _user.username = controls.username.value;
        _user.email = controls.email.value;
        _user.fullname = controls.fullname.value;
        _user.occupation = controls.occupation.value;
        _user.phone = controls.phone.value;
        _user.companyName = controls.companyName.value;
        _user.password = this.user.password;
        return _user;
    }
    /**
     * Add User
     *
     * @param _user: User
     * @param withBack: boolean
     */
    addUser(_user, withBack = false) {
        this.store.dispatch(new UserOnServerCreated({ user: _user }));
        const addSubscription = this.store
            .pipe(select(selectLastCreatedUserId))
            .subscribe(newId => {
            const message = `New user successfully has been added.`;
            this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
            if (newId) {
                if (withBack) {
                    this.goBackWithId();
                }
                else {
                    this.refreshUser(true, newId);
                }
            }
        });
        this.subscriptions.push(addSubscription);
    }
    /**
     * Update user
     *
     * @param _user: User
     * @param withBack: boolean
     */
    updateUser(_user, withBack = false) {
        // Update User
        // tslint:disable-next-line:prefer-const
        const updatedUser = {
            id: _user.id,
            changes: _user
        };
        this.store.dispatch(new UserUpdated({ partialUser: updatedUser, user: _user }));
        const message = `User successfully has been saved.`;
        this.layoutUtilsService.showActionNotification(message, MessageType.Update, 5000, true, true);
        if (withBack) {
            this.goBackWithId();
        }
        else {
            this.refreshUser(false);
        }
    }
    /**
     * Returns component title
     */
    getComponentTitle() {
        let result = 'Create user';
        if (!this.user || !this.user.id) {
            return result;
        }
        result = `Edit user - ${this.user.fullname}`;
        return result;
    }
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    onAlertClose($event) {
        this.hasFormErrors = false;
    }
};
UserEditComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-user-edit',
        templateUrl: './user-edit.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _c : Object, SubheaderService,
        LayoutUtilsService, typeof (_d = typeof Store !== "undefined" && Store) === "function" ? _d : Object, LayoutConfigService])
], UserEditComponent);
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map