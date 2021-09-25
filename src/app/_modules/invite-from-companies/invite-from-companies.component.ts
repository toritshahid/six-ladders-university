import { Component, OnInit } from '@angular/core';
import { JscriptService } from 'src/app/_services/jscript.service';

@Component({
  selector: 'app-invite-from-companies',
  templateUrl: './invite-from-companies.component.html',
  styleUrls: ['./invite-from-companies.component.css']
})
export class InviteFromCompaniesComponent implements OnInit {

  constructor(private script: JscriptService) {
    this.script.load('JQuery','main','circle').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {
  }

}
