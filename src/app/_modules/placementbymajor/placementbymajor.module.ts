import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementbymajorRoutingModule } from './placementbymajor-routing.module';
import { PlacementbymajorComponent } from './placementbymajor.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    PlacementbymajorComponent
  ],
  imports: [
    CommonModule,
    PlacementbymajorRoutingModule,
    SidenavbarModule
  ]
})
export class PlacementbymajorModule { }
