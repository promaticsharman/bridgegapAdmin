import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  image
  imgUrl
  categoryData: any = {
    category:"",
    image:"",
  }
  testi_image

  addCategoryForm = new FormGroup({
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
  addCategory(){
   
   var formData = new FormData();
   
   formData.append("category_name", this.categoryData.category);
   formData.append("image", this.categoryData.image);

   this.service.addCategory(formData).subscribe(res => {
    console.log("*****Data Successfully Inserted!****",res);
    Swal.fire('Success..!', 'Successfully Created!', 'success')
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
