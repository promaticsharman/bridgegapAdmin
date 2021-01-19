import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment.prod';
@Component({
  selector: 'app-testimonials-edit',
  templateUrl: './testimonials-edit.component.html',
  styleUrls: ['./testimonials-edit.component.css']
})
export class TestimonialsEditComponent implements OnInit {
  image
  imgUrl
  testimonialsData: any = {
    authorName:"",
    designation:"",
    image:"",
    description:""
  }
  testi_image
  constructor(
    private fb: FormBuilder,
     private service: AdminService,
      private route: ActivatedRoute,
       private router: Router
  ) { }

  ngOnInit(): void {
    this.imgUrl = environment.testimonials_img + 'testimonial_images/'
    // 'testimonial/'
    console.log("id",this.route.snapshot.params.testimonial_id)
    this.getTestimonial(this.route.snapshot.params.testimonial_id);
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
		this.testimonialsData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  
  getTestimonial(id){
    // console.log("ssdsadsfasdfafsdasf",id)
    console.log(this.testimonialsData);
    var obj={
      id:id
    }
    this.service.getTestimonialById(obj).subscribe(data => {
      console.log("testimonial edit data**",data)
      this.testimonialsData.authorName = data.data.author_name;
      this.testimonialsData.designation = data.data.designation;
      this.testimonialsData.image = data.data.image;
      this.testi_image = data.data.image;
      this.testimonialsData.description = data.data.description;
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
    console.log(this.route.snapshot.params.testimonial_id);
    console.log(this.testimonialsData.authorName);
    console.log(this.testimonialsData.designation);
    console.log(this.testimonialsData.image);
    console.log(this.testimonialsData.description);
    
     var formData = new FormData();
     formData.append('id', this.route.snapshot.params.testimonial_id);
     formData.append("author_name",this.testimonialsData.authorName);
     formData.append("designation", this.testimonialsData.designation);
     formData.append("image", this.testimonialsData.image);
     formData.append("description", this.testimonialsData.description);
     this.service.updateTestimonials(formData).subscribe(data => {
       console.log(data,"Testimonials Successfully Updated!");
       Swal.fire('Success..!', 'Successfully Updated!', 'success')
       this.router.navigate(['/testimonials']);
     },err => {
       if(err.status >= 400){
         console.log("Inavalid Credentials!");
       }else{
         console.log("Internet Connection Error");
         
       }
     });
  }
}
