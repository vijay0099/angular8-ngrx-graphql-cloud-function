import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { EventType } from '../../../../../data-access-models/src/lib/types/generated';

// AUTO GENERATED TYPES
import {
  Event,
  // EventInput,
  VolunteerInput,
  SupporterInput,
  SponsorInput
  // Post,
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import {
  events
  // posts,
  // comments
} from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class EventService {
  private readonly events: any[] = events;
  // private readonly usersPrivate: any[] = usersPrivate;
  // private readonly posts: any[] = posts;
  // private readonly comments: any[] = comments;

  // QUERIES ========================================================

  async findAllEvents(): Promise<Event[]> {
    return this.events;
  }

  async findEventById({ id }): Promise<Event> {
    return this.events.find(event => event.id === id);
  }

  // MUTATIONS ========================================================

  // CREATE
  async createVolunteerEvent(event: VolunteerInput): Promise<Event> {
    console.log('VolunteerInput = ', event);
    const newEvent: any = {
      id: uuidv4(),
      ...event
    };
    console.log('New Volunteer Event has been created: ', { ...newEvent });
    this.events.push(newEvent);
    return newEvent;
  }

  async createSponsorEvent(event: SponsorInput): Promise<Event> {
    console.log('SponsorInput = ', event);
    const newEvent: any = {
      id: uuidv4(),
      ...event
    };
    console.log('New Sponsor Event has been created: ', { ...newEvent });
    this.events.push(newEvent);
    return newEvent;
  }

  async createSupporterEvent(event: SupporterInput): Promise<Event> {
    console.log('SupporterInput = ', event);
    const newEvent: any = {
      id: uuidv4(),
      ...event
    };
    console.log('New Supporter Event has been created: ', { ...newEvent });
    this.events.push(newEvent);
    return newEvent;
  }

  // DELETE
  // async deleteUser(id: string): Promise<any> {
  //   const userIndex = users.findIndex(user => user.id === id);

  //   if (userIndex === -1) {
  //     throw new Error('Event not found.');
  //   }

  //   // DELETE USER
  //   const deletedUsers = users.splice(userIndex, 1);

  //   let userPosts;
  //   let userComments;

  //   // DELETE USER'S POSTS
  //   userPosts = posts.filter(post => {
  //     const match = post.author === id;
  //     if (match) {
  //       userComments = comments.filter(comment => comment.post !== post.id);
  //     }
  //     return !match;
  //   });

  //   userComments = comments.filter(comment => comment.author !== id);

  //   return deletedUsers[0];
  // }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  // async filterPostsByUserId({ id }): Promise<Post[]> {
  //   return this.posts.filter(post => post.author === id);
  // }

  // async filterCommentsByUserId({ id }): Promise<Comment[]> {
  //   return this.comments.filter(comment => comment.author === id);
  // }
}
