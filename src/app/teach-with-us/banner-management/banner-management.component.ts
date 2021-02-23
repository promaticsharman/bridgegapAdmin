import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.css']
})
export class BannerManagementComponent implements OnInit {
  dataSource
  loader
  list
  imagePath=environment.home_image
  displayedColumns: string[] = ['position','image','title','subtitle','Action']
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { 
    
  }
 
  ngOnInit(): void {
    this.getTeacherbannerData()
  }
  getTeacherbannerData(){
    this.service.teach_with_us_banner().subscribe(res =>{
      if(res){
        this.dataSource=res.data.rows
        console.log('getTeacherbannerData',this.dataSource)
      }
    })
  }
}
