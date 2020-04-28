// author.resolver.ts

import {
  Args,
  Query,
  Resolver,
  ResolveProperty,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { ExampleService } from './example.service';

// AUTO GENERATED TYPES
import { Example } from '@monorepo/api/data-access-models';

@Resolver('Example')
export class ExampleResolver {
  constructor(private readonly exampleService: ExampleService) {}

  // QUERIES ========================================================

  @Query('examples')
  async getExamples(): Promise<Example[]> {
    return this.exampleService.findAll();
  }
}
