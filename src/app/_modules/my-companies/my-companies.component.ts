import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.css']
})
export class MyCompaniesComponent implements OnInit {


  constructor(private script: JscriptService) {
    this.script.load('JQuery','circle','main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
