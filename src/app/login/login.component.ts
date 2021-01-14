import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm
  login = {
    email: '',
    password: ''
  }
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      'email': ['',Validators.compose([Validators.required, Validators.email])],
      'password': ['',Validators.compose([Validators.required])]
    })
   }


  ngOnInit(): void {
  }

}
