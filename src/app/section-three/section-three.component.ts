import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.css']
})
export class SectionThreeComponent implements OnInit {
  
  dataSource
  tableData 
  backUpTableData
  showLoader
  reqData
  getData
  datamodel
  length
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  filterValue
   complexForm: FormGroup;
   formData;
   imagePath = environment.home_image;
  //  imagePath = environment.home_image;
  responseData = []
  

  displayedColumns: string[] = ['image','step','Action',] 
  constructor() { }

  ngOnInit(): void {
  }

}
