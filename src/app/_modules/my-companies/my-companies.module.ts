import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCompaniesRoutingModule } from './my-companies-routing.module';
import { MyCompaniesComponent } from './my-companies.component';


@NgModule({
  declarations: [
    MyCompaniesComponent
  ],
  imports: [
    CommonModule,
    MyCompaniesRoutingModule
  ]
})
export class MyCompaniesModule { }
