// ANGULAR
import { Injectable } from '@angular/core';
// RXJS
import { mergeMap, map, tap } from 'rxjs/operators';
import { defer, Observable, of } from 'rxjs';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

// SERVICES
import { AuthService } from '@monorepo/shared/util-services';

// ACTIONS
import {
  AllPermissionsLoaded,
  AllPermissionsRequested,
  PermissionActionTypes
} from '../_actions/permission.actions';

// MODELS
import { Permission } from '@monorepo/shared/data-access-models';

@Injectable()
export class PermissionEffects {
  @Effect()
  loadAllPermissions$ = this.actions$.pipe(
    ofType<AllPermissionsRequested>(
      PermissionActionTypes.AllPermissionsRequested
    ),
    mergeMap(() => this.auth.getAllPermissions()),
    map((result: Permission[]) => {
      return new AllPermissionsLoaded({
        permissions: result
      });
    })
  );

  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new AllPermissionsRequested());
  });

  constructor(private actions$: Actions, private auth: AuthService) {}
}
