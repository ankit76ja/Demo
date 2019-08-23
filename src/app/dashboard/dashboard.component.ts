import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: String;
  Salary:any=['10,00,000','20,00,000','30,00,000'];
  submitted : boolean = false;
  dataForm:FormGroup = new FormGroup({
    'firstname':new FormControl('',[Validators.required]),
    'lastname': new FormControl('',[Validators.required]),
    'iname': new FormControl('',[Validators.required]),
    'desg': new FormControl('',[Validators.required]),
    'gender': new FormControl('',[Validators.required]),
    'sal': new FormControl('',[Validators.required]),
  })

  constructor() { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }

  OnSubmit(){
    console.log(this.dataForm);
    this.submitted = true;
  }
}
