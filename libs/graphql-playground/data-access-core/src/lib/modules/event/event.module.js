import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { EventService } from './event.service';
let EventModule = class EventModule {
};
EventModule = tslib_1.__decorate([
    Module({
        providers: [EventService]
    })
], EventModule);
export { EventModule };
//# sourceMappingURL=event.module.js.map