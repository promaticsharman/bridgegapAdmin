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
  selector: 'app-section-second',
  templateUrl: './section-second.component.html',
  styleUrls: ['./section-second.component.css']
})
export class SectionSecondComponent implements OnInit {
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
   currentPage=10
		// console.log("pagesizeee",this.pageSize)
	 currentIndex=0
   imagePath = environment.engaging_image;
  //  imagePath = environment.home_image;
  responseData = []
  

  displayedColumns: string[] = ['position','image','heading','description','Action'] 
  

  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
    this.currentPage=10
		// console.log("pagesizeee",this.pageSize)
		this.currentIndex=0
		this.reqData.offset = 0
		this.reqData.limit = 10
		this.dataSource = new MatTableDataSource(this.responseData);
		
		this.datamodel = {}
    this.engagingData()
  }
  getPageSizeOptions() {
    return [10, 20, 30];
    }

    paginationOptionChange(evt) {
			console.log('*******',evt)
			
		this.reqData.offset = (evt.pageIndex * evt.pageSize).toString()
		this.reqData.limit = evt.pageSize
		this.currentPage=evt.pageSize
        this.currentIndex=evt.pageIndex
		var list={
		   	offset:this.reqData.offset,
            limit:this.reqData.limit
			
		}

		console.log(this.reqData)
		this.service.getAllEngagingAndEfficients(list).subscribe(res => {
		console.log('engaging and efficient data*****',res)
		if(res){
        
			this.length = res.data.count;
			this.dataSource = res.data.rows;
			if (this.filterValue) {
			this.dataSource.filter = this.filterValue
		}
			console.log('dataSource',this.dataSource);
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
  engagingData(){
    // this.currentIndex=0
    // this.currentPage=10
     var list={
      offset:this.reqData.offset,
      limit:this.reqData.limit
     }
    this.service.getAllEngagingAndEfficients(list).subscribe(res=>{
      console.log("section engagaing//////////// data",res)
      if(res){
        this.length = res.data.count;
        console.log("****length***",this.length);
        this.dataSource=res.data.rows;
        // this.dataSource.paginator = this.paginator;
        // console.log("datasource", this.dataSource)
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
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // this.filterValue = filterValue.trim().toLowerCase();
    var obj = {
    search: filterValue
    }
    if(obj.search){
      this.service.engagingFilter(obj).subscribe(res => {
        console.log('filterResponse',res)
        if (res) {
        this.dataSource = res.data
        // this.dataSource = new MatTableDataSource(data.data);
        // this.length = res.data.count
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
        // this.tableData = data.data;
        // this.backUpTableData = data.data;
        }
        }, err => {
        console.log(err)
        if (err.status >= 400) {
        // this.toastr.error('Internal Error', 'Error')
        console.log('Invalid Credential!!!')
        } else {
        // this.toastr.error('Internet Connection Error', 'Error')
        console.log('Internet Connection Error')
        }
        
        })
    }else{
      this.ngOnInit();
    }
    
    }

  delete(id){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
      this.service.deleteEngagingAndEfficients(id).subscribe(data => {
        console.log(data);
        Swal.fire(
          'Deleted!',
          'This Record has been deleted.',
          'success'
        )
       
        
        this.ngOnInit();
    });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'This Record is safe :)',
        'error'
      )
      }
    })
  }

}
