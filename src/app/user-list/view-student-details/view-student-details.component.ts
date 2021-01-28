import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent implements OnInit {
  reqData
  StudentId
  studentData: any = {
    name : "",
    email: "",
    phone: "",
    country:"",
    state: "",
    dob: "",
    fb:"",
    google:"",
    status:"",
    type:""

    // description : ""
  }
  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
    this.reqData.offset = 0
		this.reqData.limit = 30
    this.getStudentList()
    this.StudentId=this.route.snapshot.params.stdId
   
  }
 
    getStudentList(){
      var list={
        offset:this.reqData.offset,
        limit:this.reqData.limit
      }
      this.service.getallStudent(list).subscribe(res => {
        console.log('*****getStudentData******',res.data);
        let response=res.data.rows
        if(response){
          response.forEach(element => {
          let matchId=element.id
            if(matchId == this.StudentId ){
              this.studentData.name=element.fullname;
              this.studentData.email=element.email;
              this.studentData.phone=element.phone;
              this.studentData.country=element.country;
              this.studentData.state=element.state;
              console.log("studentDAta state",this.studentData.state)
              this.studentData.dob=element.date_of_birth;
              this.studentData.fb=element.facebook_id;
              this.studentData.google=element.google_id;
              this.studentData.type=element.user_type;
              this.studentData.status=element.status;


            }
          });
        }
     
          
    })
    }
  
    onStatus(evt){
      var  obj={
        user_id:this.StudentId,
        status:evt
      }
      // console.log("obj",obj)
      // this.loader=true;
      this.service.change_user_status(obj).subscribe(res => {
        console.log("res*****",res)
        Swal.fire('Success..!', 'Successfully Changed!', 'success')
        this.router.navigate(['/student_list'])
        // this.ngOnInit();
        // this.loader = false
      })
  
    }

    
}
