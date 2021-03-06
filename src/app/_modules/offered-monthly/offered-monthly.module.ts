import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferedMonthlyRoutingModule } from './offered-monthly-routing.module';
import { OfferedMonthlyComponent } from './offered-monthly.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    OfferedMonthlyComponent
  ],
  imports: [
    CommonModule,
    OfferedMonthlyRoutingModule,
    SidenavbarModule
  ]
})
export class OfferedMonthlyModule { }
