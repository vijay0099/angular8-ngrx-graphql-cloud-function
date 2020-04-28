import { BaseModel } from './_base.model';
export class Permission extends BaseModel {
    clear() {
        this.id = undefined;
        this.title = '';
        this.level = 1;
        this.parentId = undefined;
        this.isSelected = false;
        this.name = '';
        this._children = [];
    }
}
//# sourceMappingURL=permission.model.js.map