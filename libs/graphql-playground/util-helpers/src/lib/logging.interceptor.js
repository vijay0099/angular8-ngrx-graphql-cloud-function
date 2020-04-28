import * as tslib_1 from "tslib";
var LoggingInterceptor_1, _a;
import { Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { tap } from 'rxjs/operators';
import { PinoLogger } from 'nestjs-pino';
const colors = require('colors');
colors.enable();
let LoggingInterceptor = LoggingInterceptor_1 = class LoggingInterceptor {
    constructor(logger) {
        this.logger = logger;
        logger.setContext(LoggingInterceptor_1.name);
    }
    intercept(context, next) {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();
        if (req) {
            const method = req.method;
            const url = req.url;
            return next
                .handle()
                .pipe(tap(() => this.logger.info(`${method} ${url} ${Date.now() - now}ms`, context.getClass().name)));
        }
        else {
            const ctx = GqlExecutionContext.create(context);
            const resolverName = ctx.constructorRef.name;
            const info = ctx.getInfo();
            this.logger.info(`${info.parentType} '${info.fieldName}', ${Date.now() - now}ms,`, resolverName);
            return next
                .handle()
                .pipe(tap(() => this.logger.info(`${info.parentType} '${info.fieldName}', ${Date.now() - now}ms,`, resolverName)));
        }
    }
};
LoggingInterceptor = LoggingInterceptor_1 = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof PinoLogger !== "undefined" && PinoLogger) === "function" ? _a : Object])
], LoggingInterceptor);
export { LoggingInterceptor };
//# sourceMappingURL=logging.interceptor.js.map