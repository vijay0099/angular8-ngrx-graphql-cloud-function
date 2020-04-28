// ANGULAR
import { Component, Input, OnInit } from '@angular/core';
// RXJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';

// MODELS
import { UserModel } from '@monorepo/shared/data-access-models';
import { tap } from 'rxjs/operators';

// CORE
import {
  AppState,
  currentUser,
  LogoutRequested
} from '@monorepo/shared/data-access-core';

@Component({
  selector: 'monorepo-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  // Public properties
  user$: Observable<UserModel>;

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
