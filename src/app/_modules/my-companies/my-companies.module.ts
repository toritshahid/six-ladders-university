import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCompaniesRoutingModule } from './my-companies-routing.module';
import { MyCompaniesComponent } from './my-companies.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    MyCompaniesComponent,
  ],
  imports: [
    CommonModule,
    MyCompaniesRoutingModule,
    SidenavbarModule
  ]
})
export class MyCompaniesModule { }
