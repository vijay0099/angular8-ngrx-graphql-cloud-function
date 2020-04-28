import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
let ExampleModule = class ExampleModule {
};
ExampleModule = tslib_1.__decorate([
    Module({
        providers: [ExampleService]
    })
], ExampleModule);
export { ExampleModule };
//# sourceMappingURL=example.module.js.map