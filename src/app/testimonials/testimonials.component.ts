import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  checked = false;
	indeterminate = false;
	labelPosition: 'before' | 'after' = 'after';
	disabled = false;
	tableData
	backUpTableData
	showLoader
	reqData
	getData
	datamodel
	length
	timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	filterValue
	responseData = [] 
    dataSource: any

  displayedColumns: string[] = ['position','author_name','designation','description','image','action'];
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    	this.reqData = {} 
		this.reqData.offset = 0
		this.reqData.limit = 10
		this.dataSource = new MatTableDataSource(this.responseData);
		
		this.datamodel = {}
		this.allTestimonial()
  }
  allTestimonial(){
	var list={
		offset:this.reqData.offset,
		limit:this.reqData.limit
	  }
	  this.service. allTestimonial(list).subscribe(res => {
		  console.log('testimonial data',res)
	  })
  }
}
