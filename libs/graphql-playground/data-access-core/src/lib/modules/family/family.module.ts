import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';

@Module({
  providers: [FamilyService]
})
export class FamilyModule {}
