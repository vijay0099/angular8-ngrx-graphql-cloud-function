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
  SponsorInput
  // Post,
  // PostInput
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  // QUERIES ==========================================================

  @Query()
  async getEventById(@Args('id') id: string): Promise<Event> {
    console.log('event(), @Args', id);
    return this.eventService.findEventById({ id });
  }

  @Query()
  async getAllEvents(): Promise<Event[]> {
    return this.eventService.findAllEvents();
  }

  // MUTATIONS ========================================================

  @Mutation()
  async createVolunteerEvent(@Args('data') data): Promise<Event> {
    return this.eventService.createVolunteerEvent(data);
  }

  @Mutation()
  async createSponsorEvent(@Args('data') data): Promise<Event> {
    return this.eventService.createSponsorEvent(data);
  }

  @Mutation()
  async createSupporterEvent(@Args('data') data): Promise<Event> {
    return this.eventService.createSupporterEvent(data);
  }
}
