import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { EventService } from './event.service';

// AUTO GENERATED TYPES
import {
  Event,
  VolunteerInput,
  SupporterInput,
  SponsorInput,
  VolunteerUpdateInput,
  SupporterUpdateInput,
  SponsorUpdateInput,
  User
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  // QUERIES ==========================================================

  @Query()
  async getEvent(@Args('id') id: string): Promise<Event> {
    console.log('event(), @Args', id);
    return this.eventService.findEventById({ id });
  }

  @Query()
  async getEvents(): Promise<Event[]> {
    return this.eventService.findAllEvents();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createVolunteerEvent(
    @Args('data') data: VolunteerInput
  ): Promise<Event> {
    return this.eventService.createVolunteerEvent(data);
  }

  @Mutation()
  async createSponsorEvent(@Args('data') data: SupporterInput): Promise<Event> {
    return this.eventService.createSponsorEvent(data);
  }

  @Mutation()
  async createSupporterEvent(@Args('data') data: SponsorInput): Promise<Event> {
    return this.eventService.createSupporterEvent(data);
  }

  @Mutation()
  async updateVolunteerEvent(
    @Args('data') data: VolunteerUpdateInput
  ): Promise<Event> {
    return this.eventService.updateVolunteerEvent(data);
  }

  @Mutation()
  async updateSponsorEvent(
    @Args('data') data: SponsorUpdateInput
  ): Promise<Event> {
    return this.eventService.updateSponsorEvent(data);
  }

  @Mutation()
  async updateSupporterEvent(
    @Args('data') data: SupporterUpdateInput
  ): Promise<Event> {
    return this.eventService.updateSupporterEvent(data);
  }

  @Mutation()
  async deleteEvent(@Args('id') id): Promise<Event> {
    return this.eventService.deleteEvent(id);
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  @ResolveField('createdBy')
  async createdBy(@Parent() { createdBy }): Promise<User> {
    return this.eventService.createdBy({ createdBy });
  }
}
