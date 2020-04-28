// ANGULAR
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// RXJS
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

// TRANSLATE
import { TranslateService } from '@ngx-translate/core';

// STORE
import { Store, select } from '@ngrx/store';

// CORE
import { 
  AppState,
  AdminLoginRequested,
  AuthLoading,
  getAuthLoading } from '@monorepo/shared/data-access-core';

// SERVICES
import {
  AuthService,
  AuthNoticeService
} from '@monorepo/shared/util-services';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  // Public params
  loginForm: FormGroup;
  loading$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  errors: any = [];

  private unsubscribe: Subject<any>;

  private returnUrl: any;

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
  constructor(
    private router: Router,
    private auth: AuthService,
    private authNoticeService: AuthNoticeService,
    private translate: TranslateService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.unsubscribe = new Subject();
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    this.initLoginForm();

    // redirect back to the returnUrl before login
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params.returnUrl || '/';
    });

    this.store.dispatch(new AuthLoading({ loading: false }));

    // Loading
    this.loading$ = this.store.pipe(
      select(getAuthLoading),
      map((loading: any) => {
        if (loading) {
          return loading;
        } else {
          return false;
        }
      })
    );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.authNoticeService.setNotice(null);
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Form initalization
   * Default params, validators
   */
  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ])
      ],
      password: [
        '',
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
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.store.dispatch(new AuthLoading({ loading: true }));

    const authData = {
      email: controls.email.value,
      password: controls.password.value
    };
    console.log('authData Submited() >', authData);
    this.store.dispatch(new AdminLoginRequested(authData));

  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
