// ANGULAR
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// RXJS
import { finalize, takeUntil, tap, map } from 'rxjs/operators';

// TRANSLATE
import { TranslateService } from '@ngx-translate/core';

// NGRX
import { Store, select } from '@ngrx/store';

// CORE
import {
  AppState,
  Register,
  RegisterRequested,
  AuthLoading,
  getAuthLoading
} from '@monorepo/shared/data-access-core';

// MODELS
import { User } from '@monorepo/shared/data-access-models';

// SERVICES
import { AuthService, AuthNoticeService } from '@monorepo/shared/util-services';

import { Observable, Subject } from 'rxjs';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'client-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  loading$: Observable<boolean>;
  errors: any = [];

  private unsubscribe: Subject<any>; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  /**
   * Component constructor
   *
   * @param authNoticeService: AuthNoticeService
   * @param translate: TranslateService
   * @param router: Router
   * @param auth: AuthService
   * @param store: Store<AppState>
   * @param fb: FormBuilder
   * @param cdr
   */
  constructor(
    private authNoticeService: AuthNoticeService,
    private translate: TranslateService,
    private router: Router,
    private auth: AuthService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.unsubscribe = new Subject();
  }

  /*
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit() {
    this.initRegisterForm();

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

  /*
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
  initRegisterForm() {
    this.registerForm = this.fb.group(
      {
        fullName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ])
        ],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
            Validators.maxLength(320)
          ])
        ],
        username: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ])
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ])
        ],
        confirmPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ])
        ],
        agree: [false, Validators.compose([Validators.required])]
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword
      }
    );
  }

  /**
   * Form Submit
   */
  submit() {
    const controls = this.registerForm.controls;

    // check form
    if (this.registerForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.store.dispatch(new AuthLoading({ loading: true }));

    if (!controls.agree.value) {
      // you must agree the terms and condition
      // checkbox cannot work inside mat-form-field https://github.com/angular/material2/issues/7891
      this.authNoticeService.setNotice(
        'You must agree the terms and condition',
        'danger'
      );
      return;
    }

    // const _user: User = new User();
    const _user = this.registerForm.value;
    console.log('_user', _user);
    this.store.dispatch(new RegisterRequested({ user: _user }));
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.registerForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
