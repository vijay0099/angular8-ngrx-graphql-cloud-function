export var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Login] Action";
    AuthActionTypes["Logout"] = "[Logout] Action";
    AuthActionTypes["Register"] = "[Register] Action";
    AuthActionTypes["UserRequested"] = "[Request User] Action";
    AuthActionTypes["UserLoaded"] = "[Load User] Auth API";
})(AuthActionTypes || (AuthActionTypes = {}));
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
//# sourceMappingURL=auth.actions.js.map