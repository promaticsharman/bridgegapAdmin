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
}
