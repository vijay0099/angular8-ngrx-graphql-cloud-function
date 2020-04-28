import { BaseModel } from './_base.model';
export class ProductRemarkModel extends BaseModel {
    clear(carId) {
        this.id = undefined;
        this.carId = carId;
        this.text = '';
        this.type = 0;
        this.dueDate = '';
        this._isEditMode = false;
    }
}
//# sourceMappingURL=product-remark.model.js.map