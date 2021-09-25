import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferedMonthlyComponent } from './offered-monthly.component';

const routes: Routes = [{ path: '', component: OfferedMonthlyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferedMonthlyRoutingModule { }
