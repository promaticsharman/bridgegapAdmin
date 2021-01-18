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
  

  displayedColumns: string[] = ['image', 'Action']
  animal: string;
  name: string;

  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private service: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
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