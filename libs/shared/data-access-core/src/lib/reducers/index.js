// NGRX
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
// ENV
import { environment } from '@monorepo/shared/environments';
export const reducers = { router: routerReducer };
export const metaReducers = !environment.production ? [storeFreeze] : [];
// export const metaReducers: Array<MetaReducer<AppState>> = !process.env
//   .PRODUCTION
//   ? [storeFreeze]
//   : [];
//# sourceMappingURL=index.js.map