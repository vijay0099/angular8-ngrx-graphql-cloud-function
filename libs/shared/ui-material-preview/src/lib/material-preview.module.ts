// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from 'ngx-clipboard';

// Highlight JS
import { HighlightModule } from 'ngx-highlightjs';
// Perfect ScrollBar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';

// PORTLET
import { PortletModule } from '@monorepo/shared/ui-portlets';

// COMPONENTS
import { MaterialPreviewComponent } from './material-preview.component';

@NgModule({
  imports: [
    CommonModule,
    DataAccessCoreModule,
    HighlightModule,
    PerfectScrollbarModule,
    PortletModule,
    ClipboardModule,

    // angular material modules
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [MaterialPreviewComponent],
  declarations: [MaterialPreviewComponent]
})
export class MaterialPreviewModule {}
