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
    return this.childrenService.findAllChildren();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createChild(@Args('data') data: ChildInput): Promise<Child> {
    return this.childrenService.createNewChild(data);
  }

  // // UPDATE DOG
  // @Mutation()
  // updateDog(
  //   @Args('dog')
  //   dog: DogInput
  // ): Promise<string> {
  //   this.dogs = this.dogs.map(c => {
  //     if (c.id === dog.id) {
  //       return { ...dog };
  //     }
  //     return c;
  //   });
  //   return Promise.resolve('dog updated');
  // }

  @Mutation()
  async deleteChild(@Args('id') id): Promise<Child> {
    return this.childrenService.deleteChild(id);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // User.posts > User.id
  @ResolveField('needs')
  async getChildNeeds(@Parent() { id }): Promise<Need[]> {
    return this.childrenService.filterNeedsByChildId({ id });
  }
}
