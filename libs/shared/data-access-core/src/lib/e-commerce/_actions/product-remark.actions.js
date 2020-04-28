export var ProductRemarkActionTypes;
(function (ProductRemarkActionTypes) {
    ProductRemarkActionTypes["ProductRemarkOnServerCreated"] = "[Edit ProductRemark Dialog] ProductRemark On Server Created";
    ProductRemarkActionTypes["ProductRemarkCreated"] = "[Edit ProductRemark Dialog] ProductRemark Created";
    ProductRemarkActionTypes["ProductRemarkUpdated"] = "[Edit ProductRemark Dialog] ProductRemark Updated";
    ProductRemarkActionTypes["ProductRemarkStoreUpdated"] = "[Edit ProductRemark Dialog] ProductRemark Updated | Only on storage";
    ProductRemarkActionTypes["OneProductRemarkDeleted"] = "[Product Remarks List Page]  One Product Remark Deleted";
    ProductRemarkActionTypes["ManyProductRemarksDeleted"] = "[Product Remarks List Page] Many Product Remarks Deleted";
    ProductRemarkActionTypes["ProductRemarksPageRequested"] = "[Product Remarks List Page] Product Remarks Page Requested";
    ProductRemarkActionTypes["ProductRemarksPageLoaded"] = "[Product Remarks API] Product Remarks Page Loaded";
    ProductRemarkActionTypes["ProductRemarksPageCancelled"] = "[Product Remarks API] Product Remarks Page Cancelled";
    ProductRemarkActionTypes["ProductRemarksPageToggleLoading"] = "[Product Remarks] Product Remarks Page Toggle Loading";
})(ProductRemarkActionTypes || (ProductRemarkActionTypes = {}));
export class ProductRemarkOnServerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkOnServerCreated;
    }
}
export class ProductRemarkCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkCreated;
    }
}
export class ProductRemarkUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkUpdated;
    }
}
export class ProductRemarkStoreUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkStoreUpdated;
    }
}
export class OneProductRemarkDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.OneProductRemarkDeleted;
    }
}
export class ManyProductRemarksDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ManyProductRemarksDeleted;
    }
}
export class ProductRemarksPageRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarksPageRequested;
    }
}
export class ProductRemarksPageLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarksPageLoaded;
    }
}
export class ProductRemarksPageCancelled {
    constructor() {
        this.type = ProductRemarkActionTypes.ProductRemarksPageCancelled;
    }
}
export class ProductRemarksPageToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarksPageToggleLoading;
    }
}
//# sourceMappingURL=product-remark.actions.js.map