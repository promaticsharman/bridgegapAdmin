import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-multi-session',
  templateUrl: './multi-session.component.html',
  styleUrls: ['./multi-session.component.css']
})
export class MultiSessionComponent implements OnInit {
  multiSessionCancellation
  loader
  constructor(
    private router: Router,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getMultipleSession()
  }
  getMultipleSession(){
    var params={
      type:"multi_session"
    }
    this.loader=true;
  this.service.getCancellationPolicy(params).subscribe(res =>{
    let ongoingData=res.data.rows;
    console.log('ongoingData',ongoingData)
    ongoingData.forEach(element => {
      this.multiSessionCancellation=element.content
     
    });
    this.loader=false;
   })
  }
  updateCancellation(){
    var content={
      id:3,
      content:this.multiSessionCancellation,
      type:"multi_session"
    }
    this.loader=true;
    this.service.updateCancellationPolicy(content).subscribe(res =>{
    // console.log('res',res)
   
    Swal.fire('Success..!', 'Successfully Updated!', 'success')
    this.loader=false;
    })
  }
  
}
