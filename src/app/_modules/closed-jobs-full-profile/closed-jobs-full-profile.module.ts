import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedJobsFullProfileRoutingModule } from './closed-jobs-full-profile-routing.module';
import { ClosedJobsFullProfileComponent } from './closed-jobs-full-profile.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    ClosedJobsFullProfileComponent
  ],
  imports: [
    CommonModule,
    ClosedJobsFullProfileRoutingModule,
    SidenavbarModule
  ]
})
export class ClosedJobsFullProfileModule { }
