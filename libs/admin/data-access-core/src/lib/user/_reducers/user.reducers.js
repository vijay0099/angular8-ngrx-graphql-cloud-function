// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
// ACTIONS
import { UserActionTypes } from '../_actions/user.actions';
// MODELS
import { QueryParamsModel } from '@monorepo/shared/data-access-models';
export const adapter = createEntityAdapter();
export const initialUsersState = adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery: new QueryParamsModel({}),
    lastCreatedUserId: undefined,
    showInitWaitingMessage: true
});
export function usersReducer(state = initialUsersState, action) {
    switch (action.type) {
        case UserActionTypes.UsersPageToggleLoading:
            return Object.assign({}, state, { listLoading: action.payload.isLoading, lastCreatedUserId: undefined });
        case UserActionTypes.UsersActionToggleLoading:
            return Object.assign({}, state, { actionsloading: action.payload.isLoading });
        case UserActionTypes.UserOnServerCreated:
            return Object.assign({}, state);
        case UserActionTypes.UserCreated:
            return adapter.addOne(action.payload.user, Object.assign({}, state, { lastCreatedUserId: action.payload.user.id }));
        case UserActionTypes.UserUpdated:
            return adapter.updateOne(action.payload.partialUser, state);
        case UserActionTypes.UserDeleted:
            return adapter.removeOne(action.payload.id, state);
        case UserActionTypes.UsersPageCancelled:
            return Object.assign({}, state, { listLoading: false, lastQuery: new QueryParamsModel({}) });
        case UserActionTypes.UsersPageLoaded: {
            return adapter.addMany(action.payload.users, Object.assign({}, initialUsersState, { totalCount: action.payload.totalCount, lastQuery: action.payload.page, listLoading: false, showInitWaitingMessage: false }));
        }
        default:
            return state;
    }
}
export const getUserState = createFeatureSelector('users');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
//# sourceMappingURL=user.reducers.js.map