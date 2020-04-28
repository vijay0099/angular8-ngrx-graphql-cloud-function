// ANGULAR
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';

// NGBOOTSTRAP
import {
  NgbDropdownModule,
  NgbTabsetModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';

// PERFECT SCROLLBAR
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// SVG INLINE
import { InlineSVGModule } from 'ng-inline-svg';

// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';

// CRUD PARTIALS
import {
  AlertComponent,
  ActionNotificationComponent,
  DeleteEntityDialogComponent,
  FetchEntityDialogComponent,
  UpdateStatusDialogComponent
} from '@monorepo/shared/feature-crud';

// LAYOUT PARTIALS
import {
  ContextMenu2Component,
  ContextMenuComponent,
  LanguageSelectorComponent,
  NotificationComponent,
  QuickActionComponent,
  QuickPanelComponent,
  ScrollTopComponent,
  SearchDefaultComponent,
  SearchDropdownComponent,
  SearchResultComponent,
  SplashScreenComponent,
  StickyToolbarComponent,
  Subheader1Component,
  Subheader2Component,
  Subheader3Component,
  Subheader4Component,
  Subheader5Component,
  SubheaderSearchComponent,
  UserProfile2Component,
  UserProfile3Component,
  UserProfileComponent
} from './layout';

// GENERAL
import {
  ErrorComponent,
  NoticeComponent
} from '@monorepo/shared/ui-general';

// PORTLET
import { PortletModule } from '@monorepo/shared/ui-portlets';

// WIDGET
import { WidgetModule } from '@monorepo/shared/ui-widgets';

// COMPONENTS
import { CartComponent } from './layout/topbar/cart/cart.component';

@NgModule({
  declarations: [
    ScrollTopComponent,
    NoticeComponent,
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    AlertComponent,

    // topbar components
    ContextMenu2Component,
    ContextMenuComponent,
    QuickPanelComponent,
    ScrollTopComponent,
    SearchResultComponent,
    SplashScreenComponent,
    StickyToolbarComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    Subheader4Component,
    Subheader5Component,
    SubheaderSearchComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    UserProfileComponent,
    UserProfile2Component,
    UserProfile3Component,
    CartComponent,

    ErrorComponent
  ],
  exports: [
    WidgetModule,
    PortletModule,

    ScrollTopComponent,
    NoticeComponent,
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    AlertComponent,

    // topbar components
    ContextMenu2Component,
    ContextMenuComponent,
    QuickPanelComponent,
    ScrollTopComponent,
    SearchResultComponent,
    SplashScreenComponent,
    StickyToolbarComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    Subheader4Component,
    Subheader5Component,
    SubheaderSearchComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    QuickActionComponent,
    SearchDefaultComponent,
    SearchDropdownComponent,
    UserProfileComponent,
    UserProfile2Component,
    UserProfile3Component,
    CartComponent,

    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    InlineSVGModule,
    DataAccessCoreModule,
    PortletModule,
    WidgetModule,

    // angular material modules
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,

    // ng-bootstrap modules
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule
  ]
})
export class PartialsModule {}
