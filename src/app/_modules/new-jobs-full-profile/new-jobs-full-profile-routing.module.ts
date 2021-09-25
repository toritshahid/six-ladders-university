import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewJobsFullProfileComponent } from './new-jobs-full-profile.component';

const routes: Routes = [{ path: '', component: NewJobsFullProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewJobsFullProfileRoutingModule { }
