import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment.prod';
@Component({
  selector: 'app-edit-teacher-how-it-works',
  templateUrl: './edit-teacher-how-it-works.component.html',
  styleUrls: ['./edit-teacher-how-it-works.component.css']
})
export class EditTeacherHowItWorksComponent implements OnInit {
 
  image
  imgUrl
  workData: any = {
    heading:"",
    description:"",
    image:"",
    
  }
  testi_image
  teacherhowId
  loader
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
    this.teacherhowId=this.route.snapshot.params.id
    this.getTeacherHowById(this.route.snapshot.params.id)
  }
  getTeacherHowById(id){
    var howId={
      id:id
    }
   this.service.get_how_it_works_for_teachers_by_id(howId).subscribe(res =>{
     console.log("res",res)
     this.workData.heading=res.data.heading
     this.workData.description=res.data.description
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
		this.workData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  update(){
    var formData= new FormData()
    formData.append('heading',this.workData.heading)
    formData.append('id',this.teacherhowId)
    formData.append('description',this.workData.description)
    if(this.workData.image){
      formData.append('image',this.workData.image)
    }
    this.loader=true;
   this.service.update_how_it_works_for_teachers(formData).subscribe(res =>{
    this.loader=false;
    Swal.fire('Success..!', 'Successfully Updated!', 'success')
   this.router.navigate(['/teacher_how_it_works'])
     console.log('res',res)
   })
  }
}
