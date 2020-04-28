import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, take } from 'rxjs/operators';
import { ClientAuthService } from '@monorepo/shared/util-services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: ClientAuthService) {}

  getUser(): Observable<any> {
    return this.authService.getAuthState();
  }

  canActivate(): Observable<boolean> {
    return this.getUser().pipe(
      take(1),
      switchMap(user => {
        console.log('AuthGuard userObj ===> ', user);
        // if (!user) {
        //   this.router.navigateByUrl('/auth/login');
        //   return of(false);
        // }else
        if(user && user.emailVerified !==true && user.providerData[0].providerId === 'Email/Password'){
          this.router.navigateByUrl('/auth/login');
          return of(false);
        }
        return of(true);
      }),
      catchError(() => {
        this.router.navigateByUrl('/auth/login');
        return of(false);
      })
    );
  }
}
