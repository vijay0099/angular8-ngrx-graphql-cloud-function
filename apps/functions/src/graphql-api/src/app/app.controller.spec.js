import * as tslib_1 from "tslib";
import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
describe('AppController', () => {
    let app;
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        app = yield Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService]
        }).compile();
    }));
    describe('getData', () => {
        it('should return "Welcome to graphql-api!"', () => {
            const appController = app.get(AppController);
            expect(appController.getData()).toEqual({
                message: 'Welcome to graphql-api!'
            });
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map