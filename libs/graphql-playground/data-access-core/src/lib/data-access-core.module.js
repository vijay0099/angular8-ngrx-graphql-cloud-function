import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { Logger } from '@nestjs/common';
// // FIREBASE INIT CLIENT SDK
// import { initializeFirestore } from '@monorepo/shared/util-tools';
// import { environment } from '@monorepo/shared/environments';
// // INIT FIRESTORE CLIENT SDK
// export const firestoreClientSDK = initializeFirestore(
//   environment.firebaseConfig
// );
const colors = require('colors');
colors.enable();
// import { ConfigModule, ConfigService } from '@nestjs/config';
// DEVELOPMENT
// MODULES
import { ChildModule } from './modules/child/child.module';
import { NeedModule } from './modules/need/need.module';
import { UserModule } from './modules/user/user.module';
import { EventModule } from './modules/event/event.module';
import { PostModule } from './modules/post/post.module';
import { CommentModule } from './modules/comment/comment.module';
import { RewardModule } from './modules/reward/reward.module';
import { ValorizationModule } from './modules/valorization/valorization.module';
import { ActivityModule } from './modules/activity/activity.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { PaymentModule } from './modules/payment/payment.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { NotificationModule } from './modules/notification/notification.module';
import { NotificationUserModule } from './modules/notification-user/notification-user.module';
import { FamilyModule } from './modules/family/family.module';
// RESOLVERS
import { ChildResolver } from './modules/child/child.resolver';
import { NeedResolver } from './modules/need/need.resolver';
import { UserResolver } from './modules/user/user.resolver';
import { EventResolver } from './modules/event/event.resolver';
import { PostResolver } from './modules/post/post.resolver';
import { CommentResolver } from './modules/comment/comment.resolver';
import { RewardResolver } from './modules/reward/reward.resolver';
import { ValorizationResolver } from './modules/valorization/valorization.resolver';
import { ActivityResolver } from './modules/activity/activity.resolver';
import { ExpenseResolver } from './modules/expense/expense.resolver';
import { PaymentResolver } from './modules/payment/payment.resolver';
import { GalleryResolver } from './modules/gallery/gallery.resolver';
import { NotificationResolver } from './modules/notification/notification.resolver';
import { NotificationUserResolver } from './modules/notification-user/notification-user.resolver';
import { FamilyResolver } from './modules/family/family.resolver';
// SERVICES
import { ChildService } from './modules/child/child.service';
import { NeedService } from './modules/need/need.service';
import { UserService } from './modules/user/user.service';
import { EventService } from './modules/event/event.service';
import { PostService } from './modules/post/post.service';
import { CommentService } from './modules/comment/comment.service';
import { RewardService } from './modules/reward/reward.service';
import { ValorizationService } from './modules/valorization/valorization.service';
import { ActivityService } from './modules/activity/activity.service';
import { ExpenseService } from './modules/expense/expense.service';
import { PaymentService } from './modules/payment/payment.service';
import { GalleryService } from './modules/gallery/gallery.service';
import { NotificationService } from './modules/notification/notification.service';
import { NotificationUserService } from './modules/notification-user/notification-user.service';
import { FamilyService } from './modules/family/family.service';
let DataAccessCoreModule = class DataAccessCoreModule {
    // constructor(private readonly configService: ConfigService) {}
    constructor() {
        // LOGGER
        Logger.log(colors.brightMagenta(`Real Data Mode activated. Using real data from Firestore.`), 'Data Mode');
    }
};
DataAccessCoreModule = tslib_1.__decorate([
    Module({
        imports: [
            // ConfigModule,
            // MODULES
            ChildModule,
            NeedModule,
            UserModule,
            EventModule,
            PostModule,
            CommentModule,
            RewardModule,
            ValorizationModule,
            ActivityModule,
            ExpenseModule,
            PaymentModule,
            GalleryModule,
            NotificationModule,
            NotificationUserModule,
            FamilyModule
        ],
        providers: [
            // RESOLVERS
            ChildResolver,
            NeedResolver,
            UserResolver,
            EventResolver,
            PostResolver,
            CommentResolver,
            RewardResolver,
            ValorizationResolver,
            ActivityResolver,
            ExpenseResolver,
            PaymentResolver,
            GalleryResolver,
            NotificationResolver,
            NotificationUserResolver,
            FamilyResolver,
            // SERVICES
            ChildService,
            NeedService,
            UserService,
            EventService,
            PostService,
            CommentService,
            RewardService,
            ValorizationService,
            ActivityService,
            ExpenseService,
            PaymentService,
            GalleryService,
            NotificationService,
            NotificationUserService,
            FamilyService
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DataAccessCoreModule);
export { DataAccessCoreModule };
//# sourceMappingURL=data-access-core.module.js.map