import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  constructor() { }
  txtval: string = "";

  ngOnInit(): void {
  }

  updatedVal(val) {
    this.txtval=val;
  }
}
