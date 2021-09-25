import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsPerCompanyRoutingModule } from './jobs-per-company-routing.module';
import { JobsPerCompanyComponent } from './jobs-per-company.component';


@NgModule({
  declarations: [
    JobsPerCompanyComponent
  ],
  imports: [
    CommonModule,
    JobsPerCompanyRoutingModule
  ]
})
export class JobsPerCompanyModule { }
