import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { NotificationUserService } from './notification-user.service';
let NotificationUserModule = class NotificationUserModule {
};
NotificationUserModule = tslib_1.__decorate([
    Module({
        providers: [NotificationUserService]
    })
], NotificationUserModule);
export { NotificationUserModule };
//# sourceMappingURL=notification-user.module.js.map