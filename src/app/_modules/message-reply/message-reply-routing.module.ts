import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageReplyComponent } from './message-reply.component';

const routes: Routes = [{ path: '', component: MessageReplyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageReplyRoutingModule { }
