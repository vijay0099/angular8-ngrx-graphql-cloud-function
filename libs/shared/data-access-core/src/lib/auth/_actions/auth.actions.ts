import { Action } from '@ngrx/store';

import { User } from '@monorepo/shared/data-access-models';

export enum AuthActionTypes {
  Login = '[Login] Action',
  Logout = '[Logout] Action',
  Register = '[Register] Action',
  UserRequested = '[Request User] Action',
  UserLoaded = '[Load User] Auth API',

  REGISTER_COMPLETED = '[Auth] REGISTER Completed',
  REGISTER_FAILED = '[Auth] REGISTER Failed',
  REGISTER_REQUESTED = '[Auth] REGISTER Requested',
  ADMIN_LOGIN_REQUESTED = '[Auth] ADMIN LOGIN Requested',
  LOGIN_REQUESTED = '[Auth] LOGIN Requested',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',
  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  SOCIAL_LOGIN = '[Auth] Social media login',
  SAVE_USER = '[Auth] Save user',
  AUTH_ERROR = '[Auth] Error',
  AUTH_SUCCESS = '[Auth] Success',
  GET_USER = '[Auth] GET User',
  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed',
  FORGOT_PASSWORD_REQUESTED = '[Auth] FORGOT_PASSWORD requested',
  FORGOT_PASSWORD_COMPLETED = '[Auth] FORGOT_PASSWORD completed',

  AUTH_LOADING = '[Auth] Auth requested',
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: any }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class RegisterRequested implements Action {
  readonly type = AuthActionTypes.REGISTER_REQUESTED;

  constructor(public payload: { user: User }) {}
}

export class SocialLogin implements Action {
  readonly type = AuthActionTypes.SOCIAL_LOGIN;

  constructor(public payload: { authProvider: string }) {}
}

export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;

  constructor(public payload: { user: any }) {}
}

export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;

  constructor(public payload: { uid: string; status: boolean }) {}
}

export class AdminLoginRequested implements Action {
  readonly type = AuthActionTypes.ADMIN_LOGIN_REQUESTED;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginRequested implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;

  constructor(public payload: { error: any }) {}
}

export class AuthSuccess implements Action {
  readonly type = AuthActionTypes.AUTH_SUCCESS;

  constructor(public payload: { success: any }) {}
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { authToken: string }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: { authToken: string }) {}
}

export class UserRequested implements Action {
  readonly type = AuthActionTypes.UserRequested;
}

export class UserLoaded implements Action {
  readonly type = AuthActionTypes.UserLoaded;
  constructor(public payload: { user: User }) {}
}

export class RegisterCompleted implements Action {
  readonly type = AuthActionTypes.REGISTER_COMPLETED;
}

export class RegisterFailed implements Action {
  readonly type = AuthActionTypes.REGISTER_FAILED;

  constructor(public payload: { error: any }) {}
}

export class LogoutRequested implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUESTED;

  constructor(public payload: { uid: string }) {}
}

export class LogoutCompleted implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;
}

export class ForgotPasswordRequested implements Action {
  readonly type = AuthActionTypes.FORGOT_PASSWORD_REQUESTED;

  constructor(public payload: { email: string }) {}
}

export class ForgotPasswordCompleted implements Action {
  readonly type = AuthActionTypes.FORGOT_PASSWORD_COMPLETED;
}

export class AuthLoading implements Action {
  readonly type = AuthActionTypes.AUTH_LOADING;

  constructor(public payload: { loading: boolean }) {}
}

export type AuthActions =
  | Login
  | RegisterRequested
  | RegisterCompleted
  | RegisterFailed
  | AdminLoginRequested
  | LoginRequested
  | LoginSuccess
  | LoginFailed
  | SocialLogin
  | SaveUser
  | UpdateOnlineStatus
  | GetUser
  | AuthError
  | AuthSuccess
  | LogoutRequested
  | LogoutCompleted
  | Logout
  | ForgotPasswordRequested
  | ForgotPasswordCompleted
  | Register
  | UserRequested
  | UserLoaded
  | AuthLoading;
