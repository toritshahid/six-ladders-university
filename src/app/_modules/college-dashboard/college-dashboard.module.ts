import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeDashboardRoutingModule } from './college-dashboard-routing.module';
import { CollegeDashboardComponent } from './college-dashboard.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    CollegeDashboardComponent,
  ],
  imports: [
    CommonModule,
    CollegeDashboardRoutingModule,
    SidenavbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollegeDashboardModule { }
