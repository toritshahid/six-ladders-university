import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteCompaniesRoutingModule } from './invite-companies-routing.module';
import { InviteCompaniesComponent } from './invite-companies.component';


@NgModule({
  declarations: [
    InviteCompaniesComponent
  ],
  imports: [
    CommonModule,
    InviteCompaniesRoutingModule
  ]
})
export class InviteCompaniesModule { }
