import { BaseModel } from './_base.model';
export class ProductSpecificationModel extends BaseModel {
    clear(carId) {
        this.id = undefined;
        this.carId = carId;
        this._specificationName = '';
        this.value = '';
        this.specId = undefined;
    }
}
//# sourceMappingURL=product-specification.model.js.map