import { Module } from '@nestjs/common';

// MODULES
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { MigrationModule } from './migration/migration.module';

// RESOLVERS
import { UserResolver } from './user/user.resolver';
import { TweetResolver } from './tweet/tweet.resolver';
import { MigrationResolver } from './migration/migration.resolver';

// SERVICES
import { UserService } from './user/user.service';
import { TweetService } from './tweet/tweet.service';
import { MigrationService } from './migration/migration.service';

@Module({
  imports: [
    // MODULES
    UserModule,
    TweetModule,
    MigrationModule
  ],
  providers: [
    // RESOLVERS
    UserResolver,
    TweetResolver,
    MigrationResolver,
    // SERVICES
    UserService,
    TweetService,
    MigrationService
  ]
})
export class ApiDataAccessCoreModule {}
