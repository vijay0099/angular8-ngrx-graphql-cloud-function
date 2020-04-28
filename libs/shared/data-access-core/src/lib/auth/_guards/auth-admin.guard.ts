import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, take } from 'rxjs/operators';
import { ClientAuthService } from '@monorepo/shared/util-services';

// NGRX
import { select, Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';

// CORE
import { AppState, currentUser } from '@monorepo/shared/data-access-core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  /**
   * Component constructor
   *
   * @param store: Store<AppState>
   */
  role = '';
  constructor(
    private router: Router,
    private authService: ClientAuthService,
    private store: Store<AppState>
  ) {}

  getUser(): Observable<any> {
    return this.authService.getAuthState();
  }

  // getCurrentUser(){
  //   return this.store.pipe(
  //     select(currentUser),
  //     tap((value :any) => {
  //       console.log('value() >>>', value);
  //       return value;
  //       // if(value && value.role !== 'ADMIN' && value.role !== 'STAFF'){
  //       //   this.router.navigateByUrl('/auth/login');
  //       //   return of(false);
  //       // }
  //     })
  //   );
  // }

  canActivate(): Observable<boolean> {
    return this.getUser().pipe(
      take(1),
      switchMap(user => {
        console.log('AuthAdminGuard userObj ===> ', user);
        if (!user) {
          this.router.navigateByUrl('/auth/login');
          return of(false);
        } else if (
          user.emailVerified !== true &&
          user.providerData[0].providerId === 'Email/Password'
        ) {
          this.router.navigateByUrl('/auth/login');
          return of(false);
        }
        // this.getCurrentUser().pipe(
        //   tap(user => {
        //       console.log('cuurent user () >>', user);
        //   })
        // )
        return of(true);
      }),
      catchError(() => {
        this.router.navigateByUrl('/auth/login');
        return of(false);
      })
    );
  }
}
