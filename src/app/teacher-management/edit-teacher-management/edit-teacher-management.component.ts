import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
// import {environment} from '../../environments/environment.prod';
@Component({
  selector: 'app-edit-teacher-management',
  templateUrl: './edit-teacher-management.component.html',
  styleUrls: ['./edit-teacher-management.component.css']
})
export class EditTeacherManagementComponent implements OnInit {
  teacherManagement={
    name:'',
    email:'',
    address:'',
    city:'',
    country:'',
    state:'',
    phone:'',
    Teaching_exp:'',
    Subjects_Taught:'',
    Categories:'',
    Subcategories:'',
    Grades_Taught:'',
    Ages_Taught:'',
    categories_payment:'',
    signupdate:''
    

  }
  teacherId
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTeacherMAnagement()
    this.teacherId=this.route.snapshot.params.id
    console.log(' this.teacherId', this.teacherId)

  }
  getTeacherMAnagement(){
    var list={
      offset:0,
      limit:1000000
    }
    this.service.getAllTeachers(list).subscribe(res =>{
      console.log('resgetAllTeachers',res)
      let response=res.data.rows
       response.forEach(element => {
        let matchId=element.id     
        // console.log(' this.matchId', matchId)
           if(matchId == this.teacherId){
             this.teacherManagement.name=element.fullname
             this.teacherManagement.email=element.email
             this.teacherManagement.phone=element.phone
             this.teacherManagement.state =element.state
             this.teacherManagement.country=element.country
             this.teacherManagement.Teaching_exp=element.date_of_birth
             this.teacherManagement.Subjects_Taught=element.subjects_taught
             this.teacherManagement.Categories=element.categories
             this.teacherManagement.Subcategories=element.sub_categories

           }
       });
    })
  }
  update(){

  }
}
