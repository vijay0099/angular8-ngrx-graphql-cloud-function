import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f;
// ANGULAR
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// RXJS
import { Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
// TRANSLATE
import { TranslateService } from '@ngx-translate/core';
// STORE
import { Store } from '@ngrx/store';
// CORE
import { Login } from '@monorepo/shared/data-access-core';
// SERVICES
import { AuthService, AuthNoticeService } from '@monorepo/shared/util-services';
/**
 * ! Just example => Should be removed in development
 */
const DEMO_PARAMS = {
    EMAIL: 'admin@demo.com',
    PASSWORD: 'demo'
};
let LoginComponent = class LoginComponent {
    // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    /**
     * Component constructor
     *
     * @param router: Router
     * @param auth: AuthService
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     * @param route
     */
    constructor(router, auth, authNoticeService, translate, store, fb, cdr, route) {
        this.router = router;
        this.auth = auth;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.store = store;
        this.fb = fb;
        this.cdr = cdr;
        this.route = route;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new Subject();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.initLoginForm();
        // redirect back to the returnUrl before login
        this.route.queryParams.subscribe(params => {
            this.returnUrl = params.returnUrl || '/';
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.authNoticeService.setNotice(null);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    }
    /**
     * Form initalization
     * Default params, validators
     */
    initLoginForm() {
        // demo message to show
        if (!this.authNoticeService.onNoticeChanged$.getValue()) {
            const initialNotice = `Use account
			<strong>${DEMO_PARAMS.EMAIL}</strong> and password
			<strong>${DEMO_PARAMS.PASSWORD}</strong> to continue.`;
            this.authNoticeService.setNotice(initialNotice, 'info');
        }
        this.loginForm = this.fb.group({
            email: [
                DEMO_PARAMS.EMAIL,
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.minLength(3),
                    Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ])
            ],
            password: [
                DEMO_PARAMS.PASSWORD,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ]
        });
    }
    /**
     * Form Submit
     */
    submit() {
        const controls = this.loginForm.controls;
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.loading = true;
        const authData = {
            email: controls.email.value,
            password: controls.password.value
        };
        this.auth
            .login(authData.email, authData.password)
            .pipe(tap(user => {
            if (user) {
                this.store.dispatch(new Login({ authToken: user.accessToken }));
                this.router.navigateByUrl(this.returnUrl); // Main page
            }
            else {
                this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
            }
        }), takeUntil(this.unsubscribe), finalize(() => {
            this.loading = false;
            this.cdr.markForCheck();
        }))
            .subscribe();
    }
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'admin-login',
        templateUrl: './login.component.html',
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, AuthService,
        AuthNoticeService, typeof (_b = typeof TranslateService !== "undefined" && TranslateService) === "function" ? _b : Object, typeof (_c = typeof Store !== "undefined" && Store) === "function" ? _c : Object, typeof (_d = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _d : Object, typeof (_e = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" ? _e : Object, typeof (_f = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _f : Object])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map