import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { CategoryService } from './category.service';

// AUTO GENERATED TYPES
import {
  Category,
  CategoryInput,
  CategoryUpdateInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  // QUERIES ==========================================================

  @Query()
  async getCategory(@Args('id') id: string): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  @Query()
  async getCategories(): Promise<Category[]> {
    return this.categoryService.findAllCategories();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createCategory(@Args('data') data: CategoryInput): Promise<Category> {
    return this.categoryService.createCategory(data);
  }

  @Mutation()
  async deleteCategory(@Args('id') id): Promise<Category> {
    return this.categoryService.deleteCategory(id);
  }

  @Mutation()
  async updateCategory(
    @Args('data') data: CategoryUpdateInput
  ): Promise<Category> {
    return this.categoryService.updateCategory(data);
  }

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.categoryService.createdBy({ createdBy });
  }
}
