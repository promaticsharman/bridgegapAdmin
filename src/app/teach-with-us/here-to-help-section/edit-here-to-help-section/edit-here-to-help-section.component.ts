import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../shared/admin.service';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment.prod';
@Component({
  selector: 'app-edit-here-to-help-section',
  templateUrl: './edit-here-to-help-section.component.html',
  styleUrls: ['./edit-here-to-help-section.component.css']
})
export class EditHereToHelpSectionComponent implements OnInit {
  image
  imgUrl
  helpData: any = {
    heading:"",
    description:"",
    image:"",
    
  }
  id
  testi_image
  loader
  constructor(
    private fb: FormBuilder,
    private service: AdminService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.imgUrl = environment.here_to_help_image
    this.getDAta()
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
		this.helpData.image = event.target.files[0];
		const fr = new FileReader();
		fr.onloadend = (loadEvent) => {
			let mainImage = fr.result;
			this.image = mainImage;
		};
    fr.readAsDataURL(file);
  }
  getDAta(){
    this.service.get_here_to_help_section().subscribe(res =>{
      console.log('get_here_to_help_section',res)
      let response=res.data.rows
      if(response){
        response.forEach(element => {
          this.helpData.heading=element.heading
          this.helpData.description=element.description
          this.testi_image=element.image
          this.id=element.id
        });
      }
    })
  }
  update(){
    var formData=new FormData()
    formData.append('id',this.id)
    formData.append('heading',this.helpData.heading)
    formData.append('description',this.helpData.description)
    if(this.helpData.image){
      formData.append('image',this.helpData.image)
    }
    
    console.log('id',this.id)
    console.log('heading',this.helpData.heading)
    console.log('description',this.helpData.description)
    console.log('image',this.helpData.image)
    this.loader=true
    this.service.update_teach_with_us_content(formData).subscribe(res =>{
      console.log('reas',res)
      this.loader=false
      Swal.fire('Success..!', 'Successfully Updated!', 'success')
      this.router.navigate(['/teacher_here_to_help']);
    })

  }
}
