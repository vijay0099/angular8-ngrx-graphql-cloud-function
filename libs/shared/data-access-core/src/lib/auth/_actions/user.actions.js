export var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["AllUsersRequested"] = "[Users Module] All Users Requested";
    UserActionTypes["AllUsersLoaded"] = "[Users API] All Users Loaded";
    UserActionTypes["UserOnServerCreated"] = "[Edit User Component] User On Server Created";
    UserActionTypes["UserCreated"] = "[Edit User Dialog] User Created";
    UserActionTypes["UserUpdated"] = "[Edit User Dialog] User Updated";
    UserActionTypes["UserDeleted"] = "[Users List Page] User Deleted";
    UserActionTypes["UsersPageRequested"] = "[Users List Page] Users Page Requested";
    UserActionTypes["UsersPageLoaded"] = "[Users API] Users Page Loaded";
    UserActionTypes["UsersPageCancelled"] = "[Users API] Users Page Cancelled";
    UserActionTypes["UsersPageToggleLoading"] = "[Users] Users Page Toggle Loading";
    UserActionTypes["UsersActionToggleLoading"] = "[Users] Users Action Toggle Loading";
})(UserActionTypes || (UserActionTypes = {}));
export class UserOnServerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserOnServerCreated;
    }
}
export class UserCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserCreated;
    }
}
export class UserUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserUpdated;
    }
}
export class UserDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserDeleted;
    }
}
export class UsersPageRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageRequested;
    }
}
export class UsersPageLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageLoaded;
    }
}
export class UsersPageCancelled {
    constructor() {
        this.type = UserActionTypes.UsersPageCancelled;
    }
}
export class UsersPageToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageToggleLoading;
    }
}
export class UsersActionToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersActionToggleLoading;
    }
}
//# sourceMappingURL=user.actions.js.map