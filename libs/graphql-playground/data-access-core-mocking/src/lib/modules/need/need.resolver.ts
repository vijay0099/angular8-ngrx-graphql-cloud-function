import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { NeedService } from './need.service';

// AUTO GENERATED TYPES
import {
  Need,
  NeedInput,
  Child
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Need')
export class NeedResolver {
  constructor(private readonly needService: NeedService) {}

  // QUERIES ========================================================

  @Query()
  async getNeed(@Args('id') id: string): Promise<Need> {
    return this.needService.findNeedById(id);
  }

  @Query()
  async getNeeds(): Promise<Need[]> {
    return this.needService.findAllNeeds();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createNeed(@Args('data') data: NeedInput): Promise<Need> {
    return this.needService.createNewNeed(data);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  // Need.childId > Child.id
  @ResolveField('child')
  async getChild(@Parent() { childId }): Promise<Child[]> {
    return this.needService.findChildById({ childId });
  }
}
