import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { FamilyService } from './family.service';

// AUTO GENERATED TYPES
import {
  Family,
  FamilyFilterInput,
  FamilyInput,
  FamilyUpdateInput,
  Child,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Family')
export class FamilyResolver {
  constructor(private readonly familiesService: FamilyService) {}

  // QUERIES ==========================================================

  @Query()
  async getFamily(@Args('id') id: string): Promise<Family> {
    return this.familiesService.findFamilyById(id);
  }

  @Query()
  async getFamilies(
    @Args('query') query: FamilyFilterInput
  ): Promise<Family[]> {
    console.log(query);
    return this.familiesService.getAllFamilies(query);
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createFamily(@Args('data') data: FamilyInput): Promise<Family> {
    return this.familiesService.createNewFamily(data);
  }

  @Mutation()
  async deleteFamily(@Args('id') id): Promise<Family> {
    return this.familiesService.deleteFamily(id);
  }

  @Mutation()
  async updateFamily(@Args('data') data: FamilyUpdateInput): Promise<Family> {
    return this.familiesService.updateFamily(data);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  @ResolveField('children')
  async getFamilyChildren(@Parent() data): Promise<Child[]> {
    return this.familiesService.filterChildrenByFamilyId(data.id);
  }

  @ResolveField('createdBy')
  async getNotificationCreatedBy(@Parent() { createdBy }): Promise<User> {
    return this.familiesService.createdBy({ createdBy });
  }
}
