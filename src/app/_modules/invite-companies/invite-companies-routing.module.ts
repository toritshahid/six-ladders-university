import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteCompaniesComponent } from './invite-companies.component';

const routes: Routes = [{ path: '', component: InviteCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteCompaniesRoutingModule { }
