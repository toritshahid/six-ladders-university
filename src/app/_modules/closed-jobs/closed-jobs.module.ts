import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedJobsRoutingModule } from './closed-jobs-routing.module';
import { ClosedJobsComponent } from './closed-jobs.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    ClosedJobsComponent
  ],
  imports: [
    CommonModule,
    ClosedJobsRoutingModule,
    SidenavbarModule
  ]
})
export class ClosedJobsModule { }
