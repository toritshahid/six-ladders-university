import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteCompaniesRoutingModule } from './invite-companies-routing.module';
import { InviteCompaniesComponent } from './invite-companies.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    InviteCompaniesComponent
  ],
  imports: [
    CommonModule,
    InviteCompaniesRoutingModule,
    SidenavbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InviteCompaniesModule { }
