// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PARTIALS
import { PartialsModule } from '@monorepo/shared/ui-partials';

// CORE
import { DataAccessCoreModule } from '@monorepo/shared/data-access-core';

// COMPONENTS
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PartialsModule,
    DataAccessCoreModule,
    RouterModule.forChild([
      {
         path: '',
         component: AccountComponent,
         children: [
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'change-password',
            component: ChangePasswordComponent
          }
        ]
      }
    ]),
    MatSelectModule,
    MatInputModule
  ]
})
export class AccountModule {}
