import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Valorization,
  ValorizationInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

import { valorization, users } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class ValorizationService {
  private readonly valorization: any[] = valorization;
  private readonly users: any[] = users;

  // QUERIES ========================================================

  async findValorizationById(id: string): Promise<Valorization> {
    return this.valorization.find(data => data.id === id);
  }

  async findAllValorization(): Promise<Valorization[]> {
    return this.valorization;
  }

  // MUTATIONS ========================================================

  async createValorization(data: ValorizationInput): Promise<Valorization> {
    console.log('create new, passing data = ', data);

    const newValorization: any = {
      id: uuidv4(),
      ...data
    };

    console.log('created new user: ', { ...newValorization });

    this.valorization.push(newValorization);
    return newValorization;
  }

  // DELETE
  async deleteValorization(id: string): Promise<any> {
    const index = this.valorization.findIndex(data => data.id === id);
    if (index === -1) {
      throw new Error('User not found.');
    }
    const deletedValorization = this.valorization.splice(index, 1);
    return deletedValorization[0];
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async findUser({ userId: userId }): Promise<User[]> {
    return this.users.find(user => user.id === userId);
  }

}
