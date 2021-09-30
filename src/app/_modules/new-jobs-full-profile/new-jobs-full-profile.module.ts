import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewJobsFullProfileRoutingModule } from './new-jobs-full-profile-routing.module';
import { NewJobsFullProfileComponent } from './new-jobs-full-profile.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    NewJobsFullProfileComponent
  ],
  imports: [
    CommonModule,
    NewJobsFullProfileRoutingModule,
    SidenavbarModule
  ]
})
export class NewJobsFullProfileModule { }
