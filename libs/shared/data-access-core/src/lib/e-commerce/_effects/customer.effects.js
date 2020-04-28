import * as tslib_1 from "tslib";
var _a, _b;
// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { forkJoin } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// SERVICES
import { CustomersService } from '@monorepo/shared/util-services';
// ACTIONS
import { CustomerActionTypes, CustomersPageLoaded, CustomerActionToggleLoading, CustomersPageToggleLoading, CustomerCreated } from '../_actions/customer.actions';
import { of } from 'rxjs';
let CustomerEffects = class CustomerEffects {
    constructor(actions$, customersService, store) {
        this.actions$ = actions$;
        this.customersService = customersService;
        this.store = store;
        this.showPageLoadingDistpatcher = new CustomersPageToggleLoading({
            isLoading: true
        });
        this.showActionLoadingDistpatcher = new CustomerActionToggleLoading({
            isLoading: true
        });
        this.hideActionLoadingDistpatcher = new CustomerActionToggleLoading({
            isLoading: false
        });
        this.loadCustomersPage$ = this.actions$.pipe(ofType(CustomerActionTypes.CustomersPageRequested), mergeMap(({ payload }) => {
            this.store.dispatch(this.showPageLoadingDistpatcher);
            const requestToServer = this.customersService.findCustomers(payload.page);
            const lastQuery = of(payload.page);
            return forkJoin(requestToServer, lastQuery);
        }), map(response => {
            const result = response[0];
            const lastQuery = response[1];
            const pageLoadedDispatch = new CustomersPageLoaded({
                customers: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
            return pageLoadedDispatch;
        }));
        this.deleteCustomer$ = this.actions$.pipe(ofType(CustomerActionTypes.OneCustomerDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.customersService.deleteCustomer(payload.id);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.deleteCustomers$ = this.actions$.pipe(ofType(CustomerActionTypes.ManyCustomersDeleted), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.customersService.deleteCustomers(payload.ids);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.updateCustomer$ = this.actions$.pipe(ofType(CustomerActionTypes.CustomerUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.customersService.updateCustomer(payload.customer);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.updateCustomersStatus$ = this.actions$.pipe(ofType(CustomerActionTypes.CustomersStatusUpdated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.customersService.updateStatusForCustomer(payload.customers, payload.status);
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
        this.createCustomer$ = this.actions$.pipe(ofType(CustomerActionTypes.CustomerOnServerCreated), mergeMap(({ payload }) => {
            this.store.dispatch(this.showActionLoadingDistpatcher);
            return this.customersService.createCustomer(payload.customer).pipe(tap(res => {
                this.store.dispatch(new CustomerCreated({ customer: res }));
            }));
        }), map(() => {
            return this.hideActionLoadingDistpatcher;
        }));
    }
};
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CustomerEffects.prototype, "loadCustomersPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CustomerEffects.prototype, "deleteCustomer$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CustomerEffects.prototype, "deleteCustomers$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CustomerEffects.prototype, "updateCustomer$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CustomerEffects.prototype, "updateCustomersStatus$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CustomerEffects.prototype, "createCustomer$", void 0);
CustomerEffects = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Actions !== "undefined" && Actions) === "function" ? _a : Object, CustomersService, typeof (_b = typeof Store !== "undefined" && Store) === "function" ? _b : Object])
], CustomerEffects);
export { CustomerEffects };
//# sourceMappingURL=customer.effects.js.map