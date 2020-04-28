# Graphql data layer

## Content

- Create a GraphQL API using NestJS
- Auto generate frontend code based on your GraphQL schema
- Create an Angular application to consume your GraphQL api

## Usage

### Graphql server

```bash
# Run local GraphQL server
npm run serve:graphql:api

# Run GraphQL playground on
http://localhost:3333/graphql
```

### Graphql clients

```bash
# Serve admin-app
npm run serve:admin-app

# Serve client-app
npm run serve:client-app
```

### GraphQL Playground app

### Workflow: _NestJS, Graphql, Schema First approach_

Use nest/cli to speed up the production. With this workflow, the Nest code gets automatically generated and provided.

```bash
# Nest cli help
nest --help
```

#### Code generation

##### GraphQL API Code generation

1. _Generate module._

   ```bash
   # libs/api/data-access-core/src/lib/user
   nest generate module user api/data-access-core/src/lib --dry-run

   # generated module is automatically provided
   # @libs/api/data-access-core/src/lib/user/api-data-access-core.module.ts
   ```

2. _Generate service in targeted location which can be injected_

   ```bash
   # libs/api/data-access-core/src/lib/user/user.service.ts
   nest generate service user api/data-access-core/src/lib/user --flat --no-spec --dry-run

   # generated service is automatically provided
   # @libs/api/data-access-core/src/lib/user/user.module.ts
   ```

3. _Create GraphQL schema_

   ```bash
   # libs/api/data-access-core/src/lib/user/user.schema.graphql
   create file
   ```

4. _Create resolver for schema_

   ```bash
   # libs/api/data-access-core/src/lib/user/user.resolver.ts
   create file

   # libs/api/data-access-core/src/lib/user/api-data-access-core.module.ts
   provide resolver
   ```

##### Module structure

```bash
# libs/api/data-access-core/src/lib/user
user
  user.module.ts
  user.resolver.ts
  user.schema.graphql
  user.service.ts
```

<!--
Graphql code generators. Auto generate frontend code based on your GraphQL schema.

```bash
# Run GraphQL code generator for admin-app
npm run generate:graphql:code:admin

# Run GraphQL code generator for client-app
npm run generate:graphql:code:client
```
-->

---

## Nx workspace monorepo implementation

_Sources:_

- [nx-apollo-example](https://github.com/nrwl/nx-apollo-example)

### Setup GraphQL API

GraphQL API as NestJS application|server deployed on Firebase Functions.

#### Add NestJS support

[@nrwl/nest](https://www.npmjs.com/package/@nrwl/nest)

We’ll be using the NestJS framework to create our GraphQL API.

```bash
# Add support for NestJS
npm install @nrwl/nest --save-dev
```

#### Create graph-api application

[based on: nx-apollo-example](https://github.com/nrwl/nx-apollo-example)

[@nestjs/graphql](https://www.npmjs.com/package/@nestjs/graphql), [apollo-server-express](https://www.npmjs.com/package/apollo-server-express), [graphql](https://www.npmjs.com/package/graphql), [graphql-tools](https://www.npmjs.com/package/graphql-tools)

##### Add support for GraphQl

```bash
# Install server-side dependencies
npm install @nestjs/graphql apollo-server-express graphql graphql-tools --save
```

##### Create API

```bash
# Create GraphQL API in "functions" dir
nx generate @nrwl/nest:application graphql-api --directory=functions/src --dry-run
```

#### Create Angular libraries

[based on: nx-apollo-example/Create Angular libraries](https://github.com/nrwl/nx-apollo-example)

```bash
# admin-app lib
ng generate library DataAccessGraphql --directory=admin --tags='type:data-access, scope:admin' --style=scss --skipPackageJson --no-interactive --dry-run

# client-app lib
ng generate library DataAccessGraphql --directory=client --tags='type:data-access, scope:client' --style=scss --skipPackageJson --no-interactive --dry-run
```

#### Setup Angular Code Generation

[based on: nx-apollo-example/Setup Angular Code Generation](https://github.com/nrwl/nx-apollo-example)

[@graphql-codegen/cli](https://github.com/dotansimha/graphql-code-generator), [@graphql-codegen/typescript-operations](https://www.npmjs.com/package/@graphql-codegen/typescript-operations), [@graphql-codegen/typescript-apollo-angular](https://www.npmjs.com/package/@graphql-codegen/typescript-apollo-angular), [apollo-client](https://www.npmjs.com/package/apollo-client), [graphql-tag](https://www.npmjs.com/package/graphql-tag), [apollo-cache-inmemory](https://www.npmjs.com/package/apollo-cache-inmemory), [apollo-angular-link-http](https://www.npmjs.com/package/apollo-angular-link-http)

##### Add support for GraphQl Code Generator

```bash
# Install dependencies
npm install @graphql-codegen/cli @graphql-codegen/typescript-operations @graphql-codegen/typescript-apollo-angular --save-dev
```

##### Add codegen.yml

```bash
# libs/admin/data-access/codegen.yml
overwrite: true
schema: "apps/functions/src/graphql-api/src/app/schema.graphql"
generates:
  libs/admin/data-access/src/lib/generated/generated.ts:
    documents: "libs/admin/data-access/src/lib/graphql/**/*.graphql"
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-apollo-angular"
```

##### Add task in angular.json

```bash
# projects > admin-data-access > architect
"generate": {
  "builder": "@nrwl/workspace:run-commands",
    "options": {
      "commands": [
        {
        "command": "npx graphql-codegen --config libs/admin/data-access/codegen.yml"
        }
      ]
    }
  }
}
```

##### Run code generator

```bash
# Run commend
nx run admin-data-access:generate
```

We should now have a folder called generated in our data-access library with a file named generated.ts. It contains typing information about the GraphQL schema and the operations we defined. It even has some services which will make consuming this api super-fast

##### Expose generated code

To make these available to consumers, we'll export them in the index.ts of our data-access library:

```bash
# libs/admin/data-access/src/index.ts
export * from './lib/admin-data-access.module';
export * from './lib/generated/generated';
```

#### Create Angular components

---

#### Client side

##### Add Apollo client support

```bash
# install dependencies
npm install apollo-client apollo-cache-inmemory apollo-angular-link-http graphql-tag graphql --save
```

##### Add graphql.module.ts

```bash
# add apps/admin-app/src/app/graphql.module.ts

import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
```

##### Edit app.module.ts

````bash
# XXXX

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
# import { AngularFeatureSetsModule } from '@nx-apollo-example/angular/feature-sets';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    # AngularFeatureSetsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}```
````

---

### Consuming API

https://dev.to/azure/how-you-can-use-nest-to-build-a-graphql-api-24ii

---

#### Additional Tooling

[GraphQL Playground](https://www.electronjs.org/apps/graphql-playground)

[Google Chrome Apollo Client Developer Tool](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

[GraphQL Code Generator](https://graphql-code-generator.com/)

[Apollo GraphQL for VS Code](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)

[graphql-cli](https://www.npmjs.com/package/graphql-cli)
