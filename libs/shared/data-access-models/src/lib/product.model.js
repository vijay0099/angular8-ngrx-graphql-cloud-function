import { BaseModel } from './_base.model';
export class ProductModel extends BaseModel {
    clear() {
        this.model = '';
        this.manufacture = '';
        this.modelYear = 2000;
        this.mileage = 0;
        this.description = '';
        this.color = 'Black';
        this.price = 1000;
        this.condition = 0;
        this.status = 0;
        this.VINCode = '';
    }
}
//# sourceMappingURL=product.model.js.map