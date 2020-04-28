// children.resolver.ts

import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { ChildService } from './child.service';

// AUTO GENERATED TYPES
import {
  Child,
  ChildInput,
  ChildUpdateInput,
  Need
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Child')
export class ChildResolver {
  constructor(private readonly childrenService: ChildService) {}

  // QUERIES ==========================================================

  @Query()
  async getChild(@Args('id') id: string): Promise<Child> {
    return this.childrenService.findChildById(id);
  }

  @Query()
  async getChildren(): Promise<Child[]> {
    return this.childrenService.getAllChildren();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createChild(@Args('data') data: ChildInput): Promise<Child> {
    return this.childrenService.createNewChild(data);
  }

  @Mutation()
  async deleteChild(@Args('id') id): Promise<Child> {
    return this.childrenService.deleteChild(id);
  }

  @Mutation()
  async updateChild(@Args('data') data: ChildUpdateInput): Promise<Child> {
    return this.childrenService.updateChild(data);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // User.posts > User.id
  @ResolveField('needs')
  async getChildNeeds(@Parent() data): Promise<Need[]> {
    return this.childrenService.filterNeedsByChildId(data.id);
  }
}
