import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { ValorizationService } from './valorization.service';

// AUTO GENERATED TYPES
import {
  Valorization,
  ValorizationInput,
  ValorizationUpdateInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Valorization')
export class ValorizationResolver {
  constructor(private readonly valorizationService: ValorizationService) {}

  // QUERIES ==========================================================

  @Query()
  async getValorizationById(@Args('id') id: string): Promise<Valorization> {
    console.log('Valorization(), @Args', id);
    return this.valorizationService.findValorizationById(id);
  }

  @Query()
  async getValorization(): Promise<Valorization[]> {
    return this.valorizationService.findAllValorization();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createValorization(
    @Args('data') data: ValorizationInput
  ): Promise<Valorization> {
    return this.valorizationService.createValorization(data);
  }

  @Mutation()
  async updateValorization(
    @Args('data') data: ValorizationUpdateInput
  ): Promise<Valorization> {
    return this.valorizationService.updateValorization(data);
  }

  @Mutation()
  async deleteValorization(@Args('id') id): Promise<Valorization> {
    return this.valorizationService.deleteValorization(id);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  // Valorization.userId > User.id
  @ResolveField('user')
  async getUser(@Parent() { userId }): Promise<User> {
    return this.valorizationService.findUser({ userId });
  }

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.valorizationService.createdBy({ createdBy });
  }
}
