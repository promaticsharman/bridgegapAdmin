import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-parent-faq',
  templateUrl: './add-parent-faq.component.html',
  styleUrls: ['./add-parent-faq.component.css']
})
export class AddParentFaqComponent implements OnInit {
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
    private service: AdminService,
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
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
this.router.navigate(['/parentFaq']);
// this.closeDialog();
//   this.ngOnInit()
})
}
}
