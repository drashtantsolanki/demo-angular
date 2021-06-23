import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompanyComponent, EmployeeComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ]
})
export class CompanyModule { }
