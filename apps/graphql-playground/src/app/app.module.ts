import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '@monorepo/graphql-playground/util-helpers';

import { Logger } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

// LOG COLORING
const colors = require('colors');
colors.enable();

// CONDITIONALLY LOADING DEVELOPING MODES
import { DataAccessCoreMockingModule } from '@monorepo/graphql-playground/data-access-core-mocking';
import { DataAccessCoreModule } from '@monorepo/graphql-playground-data-access-core';

// NESTJS LOGGER
Logger.log(colors.brightMagenta(`'${process.env.LOG_LEVEL}'`), 'Log level');

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        // level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        // level: process.env.LOG_LEVEL,
        // TODO level/useLevel option DOES NOT WORK ???
        // useLevel: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        // autoLogging: true,
        // stream: DestinationStream,
        prettyPrint: process.env.NODE_ENV !== 'production'
      }
    }),
    // LoggerModule.forRoot({
    //   pinoHttp: [
    //     {
    //       name: 'add some name to every JSON line',
    //       level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
    //       prettyPrint: process.env.NODE_ENV !== 'production',
    //       useLevelLabels: true
    //       // and all the others...
    //     },
    //     loggingStream
    //   ]
    //   // forRoutes: [MyController],
    //   // exclude: [{ method: RequestMethod.ALL, path: "check" }]
    // }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      introspection: true,

      // CONDITIONALLY LOADING DEVELOPER MODES [MOCK_DATA_MODE | REAL_DATA_MODE]
      typePaths:
        process.env.USE_MOCKING_DATA_IN_PLAYGROUND === 'true'
          ? ['./libs/graphql-playground/data-access-core-mocking/**/*.graphql']
          : ['./libs/graphql-playground/data-access-core/**/*.graphql']
    }),

    // CONDITIONALLY LOADING DEVELOPER MODES [MOCK_DATA_MODE | REAL_DATA_MODE]
    process.env.USE_MOCKING_DATA_IN_PLAYGROUND === 'true'
      ? DataAccessCoreMockingModule
      : DataAccessCoreModule
  ],
  controllers: [],
  providers: [
    // APPLY INTERCEPTOR ON THE GLOBAL LEVEL
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ]
})
export class AppModule {}
