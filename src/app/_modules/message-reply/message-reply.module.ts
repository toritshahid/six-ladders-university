import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageReplyRoutingModule } from './message-reply-routing.module';
import { MessageReplyComponent } from './message-reply.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';


@NgModule({
  declarations: [
    MessageReplyComponent
  ],
  imports: [
    CommonModule,
    MessageReplyRoutingModule,
    SidenavbarModule
  ]
})
export class MessageReplyModule { }
