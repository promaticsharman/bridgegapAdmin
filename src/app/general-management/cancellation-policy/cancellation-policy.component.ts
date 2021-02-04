import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cancellation-policy',
  templateUrl: './cancellation-policy.component.html',
  styleUrls: ['./cancellation-policy.component.css']
})
export class CancellationPolicyComponent implements OnInit {
  cancellation
  constructor(
    private router: Router,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCancellationPolicy()
  }
  getCancellationPolicy(){
  this.service.getCancellationPolicy().subscribe(res =>{
    this.cancellation=res.data.content;
  })
  }
  updateCancellation(){
    var content={
      id:1,
      content:this.cancellation
    }
    this.service.updateCancellationPolicy(content).subscribe(res =>{
    // console.log('res',res)
    Swal.fire('Success..!', 'Successfully Updated!', 'success')
    })
  }
}
