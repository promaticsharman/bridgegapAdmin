import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-view-course-details',
  templateUrl: './view-course-details.component.html',
  styleUrls: ['./view-course-details.component.css']
})
export class ViewCourseDetailsComponent implements OnInit {
  courseId
  reqData
  image
  imgUrl
  applicationForm: FormGroup;
  videoPath = environment.courses_video;
  imagePath= environment.courses_images;
  courseData: any = {
    fullname:"",
    course_type:"",
    course_title:"",
    category_name:"",
    sub_category_name:"",
    num_of_weeks:"",
    num_of_sessions_week:"",
    num_of_minute_session:"",
    minimum_age:"",
    maximum_age:"",
    minimum_learners:"",
    maximum_learners:"",
    courses_overview:"",
    learning_objectives:"",
    course_breakup:"",
    assignment:"",
    assessment:"",
    requirements:"",
    globally_price:"",
    local_price:"",
    multiple_session_courses:"",
    status:"",
    save_type:"",
    zoom_class_link:"",

  }
  video
  courseImg
  
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
     private service: AdminService,
      private route: ActivatedRoute,
       private router: Router,
       private sanitizer:DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
    this.reqData.offset = 0
		this.reqData.limit = 10
    this.getCourseList()
    this.courseId=this.route.snapshot.params.id
    console.log("courseiid",this.courseId)
  }

  getCourseList(){
    var list={
     
      limit:this.reqData.limit,
      offset:this.reqData.offset
    }
    this.service.get_all_courses(list).subscribe(res => {
      console.log('getCourseData',res.data.rows);
      let response=res.data.rows
      if(response){
        response.forEach(element => {
        let matchId=element.id
          if(matchId == this.courseId ){
            this.courseData.fullname=element.teacher_data.fullname;
            this.courseData.course_type=element.course_type;
            this.courseData.course_title=element.course_title;
            console.log("element.category_data.category_name",element.category_data.category_name)
            this.courseData.category_name=element.category_data.category_name;
            this.courseData.sub_category_name=element.sub_category_data.sub_category_name;
            this.courseData.num_of_weeks=element.num_of_weeks;
            this.courseData.num_of_sessions_week=element.num_of_sessions_week;

            this.courseData.num_of_minute_session=element.num_of_minute_session;
            this.courseData.minimum_age=element.minimum_age;
            this.courseData.maximum_age=element.maximum_age;
            this.courseData.minimum_learners=element.minimum_learners;
            this.courseData.maximum_learners=element.maximum_learners;
            this.courseData.courses_overview=element.courses_overview;
            this.courseData.learning_objectives=element.learning_objectives;

            this.courseData.course_breakup = element.course_breakup
            this.courseData.assignment=element.assignment;
            this.courseData.assessment = element.assessment
            this.courseData.requirements = element.requirements
            this.courseData.globally_price = element.globally_price

            this.courseData.local_price = element.local_price
            this.courseData.multiple_session_courses = element.multiple_session_courses
            this.courseData.status = element.status
            this.courseData.save_type = element.save_type
            this.courseData.zoom_class_link = element.zoom_class_link
            
            let videoUrl = this.videoPath + element.course_video
            console.log('urlllllllll',videoUrl);
            this.video = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
            this.courseImg=this.imagePath + element.cover_photo
            // this.courseId=
            // this.video=element.video;
          }
        });
      }
  
        
  })
  }
  onStatus(evt){
    // console.log("status",evt)
    // console.log("id****",id)
    var  obj={
      course_id:this.courseId,
      status:evt
    }
    // this.loader=true;
    this.service.change_status(obj).subscribe(res => {
      console.log("res*****",res)
      Swal.fire('Success..!', 'Successfully Changed!', 'success')
      this.router.navigate(['/courses'])
      // this.ngOnInit();
      // this.loader = false
    })

  }

}
