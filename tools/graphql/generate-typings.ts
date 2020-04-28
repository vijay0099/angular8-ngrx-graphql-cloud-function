import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['apps/functions/src/graphql-api/src/**/*.graphql'],
  path: join(
    process.cwd(),
    'libs/shared/data-access-models/src/lib/types-from-graphql-schema.ts'
  ),
  outputAs: 'interface'
});
