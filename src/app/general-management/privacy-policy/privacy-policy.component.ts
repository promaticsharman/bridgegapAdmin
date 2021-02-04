import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
 privacy
  constructor(
    private router: Router,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPrivacyPolicy()
  }
  getPrivacyPolicy(){
    this.service.getPrivacyPolicy().subscribe(res =>{
      console.log("res",res)
     this.privacy=res.data.content
    })
  }
  updatePrivacy(){
    var content={
      id:1,
      content:this.privacy
    }
    this.service.updatePrivacyPolicy(content).subscribe(res =>{
      console.log("res",res)
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
    })
  }
}
