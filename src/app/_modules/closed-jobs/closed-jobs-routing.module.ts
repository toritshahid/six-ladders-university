import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedJobsComponent } from './closed-jobs.component';

const routes: Routes = [{ path: '', component: ClosedJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedJobsRoutingModule { }
