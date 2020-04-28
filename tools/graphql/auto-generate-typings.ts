import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['apps/functions/src/graphql-api/src/**/*.graphql'],
  path: join(
    process.cwd(),
    'apps/functions/src/graphql-api/src/app/types/graphql.ts'
  ),
  outputAs: 'interface',
  watch: true
});
