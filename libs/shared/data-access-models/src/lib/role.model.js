import { BaseModel } from './_base.model';
export class Role extends BaseModel {
    constructor() {
        super(...arguments);
        this.isCoreRole = false;
    }
    clear() {
        this.id = undefined;
        this.title = '';
        this.permissions = [];
        this.isCoreRole = false;
    }
}
//# sourceMappingURL=role.model.js.map