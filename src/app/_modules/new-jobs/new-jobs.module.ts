import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewJobsRoutingModule } from './new-jobs-routing.module';
import { NewJobsComponent } from './new-jobs.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    NewJobsComponent
  ],
  imports: [
    CommonModule,
    NewJobsRoutingModule,
    SidenavbarModule
  ]
})
export class NewJobsModule { }
