import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
let PaymentModule = class PaymentModule {
};
PaymentModule = tslib_1.__decorate([
    Module({
        providers: [PaymentService]
    })
], PaymentModule);
export { PaymentModule };
//# sourceMappingURL=payment.module.js.map