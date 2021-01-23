import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  image
  imgUrl
  categoryData: any = {
    category:"",
    image:"",
  }
  testi_image
  Id
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
	 this.imgUrl = environment.category_images + 'category_images/'
     this.Id= this.route.snapshot.params.id
    var obj = {
      category_id:this.Id
    }
    // console.log("Edit Id: ",)
		this.service.getCategoryById(obj).subscribe(res =>{
			console.log("Data *************************: ",res);
			this.categoryData.category = res.data.category_name
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
		var formData = new FormData();
		
		formData.append('category_name', this.categoryData.category);
		formData.append('image', this.categoryData.image);
		formData.append('category_id', this.Id);
		
		this.service.updateCategory(formData).subscribe(data => {
		  console.log("Data Successfully Updated!",data);
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
      // this.router.navigate(['/category']);
      this.router.navigate(['/category']);
		},err => {
		  if(err.status >= 400){
			console.log('Invalid Credential!!!');
		  }else{
			console.log('Internet Connection Error');
		  }
		})
	}
}
