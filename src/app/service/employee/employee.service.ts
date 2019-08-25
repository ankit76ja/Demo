import { Injectable } from '@angular/core';
import { EmployeeDetails } from 'src/app/model/employeeDetails';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employeeDetails:EmployeeDetails[] = [{
    'firstName':'Ankit',
    'lastname':'Sharma',
    'gender':'Male',
    'company':'Mindtree',
    'expectedSalary':1000000,
    'designation':'SSE'
  }];
  constructor() { }

  addEmployee(employee:EmployeeDetails){
    this.employeeDetails.push(employee);
  }

  

}
