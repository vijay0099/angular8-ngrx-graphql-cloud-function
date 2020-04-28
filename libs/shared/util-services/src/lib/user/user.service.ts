import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import {
  User,
  AdminInput,
  UserUpdateInput,
  UserFilterInput
} from '@monorepo/shared/data-access-models';

// GRAPHQL
import {
  CreateAdminGQL,
  UpdateUserGQL,
  GetUserGQL,
  DeleteUserGQL,
  GetUsersGQL
} from '@monorepo/admin/data-access-models';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/operators';

// import * as bcrypt from 'bcrypt';
// const saltRounds = 10;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private getUsersGQL: GetUsersGQL,
    private getUserGQL: GetUserGQL,
    private createAdminGQL: CreateAdminGQL,
    private updateUserGQL: UpdateUserGQL,
    private deleteUserGQL: DeleteUserGQL
  ) {}

  getUsers(query: UserFilterInput) {
    return from( this.getUsersGQL
      .watch({ query: query })
      .valueChanges
      .pipe(map(result => result.data.getUsers))
    )
  }

  createUser(user: AdminInput) {
    console.log('user', user);
    return this.createAdminGQL
      .mutate({ input: user })
      .pipe(map(result => result));
  }

  getUser(id: string) {
    return from( this.getUserGQL
      .watch({ id: id })
      .valueChanges
      .pipe(map(result => result.data.getUser))
    )
  }

  updateUser(user : UserUpdateInput) {
    return from(
       this.updateUserGQL
      .mutate({ input: user })
      .pipe(map(result => result))
    );
  }

  deleteUser(id: string) {
    return from( this.deleteUserGQL
      .mutate({ id: id })
      .pipe(map(result => result))
    )
  }
    
}
