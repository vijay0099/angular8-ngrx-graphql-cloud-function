// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// TRANSLATE
import { TranslateModule } from '@ngx-translate/core';

// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';

// SERVICES
import {
  LayoutUtilsService,
  InterceptService,
  TypesUtilsService,
  HttpUtilsService
} from '@monorepo/shared/util-services';

// CRUD
import { ActionNotificationComponent } from '@monorepo/shared/feature-crud';

// COMPONENTS
import { UserManagementComponent } from './user-management.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserRolesListComponent } from './users/_subs/user-roles/user-roles-list.component';
import { ChangePasswordComponent } from './users/_subs/change-password/change-password.component';
import { AddressComponent } from './users/_subs/address/address.component';
import { SocialNetworksComponent } from './users/_subs/social-networks/social-networks.component';

// MATERIAL
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
  MatMenuModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTabsModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatIconModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

// import { usersReducer, UserEffects } from '../../../core/auth';
// CORE
import {
  usersReducer,
  UserEffects
} from '@monorepo/shared/data-access-core';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: 'users:id',
        component: UsersListComponent
      },
      {
        path: 'users/add',
        component: UserEditComponent
      },
      {
        path: 'users/add:id',
        component: UserEditComponent
      },
      {
        path: 'users/edit',
        component: UserEditComponent
      },
      {
        path: 'users/edit/:id',
        component: UserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PartialsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UserEffects]),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
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
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        panelClass: 'kt-mat-dialog-container__wrapper',
        height: 'auto',
        width: '900px'
      }
    },
    HttpUtilsService,
    TypesUtilsService,
    LayoutUtilsService
  ],
  entryComponents: [ActionNotificationComponent],
  declarations: [
    UserManagementComponent,
    UsersListComponent,
    UserEditComponent,
    UserRolesListComponent,
    ChangePasswordComponent,
    AddressComponent,
    SocialNetworksComponent
  ]
})
export class UserManagementModule {}
