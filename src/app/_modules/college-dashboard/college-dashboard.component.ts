import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-college-dashboard',
  templateUrl: './college-dashboard.component.html',
  styleUrls: ['./college-dashboard.component.css']
})
export class CollegeDashboardComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','main','circle').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
