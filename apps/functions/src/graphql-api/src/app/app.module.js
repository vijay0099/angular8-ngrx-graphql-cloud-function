import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDataAccessCoreModule } from '@monorepo/api/data-access-core';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    Module({
        imports: [
            // Let's have a closer look at the GraphQLModule.forRoot() invocation.
            // Now, we see here that we set playground to true. This will give us
            // a graphical way to pose our queries, more on that later. We also see
            // that we set a property called typePaths and give it an array looking
            // like so ['./**/*.graphql']. Now, this is a pattern matching looking for
            // all files ending with .graphql. The reason for this construct is that
            // we can actually spread out our schema definition on several files.
            GraphQLModule.forRoot({
                debug: false,
                playground: true,
                introspection: true,
                typePaths: ['./libs/api/**/*.graphql']
            }),
            ApiDataAccessCoreModule
        ],
        controllers: [AppController],
        providers: [AppService]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map