import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.css']
})
export class CoursesManagementComponent implements OnInit {
  currentPage=10
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
  loader
	timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	filterValue
	responseData = [] 
    dataSource: any
    currentIndex=0
  displayedColumns: string[] = ['position','course_type','course_title','teacher_name','status','action'];
  // 'courses_overview',
  // ,'globally_price'

  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
		this.reqData.offset = 0
    this.reqData.limit = 10
    // this.currentPage=10
		this.dataSource = new MatTableDataSource(this.responseData);
		// this.dataSource.paginator = this.paginator;
    this.datamodel = {}
    this.length
    this.getCourseList()
  }

  getCourseList(){
    var list={
      limit:this.reqData.limit,
      offset:	this.reqData.offset
    }
    // this.loader=true;
    this.service.get_all_courses(list).subscribe(res => {
      console.log('*****getCoursesrData******',res.data);
      if(res){
        this.length = res.data.count;
        this.dataSource=res.data.rows;
        // this.loader=false;
        console.log('responseData ***',this.dataSource)
      }
    },
     err => {
    console.log(err);
    if(err.status >= 400){
      console.log('Invalid Credential!!!');
    }else{
      console.log('Internet Connection Error');
    }
        
  })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filterValue = filterValue.trim().toLowerCase();
    var obj = {
    search: filterValue
    }
    if(obj.search){
      this.service.search_courses(obj).subscribe(res => {
        console.log('filterResponse',res)
        if (res) {
        this.dataSource = res.data
        
        }
        }, err => {
        console.log(err)
        if (err.status >= 400) {
        
        console.log('Invalid Credential!!!')
        } else {
       
        console.log('Internet Connection Error')
        }
        
        })
    }else{
      this.ngOnInit();
    }
  }
  getPageSizeOptions() {
    return [10, 20, 30];
    }
    paginationOptionChange(evt) {

      this.reqData.offset = (evt.pageIndex * evt.pageSize).toString()
      this.reqData.limit = evt.pageSize

    //   // let Cate=this.route.snapshot.params.id;
    //   // console.log('cate id',Cate);
    
      this.currentPage=evt.pageSize
      this.currentIndex=evt.pageIndex
      console.log('checking  page Index', this.currentPage)
      console.log('checking current page',evt.pageSize)

     
      var list={
       
        offset:this.reqData.offset,
        limit:this.reqData.limit
        
      }
    //   // console.log(this.reqData)
      this.service.get_all_courses(list).subscribe(res => {
      // console.log('paginator limit',res)
      if(res){
          
        this.length = res.data.count;
        this.dataSource = res.data.rows;
        // this.responseData=new MatTableDataSource(res.data);
        // console.log('dataSource',this.dataSource);
        }
      },err => {
        console.log(err);
        if(err.status >= 400){
          console.log('Invalid Credential!!!');
        }else{
          console.log('Internet Connection Error');
        }
    })
    }
}
