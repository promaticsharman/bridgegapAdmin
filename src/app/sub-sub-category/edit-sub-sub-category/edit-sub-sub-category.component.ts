import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
@Component({
  selector: 'app-edit-sub-sub-category',
  templateUrl: './edit-sub-sub-category.component.html',
  styleUrls: ['./edit-sub-sub-category.component.css']
})
export class EditSubSubCategoryComponent implements OnInit {
  image
  imgUrl=environment.sub_sub_category_images
  categoryData: any = {
    category:"",
    image:"",
  }
  categoryId
  subcategoryId
  editId
  testi_image
  loader
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
    this.categoryId=this.route.snapshot.params.catId
    this.subcategoryId=this.route.snapshot.params.subCatId
    this.editId=this.route.snapshot.params.id
    console.log('this.subcategoryId',this.subcategoryId)
    this.getSubCatById()

  }
  getSubCatById(){
    var params={
      id:this.editId
    }
    this.service.get_sub_sub_category_by_id(params).subscribe(res =>{
      console.log('res',res)
      this.categoryData.category=res.data.sub_sub_category_name
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
  updateCategory(){
    // var obj={
    //   id:this.subcategoryId,
    //   sub_sub_category_name:this.categoryData.category,
    //   image:this.categoryData.image
    // }
    var formData= new FormData()
    formData.append('id',this.editId)
    formData.append('sub_sub_category_name',this.categoryData.category)
    if(this.categoryData.image){
      formData.append('image',this.categoryData.image)
    }
     this.loader=true;
    // console.log('obj',obj)
    this.service.updateSubSubCategory(formData).subscribe(res =>{
      console.log('res of update subsub',res)
      this.loader=false;
      Swal.fire('Success..!','Successfully Created!', 'success')
      let route=`/sub_sub_category/${this.categoryId}/${this.subcategoryId}`
      this.router.navigate([route]);
    })
  }
  
  

}
