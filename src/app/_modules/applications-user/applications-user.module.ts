import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsUserRoutingModule } from './applications-user-routing.module';
import { ApplicationsUserComponent } from './applications-user.component';



@NgModule({
  declarations: [
    ApplicationsUserComponent
  ],
  imports: [
    CommonModule,
    ApplicationsUserRoutingModule,
  ]
})
export class ApplicationsUserModule { }
