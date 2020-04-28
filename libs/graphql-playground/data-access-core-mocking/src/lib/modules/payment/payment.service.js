import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { payments } from '@monorepo/graphql-playground/data-access-data';
let PaymentService = class PaymentService {
    constructor() {
        this.payments = payments;
        // RELATIONSHIPS [ONE-TO-MANY] ======================================
    }
    // QUERIES ========================================================
    findPaymentById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.payments.find(payment => payment.id === id);
        });
    }
    findPayments() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.payments;
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createNewPayment(payment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newPayment = Object.assign({ id: uuidv4() }, payment);
            console.log('New payment created: ', Object.assign({}, payment));
            this.payments.push(newPayment);
            return newPayment;
        });
    }
};
PaymentService = tslib_1.__decorate([
    Injectable()
], PaymentService);
export { PaymentService };
//# sourceMappingURL=payment.service.js.map