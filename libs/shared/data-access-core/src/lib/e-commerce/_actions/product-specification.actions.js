export var ProductSpecificationActionTypes;
(function (ProductSpecificationActionTypes) {
    ProductSpecificationActionTypes["ProductSpecificationOnServerCreated"] = "[Edit ProductSpecification Dialog] Product Specification On Server Created";
    ProductSpecificationActionTypes["ProductSpecificationCreated"] = "[Edit ProductSpecification Dialog] Product Specification Created";
    ProductSpecificationActionTypes["ProductSpecificationUpdated"] = "[Edit SpecificationSpecification Dialog] Product Specification Updated";
    ProductSpecificationActionTypes["OneProductSpecificationDeleted"] = "[Product Specification List Page]  One Product Specification Deleted";
    ProductSpecificationActionTypes["ManyProductSpecificationsDeleted"] = "[Product Specifications List Page] Many Product Specifications Deleted";
    ProductSpecificationActionTypes["ProductSpecificationsPageRequested"] = "[Product Specifications List Page] Product Specifications Page Requested";
    ProductSpecificationActionTypes["ProductSpecificationsPageLoaded"] = "[Product Specifications API] Product Specifications Page Loaded";
    ProductSpecificationActionTypes["ProductSpecificationsPageCancelled"] = "[Product Specifications API] Product Specifications Page Cancelled";
    ProductSpecificationActionTypes["ProductSpecificationsPageToggleLoading"] = "[Product Specifications] Product Specifications Page Toggle Loading";
})(ProductSpecificationActionTypes || (ProductSpecificationActionTypes = {}));
export class ProductSpecificationOnServerCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationOnServerCreated;
    }
}
export class ProductSpecificationCreated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationCreated;
    }
}
export class ProductSpecificationUpdated {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationUpdated;
    }
}
export class OneProductSpecificationDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.OneProductSpecificationDeleted;
    }
}
export class ManyProductSpecificationsDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ManyProductSpecificationsDeleted;
    }
}
export class ProductSpecificationsPageRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageRequested;
    }
}
export class ProductSpecificationsPageLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageLoaded;
    }
}
export class ProductSpecificationsPageCancelled {
    constructor() {
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageCancelled;
    }
}
export class ProductSpecificationsPageToggleLoading {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageToggleLoading;
    }
}
//# sourceMappingURL=product-specification.actions.js.map