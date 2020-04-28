// ANGULAR
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// RXJS
import { finalize, takeUntil, tap, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

// TRANSLATE
import { TranslateService } from '@ngx-translate/core';

// STORE
import { Store, select } from '@ngrx/store';

// CORE
import { 
  AppState,
  ForgotPasswordRequested,
  AuthLoading,
  getAuthLoading
 } from '@monorepo/shared/data-access-core';

// SERVICES
import {
  AuthService,
  AuthNoticeService
} from '@monorepo/shared/util-services';

@Component({
  selector: 'client-forgot-password',
  templateUrl: './forgot-password.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  // Public params
  forgotPasswordForm: FormGroup;
  loading$: Observable<boolean>;
  errors: any = [];

  private unsubscribe: Subject<any>; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  /**
   * Component constructor
   *
   * @param authService
   * @param authNoticeService
   * @param translate
   * @param store: Store<AppState>
   * @param router
   * @param fb
   * @param cdr
   */
  constructor(
    private authService: AuthService,
    public authNoticeService: AuthNoticeService,
    private translate: TranslateService,
    private router: Router,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.unsubscribe = new Subject();
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit() {
    this.initRegistrationForm();

    this.store.dispatch(new AuthLoading({ loading: false }));

    // Loading
    this.loading$ = this.store.pipe(
      select(getAuthLoading),
      map((loading: any) => {
        console.log('client-side loading =', loading);
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
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Form initalization
   * Default params, validators
   */
  initRegistrationForm() {
    this.forgotPasswordForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ])
      ]
    });
  }

  /**
   * Form Submit
   */
  submit() {
    const controls = this.forgotPasswordForm.controls;
    /** check form */
    if (this.forgotPasswordForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.store.dispatch(new AuthLoading({ loading: true }));

    const email = controls.email.value;

    this.store.dispatch(new ForgotPasswordRequested({email: email}));

    // this.authService
    //   .requestPassword(email)
    //   .pipe(
    //     tap(response => {
    //       if (response) {
    //         this.authNoticeService.setNotice(
    //           this.translate.instant('AUTH.FORGOT.SUCCESS'),
    //           'success'
    //         );
    //         this.router.navigateByUrl('/auth/login');
    //       } else {
    //         this.authNoticeService.setNotice(
    //           this.translate.instant('AUTH.VALIDATION.NOT_FOUND', {
    //             name: this.translate.instant('AUTH.INPUT.EMAIL')
    //           }),
    //           'danger'
    //         );
    //       }
    //     }),
    //     takeUntil(this.unsubscribe),
    //     finalize(() => {
    //       this.loading = false;
    //       this.cdr.markForCheck();
    //     })
    //   )
    //   .subscribe();
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.forgotPasswordForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
