import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
let ExampleService = class ExampleService {
    constructor() {
        this.examples = [
            { id: '1', title: 'Example #1' },
            { id: '2', title: 'Example #2' },
            { id: '3', title: 'Example #3' }
        ];
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.examples;
        });
    }
};
ExampleService = tslib_1.__decorate([
    Injectable()
], ExampleService);
export { ExampleService };
//# sourceMappingURL=example.service.js.map