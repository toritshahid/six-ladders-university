import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedJobsFullProfileRoutingModule } from './closed-jobs-full-profile-routing.module';
import { ClosedJobsFullProfileComponent } from './closed-jobs-full-profile.component';


@NgModule({
  declarations: [
    ClosedJobsFullProfileComponent
  ],
  imports: [
    CommonModule,
    ClosedJobsFullProfileRoutingModule
  ]
})
export class ClosedJobsFullProfileModule { }
