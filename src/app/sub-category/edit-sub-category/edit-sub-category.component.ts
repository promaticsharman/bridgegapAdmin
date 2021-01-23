import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.css']
})
export class EditSubCategoryComponent implements OnInit {
  image
  imgUrl
  categoryData: any = {
    category:"",
    image:"",
  }
  catId
  testi_image
  editCategoryForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    // image : new FormControl('', [Validators.required])
  })
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log( 'iddddddd***',this.route.snapshot.params.subCatId)
    this.imgUrl = environment.subCategory_images + 'sub_category_images/'
    this.catId = this.route.snapshot.params.catId;
    let id = this.route.snapshot.params.subCatId
    var obj = {
     sub_category_id: id
   }
   // console.log("Edit Id: ",)
   this.service. getSubCategoryById(obj).subscribe(res =>{
     console.log("Data *************************: ",res);
     this.categoryData.category = res.data.sub_category_name
     this.categoryData.image=res.data.image
     this.testi_image=res.data.image
    })
  }

  onFileChange(event) {

    if (!event.target) {
			return;
		}
		if (!event.target.files) {
			return;
		}
		if (event.target.files.length !== 1) {
			return;
		}
		const file = event.target.files[0];
		if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
			// this.toastr.warning('Please upload image file')
			return;
		}
		console.log(event.target.files[0])
		this.categoryData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  editCategory(){
    console.log("this", this.route.snapshot.params);
		var formData = new FormData();
		 this.catId = this.route.snapshot.params.catId;
		formData.append('sub_category_name', this.categoryData.category);
		formData.append('image', this.categoryData.image);
    formData.append('category_id', this.route.snapshot.params.catId);
    formData.append('sub_category_id', this.route.snapshot.params.subCatId);
		
		this.service.updateSubCategory(formData).subscribe(data => {
		  console.log("Data Successfully Updated!",data);
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
      // this.router.navigate(['/category']);
      this.router.navigate([`/sub_category/${this.catId}`]);
		},err => {
		  if(err.status >= 400){
			console.log('Invalid Credential!!!');
		  }else{
			console.log('Internet Connection Error');
		  }
		})
  }
  

  // editCategory(){
    // 	let categoryId=parseInt(this.subData.cate)
    // 	console.log('checkingcatID:',categoryId);
      
    // 	var obj={
    // 		sub_category_id:this.subData.id,
    // 		sub_category_name:this.addCategory.category,
    // 		category_id: categoryId
    // 	}
    // 	console.log('dataaa:',obj);
  
    // 	this.service.updateSubCategory(obj).subscribe(data => {
    // 	  console.log("Data Successfully Updated!",data);
      //   Swal.fire('Success..!', 'Successfully Updated!', 'success')
      //   this.router.navigate(['/category']);
  //       this.dialogRef.close();
  // 		},err => {
  // 		  if(err.status >= 400){
  // 			console.log('Invalid Credential!!!');
  // 		  }else{
  // 			console.log('Internet Connection Error');
  // 		  }
  // 		})
  
    
  // 	}


}
