import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to graphql-api!' };
    }
};
AppService = tslib_1.__decorate([
    Injectable()
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map