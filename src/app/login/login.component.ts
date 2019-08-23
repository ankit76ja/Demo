import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({
    'username':new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'emailId': new FormControl('',[Validators.required,Validators.email]),
  })

  constructor(private router:Router){}
  ngOnInit() {
  }
  OnSubmit(form:any){
    this.router.navigate(['dashboard']);
    sessionStorage.setItem('userName',this.loginForm.value['username'])
  }
}
