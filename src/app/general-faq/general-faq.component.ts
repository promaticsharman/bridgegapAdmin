import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-general-faq',
  templateUrl: './general-faq.component.html',
  styleUrls: ['./general-faq.component.css']
})
export class GeneralFaqComponent implements OnInit {
  checked = false;
	
	disabled = false;
	loader
	length
	timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	filterValue
	responseData = [] 
   dataSource: any
    faq='general_faq' 
	 question
	 answer
  displayedColumns: string[] = ['position','question','answer','action'];
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.reqData = {} 
		// this.reqData.offset = 0
		// this.reqData.limit = 10
		this.dataSource = new MatTableDataSource(this.responseData);
		
		// this.datamodel = {}
		this.genFaq()
  }
   genFaq(){
	
	var formData=new FormData()
  formData.append('faq_type', this.faq);
   this.loader=true;
	  this.service.getFaq(formData).subscribe(res =>{
		  console.log("genfaqres*****",res.data)

		  if(res){
			  this.dataSource=res.data
        this.loader=false;
			//   this.dataSource=res.data
		  }
	  })
  }
  addGenFaq(id){
	const dialogRefEdit = this.dialog.open(AddGenFaqDialog,{
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
		this.genFaq()
	});

  }

  editGenDialog(id){
	const dialogRefEdit = this.dialog.open(EditGenFaqDialog,{
		// height: '350px',
		width: '600px',
		id: id
	});
	dialogRefEdit.afterClosed().subscribe(result => {
		console.log('The dialog was closed');	
		this.genFaq()
	});

  }
  delete(id){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this Faq!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
      this.service.deleteFaq(id).subscribe(data => {
        console.log(data);
        Swal.fire(
          'Deleted!',
          'This Faq has been deleted.',
          'success'
        )
       
        
        this.ngOnInit();
    });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'This Record is safe :)',
        'error'
      )
      }
    })
  }
}


///////Add Gen Faq Dialog Box//////////////////
@Component({
	selector: 'add-gen-faq-dialog',
	templateUrl: 'add-gen-faq.html',
  })
  export class AddGenFaqDialog {
    reqData
	faq='general_faq' 
    LinkId
    Form
    message
    linkType
	link
	EnterQuestion
	EnterAnswer
  genFaqForm = new FormGroup({
    question: new FormControl('',[Validators.required]),
    answer: new FormControl('',[Validators.required])
    })
  

  	constructor(
      public dialogRef: MatDialogRef<AddGenFaqDialog>,
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
          
          this.LinkId=this.dialogRef.id
         
        }
       
        
        closeDialog(){
          this.dialogRef.close()
        }
        addFaq(){
          var type={
			faq_type:this.faq,
			answer:this.EnterAnswer,
			question:this.EnterQuestion
          }
          console.log("typr update",type)
          this.service.addFaq(type).subscribe(res =>{
          console.log("res123",res)
          Swal.fire('Success..!', 'Updated Successfully!', 'success')
          this.closeDialog();
        //   this.ngOnInit()
          })
        }
}


//////////Edit gen faq dialog/////////////////
@Component({
	selector: 'edit-gen-faq-dialog',
	templateUrl: 'edit-gen-faq.html',
  })
  export class EditGenFaqDialog {
    reqData
	faq='general_faq' 
    LinkId
    Form
    message
    linkType
	link
	EnterQuestion
	EnterAnswer
  genFaqForm = new FormGroup({
    question: new FormControl('',[Validators.required]),
    // ({value:'dsfddf', disabled: true})
    answer: new FormControl('',[Validators.required])
    })
  

  	constructor(
      public dialogRef: MatDialogRef<EditGenFaqDialog>,
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
		//   this.getLink()
		this.getGenFaq()
          this.LinkId=this.dialogRef.id
         
		}
		getGenFaq(){
			var formData=new FormData()
	        formData.append('faq_type', this.faq);
			this.service.getFaq(formData).subscribe(res=>{
			  console.log("response",res.data)
			  let data=res.data
			  data.forEach(element => {
				let id=element.id
				if(this.LinkId == id){
					this.EnterQuestion=element.question
					this.EnterAnswer=element.answer
				}
				
			  });
			})
		   }
        // getLink(){
        //  this.service.getMediaLinks().subscribe(res=>{
        //    console.log("response",res.data)
        //    let data=res.data
        //    data.forEach(element => {
        //      let id=element.id
        //      if(this.LinkId == id){
        //          this.linkType=element.link_type
        //          this.link=element.social_media_link
        //      }
             
        //    });
        //  })
        // }
        
        closeDialog(){
          this.dialogRef.close()
        }
        addFaq(){
          var type={
			faq_id:this.LinkId,
			answer:this.EnterAnswer,
			question:this.EnterQuestion
          }
          console.log("typr update",type)
          this.service.updateFaq(type).subscribe(res =>{
          console.log("res123",res)
          Swal.fire('Success..!', 'Updated Successfully!', 'success')
          this.closeDialog();
          this.ngOnInit()
          })
        }
}
