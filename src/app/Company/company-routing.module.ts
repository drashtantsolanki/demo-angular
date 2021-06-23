import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {
    path:'',
    component:CompanyComponent,
    children:[
      {
        path:'company/employee',
        component:EmployeeComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
