import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadinfoComponent } from './uploadinfo.component';

const routes: Routes = [{ path: '', component: UploadinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadinfoRoutingModule { }
