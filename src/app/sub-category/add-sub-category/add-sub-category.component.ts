import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  image
  imgUrl
  categoryData: any = {
    category:"",
    image:"",
  }
  testi_image
  categoryId;
  addSubCategoryForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    image : new FormControl('', [Validators.required])
  })
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params.id
    console.log("new iddddds",this.categoryId)
    // SubCategory
    // this.SubCategory()
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
  SubCategory(){

    // var obj={
    //  category_id:this.route.snapshot.params.id,
    //  category_name:this.categoryData.category
    // }
    var formData = new FormData();
   
    formData.append("sub_category_name", this.categoryData.category);
    formData.append("category_id",this.categoryId)
    formData.append("image", this.categoryData.image);
    // var formData
    this.service.addSubCategory(formData).subscribe(res => {
     console.log("Data Successfully Inserted!",res);
     Swal.fire('Success..!', 'Successfully Created!', 'success')
     
     let route=`/sub_category/${this.categoryId}`
     this.router.navigate([route]);
 
  },err => {
    if(err.status >= 400){
    console.log('Invalid Credential!!!');
    }else{
    console.log('Internet Connection Error');
    }
  })
   }

}
