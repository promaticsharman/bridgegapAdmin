import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
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
	pageSize
	imagePath = environment.cateImg;
  displayedColumns: string[] = ['position', 'category','image','subcategory','action'];
//   'position',
  
  dataSource: any
  currentPage=10
  currentIndex=0
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
  ) {
  
  }
  ngOnInit(): void {
		this.currentPage=10
		// console.log("pagesizeee",this.pageSize)
		this.currentIndex=0
	    this.reqData = {}
		this.reqData.offset = 0
		this.reqData.limit = 10
		this.dataSource = new MatTableDataSource(this.responseData);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.datamodel = {}
    	this.getAllCategory()


  }
  	ngAfterViewInit() {
	this.dataSource.paginator = this.paginator
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
		var obj={
			offset:this.reqData.offset,
            limit:this.reqData.limit
			
		}

		console.log(this.reqData)
		this.service.allCategory(obj).subscribe(res => {
		console.log('paginator limit',res)
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

  getAllCategory(){
	  var obj={
		  offset: this.reqData.offset,
		  limit: this.reqData.limit
	  }
    this.service.allCategory(obj).subscribe(res => {
      // console.log('getTableData******',res.data);
      
      if(res){
        // this.length = res.data.count
       
		this.dataSource = res.data.rows;
		this.length = res.data.count;
        // this.responseData=new MatTableDataSource(res.data);
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

   
  applyFilter(filterValue: string) {
	// this.dataSource.filter = filterValue.trim().toLowerCase();
	// this.filterValue = filterValue.trim().toLowerCase();
	var obj = {
	search: filterValue
	}
	if(obj.search){
		this.service.filterCategoryList(obj).subscribe(res => {
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
  deleteCategory(id){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this Category!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
      this.service.deleteCategory(id).subscribe(data => {
        console.log('deleted data',data);
        Swal.fire(
          'Deleted!',
          'This Category has been deleted.',
          'success'
		)
		// this.getAllCategory()
        this.ngOnInit();
    });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'This Category is safe :)',
        'error'
      )
      }
    })
    }

  

  openDialog(){
		const dialogRef = this.dialog.open(AddCategoryDialog,{
			// height: '350px',
			width: '600px',
			id: this.route.snapshot.params.id,
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			// this.reqData = {}
		    // this.reqData.offset = 0
		    // this.reqData.limit = 10
		    // this.dataSource = new MatTableDataSource(this.responseData);
		    // this.dataSource.paginator = this.paginator;
		    // this.dataSource.sort = this.sort;
		    // this.datamodel = {}
    	    this.getAllCategory()
			
		});
	
  }
  openEditDialog(id){
		const dialogRefEdit = this.dialog.open(EditCategoryDialog,{
			// height: '350px',
			width: '600px',
			id: id
		});
		dialogRefEdit.afterClosed().subscribe(result => {
			console.log('The dialog was closed');	
			// this.reqData = {}
		    // this.reqData.offset = 0
		    // this.reqData.limit = 10
		    // this.dataSource = new MatTableDataSource(this.responseData);
		    // this.dataSource.paginator = this.paginator;
		    // this.dataSource.sort = this.sort;
		    // this.datamodel = {}
			this.getAllCategory()
		});
	}

	
 
}

//add category dialog box

@Component({
	selector: 'add-category-dialog',
	templateUrl: 'add-category.html',
  })
  export class AddCategoryDialog {
  
    addCategory: any = {
		  category : "",
		  // description : ""
	  }
	constructor(private fb: FormBuilder,
	  public dialogRef: MatDialogRef<AddCategoryDialog>, private service: AdminService, private route: ActivatedRoute,
	  ) {}

	  bookCategoryForm = new FormGroup({
		bookCategory : new FormControl('', [Validators.required]),
		// categoryDescription: new FormControl('', [Validators.required])
	  })

	onNoClick(): void {
	  this.dialogRef.close();
	}
	
	ngOnInit(): void {
	}

	createCategory(){
		//alert(this.dialogRef.id);
		console.log("Category : ", this.addCategory.category);
		var formData = new FormData();
		
		formData.append('category_name', this.addCategory.category);
		// formData.append('description', this.addCategory.description);
		
		this.service.addCategory(formData).subscribe(res => {
	 	  console.log("Data Successfully Inserted!",res);
       Swal.fire('Success..!', 'Successfully Created!', 'success')
       this.dialogRef.close();

		},err => {
		  if(err.status >= 400){
			console.log('Invalid Credential!!!');
		  }else{
			console.log('Internet Connection Error');
		  }
		})
	}
	closeDialog(){
		this.dialogRef.close();
	}
}

///Edit Category 

@Component({
	selector: 'edit-category-dialog',
	templateUrl: 'edit-category.html',
  })
  export class EditCategoryDialog {
  
    addCategory: any = {
		  category : ""
	  }
	constructor(
    public dialogRef: MatDialogRef<EditCategoryDialog>,
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router
	  ) {}

	onNoClick(): void {
	  this.dialogRef.close();
	}
	
	ngOnInit(): void {
    var obj = {
      category_id: this.dialogRef.id
    }
    // console.log("Edit Id: ",)
		this.service.getCategoryById(obj).subscribe(res =>{
			// console.log("Data : ",res);
			this.addCategory.category = res.data.category_name
		
		 })
	}

	editCategory(){
		var formData = new FormData();
		
		formData.append('category_name', this.addCategory.category);
		// formData.append('description', this.addCategory.description);
		formData.append('category_id', this.dialogRef.id);
		
		this.service.updateCategory(formData).subscribe(data => {
		  console.log("Data Successfully Updated!",data);
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
      // this.router.navigate(['/category']);
      this.dialogRef.close();
		},err => {
		  if(err.status >= 400){
			console.log('Invalid Credential!!!');
		  }else{
			console.log('Internet Connection Error');
		  }
		})
	}
	closeDialog(){
		this.dialogRef.close();
	}
}

//Add Sub-category
