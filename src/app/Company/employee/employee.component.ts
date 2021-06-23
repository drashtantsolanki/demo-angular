import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() txtval = "";
  @Output() changeVal: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.changeVal.emit(this.txtval);
  }

}
