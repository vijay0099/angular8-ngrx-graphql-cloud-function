import * as tslib_1 from "tslib";
var _a, _b, _c;
// ANGULAR
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
// RXJS
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
// MODELS
import { SocialNetworks } from '@monorepo/shared/data-access-models';
// SERVICES
import { AuthService, LayoutUtilsService } from '@monorepo/shared/util-services';
let SocialNetworksComponent = class SocialNetworksComponent {
    /**
     * Component constructor
     *
     * @param fb: FormBuilser
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    constructor(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        // Public properties
        // Incoming data
        this.loadingSubject = new BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        if (!this.socialNetworksSubject.value) {
            const newSocialNetworks = new SocialNetworks();
            newSocialNetworks.clear();
            this.socialNetworksSubject.next(newSocialNetworks);
        }
        this.createForm();
        this.socialNetworksForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        distinctUntilChanged(), // This operator will eliminate duplicate values
        tap(() => {
            this.updateSocialNetworks();
        }))
            .subscribe();
    }
    // Create form
    createForm() {
        this.socialNetworksForm = this.fb.group({
            linkedIn: [this.socialNetworksSubject.value.linkedIn],
            facebook: [this.socialNetworksSubject.value.facebook],
            twitter: [this.socialNetworksSubject.value.twitter],
            instagram: [this.socialNetworksSubject.value.instagram]
        });
    }
    /**
     * Update social networks
     */
    updateSocialNetworks() {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        const controls = this.socialNetworksForm.controls;
        /** check form */
        if (this.socialNetworksForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        const newSocialNetworks = new SocialNetworks();
        newSocialNetworks.clear();
        newSocialNetworks.linkedIn = controls.linkedIn.value;
        newSocialNetworks.facebook = controls.facebook.value;
        newSocialNetworks.twitter = controls.twitter.value;
        newSocialNetworks.instagram = controls.instagram.value;
        this.socialNetworksSubject.next(newSocialNetworks);
        this.loadingSubject.next(false);
    }
    /**
     * Close alert
     *
     * @param $event: Event
     */
    onAlertClose($event) {
        this.hasFormErrors = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SocialNetworksComponent.prototype, "loadingSubject", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof BehaviorSubject !== "undefined" && BehaviorSubject) === "function" ? _a : Object)
], SocialNetworksComponent.prototype, "socialNetworksSubject", void 0);
SocialNetworksComponent = tslib_1.__decorate([
    Component({
        selector: 'monorepo-social-networks',
        templateUrl: './social-networks.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _b : Object, AuthService, typeof (_c = typeof Store !== "undefined" && Store) === "function" ? _c : Object, LayoutUtilsService])
], SocialNetworksComponent);
export { SocialNetworksComponent };
//# sourceMappingURL=social-networks.component.js.map