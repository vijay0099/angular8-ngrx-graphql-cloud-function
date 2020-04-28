// author.resolver.ts

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
  ExpenseInput
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
    return this.expenseService.createNewExpense(data);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
