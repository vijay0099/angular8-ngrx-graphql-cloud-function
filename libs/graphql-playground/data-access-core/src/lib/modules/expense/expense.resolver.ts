import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { ExpenseService } from './expense.service';

// AUTO GENERATED TYPES
import {
  Expense,
  ExpenseInput,
  ExpenseUpdateInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Expense')
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  // QUERIES ==========================================================

  @Query()
  async getExpense(@Args('id') id: string): Promise<Expense> {
    return this.expenseService.findExpenseById(id);
  }

  @Query()
  async getExpenses(): Promise<Expense[]> {
    return this.expenseService.findExpenses();
  }

  // MUTATIONS ========================================================

  // CREATE
  @Mutation()
  async createExpense(@Args('data') data: ExpenseInput): Promise<Expense> {
    return this.expenseService.createExpense(data);
  }

  @Mutation()
  async deleteReward(@Args('id') id): Promise<Expense> {
    return this.expenseService.deleteExpense(id);
  }

  @Mutation()
  async updateReward(@Args('data') data: ExpenseUpdateInput): Promise<Expense> {
    return this.expenseService.updateExpense(data);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.expenseService.createdBy({ createdBy });
  }
}
