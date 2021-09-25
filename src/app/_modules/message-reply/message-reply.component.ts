import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-message-reply',
  templateUrl: './message-reply.component.html',
  styleUrls: ['./message-reply.component.css']
})
export class MessageReplyComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','circle','main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
