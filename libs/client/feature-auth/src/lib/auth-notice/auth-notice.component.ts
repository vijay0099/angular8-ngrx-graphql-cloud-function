// ANGULAR
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

// RXJS
import { Subscription, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// STORE
import { Store, select } from '@ngrx/store';

// CORE
import {
  AppState,
  getAuthError,
  AuthError,
  getAuthSuccess,
  AuthSuccess
} from '@monorepo/shared/data-access-core';

// MODELS
import { AuthNotice } from '@monorepo/shared/data-access-models';

// SERVICES
import { AuthNoticeService } from '@monorepo/shared/util-services';

@Component({
  selector: 'client-auth-notice',
  templateUrl: './auth-notice.component.html'
})
export class AuthNoticeComponent implements OnInit, OnDestroy {
  @Output() type: any;
  @Output() resMessage: any = '';
  success$: Observable<string | null>;
  errors$: Observable<string | null>;
  // Private properties
  private subscriptions: Subscription[] = [];

  /**
   * Component Constructor
   *
   * @param authNoticeService
   * @param cdr
   * @param store: Store<AppState>
   */
  constructor(
    public authNoticeService: AuthNoticeService,
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>
  ) {}

  /*
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit() {
    this.subscriptions.push(
      this.authNoticeService.onNoticeChanged$.subscribe(
        (notice: AuthNotice) => {
          notice = Object.assign({}, { message: '', type: '' }, notice);
          this.resMessage = notice.message;
          this.type = notice.type;
          this.cdr.markForCheck();
        }
      )
    );

    // Clear Success
    this.store.dispatch(new AuthSuccess({ success: '' }));
    // Success
    this.success$ = this.store.pipe(
      select(getAuthSuccess),
      map((success: any) => {
        console.log('client-side success message =', success);
        this.store.dispatch(new AuthError({ error: '' }));
        if (success) {
          return success;
        } else {
          return null;
        }
      })
    );

     // Clear Error
     this.store.dispatch(new AuthError({ error: '' }));
     // Error
     this.errors$ = this.store.pipe(
       select(getAuthError),
       map((error: any) => {
         console.log('client-side error message =', error);
         if (error &&error.code === 'auth/user-not-found'){
           return 'Invalid email';
         }else if (error && error.code === 'auth/wrong-password') {
           return error.message;
         } else if (error && error.code === 'auth/weak-password') {
           return error.message;
         } else if (error && error.code === 'auth/email-already-in-use') {
           return 'User with this email address already exist';
         } else if (error && error.message) {
           return error.message;
         }else if(error){
          return error;
         } else {
           return null;
         }
       })
     );

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
