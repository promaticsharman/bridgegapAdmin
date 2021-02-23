import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import {environment} from '../../environments/environment.prod';
@Component({
  selector: 'app-sub-sub-category',
  templateUrl: './sub-sub-category.component.html',
  styleUrls: ['./sub-sub-category.component.css']
})
export class SubSubCategoryComponent implements OnInit {
  loader
	currentPage=10
  currentIndex=0
  reqData
  length
  subCatId
  categoryId
  dataSource
  displayedColumns: string[] = ['position','sub_sub_category','image','action'];
  imagePath = environment.sub_sub_category_images;
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.reqData= {}
    this.reqData.limit=10
    this.reqData.offset=0
    this.currentPage=10
    this.currentIndex=0

    this.categoryId=this.route.snapshot.params.catId
    console.log(' this.categoryId', this.categoryId)
  
    this.subCatId=this.route.snapshot.params.subcatId
    console.log('this.subCatId',this.subCatId)
    this.get_sub_sub_data()
  }
  get_sub_sub_data(){
    var obj={
      sub_category_id:this.subCatId,
      limit: this.reqData.limit,
      offset: this.reqData.offset
    }
    this.service.get_sub_sub_category(obj).subscribe(res =>{
      console.log('res of subsubcategory',res)
      this.dataSource=res.data.rows
      this.length=res.data.count
    })
  }
  delete(id){
		Swal.fire({
		  title: 'Are you sure want to remove?',
		  text: 'You will not be able to recover this Sub Sub Category!',
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, keep it'
		}).then((result) => {
		  if (result.value) {
		  this.service.deleteSubSubCategory(id).subscribe(data => {
			console.log('deleted data',data);
			Swal.fire(
			  'Deleted!',
			  'This Sub Category has been deleted.',
			  'success'
			)
      let currentUrl = this.router.url;
      console.log('currentUrl',currentUrl)
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
		});
		  } else if (result.dismiss === Swal.DismissReason.cancel) {
		  Swal.fire(
			'Cancelled',
			'This Sub Sub Category is safe :)',
			'error'
		  )
		  }
	  	})
    }
    getPageSizeOptions() {
      return [10, 20, 30];
      }
      paginationOptionChange(evt) {
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString()
        this.reqData.limit = evt.pageSize
        this.currentPage=evt.pageSize
            this.currentIndex=evt.pageIndex
        let Cate=this.route.snapshot.params.id;
        console.log('cate id',Cate);
        this.currentPage=evt.pageSize
        this.currentIndex=evt.pageIndex
        var obj={
          sub_category_id:this.subCatId,
          offset:this.reqData.offset,
          limit:this.reqData.limit
          
        }
        this.service.get_sub_sub_category(obj).subscribe(res => {
        console.log('paginator limit',res)
        if(res){
            
          this.length = res.data.count;
          this.dataSource = res.data.rows;
       
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
    applyFilter(filterValue: string){
      var obj = {
        search: filterValue
        }
        if(obj.search){
          this.service.filterSubSubCategoryList(obj).subscribe(res => {
            console.log('filterResponse',res)
            if (res) {
            this.dataSource = res.data
            // this.dataSource = new MatTableDataSource(data.data);
            
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
}
