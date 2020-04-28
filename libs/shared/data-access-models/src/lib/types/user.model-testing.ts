import { User as BaseModel } from './generated';

// WE EXTEND User class from template
// with our generated
export class User extends BaseModel {
  // FILLS DEFAULTS VALUES IN THE FORM
  clear(): void {
    this.id = undefined;
    this.username = '';
    this.password = '';
    this.email = '';
    this.role = null;
    this.fullName = '';
    this.photoUrl = './assets/media/users/default.jpg';
    this.phoneNumber = '';
    this.providerId = 'password';
    this.dob = '';
  }
}
