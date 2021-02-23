import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-sub-sub-category',
  templateUrl: './add-sub-sub-category.component.html',
  styleUrls: ['./add-sub-sub-category.component.css']
})
export class AddSubSubCategoryComponent implements OnInit {
  image
  imgUrl
  categoryData: any = {
    category:"",
    image:"",
  }
  loader
  testi_image
  categoryId;
  subcategoryId
  addSubSubCategoryForm = new FormGroup({
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
    this.categoryId=this.route.snapshot.params.catId
    console.log("this.categoryId",this.categoryId)
    this.subcategoryId=this.route.snapshot.params.subCatId
    console.log(" this.subcategoryId",this.subcategoryId)
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
  sub_sub_category(){
    var formData = new FormData();
    formData.append("sub_sub_category_name",this.categoryData.category);
    formData.append("category_id",this.categoryId);
    formData.append("sub_category_id",this.subcategoryId);
    formData.append("image", this.categoryData.image);
    this.loader=true;
    console.log('this.categoryData.category',this.categoryData.category)
    console.log('this.categoryId',this.categoryId)
    console.log('this.subcategoryId',this.subcategoryId)
    console.log('this.categoryData.image',this.categoryData.image)
    this.service.add_sub_sub_category(formData).subscribe(res =>{      
      console.log("subsubresponse",res)
      this.loader=false;
      Swal.fire('Success..!','Successfully Created!', 'success')
      let route=`/sub_sub_category/${this.categoryId}/${this.subcategoryId}`
      this.router.navigate([route]);
    })
  }

}
