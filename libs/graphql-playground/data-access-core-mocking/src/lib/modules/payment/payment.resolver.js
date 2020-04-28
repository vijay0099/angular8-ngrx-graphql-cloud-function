// author.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
// SERVICES
import { PaymentService } from './payment.service';
// AUTO GENERATED TYPES
import { PaymentInput } from '@monorepo/graphql-playground/data-access-models';
let PaymentResolver = class PaymentResolver {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    // QUERIES ==========================================================
    getPayment(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.findPaymentById(id);
        });
    }
    getPayments() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.findPayments();
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createPayment(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.createNewPayment(data);
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "getPayment", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "getPayments", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PaymentInput]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "createPayment", null);
PaymentResolver = tslib_1.__decorate([
    Resolver('Payment'),
    tslib_1.__metadata("design:paramtypes", [PaymentService])
], PaymentResolver);
export { PaymentResolver };
//# sourceMappingURL=payment.resolver.js.map