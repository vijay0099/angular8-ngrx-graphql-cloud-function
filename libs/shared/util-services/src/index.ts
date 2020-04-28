// EXPOSED SERVICES
export { OrdersService } from './lib/orders.service';
export { KtDialogService } from './lib/kt-dialog.service';
export { SplashScreenService } from './lib/splash-screen.service';
export { LayoutConfigService } from './lib/layout-config.service';
export { LayoutRefService } from './lib/layout-ref.service';
export { PageConfigService } from './lib/page-config.service';
export { MenuConfigService } from './lib/menu-config.service';
export { MenuHorizontalService } from './lib/menu-horizontal.service';
export { MenuAsideService } from './lib/menu-aside.service';
export { HttpUtilsService } from './lib/http-utils.service';
export { TypesUtilsService } from './lib/types-utils.service';
export { AuthNoticeService } from './lib/auth-notice.service';
export { TranslationService } from './lib/translation.service';
export { WikipediaService } from './lib/wikipedia.service';
export { DataTableService } from './lib/datatable.service';
export { HtmlClassService } from './lib/html-class.service';
export { InterceptService } from './lib/intercept.service';
export { LayoutUtilsService, MessageType } from './lib/layout-utils.service';
export {
  SubheaderService,
  Breadcrumb,
  BreadcrumbTitle
} from './lib/subheader.service';

// EXPOSED CLIENT AUTH SERVICE
export { AuthService as  ClientAuthService} from './lib/client-auth/auth.service';

// EXPOSED USER SERVICE
export { UserService } from './lib/user/user.service';

// EXPOSED FAKE SERVICES
export { AuthService } from './lib/fake/auth.service.fake'; // You have to uncomment this, when your real back-end is done
// export { AuthService } from './lib/auth.service'; // You have to uncomment this, when your real back-end is done

export { CustomersService } from './lib/fake/customers.service.fake';
// export { CustomersService } from './lib/customers.service';

export { ProductsService } from './lib/fake/products.service.fake';
// export { ProductsService } from './lib/products.service';

export { ProductRemarksService } from './lib/fake/product-remarks.service.fake';
// export { ProductRemarksService } from './lib/product-remarks.service';

export { ProductSpecificationsService } from './lib/fake/product-specifications.service.fake';
// export { ProductSpecificationsService } from './lib/product-specifications.service';
