import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
let ChildModule = class ChildModule {
};
ChildModule = tslib_1.__decorate([
    Module({
        providers: [ChildService]
    })
], ChildModule);
export { ChildModule };
//# sourceMappingURL=child.module.js.map