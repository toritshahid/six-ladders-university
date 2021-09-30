import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsPerCompanyRoutingModule } from './jobs-per-company-routing.module';
import { JobsPerCompanyComponent } from './jobs-per-company.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    JobsPerCompanyComponent
  ],
  imports: [
    CommonModule,
    JobsPerCompanyRoutingModule,
    SidenavbarModule
  ]
})
export class JobsPerCompanyModule { }
