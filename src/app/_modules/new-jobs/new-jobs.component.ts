import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-new-jobs',
  templateUrl: './new-jobs.component.html',
  styleUrls: ['./new-jobs.component.css']
})
export class NewJobsComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','circle','main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
