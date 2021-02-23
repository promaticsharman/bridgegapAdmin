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
    topic:"",
    total_number_of_session:"",
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
    date:"",
    save_type:"",
    zoom_class_link:"",
    summary:""

  }
  video
  courseImg
  uploadCoverImage
  uploadCoverVideo
  coverVideo

  video1
  uploadVid
  format
  videourl
  loader
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
		this.reqData.limit = 100000
    this.getCourseList()
    this.courseId=this.route.snapshot.params.id
    console.log("courseiid",this.courseId)
    // console.log("assignment",this.courseData.assignment)
    // console.log("assesment",this.courseData.assessment)

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
            console.log("this.courseData.fullname",this.courseData.fullname)
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
            console.log("assignment2feb",this.courseData.assignment)
            this.courseData.assessment = element.assessment
            console.log("assesment2feb",this.courseData.assessment)
            this.courseData.requirements = element.requirements
            this.courseData.globally_price = element.globally_price

            this.courseData.local_price = element.local_price
            this.courseData.multiple_session_courses = element.multiple_session_courses
            this.courseData.status = element.status
            this.courseData.date = element.updated_at
            this.courseData.summary = element.summary
            this.courseData.save_type = element.save_type
            this.courseData.zoom_class_link = element.zoom_class_link
            
            let videoUrl = this.videoPath + element.course_video
            console.log('urlllllllll',videoUrl);
            this.video = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
            this.courseImg=this.imagePath + element.cover_photo
            this.courseData.topic=element.sub_sub_category_data.sub_sub_category_name
            this.courseData.total_number_of_session=element.total_num_of_session
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
 
  rejectCourse(){
		const dialogRefEdit = this.dialog.open(RejectCourseDialog,{
			// height: '350px',
			width: '600px',
			id: this.courseId
		});
		dialogRefEdit.afterClosed().subscribe(result => {
			console.log('The dialog was closed');	
			// this.reqData = {}
		    // this.reqData.offset = 0
		    // this.reqData.limit = 10
		    // this.dataSource = new MatTableDataSource(this.responseData);
		    // this.dataSource.paginator = this.paginator;
		    // this.dataSource.sort = this.sort;
		    // this.datamodel = {}
			// this.getAllCategory()
		});
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
		this.uploadCoverImage = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  

  onSelectFile(event) {
    //console.log("Select File");
    
    const file = event.target.files && event.target.files[0];
    this.uploadCoverVideo = file
    this.uploadVid = true
    // console.log(this.video1);
    
    if (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    if (file.type.indexOf('video') > -1) {
    this.format = 'video';
    }
    reader.onload = (event) => {
      
    this.videourl = (<FileReader>event.target).result;
    // console.log('this.videourl ',this.videourl)
    }
    }
    
    }

    updateCourse(){
      
      var formData = new FormData();
      if(this.uploadCoverVideo){
        formData.append('course_video', this.uploadCoverVideo);
      }
      if(this.uploadCoverImage){
        formData.append('cover_photo', this.uploadCoverImage);
      }
      formData.append('course_id', this.courseId);
      // console.log("uploadCoverVideo", this.uploadCoverVideo)
      // console.log("uploadCoverImage",  this.uploadCoverImage)
      // console.log("courseId",this.courseId)
      this.loader=true;
      this.service.updateCoursecoverVideo(formData).subscribe(res =>{
        console.log("updateCoursecoverVideo",res)
        this.loader=false;
        Swal.fire('Success..!', 'Successfully Updated!', 'success')
        this.router.navigate(['/courses'])
      })
    }

  // onFileChangeVideo(event){
  //   // console.log("eventeventvideo",event)
  //   if (!event.target) {
	// 		return;
	// 	}
	// 	if (!event.target.files) {
	// 		return;
	// 	}
	// 	if (event.target.files.length !== 1) {
	// 		return;
	// 	}
  //   const file = event.target.files[0];
  //   console.log("eventeventvideo event.target.files[0]",file)
	// 	// if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
	// 	// 	// this.toastr.warning('Please upload image file')
	// 	// 	return;
	// 	// }
	// 	console.log(event.target.files[0])
	// 	this.uploadCoverVideo = event.target.files[0];
	// 	const fr = new FileReader();
	// 	fr.onloadend = (loadEvent) => {
	// 		let mainVideo = fr.result;
  //     this.coverVideo = mainVideo;
  //     console.log("this.coverVideo",this.coverVideo)
	// 	};
  //   fr.readAsDataURL(file);
  // }
}



////////Reject Course Dialog Box//////////////////////

@Component({
	selector: 'reject-course-dialog',
	templateUrl: 'reject-course.html',
  })
  export class RejectCourseDialog {
    reqData
    limit
    offset
    email
    courseId
    Form
    message
    
  rejectForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
    })
  

  	constructor(
      public dialogRef: MatDialogRef<RejectCourseDialog>,
      private service: AdminService,
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
	    ) {
        
      }

      onNoClick(): void {
        this.dialogRef.close();
      }
	
        ngOnInit(): void {
          this.courseId=this.dialogRef.id
         
        }
        
   reject(status){
  console.log("status",status)
  // var  obj={
  //   id:this.StudentId,
  //   status:status,
  // }
  var rejectObj={
    course_id:this.courseId,
    message:this.message,
    status:status
  }
  console.log("Rejectstatus",rejectObj)
  // console.log("status",obj)
  
  // this.service.applicationApproved(obj).subscribe(res => {
    // console.log("res*****",res)
    this.service.courseRejected(rejectObj).subscribe(res => { 
    Swal.fire('Success..!', 'Course Rejected!', 'success')
     this.dialogRef.close();
     this.router.navigate(['/courses']);
    })
   
    
  // })

}
	

    closeDialog(){
  this.dialogRef.close();
    }
  }



