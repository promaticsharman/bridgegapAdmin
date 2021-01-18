import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  loginCredential = {
    username:'',
    password:''
  }
  
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private service: AdminService,
      private toastr: ToastrService
      //private accountService: AccountService,
      //private alertService: AlertService
  ) {
      // redirect to home if already logged in
      // if (this.accountService.userValue) {
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    // this.router.navigate(['/dashboard'])
   
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }

      console.log("Username: ",this.loginCredential.username);
      console.log("Password: ",this.loginCredential.password);

      this.service.adminLogin(this.loginCredential).subscribe(login => {
        console.log("Login Credentials: ",login)
        localStorage.setItem("login",JSON.stringify(login))
        localStorage.setItem("isLoggedin",'true')
        localStorage.setItem("token",login.token)
        this.service.setAuthToken();
        this.router.navigate(['/dashboard'])
        this.loading = true;
      },err=> {
        console.log('login err',err.error.errors.msg)
        if(err.status >=400){
          this.toastr.error(err.error.errors.msg, 'Error')
        }else{
          this.toastr.error('Internet Connection Error', 'Error')
        }
        // this.service.showAuthError(error);
      })

      
      
  }

  // err => {
  //   console.log(err)
  //   if (err.status >= 400) {
  //     this.toastr.error('Invalid Credential!!!', 'Error')
  //     console.log('Invalid Credential!!!')
  //   } else {
  //     this.toastr.error('Internet Connection Error', 'Error')
  //     console.log('Internet Connection Error')
  //   }

  // })
// }

}
