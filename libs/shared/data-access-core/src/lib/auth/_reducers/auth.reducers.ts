// ACTIONS
import { AuthActions, AuthActionTypes } from '../_actions/auth.actions';

// MODELS
import { User } from '@monorepo/shared/data-access-models';

export interface AuthState {
  loggedIn: boolean;
  authToken: string;
  user: User;
  isUserLoaded: boolean;
  error: any;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  authToken: undefined,
  user: undefined,
  isUserLoaded: false,
  error: null
};

export function authReducer(
  state = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login: {
      const _token: string = action.payload.authToken;
      return {
        loggedIn: true,
        authToken: _token,
        user: undefined,
        isUserLoaded: false,
        error:null
      };
    }

    case AuthActionTypes.Register: {
      const _token: string = action.payload.authToken;
      return {
        loggedIn: true,
        authToken: _token,
        user: undefined,
        isUserLoaded: false,
        error:null
      };
    }

    case AuthActionTypes.Logout:
      return initialAuthState;

    case AuthActionTypes.UserLoaded: {
      const _user: User = action.payload.user;
      return {
        ...state,
        user: _user,
        isUserLoaded: true
      };
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

    case AuthActionTypes.AUTH_SUCCESS: {
      return Object.assign({}, state, {
        success: action.payload.success
      });
    }

    case AuthActionTypes.AUTH_LOADING: {
      return Object.assign({}, state, {
        loading: action.payload.loading
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
