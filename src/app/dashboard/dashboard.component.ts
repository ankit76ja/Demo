import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee/employee.service';
import { EmployeeDetails } from '../model/employeeDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: String;
  Salary:any=['10,00,000','20,00,000','30,00,000'];
  submitted : boolean = false;
  newEmployee:EmployeeDetails;
  dataForm:FormGroup = new FormGroup({
    'firstname':new FormControl('',[Validators.required]),
    'lastname': new FormControl('',[Validators.required]),
    'iname': new FormControl('',[Validators.required]),
    'desg': new FormControl('',[Validators.required]),
    'gender': new FormControl('',[Validators.required]),
    'sal': new FormControl('',[Validators.required]),
  })

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }

  OnSubmit(){
    
    this.newEmployee = {
      'firstName':this.dataForm.value.firstname,
      'lastname':this.dataForm.value.lastname,
      'gender':this.dataForm.value.gender,
      'expectedSalary':this.dataForm.value.sal,
      'designation':this.dataForm.value.desg,
      'company':this.dataForm.value.iname
      }
    this.employeeService.addEmployee(this.newEmployee);
    this.router.navigate(['employee']);
  }
}
