import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferedMonthlyRoutingModule } from './offered-monthly-routing.module';
import { OfferedMonthlyComponent } from './offered-monthly.component';


@NgModule({
  declarations: [
    OfferedMonthlyComponent
  ],
  imports: [
    CommonModule,
    OfferedMonthlyRoutingModule
  ]
})
export class OfferedMonthlyModule { }
