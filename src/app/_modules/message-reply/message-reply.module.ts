import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageReplyRoutingModule } from './message-reply-routing.module';
import { MessageReplyComponent } from './message-reply.component';


@NgModule({
  declarations: [
    MessageReplyComponent
  ],
  imports: [
    CommonModule,
    MessageReplyRoutingModule
  ]
})
export class MessageReplyModule { }
