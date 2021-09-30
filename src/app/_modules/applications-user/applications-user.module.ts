import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsUserRoutingModule } from './applications-user-routing.module';
import { ApplicationsUserComponent } from './applications-user.component';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';


@NgModule({
  declarations: [
    ApplicationsUserComponent
  ],
  imports: [
    CommonModule,
    ApplicationsUserRoutingModule,
    SidenavbarComponent
  ]
})
export class ApplicationsUserModule { }
