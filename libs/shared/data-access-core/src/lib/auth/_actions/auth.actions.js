export var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Login] Action";
    AuthActionTypes["Logout"] = "[Logout] Action";
    AuthActionTypes["Register"] = "[Register] Action";
    AuthActionTypes["UserRequested"] = "[Request User] Action";
    AuthActionTypes["UserLoaded"] = "[Load User] Auth API";
    AuthActionTypes["REGISTER_COMPLETED"] = "[Auth] REGISTER Completed";
    AuthActionTypes["REGISTER_FAILED"] = "[Auth] REGISTER Failed";
    AuthActionTypes["REGISTER_REQUESTED"] = "[Auth] REGISTER Requested";
    AuthActionTypes["LOGIN_REQUESTED"] = "[Auth] LOGIN Requested";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] LOGIN Success";
    AuthActionTypes["LOGIN_FAILED"] = "[Auth] LOGIN Failed";
    AuthActionTypes["UPDATE_ONLINE_STATUS"] = "[Auth] Update online status";
    AuthActionTypes["SOCIAL_LOGIN"] = "[Auth] Social media login";
    AuthActionTypes["SAVE_USER"] = "[Auth] Save user";
    AuthActionTypes["AUTH_ERROR"] = "[Auth] Error";
    AuthActionTypes["GET_USER"] = "[Auth] GET User";
    AuthActionTypes["LOGOUT_REQUESTED"] = "[Auth] LOGOUT requested";
    AuthActionTypes["LOGOUT_COMPLETED"] = "[Auth] LOGOUT completed";
})(AuthActionTypes || (AuthActionTypes = {}));
export class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
}
export class LoginFailed {
    constructor() {
        this.type = AuthActionTypes.LOGIN_FAILED;
    }
}
export class RegisterRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_REQUESTED;
    }
}
export class SocialLogin {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SOCIAL_LOGIN;
    }
}
export class SaveUser {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SAVE_USER;
    }
}
export class UpdateOnlineStatus {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_ONLINE_STATUS;
    }
}
export class LoginRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_REQUESTED;
    }
}
export class AuthError {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AUTH_ERROR;
    }
}
export class GetUser {
    constructor() {
        this.type = AuthActionTypes.GET_USER;
    }
}
export class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
}
export class Logout {
    constructor() {
        this.type = AuthActionTypes.Logout;
    }
}
export class Register {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Register;
    }
}
export class UserRequested {
    constructor() {
        this.type = AuthActionTypes.UserRequested;
    }
}
export class UserLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UserLoaded;
    }
}
export class RegisterCompleted {
    constructor() {
        this.type = AuthActionTypes.REGISTER_COMPLETED;
    }
}
export class RegisterFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_FAILED;
    }
}
export class LogoutRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGOUT_REQUESTED;
    }
}
export class LogoutCompleted {
    constructor() {
        this.type = AuthActionTypes.LOGOUT_COMPLETED;
    }
}
//# sourceMappingURL=auth.actions.js.map