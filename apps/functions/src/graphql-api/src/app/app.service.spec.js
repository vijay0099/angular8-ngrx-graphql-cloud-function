import * as tslib_1 from "tslib";
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
describe('AppService', () => {
    let service;
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield Test.createTestingModule({
            providers: [AppService]
        }).compile();
        service = app.get(AppService);
    }));
    describe('getData', () => {
        it('should return "Welcome to graphql-api!"', () => {
            expect(service.getData()).toEqual({ message: 'Welcome to graphql-api!' });
        });
    });
});
//# sourceMappingURL=app.service.spec.js.map