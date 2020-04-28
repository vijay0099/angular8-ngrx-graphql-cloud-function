import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  // Logger,
  CallHandler
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

const colors = require('colors');
colors.enable();

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: PinoLogger) {
    logger.setContext(LoggingInterceptor.name);
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    if (req) {
      const method = req.method;
      const url = req.url;
      return next
        .handle()
        .pipe(
          tap(() =>
            this.logger.info(
              `${method} ${url} ${Date.now() - now}ms`,
              context.getClass().name
            )
          )
        );
    } else {
      const ctx: any = GqlExecutionContext.create(context);
      const resolverName = ctx.constructorRef.name;
      const info = ctx.getInfo();

      this.logger.info(
        `${info.parentType} '${info.fieldName}', ${Date.now() - now}ms,`,
        resolverName
      );

      return next
        .handle()
        .pipe(
          tap(() =>
            this.logger.info(
              `${info.parentType} '${info.fieldName}', ${Date.now() - now}ms,`,
              resolverName
            )
          )
        );
    }
  }
}
