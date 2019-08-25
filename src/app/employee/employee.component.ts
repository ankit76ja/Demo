import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../model/employeeDetails';
import { EmployeeService } from '../service/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:EmployeeDetails[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee = this.employeeService.employeeDetails;
  }
  
}
