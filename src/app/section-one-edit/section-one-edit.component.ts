import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment.prod';
@Component({
  selector: 'app-section-one-edit',
  templateUrl: './section-one-edit.component.html',
  styleUrls: ['./section-one-edit.component.css']
})
export class SectionOneEditComponent implements OnInit {
  image
  imgUrl
  bannerData: any = {
    title:"",
    subtitle:"",
    image:"",
    
  }
  testi_image
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.imgUrl = environment.banner_img + 'home_banner_images/'
    console.log('iddddd',this.route.snapshot.params.id)
    this.getBannerById(this.route.snapshot.params.id)
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
		this.bannerData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }

  getBannerById(id){
    // console.log(this.bannerData);
    var obj={
      banner_id:id
    }
    this.service.getBannerById(obj).subscribe(data => {
      console.log(" edit data**",data)
      this.bannerData.title = data.data.heading;
      this.bannerData.subtitle = data.data.sub_heading;
      this.bannerData.image = data.data.banner_image;
      this.testi_image = data.data.banner_image;
      // this.bannerData.description = data.data.description;
    })
    , err => {
      console.log(err);
      if(err.status >= 400){
        console.log('Invalid Credential!!!');
      }else{
        console.log('Internet Connection Error');
      }
    }
   
  }

  updateTestimonials(){
    console.log('id***',this.route.snapshot.params.id);
    console.log('title/',this.bannerData.title);
    console.log('subtitle',this.bannerData.subtitle);
    console.log('image',this.bannerData.image);
    // console.log(this.bannerData.description);
    
     var formData = new FormData();
     formData.append('banner_id', this.route.snapshot.params.id);
     formData.append("heading",this.bannerData.title);
     formData.append("sub_heading", this.bannerData.subtitle);
     formData.append("banner_image", this.bannerData.image);
   
     this.service.updateBanner(formData).subscribe(data => {
       console.log(data," Successfully Updated!");
       Swal.fire('Success..!', 'Successfully Updated!', 'success')
       this.router.navigate(['/section_1']);
     },err => {
       if(err.status >= 400){
         console.log("Inavalid Credentials!");
       }else{
         console.log("Internet Connection Error");
         
       }
     });
  }
}
