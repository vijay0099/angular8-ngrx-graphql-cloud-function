import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new InMemoryCache()
    };
}
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = tslib_1.__decorate([
    NgModule({
        exports: [ApolloModule, HttpLinkModule],
        providers: [
            {
                provide: APOLLO_OPTIONS,
                useFactory: createApollo,
                deps: [HttpLink]
            }
        ]
    })
], GraphQLModule);
export { GraphQLModule };
//# sourceMappingURL=graphql.module.js.map