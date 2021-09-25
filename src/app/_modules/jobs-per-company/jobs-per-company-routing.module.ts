import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPerCompanyComponent } from './jobs-per-company.component';

const routes: Routes = [{ path: '', component: JobsPerCompanyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsPerCompanyRoutingModule { }
