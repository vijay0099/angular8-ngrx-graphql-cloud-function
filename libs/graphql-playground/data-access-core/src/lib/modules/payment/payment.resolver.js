// author.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { PaymentService } from './payment.service';
// AUTO GENERATED TYPES
import { PaymentInput, PaymentUpdateInput } from '@monorepo/graphql-playground/data-access-models';
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
            return this.paymentService.createPayment(data);
        });
    }
    deleteReward(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.deletePayment(id);
        });
    }
    updateReward(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.updatePayment(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    getPaymentUser({ userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.getPaymentUser({ userId });
        });
    }
    getPaymentEvent({ eventId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.getPaymentEvent({ eventId });
        });
    }
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.paymentService.createdBy({ createdBy });
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
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "deleteReward", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PaymentUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "updateReward", null);
tslib_1.__decorate([
    ResolveField('user'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "getPaymentUser", null);
tslib_1.__decorate([
    ResolveField('event'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "getPaymentEvent", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentResolver.prototype, "createdBy", null);
PaymentResolver = tslib_1.__decorate([
    Resolver('Payment'),
    tslib_1.__metadata("design:paramtypes", [PaymentService])
], PaymentResolver);
export { PaymentResolver };
//# sourceMappingURL=payment.resolver.js.map