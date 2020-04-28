// ANGULAR
import { Component, Input, OnInit } from '@angular/core';
// RXJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';

// CORE
import {
  AppState,
  currentUser,
  Logout,
  LogoutRequested,
  GetUser
} from '@monorepo/shared/data-access-core';

// MODELS
import { UserModel } from '@monorepo/shared/data-access-models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'monorepo-user-profile2',
  templateUrl: './user-profile2.component.html'
})
export class UserProfile2Component implements OnInit {
  // Public properties
  user$: Observable<UserModel>;
 
  @Input() avatar = true;
  @Input() greeting = true;
  @Input() badge: boolean;
  @Input() icon: boolean;
  @Input() uid = '';

  /**
   * Component constructor
   *
   * @param store: Store<AppState>
   */
  constructor(private store: Store<AppState>) {}

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    this.user$ = this.store.pipe(
      select(currentUser),
      tap(value => {
        if(value){
          this.uid = value.id;
        }
      })
    );
  }

  /**
   * Log out
   */
  logout() {
    this.store.dispatch(new LogoutRequested({uid : this.uid}));
  }
}
