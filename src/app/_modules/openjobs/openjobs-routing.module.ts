import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenjobsComponent } from './openjobs.component';

const routes: Routes = [{ path: '', component: OpenjobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenjobsRoutingModule { }
