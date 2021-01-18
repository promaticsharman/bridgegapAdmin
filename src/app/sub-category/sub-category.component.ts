import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
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
	CateID
  displayedColumns: string[] = ['position', 'category','action'];
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
		this.CateID=this.route.snapshot.params.id
		this.datamodel = {}
		this.getSubCatList()
    	// this.getAllCategory()
  }
  getSubCatList(){
	var list={
		category_id:this.CateID,
		offset:this.reqData.offset,
		limit:this.reqData.limit
	}
	this.service.getSubList(list).subscribe(res => {
		// console.log('*****getSubCategoryData******',res.data);
		if(res){
		  this.dataSource=res.data.rows
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
	// this.dataSource.filter = filterValue.trim().toLowerCase();
	// this.filterValue = filterValue.trim().toLowerCase();
	var obj = {
	search: filterValue
	}
	if(obj.search){
		this.service.filterSubCategoryList(obj).subscribe(res => {
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

getPageSizeOptions() {
	return [10, 20, 30];
	}
	paginationOptionChange(evt) {
		this.reqData.offset = (evt.pageIndex * evt.pageSize).toString()
		this.reqData.limit = evt.pageSize
		let Cate=this.route.snapshot.params.id;
		console.log('cate id',Cate);
		
		var list={
			category_id:Cate,
			offset:this.reqData.offset,
            limit:this.reqData.limit
			
		}
		// console.log(this.reqData)
		this.service.getSubList(list).subscribe(res => {
		console.log('paginator limit',res)
		if(res){
        
			this.length = res.data.count;
			this.dataSource = res.data.rows;
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
  
	openSubCategoryDialog(){
		const dialogRef = this.dialog.open(AddSubCategoryDialog,{
			// height: '330px',
			width: '600px',
			id: this.route.snapshot.params.id
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.reqData = {}
			this.reqData.offset = 0
		    this.reqData.limit = 10
		    this.dataSource = new MatTableDataSource(this.responseData);
			this.datamodel = {}
			this.getSubCatList()

		});
	}

	openEditDialog(id){
		const dialogRefEdit = this.dialog.open(EditSubCategoryDialog,{
			// catId:this.route.snapshot.params.id,
			// height: '350px',
			width: '600px',
			id :<any>{
				id: id,
				cate : this.route.snapshot.params.id
			}
			// catId: this.route.snapshot.params.id
		});
		dialogRefEdit.afterClosed().subscribe(result => {
			console.log('The dialog was closed');	
			this.reqData = {}
		    this.reqData.offset = 0
		    this.reqData.limit = 10
		    this.dataSource = new MatTableDataSource(this.responseData);		    
		    this.datamodel = {}
			this.getSubCatList()
		});
	}
	deleteCategory(id){
		Swal.fire({
		  title: 'Are you sure want to remove?',
		  text: 'You will not be able to recover this Sub Category!',
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, keep it'
		}).then((result) => {
		  if (result.value) {
		  this.service.deleteSubCategory(id).subscribe(data => {
			console.log('deleted data',data);
			Swal.fire(
			  'Deleted!',
			  'This Sub Category has been deleted.',
			  'success'
			)
			this.ngOnInit();
		});
		  } else if (result.dismiss === Swal.DismissReason.cancel) {
		  Swal.fire(
			'Cancelled',
			'This Sub Category is safe :)',
			'error'
		  )
		  }
		})
		}

   
}

// Add sub-category
@Component({
	selector: 'add-sub-category-dialog',
	templateUrl: 'add-sub-category.html',
  })
  export class AddSubCategoryDialog {
	categoryId;
    addCategory: any = {
		category : "",
		// description : ""
	}
    // SubCategoryList:any = [];
	constructor(private fb: FormBuilder,
	  public dialogRef: MatDialogRef<AddSubCategoryDialog>, private service: AdminService, private route: ActivatedRoute,
	  ) {}

	  bookCategoryForm = new FormGroup({
		bookCategory : new FormControl('', [Validators.required]),
		// categoryDescription: new FormControl('', [Validators.required])
	  })

	onNoClick(): void {
	  this.dialogRef.close();
	}
	
	ngOnInit(): void {
		this.categoryId=this.dialogRef.id	
		
	
	}
	createCategory(){
		var obj={
			category_id: this.categoryId,
            sub_category_name : this.addCategory.category
		}
		// console.log('id&category',obj)
		this.service.addSubCategory(obj).subscribe(res => {
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

		//alert(this.dialogRef.id);
		// console.log("Book : ", this.addBook.bookCategory, " " , this.addBook.frame);
		// var formData = new FormData();
		
		// formData.append('book_category_id', this.addBook.bookCategory);
		// formData.append('book_link', this.addBook.frame);
		
		// this.service.addBook(formData).subscribe(data => {
		//   console.log("Data Successfully Inserted!",data);
		//   Swal.fire('Success..!', 'Successfully Created!', 'success')
		// },err => {
		//   if(err.status >= 400){
		// 	console.log('Invalid Credential!!!');
		//   }else{
		// 	console.log('Internet Connection Error');
		//   }
		// })
	}
	closeDialog(){
		this.dialogRef.close();
	}
}

 // Edit sub category

 @Component({
	selector: 'edit-sub-category-dialog',
	templateUrl: 'edit-sub-category.html',
  })
  export class EditSubCategoryDialog {
	
	subData
    addCategory: any = {
		  category : ""
	  }
	constructor(
    public dialogRef: MatDialogRef<EditSubCategoryDialog>,
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router
	  ) {}

	onNoClick(): void {
	  this.dialogRef.close();
	}
	
	ngOnInit(): void {
		this.subData = this.dialogRef.id;
    var obj = {
      sub_category_id: this.subData.id
	}
		this.service.getSubCategoryById(obj).subscribe(res =>{
			console.log("Data : ",res);
			this.addCategory.category = res.data.sub_category_name
		
		 })
		
		// console.log("SubDtaa: ",this.subData.id);
		
		//  console.log('iddddddddd*****',this.dialogRef.id);
	}

	editCategory(){
		let categoryId=parseInt(this.subData.cate)
		console.log('checkingcatID:',categoryId);
		
		var obj={
			sub_category_id:this.subData.id,
			sub_category_name:this.addCategory.category,
			category_id: categoryId
		}
		console.log('dataaa:',obj);

		this.service.updateSubCategory(obj).subscribe(data => {
		  console.log("Data Successfully Updated!",data);
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
    //   this.router.navigate(['/category']);
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










