import { Module } from '@nestjs/common';
import { ValorizationService } from './valorization.service';

@Module({
  providers: [ValorizationService]
})
export class ValorizationModule {}
