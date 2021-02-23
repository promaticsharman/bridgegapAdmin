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
  selector: 'app-how-it-works-teacher',
  templateUrl: './how-it-works-teacher.component.html',
  styleUrls: ['./how-it-works-teacher.component.css']
})
export class HowItWorksTeacherComponent implements OnInit {
  loader
  dataSource
  responseData = []
  imagePath=environment.how_it_works_img
  displayedColumns: string[] = ['position','image','heading','description','Action'] 
  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getTeacherHowitWork()
  }
  getTeacherHowitWork(){
    var list={
      limit:10,
      offset:0
    }
    this.service.all_how_it_works_for_teachers(list).subscribe(res =>{
      this.dataSource=res.data.rows
    })
  }
}
