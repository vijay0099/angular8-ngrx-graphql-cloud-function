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
  Child,
  NeedUpdateInput,
  FindInput,
  DeleteInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Need')
export class NeedResolver {
  constructor(private readonly needService: NeedService) {}

  // QUERIES ========================================================

  @Query()
  async getNeed(@Args('id') id: String): Promise<Need> {
    return this.needService.getNeed(id);
  }

  @Query()
  async getNeedById(@Args('query') data: FindInput): Promise<any> {
    return this.needService.findNeedById(data);
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

  @Mutation()
  async deleteNeed(@Args('data') data: DeleteInput): Promise<Need> {
    return this.needService.deleteNeed(data);
  }

  @Mutation()
  async updateNeed(@Args('data') data: NeedUpdateInput): Promise<Need> {
    return this.needService.updateNeed(data);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  // Need.belongsTo > Child.id
  @ResolveField('child')
  async getChild(@Parent() { belongsTo }): Promise<Child> {
    return this.needService.findChildById({ belongsTo });
  }

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.needService.createdBy({ createdBy });
  }
}
