import * as tslib_1 from "tslib";
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
// SERVICES
import { EventService } from './event.service';
let EventResolver = class EventResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    // QUERIES ==========================================================
    getEventById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('event(), @Args', id);
            return this.eventService.findEventById({ id });
        });
    }
    getAllEvents() {
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
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "getEventById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "getAllEvents", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createVolunteerEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createSponsorEvent", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "createSupporterEvent", null);
EventResolver = tslib_1.__decorate([
    Resolver('Event'),
    tslib_1.__metadata("design:paramtypes", [EventService])
], EventResolver);
export { EventResolver };
//# sourceMappingURL=event.resolver.js.map