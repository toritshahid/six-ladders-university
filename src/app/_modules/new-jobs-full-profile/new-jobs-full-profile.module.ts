import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewJobsFullProfileRoutingModule } from './new-jobs-full-profile-routing.module';
import { NewJobsFullProfileComponent } from './new-jobs-full-profile.component';


@NgModule({
  declarations: [
    NewJobsFullProfileComponent
  ],
  imports: [
    CommonModule,
    NewJobsFullProfileRoutingModule
  ]
})
export class NewJobsFullProfileModule { }
