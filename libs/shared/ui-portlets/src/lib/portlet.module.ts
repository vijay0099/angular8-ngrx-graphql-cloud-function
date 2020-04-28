// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';

// PORTLET
import { PortletComponent } from './portlet.component';
import { PortletHeaderComponent } from './portlet-header.component';
import { PortletBodyComponent } from './portlet-body.component';
import { PortletFooterComponent } from './portlet-footer.component';

@NgModule({
  imports: [
    CommonModule,
    DataAccessCoreModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  declarations: [
    PortletComponent,
    PortletHeaderComponent,
    PortletBodyComponent,
    PortletFooterComponent
  ],
  exports: [
    PortletComponent,
    PortletHeaderComponent,
    PortletBodyComponent,
    PortletFooterComponent
  ]
})
export class PortletModule {}
