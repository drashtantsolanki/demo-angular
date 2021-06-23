import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: AppServiceService) { }
  lstData: any;
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((data) => {
      this.lstData = data;
    });
  }
}
