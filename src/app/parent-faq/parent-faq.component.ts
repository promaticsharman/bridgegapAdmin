import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parent-faq',
  templateUrl: './parent-faq.component.html',
  styleUrls: ['./parent-faq.component.css']
})
export class ParentFaqComponent implements OnInit {
  faq='parent_faq' 
	responseData = [] 
    dataSource: any
    loader
    displayedColumns: string[] = ['position','question','answer','action'];
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.responseData);
		
		// this.datamodel = {}
		this.parentFaq()
  }
  parentFaq(){
    var formData=new FormData()
    formData.append('faq_type', this.faq);
    this.loader=true;
      this.service.getFaq(formData).subscribe(res =>{
        console.log("parentfaqres*****",res.data)
  
        if(res){
          this.dataSource=res.data
         this.loader=false
        //   this.dataSource=res.data
        }
      })
  }
  addParentFaq(){
    const dialogRefEdit = this.dialog.open(AddParentFaqDialog,{
      // height: '350px',
      width: '600px',
      // id: 
    });
    dialogRefEdit.afterClosed().subscribe(result => {
      console.log('The dialog was closed');	
      this.parentFaq()
    });
  }
   
  editDialog(id){
    const dialogRefEdit = this.dialog.open(EditParentFaqDialog,{
      // height: '350px',
      width: '600px',
      id: id
    });
    dialogRefEdit.afterClosed().subscribe(result => {
      console.log('The dialog was closed');	
      this.parentFaq()
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
        'This Faq is safe :)',
        'error'
      )
      }
    })
  } 
}



///////Add Parent Faq /////////////////////
@Component({
	selector: 'add-parent-faq-dialog',
	templateUrl: 'add-parent-faq.html',
  })
  export class AddParentFaqDialog {
    reqData
	faq='parent_faq' 
    LinkId
    Form
    message
    linkType
	link
	EnterQuestion
	EnterAnswer
  parentFaqForm = new FormGroup({
    question: new FormControl('',[Validators.required]),
    answer: new FormControl('',[Validators.required])
    })
  

  	constructor(
      public dialogRef: MatDialogRef<AddParentFaqDialog>,
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


//////////Edit parent faq dialog/////////////////
@Component({
	selector: 'edit-parent-faq-dialog',
	templateUrl: 'edit-parent-faq.html',
  })
  export class EditParentFaqDialog {
    reqData
	faq='parent_faq' 
    LinkId
    Form
    message
    linkType
	link
	EnterQuestion
	EnterAnswer
  teacherFaqForm = new FormGroup({
    question: new FormControl('',[Validators.required]),
    // ({value:'dsfddf', disabled: true})
    answer: new FormControl('',[Validators.required])
    })
  

  	constructor(
      public dialogRef: MatDialogRef<EditParentFaqDialog>,
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
		this.getTeacherFaq()
          this.LinkId=this.dialogRef.id
         
		}
		getTeacherFaq(){
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
      
        closeDialog(){
          this.dialogRef.close()
        }
        updateFaq(){
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
