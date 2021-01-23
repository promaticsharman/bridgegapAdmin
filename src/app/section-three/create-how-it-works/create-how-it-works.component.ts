import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-how-it-works',
  templateUrl: './create-how-it-works.component.html',
  styleUrls: ['./create-how-it-works.component.css']
})
export class CreateHowItWorksComponent implements OnInit {
  image
  imgUrl
  engagingData: any = {
    heading:"",
    description:"",
    // image:"",
  }
  testi_image
 loader
  createForm = new FormGroup({
    heading: new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
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
		this.engagingData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  add(){
    var formData = new FormData();
    // formData.append("author_name",this.bannerData.title);

    // console.log("subtitle",this.bannerData.subtitle);
    
    // console.log("image", this.bannerData.image)
    // console.log("title", this.bannerData.title)
    formData.append("heading", this.engagingData.heading);
    formData.append("description", this.engagingData.description);
    formData.append("image", this.engagingData.image);
    this.loader=true;
    this.service.createHowItsWorks(formData).subscribe(data => {
      console.log(" Successfully Created!");
      Swal.fire('Success..!', 'Successfully Created!', 'success')
      this.router.navigate(['/section_3']);
      this.loader=false;
    },err => {
      if(err.status >= 400){
        console.log("Inavalid Credentials!");
      }else{
        console.log("Internet Connection Error");
         
      }
    });
 }
}
