import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';
import { svgPathProperties } from "svg-path-properties";
@Component({
  selector: 'app-college-dashboard',
  templateUrl: './college-dashboard.component.html',
  styleUrls: ['./college-dashboard.component.css']
})

export class CollegeDashboardComponent implements OnInit{

  constructor(private script: JscriptService) {
    this.script.load('main').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }
  ngOnInit(): void {
  const horizontals  = Array.from(document.querySelectorAll<HTMLElement>('#identify-circles path'));//get all pathes from svg

  for (let i = 1; i < horizontals.length; i++ ) {//get second path inside svg
    let path = horizontals[i];
    let per: any = 8;//percentage -- 460 = 8% from 500(100%)
    let length: any = path.innerHTML.length;
    let count: any = (length/100)*per;
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = count;
  }
  }


}
