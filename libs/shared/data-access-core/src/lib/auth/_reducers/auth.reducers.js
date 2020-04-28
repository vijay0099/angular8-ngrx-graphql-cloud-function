// ACTIONS
import { AuthActionTypes } from '../_actions/auth.actions';
export const initialAuthState = {
    loggedIn: false,
    authToken: undefined,
    user: undefined,
    isUserLoaded: false,
    error: null
};
export function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case AuthActionTypes.Login: {
            const _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false,
                error: null
            };
        }
        case AuthActionTypes.Register: {
            const _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false,
                error: null
            };
        }
        case AuthActionTypes.Logout:
            return initialAuthState;
        case AuthActionTypes.UserLoaded: {
            const _user = action.payload.user;
            return Object.assign({}, state, { user: _user, isUserLoaded: true });
        }
        case AuthActionTypes.LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
                isLoggedIn: true,
                isLoading: false,
                error: null
            });
        }
        case AuthActionTypes.LOGIN_FAILED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        case AuthActionTypes.AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        case AuthActionTypes.LOGOUT_COMPLETED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducers.js.map