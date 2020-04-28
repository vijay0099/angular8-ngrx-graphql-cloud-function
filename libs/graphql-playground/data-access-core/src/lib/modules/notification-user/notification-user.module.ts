import { Module } from '@nestjs/common';
import { NotificationUserService } from './notification-user.service';

@Module({
  providers: [NotificationUserService]
})
export class NotificationUserModule {}
