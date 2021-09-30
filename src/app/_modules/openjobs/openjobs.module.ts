import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenjobsRoutingModule } from './openjobs-routing.module';
import { OpenjobsComponent } from './openjobs.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    OpenjobsComponent
  ],
  imports: [
    CommonModule,
    OpenjobsRoutingModule,
    SidenavbarModule
  ]
})
export class OpenjobsModule { }
