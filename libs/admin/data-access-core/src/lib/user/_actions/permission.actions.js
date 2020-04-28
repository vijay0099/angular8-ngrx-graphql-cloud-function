export var PermissionActionTypes;
(function (PermissionActionTypes) {
    PermissionActionTypes["AllPermissionsRequested"] = "[Init] All Permissions Requested";
    PermissionActionTypes["AllPermissionsLoaded"] = "[Init] All Permissions Loaded";
})(PermissionActionTypes || (PermissionActionTypes = {}));
export class AllPermissionsRequested {
    constructor() {
        this.type = PermissionActionTypes.AllPermissionsRequested;
    }
}
export class AllPermissionsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = PermissionActionTypes.AllPermissionsLoaded;
    }
}
//# sourceMappingURL=permission.actions.js.map