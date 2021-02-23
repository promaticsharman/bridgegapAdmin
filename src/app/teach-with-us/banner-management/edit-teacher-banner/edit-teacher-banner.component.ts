import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-edit-teacher-banner',
  templateUrl: './edit-teacher-banner.component.html',
  styleUrls: ['./edit-teacher-banner.component.css']
})
export class EditTeacherBannerComponent implements OnInit {
  image
  imgUrl
  bannerData: any = {
    title:"",
    subtitle:"",
    image:"",
    
  }
  loader
  testi_image
  teacherBannerId
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.imgUrl = environment.teach_with_us_banner_img + 'home_banner_images/'
    console.log('iddddd',this.route.snapshot.params.id)
    this.teacherBannerId=this.route.snapshot.params.id
    this.getBannerById()
  }
  getBannerById(){
    this.service.teach_with_us_banner().subscribe(res =>{
      let response=[]
      if(res){
         response=res.data.rows
         response.forEach(element=>{
           this.bannerData.title=element.heading
           this.bannerData.subtitle=element.sub_heading
          //  this.bannerData.image=element.banner_image
           this.testi_image=element.banner_image
         })
        // this.dataSource=res.data.rows
        console.log('getTeacherbannerData',response=res.data.rows)
      }
    })
  }
  onFileChange(event) {
    // console.log('event',event)
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
	
		this.bannerData.image = event.target.files[0];
    const fr = new FileReader();
    // console.log(" fr", fr.onloadend)
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
      this.image = mainImage;
      console.log("file",file)
		};
    fr.readAsDataURL(file);
  }

  updateBanner(){
    var formData = new FormData();
    formData.append('id', this.teacherBannerId)

    formData.append('heading', this.bannerData.title)
    formData.append('sub_heading', this.bannerData.subtitle)
    if(this.bannerData.image){
      formData.append('banner_image', this.bannerData.image)
    }
    
    this.loader=true;
  //  console.log(this.teacherBannerId)
  //  console.log(this.bannerData.title)
  //  console.log(this.bannerData.subtitle)
  //  console.log(this.bannerData.image)
   this.service.update_banner_section(formData).subscribe(res =>{
    this.loader=false;
    Swal.fire('Success..!', 'Successfully Updated!', 'success')
    this.router.navigate(['/teacher_banner']);
     console.log('res',res)
   })
  }
}
