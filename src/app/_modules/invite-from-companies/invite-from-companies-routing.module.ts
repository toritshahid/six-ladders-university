import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteFromCompaniesComponent } from './invite-from-companies.component';

const routes: Routes = [{ path: '', component: InviteFromCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteFromCompaniesRoutingModule { }
