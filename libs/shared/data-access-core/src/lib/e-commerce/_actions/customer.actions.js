export var CustomerActionTypes;
(function (CustomerActionTypes) {
    CustomerActionTypes["CustomerOnServerCreated"] = "[Edit Customer Dialog] Customer On Server Created";
    CustomerActionTypes["CustomerCreated"] = "[Edit Customer Dialog] Customer Created";
    CustomerActionTypes["CustomerUpdated"] = "[Edit Customer Dialog] Customer Updated";
    CustomerActionTypes["CustomersStatusUpdated"] = "[Customer List Page] Customers Status Updated";
    CustomerActionTypes["OneCustomerDeleted"] = "[Customers List Page] One Customer Deleted";
    CustomerActionTypes["ManyCustomersDeleted"] = "[Customers List Page] Many Customer Deleted";
    CustomerActionTypes["CustomersPageRequested"] = "[Customers List Page] Customers Page Requested";
    CustomerActionTypes["CustomersPageLoaded"] = "[Customers API] Customers Page Loaded";
    CustomerActionTypes["CustomersPageCancelled"] = "[Customers API] Customers Page Cancelled";
    CustomerActionTypes["CustomersPageToggleLoading"] = "[Customers] Customers Page Toggle Loading";
    CustomerActionTypes["CustomerActionToggleLoading"] = "[Customers] Customers Action Toggle Loading";
})(CustomerActionTypes || (CustomerActionTypes = {}));
export class CustomerOnServerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerOnServerCreated;
    }
}
export class CustomerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerCreated;
    }
}
export class CustomerUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerUpdated;
    }
}
export class CustomersStatusUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersStatusUpdated;
    }
}
export class OneCustomerDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.OneCustomerDeleted;
    }
}
export class ManyCustomersDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.ManyCustomersDeleted;
    }
}
export class CustomersPageRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersPageRequested;
    }
}
export class CustomersPageLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersPageLoaded;
    }
}
export class CustomersPageCancelled {
    constructor() {
        this.type = CustomerActionTypes.CustomersPageCancelled;
    }
}
export class CustomersPageToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersPageToggleLoading;
    }
}
export class CustomerActionToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerActionToggleLoading;
    }
}
//# sourceMappingURL=customer.actions.js.map