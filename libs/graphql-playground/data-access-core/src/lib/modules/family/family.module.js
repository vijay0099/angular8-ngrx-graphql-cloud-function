import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
let FamilyModule = class FamilyModule {
};
FamilyModule = tslib_1.__decorate([
    Module({
        providers: [FamilyService]
    })
], FamilyModule);
export { FamilyModule };
//# sourceMappingURL=family.module.js.map