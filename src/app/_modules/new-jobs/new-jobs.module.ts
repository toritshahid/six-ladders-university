import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewJobsRoutingModule } from './new-jobs-routing.module';
import { NewJobsComponent } from './new-jobs.component';


@NgModule({
  declarations: [
    NewJobsComponent
  ],
  imports: [
    CommonModule,
    NewJobsRoutingModule
  ]
})
export class NewJobsModule { }
