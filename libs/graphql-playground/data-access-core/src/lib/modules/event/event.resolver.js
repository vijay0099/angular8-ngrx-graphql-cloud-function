import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { EventService } from './event.service';
// AUTO GENERATED TYPES
import { VolunteerInput, SupporterInput, SponsorInput, VolunteerUpdateInput, SupporterUpdateInput, SponsorUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let EventResolver = class EventResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    // QUERIES ==========================================================
    getEvent(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('event(), @Args', id);
            return this.eventService.findEventById({ id });
        });
    }
    getEvents() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.findAllEvents();
        });
    }
    // MUTATIONS ========================================================
    createVolunteerEvent(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.createVolunteerEvent(data);
        });
    }
    createSponsorEvent(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.createSponsorEvent(data);
        });
    }
    createSupporterEvent(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.createSupporterEvent(data);
        });
    }
    updateVolunteerEvent(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.updateVolunteerEvent(data);
        });
    }
    updateSponsorEvent(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.updateSponsorEvent(data);
        });
    }
    updateSupporterEvent(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.updateSupporterEvent(data);
        });
    }
    deleteEvent(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.deleteEvent(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.eventService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "getEvent", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "getEvents", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VolunteerInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createVolunteerEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SupporterInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createSponsorEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SponsorInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createSupporterEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VolunteerUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "updateVolunteerEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SponsorUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "updateSponsorEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SupporterUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "updateSupporterEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "deleteEvent", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createdBy", null);
EventResolver = tslib_1.__decorate([
    Resolver('Event'),
    tslib_1.__metadata("design:paramtypes", [EventService])
], EventResolver);
export { EventResolver };
//# sourceMappingURL=event.resolver.js.map