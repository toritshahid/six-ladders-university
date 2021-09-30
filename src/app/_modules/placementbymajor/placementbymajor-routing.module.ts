import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementbymajorComponent } from './placementbymajor.component';

const routes: Routes = [{ path: '', component: PlacementbymajorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementbymajorRoutingModule { }
