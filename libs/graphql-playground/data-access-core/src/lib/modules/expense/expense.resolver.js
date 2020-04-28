import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { ExpenseService } from './expense.service';
// AUTO GENERATED TYPES
import { ExpenseInput, ExpenseUpdateInput } from '@monorepo/graphql-playground/data-access-models';
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
            return this.expenseService.createExpense(data);
        });
    }
    deleteReward(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenseService.deleteExpense(id);
        });
    }
    updateReward(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenseService.updateExpense(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.expenseService.createdBy({ createdBy });
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
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseResolver.prototype, "deleteReward", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ExpenseUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseResolver.prototype, "updateReward", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExpenseResolver.prototype, "createdBy", null);
ExpenseResolver = tslib_1.__decorate([
    Resolver('Expense'),
    tslib_1.__metadata("design:paramtypes", [ExpenseService])
], ExpenseResolver);
export { ExpenseResolver };
//# sourceMappingURL=expense.resolver.js.map