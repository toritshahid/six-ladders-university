import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-closed-jobs-full-profile',
  templateUrl: './closed-jobs-full-profile.component.html',
  styleUrls: ['./closed-jobs-full-profile.component.css']
})
export class ClosedJobsFullProfileComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','main','circle').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
