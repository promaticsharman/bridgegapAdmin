import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-teacher-application',
  templateUrl: './view-teacher-application.component.html',
  styleUrls: ['./view-teacher-application.component.css']
})
export class ViewTeacherApplicationComponent implements OnInit {
  reqData
  image
  imgUrl
  applicationForm: FormGroup;
  videoPath = environment.application_image;
  applicationData: any = {
    name:"",
    email:"",
    phone:"",
    country:"",
    state:"",
    city:"",
    nationality:"",
    address:"",  
    experiance:"",
    benefits:"",
    teach:"",
    benefitsOfClass:"",
    whatWillYouTeach:"",
    link:"",
    status:"",
    date:"",
    requirement:"",
    classes_teach_data: [],
    academic_qualifications: [],
    professional_qualifications: []
  }
  video
   
  testi_image
  StudentId
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
     private service: AdminService,
      private route: ActivatedRoute,
       private router: Router,
       private sanitizer:DomSanitizer,
  ) {
    this.createForm();
   }
   createForm(){
    this.applicationForm = this.fb.group({

      name: new FormControl ({value:'dsfddf', disabled: true}),
      email: new FormControl({value:'', disabled:true}),
      phone:  new FormControl({value:'', disabled:true}),
      country:  new FormControl({value:'', disabled:true}),
      state: new FormControl({value:'', disabled:true}),
      city: new FormControl({value:'', disabled:true}),
      address: new FormControl({value:'', disabled:true}),
      experiance: new FormControl({value:'', disabled:true}),
      teach: new FormControl({value:'', disabled:true}),
      benefitsOfClass: new FormControl({value:'', disabled:true}),
      link: new FormControl({value:'', disabled:true}),
      whatWillYouTeach: new FormControl({value:'', disabled:true}),
      status: new FormControl({value:'', disabled:true}),
     
  
      });
   }
  ngOnInit(): void {
    this.reqData = {} 
    this.reqData.offset = 0
		this.reqData.limit = 30000
    this.getTeacherList()
    this.StudentId=this.route.snapshot.params.id
  }
  
  getTeacherList(){
    var list={
      offset:this.reqData.offset,
      limit:this.reqData.limit
    }
    this.service.showTeacherApplication(list).subscribe(res => {
      console.log('*****getStudentData******',res.data);
      let response=res.data.rows
      if(response){
        response.forEach(element => {
        let matchId=element.id
          if(matchId == this.StudentId ){
            this.applicationData.name=element.teacher_name;
            this.applicationData.email=element.email_id;
            this.applicationData.phone=element.mobile_number;
            this.applicationData.country=element.country_data.name;
            this.applicationData.state=element.state_data.name;
            this.applicationData.city=element.city_data.name;
            this.applicationData.nationality=element.nationality;
            this.applicationData.address=element.address;
            this.applicationData.experiance=element.teacher_experience;
            this.applicationData.benefits=element.learner_benefits_of_class;
            this.applicationData.teach=element.how_will_you_teach;
            this.applicationData.benefitsOfClass=element.learner_benefits_of_class;
            this.applicationData.whatWillYouTeach=element.what_will_you_teach;
            this.applicationData.link=element.websites_link;
            this.applicationData.requirement = element.requirement_for_class
            this.applicationData.status=element.application_status;
            this.applicationData.date=element.created_at;
            this.applicationData.classes_teach_data = element.classes_teach_data
            console.log(" this.applicationData.classes_teach_data", this.applicationData.classes_teach_data)
            this.applicationData.academic_qualifications = element.academic_qualifications
            console.log(" this.applicationData.academic_qualifications", this.applicationData.academic_qualifications)
            this.applicationData.professional_qualifications = element.professional_qualifications
            console.log(" this.applicationData.professional_qualifications", this.applicationData.professional_qualifications)
            let videoUrl = this.videoPath + element.video
            console.log(videoUrl);
            this.video = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);

            // this.video=element.video;
          }
        });
      }
  
        
  })
  }

  onStatus(){
   console.log("status",status)
    var  obj={
      id:this.StudentId,
      // status:status,
    }
    console.log("status",obj)
    
    this.service.applicationApproved(obj).subscribe(res => {
      // console.log("res*****",res)
      Swal.fire('Success..!', 'Successfully Accepted!', 'success')
       this.router.navigate(['/teacherApplication']);
      
    })

  }

  rejectApplication(){
		const dialogRefEdit = this.dialog.open(RejectApplicationDialog,{
			// height: '350px',
			width: '600px',
			id: this.StudentId
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
}

////////Reject Application Dialog Box//////////////////////

@Component({
	selector: 'reject-application-dialog',
	templateUrl: 'reject-application.html',
  })
  export class RejectApplicationDialog {
    reqData
    limit
    offset
    email
    StudentId
    Form
    message
    
  rejectForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
    })
  

  	constructor(
      public dialogRef: MatDialogRef<RejectApplicationDialog>,
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
          this.StudentId=this.dialogRef.id
         
        }
        
   reject(status){
  console.log("status",status)
  var  obj={
    id:this.StudentId,
    status:status,
  }
  var rejectObj={
    user_id:this.StudentId,
    message:this.message
  }
  console.log("Rejectstatus",rejectObj)
  console.log("status",obj)
  
  // this.service.applicationApproved(obj).subscribe(res => {
    // console.log("res*****",res)
    this.service.applicationRejected(rejectObj).subscribe(res => { 
    Swal.fire('Success..!', 'Application Rejected!', 'success')
     this.dialogRef.close();
     this.router.navigate(['/teacherApplication']);
    })
   
    
  // })

}
	

    closeDialog(){
  this.dialogRef.close();
    }
  }

