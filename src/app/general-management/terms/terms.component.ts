import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
   terms
   loader
  constructor(
    private router: Router,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTermsPolicy()
  }
  getTermsPolicy(){
    this.service.getTermsandCondition().subscribe(res =>{
      console.log("res",res);
      if(res){
        this.terms=res.data.content
      }
    })
  }
  updateTermsPolicy(){
    // let  terms=JSON.stringify(this.terms)
    // console.log("terms",terms);
    var content={
      id:1,
      content:this.terms
    }
    this.loader=true;
    this.service.updateTermsandCondition(content).subscribe(res =>{
      console.log("res",res);
      this.loader=false;
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
    })
  }
}
