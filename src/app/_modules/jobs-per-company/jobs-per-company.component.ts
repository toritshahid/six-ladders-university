import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-jobs-per-company',
  templateUrl: './jobs-per-company.component.html',
  styleUrls: ['./jobs-per-company.component.css']
})
export class JobsPerCompanyComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','circle','main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
