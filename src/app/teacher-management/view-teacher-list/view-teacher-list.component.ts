import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-teacher-list',
  templateUrl: './view-teacher-list.component.html',
  styleUrls: ['./view-teacher-list.component.css']
})
export class ViewTeacherListComponent implements OnInit {
  reqData
  teacherId
  teacherData: any = {
    name : "",
    email: "",
    phone: "",
    country:"",
    state: "",
    dob: "",
    fb:"",
    google:"",
    status:"",
    signupdate:""

    // description : ""
  }
  uploadTeacherImage
  image

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
    this.reqData.offset = 0
		this.reqData.limit = 3000
    this.getTeacherList()
    this.teacherId=this.route.snapshot.params.teacherId
    console.log("teacherID", this.teacherId)
  }
  getTeacherList(){
    var list={
      offset:this.reqData.offset,
      limit:this.reqData.limit
    }
    this.service.getAllTeachers(list).subscribe(res => {
      console.log('*****getTeacherData******',res.data);
      let response=res.data.rows
      if(response){
        response.forEach(element => {
        let matchId=element.id
          if(matchId == this.teacherId ){
            this.teacherData.name=element.fullname;
            this.teacherData.email=element.email;
            this.teacherData.phone=element.phone;
            this.teacherData.country=element.country;
            this.teacherData.state=element.state;
            console.log("teacherData state",this.teacherData.state)
            this.teacherData.dob=element.date_of_birth;
            this.teacherData.fb=element.facebook_id;
            this.teacherData.google=element.google_id;
            this.teacherData.type=element.user_type;
            this.teacherData.status=element.status;
            this.teacherData.signupdate=element.created_at;


          }
        });
      }
   
        
  })
  }
  onStatus(evt){
    var  obj={
      user_id:this.teacherId,
      status:evt
    }
    // console.log("obj",obj)
    // this.loader=true;
    this.service.change_teacher_status(obj).subscribe(res => {
      console.log("res*****",res)
      Swal.fire('Success..!', 'Successfully Changed!', 'success')
      this.router.navigate(['/teacher_list'])
      // this.ngOnInit();
      // this.loader = false
    })

  }

  onFileChange(event) {

    if (!event.target) {
			return;
		}
		if (!event.target.files) {
			return;
		}
		if (event.target.files.length !== 1) {
			return;
		}
		const file = event.target.files[0];
		if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
			// this.toastr.warning('Please upload image file')
			return;
		}
		console.log(event.target.files[0])
		this.uploadTeacherImage = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
}
