import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-gen-faq',
  templateUrl: './add-gen-faq.component.html',
  styleUrls: ['./add-gen-faq.component.css']
})
export class AddGenFaqComponent implements OnInit {
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
    private service: AdminService,
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.LinkId=this.route.snapshot.params.id
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
    this.router.navigate(['/generalFaq']);
    // this.closeDialog();
  //   this.ngOnInit()
    })
  }
}
