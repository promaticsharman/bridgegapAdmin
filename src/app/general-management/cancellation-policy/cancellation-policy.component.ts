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
  loader
  constructor(
    private router: Router,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCancellationPolicy()
  }
  getCancellationPolicy(){
    var params={
      type:"ongoing"
    }
    this.loader=true;
  this.service.getCancellationPolicy(params).subscribe(res =>{
    let ongoingData=res.data.rows;
    console.log('ongoingData',ongoingData)
    ongoingData.forEach(element => {
      this.cancellation=element.content
    });
    this.loader=false;
   })
 }
  updateCancellation(){
    var content={
      id:1,
      content:this.cancellation,
      type:"ongoing"
    }
    this.loader=true;
    this.service.updateCancellationPolicy(content).subscribe(res =>{
    // console.log('res',res)
    this.loader=false;
    Swal.fire('Success..!', 'Successfully Updated!', 'success')
   
    })
  }
}
