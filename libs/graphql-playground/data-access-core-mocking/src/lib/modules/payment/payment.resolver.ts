// author.resolver.ts

import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { PaymentService } from './payment.service';

// AUTO GENERATED TYPES
import {
  Payment,
  PaymentInput
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  // QUERIES ==========================================================

  @Query()
  async getPayment(@Args('id') id: string): Promise<Payment> {
    return this.paymentService.findPaymentById(id);
  }

  @Query()
  async getPayments(): Promise<Payment[]> {
    return this.paymentService.findPayments();
  }

  // MUTATIONS ========================================================

  // CREATE
  @Mutation()
  async createPayment(@Args('data') data: PaymentInput): Promise<Payment> {
    return this.paymentService.createNewPayment(data);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
