// author.resolver.ts
import * as tslib_1 from "tslib";
import { Query, Resolver } from '@nestjs/graphql';
// SERVICES
import { ExampleService } from './example.service';
let ExampleResolver = class ExampleResolver {
    constructor(exampleService) {
        this.exampleService = exampleService;
    }
    // QUERIES ========================================================
    getExamples() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.exampleService.findAll();
        });
    }
};
tslib_1.__decorate([
    Query('examples'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ExampleResolver.prototype, "getExamples", null);
ExampleResolver = tslib_1.__decorate([
    Resolver('Example'),
    tslib_1.__metadata("design:paramtypes", [ExampleService])
], ExampleResolver);
export { ExampleResolver };
//# sourceMappingURL=example.resolver.js.map