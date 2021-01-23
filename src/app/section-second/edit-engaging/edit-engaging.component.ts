import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
@Component({
  selector: 'app-edit-engaging',
  templateUrl: './edit-engaging.component.html',
  styleUrls: ['./edit-engaging.component.css']
})
export class EditEngagingComponent implements OnInit {

  image
  imgUrl
  engagingData: any = {
    heading:"",
    description:"",
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
    this.imgUrl = environment.engag_img + 'engaging_and_efficient_images/'
    console.log('iddddd',this.route.snapshot.params.id)
    this.getEngagingById(this.route.snapshot.params.id)
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
		this.engagingData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  getEngagingById(id){
    // console.log(this.bannerData);
    var obj={
      id:id
    }
    this.service.getEngagingAndEfficientsById(obj).subscribe(data => {
      console.log(" edit data**",data)
      this.engagingData.heading = data.data.heading;
      this.engagingData.description = data.data.description;
      this.engagingData.image = data.data.image;
      this.testi_image = data.data.image;
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
  update(){
    console.log('id***',this.route.snapshot.params.id);
    console.log('heading/',this.engagingData.heading);
    console.log('description', this.engagingData.description);
    console.log('image',this.engagingData.image);
    // console.log(this.bannerData.description);
    
     var formData = new FormData();
     formData.append('id', this.route.snapshot.params.id);
     formData.append("image",this.engagingData.image);
     formData.append("heading", this.engagingData.heading);
     formData.append("description", this.engagingData.description);
   
     this.service.updateEngagingAndEfficients(formData).subscribe(data => {
       console.log(" Successfully Updated!//////",data);
       Swal.fire('Success..!', 'Successfully Updated!', 'success')
       this.router.navigate(['/section_2']);
     },err => {
       if(err.status >= 400){
         console.log("Inavalid Credentials!");
       }else{
         console.log("Internet Connection Error");
         
       }
     });
  }
}
