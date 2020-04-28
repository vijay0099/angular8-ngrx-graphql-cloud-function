// NGRX
import { Action } from '@ngrx/store';

// MODELS
import { Permission } from '@monorepo/shared/data-access-models';

export enum PermissionActionTypes {
  AllPermissionsRequested = '[Init] All Permissions Requested',
  AllPermissionsLoaded = '[Init] All Permissions Loaded'
}

export class AllPermissionsRequested implements Action {
  readonly type = PermissionActionTypes.AllPermissionsRequested;
}

export class AllPermissionsLoaded implements Action {
  readonly type = PermissionActionTypes.AllPermissionsLoaded;
  constructor(public payload: { permissions: Permission[] }) {}
}

export type PermissionActions = AllPermissionsRequested | AllPermissionsLoaded;
