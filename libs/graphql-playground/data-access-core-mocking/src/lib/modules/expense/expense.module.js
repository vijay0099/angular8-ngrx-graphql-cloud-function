import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
let ExpenseModule = class ExpenseModule {
};
ExpenseModule = tslib_1.__decorate([
    Module({
        providers: [ExpenseService]
    })
], ExpenseModule);
export { ExpenseModule };
//# sourceMappingURL=expense.module.js.map