// author.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
// SERVICES
import { ExpenseService } from './expense.service';
// AUTO GENERATED TYPES
import { ExpenseInput } from '@monorepo/graphql-playground/data-access-models';
let ExpenseResolver = class ExpenseResolver {
    constructor(expenseService) {
        this.expenseService = expenseService;
    }
    // QUERIES ==========================================================
    getExpense(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenseService.findExpenseById(id);
        });
    }
    getExpenses() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenseService.findExpenses();
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createExpense(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenseService.createNewExpense(data);
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseResolver.prototype, "getExpense", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseResolver.prototype, "getExpenses", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ExpenseInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseResolver.prototype, "createExpense", null);
ExpenseResolver = tslib_1.__decorate([
    Resolver('Expense'),
    tslib_1.__metadata("design:paramtypes", [ExpenseService])
], ExpenseResolver);
export { ExpenseResolver };
//# sourceMappingURL=expense.resolver.js.map