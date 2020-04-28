import { Module } from '@nestjs/common';
import { ChildService } from './child.service';

@Module({
  providers: [ChildService]
})
export class ChildModule {}
