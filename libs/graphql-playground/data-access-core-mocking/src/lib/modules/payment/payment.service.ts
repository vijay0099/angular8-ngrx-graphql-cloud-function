import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Payment,
  PaymentInput
  // Post,
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import { payments } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class PaymentService {
  private readonly payments: any[] = payments;

  // QUERIES ========================================================

  async findPaymentById(id: string): Promise<Payment> {
    return this.payments.find(payment => payment.id === id);
  }

  async findPayments(): Promise<Payment[]> {
    return this.payments;
  }

  // MUTATIONS ========================================================

  // CREATE
  async createNewPayment(payment: PaymentInput): Promise<Payment> {
    const newPayment: any = {
      id: uuidv4(),
      ...payment
    };
    console.log('New payment created: ', { ...payment });
    this.payments.push(newPayment);
    return newPayment;
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
