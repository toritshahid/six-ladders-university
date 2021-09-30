import { Component } from '@angular/core';
import { JscriptService } from './_services/jscript.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'six-ladders-university';
  constructor(private script: JscriptService) {
    this.script.load('main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }
}
