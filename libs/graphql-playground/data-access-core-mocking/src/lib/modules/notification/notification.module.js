import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
let NotificationModule = class NotificationModule {
};
NotificationModule = tslib_1.__decorate([
    Module({
        providers: [NotificationService]
    })
], NotificationModule);
export { NotificationModule };
//# sourceMappingURL=notification.module.js.map