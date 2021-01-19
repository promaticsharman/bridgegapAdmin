import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-testimonials',
  templateUrl: './add-testimonials.component.html',
  styleUrls: ['./add-testimonials.component.css']
})
export class AddTestimonialsComponent implements OnInit {
  // image
  // imgUrl
  // testimonialsData: any = {
  //   authorName:"",
  //   designation:"",
  //   image:"",
  //   description:""
  // }
  // testi_image
  constructor(
    private fb: FormBuilder, private service: AdminService, private router: Router
  ) { }
  
  image
  testimonialsData: any = {
    authorName:"",
    designation:"",
    image:"",
    description:""
  }

  testimonialForm = new FormGroup({
    authorName : new FormControl('', [Validators.required]),
    designation : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required])
  })



  ngOnInit(): void {
    // this.imgUrl = environment.testimonials_img + 'testimonial/'
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


  saveTestimonials(){
    var formData = new FormData();
    formData.append("author_name",this.testimonialsData.authorName);
    console.log("author_name",this.testimonialsData.authorName);
    console.log("designation", this.testimonialsData.designation)
    console.log("image", this.testimonialsData.image)
    console.log("description", this.testimonialsData.description)
    formData.append("designation", this.testimonialsData.designation);
    formData.append("image", this.testimonialsData.image);
    formData.append("description", this.testimonialsData.description);

    this.service.createTestimonial(formData).subscribe(data => {
      console.log("Testimonials Successfully Created!");
      Swal.fire('Success..!', 'Successfully Created!', 'success')
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
