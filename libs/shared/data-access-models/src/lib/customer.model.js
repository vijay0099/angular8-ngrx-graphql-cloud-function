import { BaseModel } from './_base.model';
export class CustomerModel extends BaseModel {
    clear() {
        this.dob = new Date();
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.userName = '';
        this.gender = 'Female';
        this.ipAddress = '';
        this.type = 1;
        this.status = 1;
    }
}
//# sourceMappingURL=customer.model.js.map