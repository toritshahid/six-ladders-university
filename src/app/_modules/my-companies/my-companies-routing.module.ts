import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCompaniesComponent } from './my-companies.component';

const routes: Routes = [{ path: '', component: MyCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCompaniesRoutingModule { }
