import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-offered-monthly',
  templateUrl: './offered-monthly.component.html',
  styleUrls: ['./offered-monthly.component.css']
})
export class OfferedMonthlyComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','circle','main',).then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
