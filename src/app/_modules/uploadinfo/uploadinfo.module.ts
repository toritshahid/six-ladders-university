import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadinfoRoutingModule } from './uploadinfo-routing.module';
import { UploadinfoComponent } from './uploadinfo.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    UploadinfoComponent
  ],
  imports: [
    CommonModule,
    UploadinfoRoutingModule,
    SidenavbarModule
  ]
})
export class UploadinfoModule { }
