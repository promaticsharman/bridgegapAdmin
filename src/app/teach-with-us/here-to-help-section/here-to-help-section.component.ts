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
  selector: 'app-here-to-help-section',
  templateUrl: './here-to-help-section.component.html',
  styleUrls: ['./here-to-help-section.component.css']
})
export class HereToHelpSectionComponent implements OnInit {
  loader
  dataSource
  responseData = []
  imagePath=environment.here_to_help_image
  displayedColumns: string[] = ['position','image','heading','description','Action'] 
  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.service.get_here_to_help_section().subscribe(res =>{
      console.log('res',res)
      if(res){
        this.dataSource=res.data.rows
      }
    })
  }
}
