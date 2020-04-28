import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    Module({
        providers: [UserService]
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map