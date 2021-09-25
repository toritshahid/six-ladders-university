import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteFromCompaniesRoutingModule } from './invite-from-companies-routing.module';
import { InviteFromCompaniesComponent } from './invite-from-companies.component';


@NgModule({
  declarations: [
    InviteFromCompaniesComponent
  ],
  imports: [
    CommonModule,
    InviteFromCompaniesRoutingModule
  ]
})
export class InviteFromCompaniesModule { }
