import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedJobsRoutingModule } from './closed-jobs-routing.module';
import { ClosedJobsComponent } from './closed-jobs.component';


@NgModule({
  declarations: [
    ClosedJobsComponent
  ],
  imports: [
    CommonModule,
    ClosedJobsRoutingModule
  ]
})
export class ClosedJobsModule { }
