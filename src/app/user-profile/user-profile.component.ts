import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  myProfile={
    firstName:"",
    lastName:"",
    email:"",
    username:""

  }
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAdminDetails()
  }
  getAdminDetails(){
    let id={
      id:1
    }
    this.service.getAdminProfile(id).subscribe(res =>{
      console.log("res",res.data)
      if(res){
        this.myProfile.email=res.data.email
        this.myProfile.username=res.data.username
        this.myProfile.firstName=res.data.first_name
        this.myProfile.lastName=res.data.last_name
      }
    })
  }

  Update(){
    let params={
      id:1,
      first_name: this.myProfile.firstName,
      last_name: this.myProfile.lastName,
      email:this.myProfile.email
    }
    this.service.updateAdminProfile(params).subscribe(res =>{
      console.log("response",res);
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
      this.ngOnInit();
    })
  }
}
