import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-section-first',
  templateUrl: './section-first.component.html',
  styleUrls: ['./section-first.component.css']
})
export class SectionFirstComponent implements OnInit {
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
  // status :boolean
  isEnabled
  statusType
  myFlagForSlideToggle : boolean = true;
  currentIndex=0
  currentPage=10

  displayedColumns: string[] = ['position','title','subtitle','image', 'status','Action']
  // 'status',
  animal: string;
  name: string;
  device:boolean ;

  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.reqData = {} 
    
		this.reqData.offset = 0
		this.reqData.limit = 10
		this.dataSource = new MatTableDataSource(this.responseData);
		
		this.datamodel = {}
    this.getbannerData()
  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
   
  getbannerData(){
    this.currentIndex=0
    this.currentPage=10
     var list={
      offset:this.reqData.offset,
      limit:this.reqData.limit
     }
    this.service.getAllBanner(list).subscribe(res=>{
      console.log("section one data",res)
      if(res){
        this.length = res.data.count;
        console.log("****length***",this.length);
        this.dataSource=res.data.rows;
        this.dataSource.paginator = this.paginator;
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
    this.service.bannerFilter(obj).subscribe(res => {
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

  deletebanner(id){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
      this.service.deleteBanner(id).subscribe(data => {
        console.log(data);
        Swal.fire(
          'Deleted!',
          'This Record has been deleted.',
          'success'
        )
       
         var list={
          offset:this.reqData.offset,
          limit:this.reqData.limit
         }
        this.service.getAllBanner(list).subscribe(res=>{
         
          if(res){
             this.length = res.data.count;
            console.log("****length***",this.length);
            this.dataSource=res.data.rows;
            this.dataSource.paginator = this.paginator;
            
        }})
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
  openEditDialog(){
    const dialogRef = this.dialog.open(EditDialog,{
      // height: '600px!important',
      width: '600px',
      // id: id
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.reqData = {}
      //   this.reqData.offset = 0
      //   this.reqData.limit = 10
      //   this.dataSource = new MatTableDataSource(this.responseData);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // this.datamodel = {}
          // this.getStudentList()
      
    });
  
  }
  
  statusID(id){
   console.log("valueeeeeeeeee",this.myFlagForSlideToggle) 
 this.statusID=id
 console.log('iddddddddddddddddd',id)
  }

  // onStatus(change,id){
  //   console.log("change",change)
  //   console.log("id",id)

    // this.statusType=change
    // console.log("change",this.statusType)
    // var obj={
    //   banner_id:id,
    //   status:change
    // }
    // this.service.bannerActiveAndInactive(obj).subscribe(res=>{
    //   this.toastr.success("Status changed successfully");
    //   console.log(res)
    // })
  // }
  onChange(evt,id){
    console.log("eeee",evt)
    console.log("evt***",evt.checked)
    console.log("id***",id)
    let statusType
    if (evt.checked == true) {
      statusType = "active";
    } else {
      statusType = "inactive"
    }
    console.log("statusType***",statusType)
     var obj={
      banner_id:id,
      status:statusType
    }
    this.service.bannerActiveAndInactive(obj).subscribe(res=>{
      this.toastr.success("Status changed successfully",'Success');
      console.log(res)
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
      console.log('checking  page Index', this.currentPage)
      console.log('checking current page',evt.pageSize)

      var list={
       
        offset:this.reqData.offset,
        limit:this.reqData.limit
        
      }
      // console.log(this.reqData)
      this.service.getAllBanner(list).subscribe(res => {
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



/// Edit Home Dialog box


@Component({
	selector: 'edit-category-dialog',
	templateUrl: 'edit-category.html',
  })
  export class EditDialog {
    homeImage
  homeImageSrc: any;
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
    public dialogRef: MatDialogRef<EditDialog>,
     private service: AdminService,
      private route: ActivatedRoute,
      private toastr: ToastrService
	  ) {}

	  viewDetailForm = new FormGroup({
    content : new FormControl('', [Validators.required]),
    content1 : new FormControl('', [Validators.required]),
    
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

    // console.log('idddddd', this.StudentId)


  }
  readURL(event) {
		if (event.target.files && event.target.files[0]) {
			var file = event.target.files[0];
			// this.homeImage = file

			console.log('++++++++++++++++++++++++++++++',file)
			console.log('file ',file.size);
			if(file.size/10027/10027 > 1){

				this.toastr.error('Image size should not be more than 10MB', 'Success')
				// let snackBarRef = this._snackBar.open('Image size should not be more than 1MB', 'Ok', {
				// 	duration: environment.snackDuration,
				// });
			}else{
				
				this.homeImage = file
				const reader = new FileReader();
				
				reader.onload = e => this.homeImageSrc = reader.result;
		
				reader.onloadend = (loadEvent) => {
					console.log(reader)
					let mainImage = reader.result;
					// console.log(mainImage)
					// this.reqData.image.push(fr.result)
					this.homeImage = file
				};
				console.log('this.homeImage+++',this.homeImage)
				reader.readAsDataURL(file);
			}
		}
	}

  
    getStudentList(){
      // var list={
      //   offset:this.reqData.offset,
      //   limit:this.reqData.limit
      // }
      // this.service.getallStudent(list).subscribe(res => {
      //   console.log('*****getStudentData******',res.data);
      //   let response=res.data.rows
      //   if(response){
      //     response.forEach(element => {
      //     let matchId=element.id
      //       if(matchId == this.StudentId ){
      //         this.addCategory.name=element.fullname;
      //         this.addCategory.email=element.email;
      //         this.addCategory.phone=element.phone;
      //         this.addCategory.country=element.country;
      //         this.addCategory.state=element.state;
      //         this.addCategory.dob=element.date_of_birth;

      //       }
      //     });
    //     }
     
          
    // })
    }
  
	closeDialog(){
		this.dialogRef.close();
	}
}