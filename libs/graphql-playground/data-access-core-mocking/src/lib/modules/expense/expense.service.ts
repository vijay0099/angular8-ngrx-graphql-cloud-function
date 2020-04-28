import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Expense,
  ExpenseInput
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import { expenses } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class ExpenseService {
  private readonly expenses: any[] = expenses;

  // QUERIES ========================================================

  async findExpenseById(id: string): Promise<Expense> {
    return this.expenses.find(user => user.id === id);
  }

  async findExpenses(): Promise<Expense[]> {
    return this.expenses;
  }

  // MUTATIONS ========================================================

  // CREATE
  async createNewExpense(expense: ExpenseInput): Promise<Expense> {
    const newExpense: any = {
      id: uuidv4(),
      ...expense
    };
    console.log('New expense created: ', { ...expense });
    this.expenses.push(newExpense);
    return newExpense;
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
