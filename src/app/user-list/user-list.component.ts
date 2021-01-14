import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
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

  displayedColumns: string[] = ['position','name','email','phone','action'];
  // 
  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
		this.reqData.offset = 0
		this.reqData.limit = 5
		this.dataSource = new MatTableDataSource(this.responseData);
		
		this.datamodel = {}
		this.getStudentList()
  }
  getStudentList(){
    var list={
      offset:this.reqData.offset,
      limit:this.reqData.limit
    }
    this.service.getallStudent(list).subscribe(res => {
      // console.log('*****getStudentData******',res.data);
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
      this.service.filterStudentList(obj).subscribe(res => {
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
 


  
  getPageSizeOptions() {
    return [5,10, 20, 30];
    }
    paginationOptionChange(evt) {
      this.reqData.offset = (evt.pageIndex * evt.pageSize).toString()
      this.reqData.limit = evt.pageSize
      // let Cate=this.route.snapshot.params.id;
      // console.log('cate id',Cate);
      
      var list={
       
        offset:this.reqData.offset,
        limit:this.reqData.limit
        
      }
      // console.log(this.reqData)
      this.service.getallStudent(list).subscribe(res => {
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

    viewDialog(id){
      const dialogRef = this.dialog.open(ViewCategoryDialog,{
        height: '600px',
        width: '600px',
        id: id
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.reqData = {}
          this.reqData.offset = 0
          this.reqData.limit = 10
          this.dataSource = new MatTableDataSource(this.responseData);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
          this.datamodel = {}
            this.getStudentList()
        
      });
    
    }

}

//view Category dialog

@Component({
	selector: 'view-category-dialog',
	templateUrl: 'view-category.html',
  })
  export class ViewCategoryDialog {
    reqData
    StudentId
    addCategory: any = {
      name : "",
      email: "",
      phone: "",
      country:"",
      state: "",
      dob: "",

		  // description : ""
	  }
	constructor(private fb: FormBuilder,
	  public dialogRef: MatDialogRef<ViewCategoryDialog>, private service: AdminService, private route: ActivatedRoute,
	  ) {}

	  viewDetailForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
    state : new FormControl('', [Validators.required]),
    dob : new FormControl('', [Validators.required]),
		// categoryDescription: new FormControl('', [Validators.required])
	  })

	onNoClick(): void {
	  this.dialogRef.close();
	}
	
	ngOnInit(): void {
    this.reqData = {} 
    this.reqData.offset = 0
		this.reqData.limit = 30
    this.getStudentList()
    this.StudentId=this.dialogRef.id

    console.log('idddddd', this.StudentId)


	}
  
    getStudentList(){
      var list={
        offset:this.reqData.offset,
        limit:this.reqData.limit
      }
      this.service.getallStudent(list).subscribe(res => {
        console.log('*****getStudentData******',res.data);
        let response=res.data.rows
        if(response){
          response.forEach(element => {
          let matchId=element.id
            if(matchId == this.StudentId ){
              this.addCategory.name=element.fullname;
              this.addCategory.email=element.email;
              this.addCategory.phone=element.phone;
              this.addCategory.country=element.country;
              this.addCategory.state=element.state;
              this.addCategory.dob=element.date_of_birth;

            }
          });
        }
      //   if(res){
      //     this.dataSource=res.data.rows
      //     console.log('responseData ***',this.dataSource)
      //   }
      // },
      //  err => {
      // console.log(err);
      // if(err.status >= 400){
      //   console.log('Invalid Credential!!!');
      // }else{
      //   console.log('Internet Connection Error');
      // }
          
    })
    }
  
	// createCategory(){
	// 	//alert(this.dialogRef.id);
	// 	console.log("Category : ", this.addCategory.category);
	// 	var formData = new FormData();
		
	// 	formData.append('category_name', this.addCategory.category);
	// 	// formData.append('description', this.addCategory.description);
		
	// 	this.service.addCategory(formData).subscribe(res => {
	//  	  console.log("Data Successfully Inserted!",res);
  //      Swal.fire('Success..!', 'Successfully Created!', 'success')
  //      this.dialogRef.close();

	// 	},err => {
	// 	  if(err.status >= 400){
	// 		console.log('Invalid Credential!!!');
	// 	  }else{
	// 		console.log('Internet Connection Error');
	// 	  }
	// 	})
	// }
	closeDialog(){
		this.dialogRef.close();
	}
}
