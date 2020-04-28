import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { events
// posts,
// comments
 } from '@monorepo/graphql-playground/data-access-data';
let EventService = class EventService {
    constructor() {
        this.events = events;
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
    // private readonly usersPrivate: any[] = usersPrivate;
    // private readonly posts: any[] = posts;
    // private readonly comments: any[] = comments;
    // QUERIES ========================================================
    findAllEvents() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.events;
        });
    }
    findEventById({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.events.find(event => event.id === id);
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createVolunteerEvent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('VolunteerInput = ', event);
            const newEvent = Object.assign({ id: uuidv4() }, event);
            console.log('New Volunteer Event has been created: ', Object.assign({}, newEvent));
            this.events.push(newEvent);
            return newEvent;
        });
    }
    createSponsorEvent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('SponsorInput = ', event);
            const newEvent = Object.assign({ id: uuidv4() }, event);
            console.log('New Sponsor Event has been created: ', Object.assign({}, newEvent));
            this.events.push(newEvent);
            return newEvent;
        });
    }
    createSupporterEvent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('SupporterInput = ', event);
            const newEvent = Object.assign({ id: uuidv4() }, event);
            console.log('New Supporter Event has been created: ', Object.assign({}, newEvent));
            this.events.push(newEvent);
            return newEvent;
        });
    }
};
EventService = tslib_1.__decorate([
    Injectable()
], EventService);
export { EventService };
//# sourceMappingURL=event.service.js.map