import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { expenses } from '@monorepo/graphql-playground/data-access-data';
let ExpenseService = class ExpenseService {
    constructor() {
        this.expenses = expenses;
        // RELATIONSHIPS [ONE-TO-MANY] ======================================
    }
    // QUERIES ========================================================
    findExpenseById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenses.find(user => user.id === id);
        });
    }
    findExpenses() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenses;
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createNewExpense(expense) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newExpense = Object.assign({ id: uuidv4() }, expense);
            console.log('New expense created: ', Object.assign({}, expense));
            this.expenses.push(newExpense);
            return newExpense;
        });
    }
};
ExpenseService = tslib_1.__decorate([
    Injectable()
], ExpenseService);
export { ExpenseService };
//# sourceMappingURL=expense.service.js.map