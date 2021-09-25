import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-closed-jobs',
  templateUrl: './closed-jobs.component.html',
  styleUrls: ['./closed-jobs.component.css']
})
export class ClosedJobsComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','main','circle').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
