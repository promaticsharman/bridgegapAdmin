import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-why-teach-with-bridgegap',
  templateUrl: './why-teach-with-bridgegap.component.html',
  styleUrls: ['./why-teach-with-bridgegap.component.css']
})
export class WhyTeachWithBridgegapComponent implements OnInit {
  dataSource
  responseData = []
  loader
  imagePath=environment.engaging_image;
  displayedColumns: string[] = ['position','image','heading','description','Action'] 
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.service.get_why_teach_with_us().subscribe(res =>{
      if(res){
        this.dataSource=res.data.rows
      }
    })
  }

}
