import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-new-jobs-full-profile',
  templateUrl: './new-jobs-full-profile.component.html',
  styleUrls: ['./new-jobs-full-profile.component.css']
})
export class NewJobsFullProfileComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','circle','main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
