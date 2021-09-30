import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteFromCompaniesRoutingModule } from './invite-from-companies-routing.module';
import { InviteFromCompaniesComponent } from './invite-from-companies.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    InviteFromCompaniesComponent
  ],
  imports: [
    CommonModule,
    InviteFromCompaniesRoutingModule,
    SidenavbarModule
  ]
})
export class InviteFromCompaniesModule { }
