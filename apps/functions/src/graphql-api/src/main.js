import * as tslib_1 from "tslib";
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import express from 'express';
export const server = express();
export const createNestServer = (expressInstance) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const app = yield NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
    // DISABLE IT IN PRODUCTION
    app.enableCors();
    return app.init();
});
//# sourceMappingURL=main.js.map