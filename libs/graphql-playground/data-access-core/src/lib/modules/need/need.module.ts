import { Module } from '@nestjs/common';
import { NeedService } from './need.service';

@Module({
  providers: [NeedService]
})
export class NeedModule {}
