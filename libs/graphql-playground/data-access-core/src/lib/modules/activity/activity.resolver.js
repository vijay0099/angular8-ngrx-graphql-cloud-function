// author.resolver.ts
import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { ActivityService } from './activity.service';
// AUTO GENERATED TYPES
import { ActivityInput, ActivityUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let ActivityResolver = class ActivityResolver {
    constructor(activityService) {
        this.activityService = activityService;
    }
    // QUERIES ==========================================================
    getActivity(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activityService.findActivityById(id);
        });
    }
    getActivities() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activityService.findActivities();
        });
    }
    // MUTATIONS ========================================================
    // CREATE
    createActivity(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activityService.createNewActivity(data);
        });
    }
    deleteActivity(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activityService.deleteActivity(id);
        });
    }
    updateActivity(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activityService.updateActivity(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-ONE] ======================================
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.activityService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityResolver.prototype, "getActivity", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityResolver.prototype, "getActivities", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ActivityInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityResolver.prototype, "createActivity", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityResolver.prototype, "deleteActivity", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ActivityUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityResolver.prototype, "updateActivity", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ActivityResolver.prototype, "createdBy", null);
ActivityResolver = tslib_1.__decorate([
    Resolver('Activity'),
    tslib_1.__metadata("design:paramtypes", [ActivityService])
], ActivityResolver);
export { ActivityResolver };
//# sourceMappingURL=activity.resolver.js.map