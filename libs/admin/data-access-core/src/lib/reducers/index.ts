// NGRX
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

// ENV
import { environment } from '@monorepo/shared/environments';

// tslint:disable-next-line:no-empty-interface
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = { router: routerReducer };

export const metaReducers: Array<MetaReducer<
  AppState
>> = !environment.production ? [storeFreeze] : [];

// export const metaReducers: Array<MetaReducer<AppState>> = !process.env
//   .PRODUCTION
//   ? [storeFreeze]
//   : [];
