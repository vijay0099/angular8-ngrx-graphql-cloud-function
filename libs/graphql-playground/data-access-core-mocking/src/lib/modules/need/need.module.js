import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { NeedService } from './need.service';
let NeedModule = class NeedModule {
};
NeedModule = tslib_1.__decorate([
    Module({
        providers: [NeedService]
    })
], NeedModule);
export { NeedModule };
//# sourceMappingURL=need.module.js.map