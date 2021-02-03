import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})
export class SocialMediaLinksComponent implements OnInit {

  dataSource
  loader
   complexForm: FormGroup;
  
  //  imagePath = environment.home_image;
  responseData = []
  
  displayedColumns: string[] = ['position','social_media_type','social_media_link','Action'] 
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
   
		this.dataSource = new MatTableDataSource(this.responseData);
	  this.socialLinkData()
  }
  socialLinkData(){
    this.loader=true;
   this.service.getMediaLinks().subscribe(res => {
     console.log('social links',res.data)
     if(res){
       this.dataSource=res.data
       console.log("datasource",this.dataSource)
       this.loader=false;
     }
    },
    err => {
     console.log(err);
     if(err.status >= 400){
     console.log('Invalid Credential!!!');
     }else{
     console.log('Internet Connection Error');
     }
    })
   
  }

  editLinkdialog(id){
    const dialogRefEdit = this.dialog.open(EditLinkDialog,{
			// height: '350px',
			width: '600px',
			id: id
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
			this.socialLinkData()
		});
	}
  
}


///////// Edit Social Media Links //////////////////
@Component({
	selector: 'edit-link-dialog',
	templateUrl: 'edit-link.html',
  })
  export class EditLinkDialog {
    reqData
    LinkId
    Form
    message
    linkType
    link
  rejectForm = new FormGroup({
    type: new FormControl({value:'',disabled: true}),
    // ({value:'dsfddf', disabled: true})
    // type: new FormControl('',[Validators.required]),
    link: new FormControl('',[Validators.required])
    })
  

  	constructor(
      public dialogRef: MatDialogRef<EditLinkDialog>,
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
          this.getLink()
          this.LinkId=this.dialogRef.id
         
        }
        getLink(){
         
         this.service.getMediaLinks().subscribe(res=>{
           console.log("response",res.data)
           let data=res.data
           data.forEach(element => {
             let id=element.id
             if(this.LinkId == id){
                 this.linkType=element.link_type
                 this.link=element.social_media_link
             }
             
           });
         })
        }
        
        closeDialog(){
          this.dialogRef.close()
        }
        change(){
          var type={
            link_type:this.linkType,
            social_media_link:this.link
          }
          console.log("typr update",type)
          this.service.updateLinks(type).subscribe(res =>{
          console.log("res",res)
          Swal.fire('Success..!', 'Updated Successfully!', 'success')
          this.closeDialog();
          this.ngOnInit()
          })
        }
}
	
