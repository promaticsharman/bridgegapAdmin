import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment.prod';
@Component({
  selector: 'app-edit-how-it-works',
  templateUrl: './edit-how-it-works.component.html',
  styleUrls: ['./edit-how-it-works.component.css']
})
export class EditHowItWorksComponent implements OnInit {

  image
  imgUrl
  workData: any = {
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
    this.imgUrl = environment.how_it_img + 'how_its_works_images/'
    // this.imgUrl = environment.engag_img + 'engaging_and_efficient_images/'
    console.log('iddddd',this.route.snapshot.params.id)
    this.getHowById(this.route.snapshot.params.id)
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
		this.workData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  getHowById(id){
    var obj={
      id:id
    }
    this.service.getHowItsWorksById(obj).subscribe(data => {
      console.log(" edit data**",data)
      this.workData.heading = data.data.heading;
      this.workData.description = data.data.description;
      this.workData.image = data.data.image;
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
    console.log('heading/',this.workData.heading);
    console.log('description', this.workData.description);
    console.log('image',this.workData.image);
    // console.log(this.bannerData.description);
    
     var formData = new FormData();
     formData.append('id', this.route.snapshot.params.id);
     formData.append("image",this.workData.image);
     formData.append("heading", this.workData.heading);
     formData.append("description", this.workData.description);
   
     this.service.updateHowItsWorks(formData).subscribe(data => {
       console.log(" Successfully Updated!//////",data);
       Swal.fire('Success..!', 'Successfully Updated!', 'success')
       this.router.navigate(['/section_3']);
     },err => {
       if(err.status >= 400){
         console.log("Inavalid Credentials!");
       }else{
         console.log("Internet Connection Error");
         
       }
     });
  }

}
