// ACTIONS
import { AuthActionTypes } from '../_actions/auth.actions';
export const initialAuthState = {
    loggedIn: false,
    authToken: undefined,
    user: undefined,
    isUserLoaded: false
};
export function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case AuthActionTypes.Login: {
            const _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }
        case AuthActionTypes.Register: {
            const _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }
        case AuthActionTypes.Logout:
            return initialAuthState;
        case AuthActionTypes.UserLoaded: {
            const _user = action.payload.user;
            return Object.assign({}, state, { user: _user, isUserLoaded: true });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducers.js.map