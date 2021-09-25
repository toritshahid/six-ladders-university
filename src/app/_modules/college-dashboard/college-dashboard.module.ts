import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeDashboardRoutingModule } from './college-dashboard-routing.module';
import { CollegeDashboardComponent } from './college-dashboard.component';


@NgModule({
  declarations: [
    CollegeDashboardComponent
  ],
  imports: [
    CommonModule,
    CollegeDashboardRoutingModule
  ]
})
export class CollegeDashboardModule { }
