import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// ENV
import { environment } from '@monorepo/shared/environments';

if (environment.production) {
  enableProdMode();
}

// if (process.env.PRODUCTION) {
//   enableProdMode();
// }

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated
  })
  .catch(err => console.error(err));
