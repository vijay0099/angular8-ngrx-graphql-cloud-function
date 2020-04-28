export var RoleActionTypes;
(function (RoleActionTypes) {
    RoleActionTypes["AllRolesRequested"] = "[Roles Home Page] All Roles Requested";
    RoleActionTypes["AllRolesLoaded"] = "[Roles API] All Roles Loaded";
    RoleActionTypes["RoleOnServerCreated"] = "[Edit Role Dialog] Role On Server Created";
    RoleActionTypes["RoleCreated"] = "[Edit Roles Dialog] Roles Created";
    RoleActionTypes["RoleUpdated"] = "[Edit Role Dialog] Role Updated";
    RoleActionTypes["RoleDeleted"] = "[Roles List Page] Role Deleted";
    RoleActionTypes["RolesPageRequested"] = "[Roles List Page] Roles Page Requested";
    RoleActionTypes["RolesPageLoaded"] = "[Roles API] Roles Page Loaded";
    RoleActionTypes["RolesPageCancelled"] = "[Roles API] Roles Page Cancelled";
    RoleActionTypes["RolesPageToggleLoading"] = "[Roles page] Roles Page Toggle Loading";
    RoleActionTypes["RolesActionToggleLoading"] = "[Roles] Roles Action Toggle Loading";
})(RoleActionTypes || (RoleActionTypes = {}));
export class RoleOnServerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleOnServerCreated;
    }
}
export class RoleCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleCreated;
    }
}
export class RoleUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleUpdated;
    }
}
export class RoleDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleDeleted;
    }
}
export class RolesPageRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesPageRequested;
    }
}
export class RolesPageLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesPageLoaded;
    }
}
export class RolesPageCancelled {
    constructor() {
        this.type = RoleActionTypes.RolesPageCancelled;
    }
}
export class AllRolesRequested {
    constructor() {
        this.type = RoleActionTypes.AllRolesRequested;
    }
}
export class AllRolesLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.AllRolesLoaded;
    }
}
export class RolesPageToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesPageToggleLoading;
    }
}
export class RolesActionToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesActionToggleLoading;
    }
}
//# sourceMappingURL=role.actions.js.map