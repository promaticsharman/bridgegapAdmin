import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-one-time-session',
  templateUrl: './one-time-session.component.html',
  styleUrls: ['./one-time-session.component.css']
})
export class OneTimeSessionComponent implements OnInit {
  oneTimeCancellation
  loader
  constructor(
    private router: Router,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getOneTimePolicy()
  }
  getOneTimePolicy(){
    var params={
      type:"one_time"
    }
    this.loader=true;
  this.service.getCancellationPolicy(params).subscribe(res =>{
    let ongoingData=res.data.rows;
    // console.log('one_time',ongoingData)
    ongoingData.forEach(element => {
      this.oneTimeCancellation=element.content
      console.log('this.oneTimeCancellation',this.oneTimeCancellation)
    });
    this.loader=false;
   })

  }
  updateCancellation(){
    var content={
      id:4,
      content:this.oneTimeCancellation,
      type:"one_time"
    }
    this.loader=true;
    this.service.updateCancellationPolicy(content).subscribe(res =>{
    // console.log('res',res)
   
    Swal.fire('Success..!', 'Successfully Updated!', 'success')
    this.loader=false;
    })
  }
  }
  // createCancellationPolicy(){
  //   var list={
  //     content:this.oneTimeCancellation,
  //     type:"one_time"

  //   }
  //   this.service.createCancellationPolicy(list).subscribe(res =>{
  //     console.log('res',res)

  //   })
  // }

