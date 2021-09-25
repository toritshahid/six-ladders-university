import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewJobsComponent } from './new-jobs.component';

const routes: Routes = [{ path: '', component: NewJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewJobsRoutingModule { }
