export var ProductActionTypes;
(function (ProductActionTypes) {
    ProductActionTypes["ProductOnServerCreated"] = "[Edit Product Component] Product On Server Created";
    ProductActionTypes["ProductCreated"] = "[Edit Product Component] Product Created";
    ProductActionTypes["ProductUpdated"] = "[Edit Product Component] Product Updated";
    ProductActionTypes["ProductsStatusUpdated"] = "[Products List Page] Products Status Updated";
    ProductActionTypes["OneProductDeleted"] = "[Products List Page] One Product Deleted";
    ProductActionTypes["ManyProductsDeleted"] = "[Products List Page] Many Selected Products Deleted";
    ProductActionTypes["ProductsPageRequested"] = "[Products List Page] Products Page Requested";
    ProductActionTypes["ProductsPageLoaded"] = "[Products API] Products Page Loaded";
    ProductActionTypes["ProductsPageCancelled"] = "[Products API] Products Page Cancelled";
    ProductActionTypes["ProductsPageToggleLoading"] = "[Products] Products Page Toggle Loading";
    ProductActionTypes["ProductsActionToggleLoading"] = "[Products] Products Action Toggle Loading";
})(ProductActionTypes || (ProductActionTypes = {}));
export class ProductOnServerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductOnServerCreated;
    }
}
export class ProductCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductCreated;
    }
}
export class ProductUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductUpdated;
    }
}
export class ProductsStatusUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsStatusUpdated;
    }
}
export class OneProductDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.OneProductDeleted;
    }
}
export class ManyProductsDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ManyProductsDeleted;
    }
}
export class ProductsPageRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsPageRequested;
    }
}
export class ProductsPageLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsPageLoaded;
    }
}
export class ProductsPageCancelled {
    constructor() {
        this.type = ProductActionTypes.ProductsPageCancelled;
    }
}
export class ProductsPageToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsPageToggleLoading;
    }
}
export class ProductsActionToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsActionToggleLoading;
    }
}
//# sourceMappingURL=product.actions.js.map