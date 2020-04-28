// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';

// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';

// COMPONENTS
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    DataAccessCoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  providers: [],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
