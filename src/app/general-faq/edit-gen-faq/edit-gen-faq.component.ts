import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-gen-faq',
  templateUrl: './edit-gen-faq.component.html',
  styleUrls: ['./edit-gen-faq.component.css']
})
export class EditGenFaqComponent implements OnInit {
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
    private router: Router,
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getGenFaq()
          this.LinkId=this.route.snapshot.params.id
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
    this.router.navigate(['/generalFaq']);
    // this.closeDialog();
    // this.ngOnInit()
    })
  }

}
