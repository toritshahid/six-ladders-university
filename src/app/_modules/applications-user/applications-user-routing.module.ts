import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsUserComponent } from './applications-user.component';

const routes: Routes = [{ path: '', component: ApplicationsUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsUserRoutingModule { }
