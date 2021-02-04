import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from ".././../environments/environment.prod";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const httpOptions: any = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  apiUrl1= environment.endPoint

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) { }

  setAuthToken(){
    httpOptions : {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
  }

  showAuthError(error){
    console.log(error, "&&&&&&&&&&&&&&&&&&&&&");
      if(error.error && error.error.token_error){
          //alert("Yes token invalid");
          this.toastr.error(error.error.message);
          // return
          localStorage.removeItem('user');
          sessionStorage.removeItem('user');
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
      }else{
          this.toastr.error("Something went wrong here");
          // alert("Somthing went wrong here");
      }
  }

  adminLogin(data): Observable<any> {
    let API_URL = `${this.apiUrl1}admin/login`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res
        })
      )
  }
  addCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createCategory`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res
        })
      )
  }
  allCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAllCategory`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getCategoryById(data): Observable<any> {
   
    let API_URL = `${this.apiUrl1}getCategoryById`;
    return this.httpClient.post(API_URL,data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateCategory`;
    return this.httpClient.post(API_URL,data,httpOptions)
      .pipe(
        map(res => {
          return res
        })
      )
  }
  
  deleteCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteCategory`;
    var obj = {
      category_id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        // catchError(this.error)
      )
  }
  getSubList(data): Observable<any>{
    let API_URL = `${this.apiUrl1}getAllSubCategoryByCategoryId`;
    return this.httpClient.post(API_URL,data,httpOptions)
      .pipe(
        map(res => {
          return res
        })
      )
  }
 
  addSubCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createSubCategory`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getSubCategoryById(data): Observable<any> {
   
    let API_URL = `${this.apiUrl1}getSubCategoryById`;
    return this.httpClient.post(API_URL,data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateSubCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateSubCategory`;
    return this.httpClient.post(API_URL,data,httpOptions)
      .pipe(
        map(res => {
          return res
        })
      )
  }

  // updateCategory(data): Observable<any> {
  //   let API_URL = `${this.apiUrl1}updateCategory`;
  //   return this.httpClient.post(API_URL,data,httpOptions)
  //     .pipe(
  //       map(res => {
  //         return res
  //       })
  //     )
  // }

  deleteSubCategory(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteSubCategory`;
    var obj = {
      sub_category_id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL,obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        // catchError(this.error)
      )
  }
  getallStudent(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAllUsers`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  
  filterCategoryList(data): Observable<any> {
    let API_URL = `${this.apiUrl1}categoryFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  filterSubCategoryList(data): Observable<any> {
    let API_URL = `${this.apiUrl1}subCategoryFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }


  filterStudentList(data): Observable<any> {
    let API_URL = `${this.apiUrl1}userFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }

  allTestimonial(data): Observable<any> {
    let API_URL = `${this.apiUrl1}allTestimonial`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  createTestimonial(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createTestimonial`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  getTestimonialById(data): Observable<any> {
   
    let API_URL = `${this.apiUrl1}getAllTestimonialById`;
    return this.httpClient.post(API_URL,data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  updateTestimonials(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateTestimonial`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  testimonialFilter(data): Observable<any> {
    let API_URL = `${this.apiUrl1}testimonialFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }

  deleteTestimonials(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteTestimonial`;
    var obj = {
      id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  bannerFilter(data): Observable<any> {
    let API_URL = `${this.apiUrl1}bannerFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  createBanner(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createBanner`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  getAllBanner(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAllBanner`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  getBannerById(data): Observable<any> {
   
    let API_URL = `${this.apiUrl1}getBannerById`;
    return this.httpClient.post(API_URL,data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  deleteBanner(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteBanner`;
    var obj = {
      banner_id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  updateBanner(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateBanner`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  bannerActiveAndInactive(data): Observable<any> {
    let API_URL = `${this.apiUrl1}bannerActiveAndInactive`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  saveEngagingAndEfficients(data): Observable<any> {
    let API_URL = `${this.apiUrl1}saveEngagingAndEfficients`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }


  getAllEngagingAndEfficients(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAllEngagingAndEfficients`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  getEngagingAndEfficientsById(data): Observable<any> {
   
    let API_URL = `${this.apiUrl1}getEngagingAndEfficientsById`;
    return this.httpClient.post(API_URL,data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateEngagingAndEfficients(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateEngagingAndEfficients`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  deleteEngagingAndEfficients(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteEngagingAndEfficients`;
    var obj = {
      id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  engagingFilter(data): Observable<any> {
    let API_URL = `${this.apiUrl1}engagingFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  createHowItsWorks(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createHowItsWorks`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getAllHowItsWorks(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAllHowItsWorks`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  deleteHowItsWorks(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteHowItsWorks`;
    var obj = {
      id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  getHowItsWorksById(data): Observable<any> {
   
    let API_URL = `${this.apiUrl1}getHowItsWorksById`;
    return this.httpClient.post(API_URL,data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateHowItsWorks(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateHowItsWorks`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        })
       
      )
  }
  howItsWorksFilter(data): Observable<any> {
    let API_URL = `${this.apiUrl1}howItsWorksFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  showTeacherApplication(data): Observable<any> {
    let API_URL = `${this.apiUrl1}showTeacherApplication`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  applicationApproved(data): Observable<any> {
    let API_URL = `${this.apiUrl1}applicationApproved`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  applicationRejected(data): Observable<any> {
    let API_URL = `${this.apiUrl1}send_reject_email`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  teacherApplicationFilter(data): Observable<any> {
    let API_URL = `${this.apiUrl1}teacherApplicationFilter`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  get_all_courses(data): Observable<any> {
    let API_URL = `${this.apiUrl1}get_all_courses`;
    return this.httpClient.post(API_URL, data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  search_courses(data): Observable<any> {
    let API_URL = `${this.apiUrl1}search_courses`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  change_status(data): Observable<any> {
    let API_URL = `${this.apiUrl1}change_status`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  change_user_status(data): Observable<any> {
    let API_URL = `${this.apiUrl1}change_user_status`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getAllTeachers(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAllTeachers`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  change_teacher_status(data): Observable<any> {
    let API_URL = `${this.apiUrl1}change_user_Teacher_status`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  filterTeacherList(data): Observable<any> {
    let API_URL = `${this.apiUrl1}search_teachers`;
    console.log(API_URL)
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
      )
  }
  getMediaLinks(): Observable<any> {
    let API_URL = `${this.apiUrl1}get_media_links`;
    return this.httpClient.get(API_URL, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateLinks(data): Observable<any> {
    let API_URL = `${this.apiUrl1}social_media_links`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getFaq(data): Observable<any> {
    let API_URL = `${this.apiUrl1}get_faq`;
    return this.httpClient.post(API_URL, data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  addFaq(data): Observable<any> {
    let API_URL = `${this.apiUrl1}add_faq`;
    return this.httpClient.post(API_URL, data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  deleteFaq(data): Observable<any> {
    let API_URL = `${this.apiUrl1}delete_faq`;
    var obj = {
      faq_id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        // catchError(this.error)
      )
  }
  updateFaq(data): Observable<any> {
    let API_URL = `${this.apiUrl1}update_faq`;
    return this.httpClient.post(API_URL, data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }

  getAdminProfile(data): Observable<any> {
    let API_URL = `${this.apiUrl1}getAdminProfile`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateAdminProfile(data): Observable<any> {
    let API_URL = `${this.apiUrl1}editAdminProfile`;
    return this.httpClient.post(API_URL, data, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  deleteCourse(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteCourse`;
    var obj = {
      id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        // catchError(this.error)
      )
  }
  courseRejected(data): Observable<any> {
    let API_URL = `${this.apiUrl1}change_status`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  deleteTeacherApplication(data): Observable<any> {
    let API_URL = `${this.apiUrl1}deleteTeacherApplication`;
    var obj = {
      id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        // catchError(this.error)
      )
  }
  createTermsandCondition(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createTermsConditions`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getTermsandCondition(): Observable<any> {
    let API_URL = `${this.apiUrl1}getTermsConditions`;
    return this.httpClient.post(API_URL, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updateTermsandCondition(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateTermsConditions`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  createPrivacyPolicy(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createPrivacyPolicy`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getPrivacyPolicy(): Observable<any> {
    let API_URL = `${this.apiUrl1}getPrivacyPolicy`;
    return this.httpClient.post(API_URL, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  updatePrivacyPolicy(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updatePrivacyPolicy`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  createCancellationPolicy(data): Observable<any> {
    let API_URL = `${this.apiUrl1}createCancellationPolicy`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  }
  getCancellationPolicy(): Observable<any> {
    let API_URL = `${this.apiUrl1}getCancellationPolicy`;
    return this.httpClient.post(API_URL, httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  } 
  updateCancellationPolicy(data): Observable<any> {
    let API_URL = `${this.apiUrl1}updateCancellationPolicy`;
    return this.httpClient.post(API_URL, data,httpOptions )
      .pipe(
        map(res => {
          return res
        })
      )
  } 
}
