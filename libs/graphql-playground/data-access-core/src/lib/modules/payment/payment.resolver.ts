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
  PaymentInput,
  PaymentUpdateInput,
  Event,
  User
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
    return this.paymentService.createPayment(data);
  }

  @Mutation()
  async deleteReward(@Args('id') id): Promise<Payment> {
    return this.paymentService.deletePayment(id);
  }

  @Mutation()
  async updateReward(@Args('data') data: PaymentUpdateInput): Promise<Payment> {
    return this.paymentService.updatePayment(data);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  @ResolveField('user')
  async getPaymentUser(@Parent() { userId }): Promise<User> {
    return this.paymentService.getPaymentUser({ userId });
  }

  @ResolveField('event')
  async getPaymentEvent(@Parent() { eventId }): Promise<Event> {
    return this.paymentService.getPaymentEvent({ eventId });
  }

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.paymentService.createdBy({ createdBy });
  }
}
