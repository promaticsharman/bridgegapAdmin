(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+I2t":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/add-sub-category/add-sub-category.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2  >\n    ADD SUB CATEGORY</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"addSubCategoryForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <!-- Author Name -->\n\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n\n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"category\" matInput placeholder=\"Sub Category\" [(ngModel)]=\"categoryData.category\" >\n                                    </mat-form-field>\n                                    <div *ngIf=\"addSubCategoryForm.controls['category'].touched &&\n                                     addSubCategoryForm.controls['category'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"addSubCategoryForm.controls['category'].errors &&\n                                      addSubCategoryForm.controls['category'].errors.required\">\n                                        Sub Category  is required.</div>\n                                 </div>\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\" value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!addSubCategoryForm.valid\" (click)=\"SubCategory()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/sub_category/{{categoryId}}\" class=\"btn theme-btn ft\">Back</button>\n                                 <!-- [disabled]=\"!addSubCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "+zzn":
/*!******************************************************************!*\
  !*** ./src/app/testimonials-edit/testimonials-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: TestimonialsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsEditComponent", function() { return TestimonialsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_testimonials_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./testimonials-edit.component.html */ "oazE");
/* harmony import */ var _testimonials_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonials-edit.component.css */ "OU7v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");









var TestimonialsEditComponent = /** @class */ (function () {
    function TestimonialsEditComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.testimonialsData = {
            authorName: "",
            designation: "",
            image: "",
            description: ""
        };
    }
    TestimonialsEditComponent.prototype.ngOnInit = function () {
        this.imgUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].testimonials_img + 'testimonial_images/';
        // 'testimonial/'
        console.log("id", this.route.snapshot.params.testimonial_id);
        this.getTestimonial(this.route.snapshot.params.testimonial_id);
    };
    TestimonialsEditComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.testimonialsData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    TestimonialsEditComponent.prototype.getTestimonial = function (id) {
        var _this = this;
        // console.log("ssdsadsfasdfafsdasf",id)
        console.log(this.testimonialsData);
        var obj = {
            id: id
        };
        this.service.getTestimonialById(obj).subscribe(function (data) {
            console.log("testimonial edit data**", data);
            _this.testimonialsData.authorName = data.data.author_name;
            _this.testimonialsData.designation = data.data.designation;
            _this.testimonialsData.image = data.data.image;
            _this.testi_image = data.data.image;
            _this.testimonialsData.description = data.data.description;
        })
            , function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            };
    };
    TestimonialsEditComponent.prototype.updateTestimonials = function () {
        var _this = this;
        console.log(this.route.snapshot.params.testimonial_id);
        console.log(this.testimonialsData.authorName);
        console.log(this.testimonialsData.designation);
        console.log(this.testimonialsData.image);
        console.log(this.testimonialsData.description);
        var formData = new FormData();
        formData.append('id', this.route.snapshot.params.testimonial_id);
        formData.append("author_name", this.testimonialsData.authorName);
        formData.append("designation", this.testimonialsData.designation);
        formData.append("image", this.testimonialsData.image);
        formData.append("description", this.testimonialsData.description);
        this.service.updateTestimonials(formData).subscribe(function (data) {
            console.log(data, "Testimonials Successfully Updated!");
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            _this.router.navigate(['/testimonials']);
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    TestimonialsEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    TestimonialsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-testimonials-edit',
            template: _raw_loader_testimonials_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_testimonials_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TestimonialsEditComponent);
    return TestimonialsEditComponent;
}());



/***/ }),

/***/ "/A4d":
/*!*******************************************************!*\
  !*** ./src/app/teacher-faq/teacher-faq.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLWZhcS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "/QHs":
/*!**********************************************************!*\
  !*** ./src/app/section-three/section-three.component.ts ***!
  \**********************************************************/
/*! exports provided: SectionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionThreeComponent", function() { return SectionThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-three.component.html */ "f49U");
/* harmony import */ var _section_three_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-three.component.css */ "Yms5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");











var SectionThreeComponent = /** @class */ (function () {
    function SectionThreeComponent(dialog, service, route, toastr) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.imagePath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].how_it_works_img;
        //  imagePath = environment.home_image;
        this.responseData = [];
        this.displayedColumns = ['position', 'image', 'heading', 'description', 'Action'];
    }
    SectionThreeComponent.prototype.ngOnInit = function () {
        this.currentPage = 10;
        // console.log("pagesizeee",this.pageSize)
        this.currentIndex = 0;
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        this.datamodel = {};
        this.workData();
    };
    SectionThreeComponent.prototype.workData = function () {
        var _this = this;
        // this.currentIndex=0
        // this.currentPage=10
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.getAllHowItsWorks(list).subscribe(function (res) {
            console.log("section two data", res);
            if (res) {
                _this.length = res.data.count;
                console.log("****length***", _this.length);
                _this.dataSource = res.data.rows;
                _this.loader = false;
                // this.dataSource.paginator = this.paginator;
                // console.log("datasource", this.dataSource)
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SectionThreeComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    SectionThreeComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        console.log('*******', evt);
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        console.log(this.reqData);
        this.service.getAllHowItsWorks(list).subscribe(function (res) {
            console.log('paginator limit', res);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                if (_this.filterValue) {
                    _this.dataSource.filter = _this.filterValue;
                }
                console.log('dataSource', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SectionThreeComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.howItsWorksFilter(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                    // this.length = res.data.count
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;
                    // this.tableData = data.data;
                    // this.backUpTableData = data.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    SectionThreeComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteHowItsWorks(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'This Record has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'This Record is safe :)', 'error');
            }
        });
    };
    SectionThreeComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }
    ]; };
    SectionThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-section-three',
            template: _raw_loader_section_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_section_three_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])
    ], SectionThreeComponent);
    return SectionThreeComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/promatics/harman/bridgeGapAdmin/src/main.ts */"zUnb");


/***/ }),

/***/ "0I2P":
/*!************************************************************!*\
  !*** ./src/app/section-second/section-second.component.ts ***!
  \************************************************************/
/*! exports provided: SectionSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionSecondComponent", function() { return SectionSecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_second_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-second.component.html */ "xdhd");
/* harmony import */ var _section_second_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-second.component.css */ "FIAw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");











var SectionSecondComponent = /** @class */ (function () {
    function SectionSecondComponent(dialog, service, route, toastr) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.currentPage = 10;
        // console.log("pagesizeee",this.pageSize)
        this.currentIndex = 0;
        this.imagePath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].engaging_image;
        //  imagePath = environment.home_image;
        this.responseData = [];
        this.displayedColumns = ['position', 'image', 'heading', 'description', 'Action'];
    }
    SectionSecondComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.currentPage = 10;
        // console.log("pagesizeee",this.pageSize)
        this.currentIndex = 0;
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        this.datamodel = {};
        this.engagingData();
    };
    SectionSecondComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    SectionSecondComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        console.log('*******', evt);
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        console.log(this.reqData);
        this.service.getAllEngagingAndEfficients(list).subscribe(function (res) {
            console.log('engaging and efficient data*****', res);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                if (_this.filterValue) {
                    _this.dataSource.filter = _this.filterValue;
                }
                console.log('dataSource', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SectionSecondComponent.prototype.engagingData = function () {
        var _this = this;
        // this.currentIndex=0
        // this.currentPage=10
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.getAllEngagingAndEfficients(list).subscribe(function (res) {
            console.log("section engagaing//////////// data", res);
            if (res) {
                _this.length = res.data.count;
                console.log("****length***", _this.length);
                _this.dataSource = res.data.rows;
                _this.loader = false;
                // this.dataSource.paginator = this.paginator;
                // console.log("datasource", this.dataSource)
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SectionSecondComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.engagingFilter(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                    // this.length = res.data.count
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;
                    // this.tableData = data.data;
                    // this.backUpTableData = data.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    SectionSecondComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteEngagingAndEfficients(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'This Record has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'This Record is safe :)', 'error');
            }
        });
    };
    SectionSecondComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }
    ]; };
    SectionSecondComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-section-second',
            template: _raw_loader_section_second_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_section_second_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])
    ], SectionSecondComponent);
    return SectionSecondComponent;
}());



/***/ }),

/***/ "1Blb":
/*!***************************************************************************!*\
  !*** ./src/app/newsletter-management/newsletter-management.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzbGV0dGVyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "1sIi":
/*!*********************************************************************************!*\
  !*** ./src/app/section-three/edit-how-it-works/edit-how-it-works.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoiZWRpdC1ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH0iXX0= */");

/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub-ul{\n    list-style-type: disc;\n    padding-left: 65px;\n    margin-top: 10px;\n    width: 94%;\n}\n.sub-ul li a{\n    font-size:13px;\n    padding: 5px;\n    margin: 10px 0px;\n}\n.sub-ul li{\n    color:#fff;\n}\n.sub-ul{\n    display: none;\n}\n.ds-block{\n    display: block!important;\n}\n.sub-ul li.active-1 a{\n    background-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUMiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi11bHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDk0JTtcbn1cbi5zdWItdWwgbGkgYXtcbiAgICBmb250LXNpemU6MTNweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5zdWItdWwgbGl7XG4gICAgY29sb3I6I2ZmZjtcbn1cbi5zdWItdWx7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5kcy1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XG59XG5cbi5zdWItdWwgbGkuYWN0aXZlLTEgYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59Il19 */");

/***/ }),

/***/ "2U6z":
/*!*********************************************************!*\
  !*** ./src/app/sub-category/sub-category.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".theme-btn{\n    background-color: #142c69;\n    color: #fff;\n  }\n  .hdng{\n    background-color: #6AA524!important;\n    color: #fff;\n    padding-left: 35px;\n    padding-bottom: 52px;\n  }\n  .img-fluid{\n    width: 120px;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzdWItY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MmM2OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuaGRuZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkFBNTI0IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUycHg7XG4gIH1cbiAgLmltZy1mbHVpZHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "2Uv9":
/*!*****************************************************************************!*\
  !*** ./src/app/section-second/create-engaging/create-engaging.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateEngagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEngagingComponent", function() { return CreateEngagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_engaging_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-engaging.component.html */ "Rll3");
/* harmony import */ var _create_engaging_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-engaging.component.css */ "jCzT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var CreateEngagingComponent = /** @class */ (function () {
    function CreateEngagingComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.engagingData = {
            heading: "",
            description: "",
        };
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    CreateEngagingComponent.prototype.ngOnInit = function () {
    };
    CreateEngagingComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.engagingData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    CreateEngagingComponent.prototype.add = function () {
        var _this = this;
        var formData = new FormData();
        // formData.append("author_name",this.bannerData.title);
        // console.log("subtitle",this.bannerData.subtitle);
        // console.log("image", this.bannerData.image)
        // console.log("title", this.bannerData.title)
        formData.append("heading", this.engagingData.heading);
        formData.append("description", this.engagingData.description);
        formData.append("image", this.engagingData.image);
        this.loader = true;
        this.service.saveEngagingAndEfficients(formData).subscribe(function (data) {
            console.log(" Successfully Created!");
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.router.navigate(['/section_2']);
            _this.loader = false;
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    CreateEngagingComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CreateEngagingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-engaging',
            template: _raw_loader_create_engaging_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_create_engaging_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateEngagingComponent);
    return CreateEngagingComponent;
}());



/***/ }),

/***/ "2esG":
/*!*****************************************!*\
  !*** ./src/app/shared/admin.service.ts ***!
  \*****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};
var AdminService = /** @class */ (function () {
    function AdminService(httpClient, toastr, router) {
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.router = router;
        this.apiUrl1 = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endPoint;
    }
    AdminService.prototype.setAuthToken = function () {
        httpOptions: {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            });
        }
    };
    AdminService.prototype.showAuthError = function (error) {
        console.log(error, "&&&&&&&&&&&&&&&&&&&&&");
        if (error.error && error.error.token_error) {
            //alert("Yes token invalid");
            this.toastr.error(error.error.message);
            // return
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        }
        else {
            this.toastr.error("Something went wrong here");
            // alert("Somthing went wrong here");
        }
    };
    AdminService.prototype.adminLogin = function (data) {
        var API_URL = this.apiUrl1 + "admin/login";
        return this.httpClient.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.addCategory = function (data) {
        var API_URL = this.apiUrl1 + "createCategory";
        return this.httpClient.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.allCategory = function (data) {
        var API_URL = this.apiUrl1 + "getAllCategory";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getCategoryById = function (data) {
        var API_URL = this.apiUrl1 + "getCategoryById";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateCategory = function (data) {
        var API_URL = this.apiUrl1 + "updateCategory";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteCategory = function (data) {
        var API_URL = this.apiUrl1 + "deleteCategory";
        var obj = {
            category_id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getSubList = function (data) {
        var API_URL = this.apiUrl1 + "getAllSubCategoryByCategoryId";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.addSubCategory = function (data) {
        var API_URL = this.apiUrl1 + "createSubCategory";
        return this.httpClient.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getSubCategoryById = function (data) {
        var API_URL = this.apiUrl1 + "getSubCategoryById";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateSubCategory = function (data) {
        var API_URL = this.apiUrl1 + "updateSubCategory";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // updateCategory(data): Observable<any> {
    //   let API_URL = `${this.apiUrl1}updateCategory`;
    //   return this.httpClient.post(API_URL,data,httpOptions)
    //     .pipe(
    //       map(res => {
    //         return res
    //       })
    //     )
    // }
    AdminService.prototype.deleteSubCategory = function (data) {
        var API_URL = this.apiUrl1 + "deleteSubCategory";
        var obj = {
            sub_category_id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getallStudent = function (data) {
        var API_URL = this.apiUrl1 + "getAllUsers";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.filterCategoryList = function (data) {
        var API_URL = this.apiUrl1 + "categoryFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.filterSubCategoryList = function (data) {
        var API_URL = this.apiUrl1 + "subCategoryFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.filterStudentList = function (data) {
        var API_URL = this.apiUrl1 + "userFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.allTestimonial = function (data) {
        var API_URL = this.apiUrl1 + "allTestimonial";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.createTestimonial = function (data) {
        var API_URL = this.apiUrl1 + "createTestimonial";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getTestimonialById = function (data) {
        var API_URL = this.apiUrl1 + "getAllTestimonialById";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateTestimonials = function (data) {
        var API_URL = this.apiUrl1 + "updateTestimonial";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.testimonialFilter = function (data) {
        var API_URL = this.apiUrl1 + "testimonialFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteTestimonials = function (data) {
        var API_URL = this.apiUrl1 + "deleteTestimonial";
        var obj = {
            id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.bannerFilter = function (data) {
        var API_URL = this.apiUrl1 + "bannerFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.createBanner = function (data) {
        var API_URL = this.apiUrl1 + "createBanner";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getAllBanner = function (data) {
        var API_URL = this.apiUrl1 + "getAllBanner";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getBannerById = function (data) {
        var API_URL = this.apiUrl1 + "getBannerById";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteBanner = function (data) {
        var API_URL = this.apiUrl1 + "deleteBanner";
        var obj = {
            banner_id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateBanner = function (data) {
        var API_URL = this.apiUrl1 + "updateBanner";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.bannerActiveAndInactive = function (data) {
        var API_URL = this.apiUrl1 + "bannerActiveAndInactive";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.saveEngagingAndEfficients = function (data) {
        var API_URL = this.apiUrl1 + "saveEngagingAndEfficients";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getAllEngagingAndEfficients = function (data) {
        var API_URL = this.apiUrl1 + "getAllEngagingAndEfficients";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getEngagingAndEfficientsById = function (data) {
        var API_URL = this.apiUrl1 + "getEngagingAndEfficientsById";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateEngagingAndEfficients = function (data) {
        var API_URL = this.apiUrl1 + "updateEngagingAndEfficients";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteEngagingAndEfficients = function (data) {
        var API_URL = this.apiUrl1 + "deleteEngagingAndEfficients";
        var obj = {
            id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.engagingFilter = function (data) {
        var API_URL = this.apiUrl1 + "engagingFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.createHowItsWorks = function (data) {
        var API_URL = this.apiUrl1 + "createHowItsWorks";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getAllHowItsWorks = function (data) {
        var API_URL = this.apiUrl1 + "getAllHowItsWorks";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteHowItsWorks = function (data) {
        var API_URL = this.apiUrl1 + "deleteHowItsWorks";
        var obj = {
            id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getHowItsWorksById = function (data) {
        var API_URL = this.apiUrl1 + "getHowItsWorksById";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateHowItsWorks = function (data) {
        var API_URL = this.apiUrl1 + "updateHowItsWorks";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.howItsWorksFilter = function (data) {
        var API_URL = this.apiUrl1 + "howItsWorksFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.showTeacherApplication = function (data) {
        var API_URL = this.apiUrl1 + "showTeacherApplication";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.applicationApproved = function (data) {
        var API_URL = this.apiUrl1 + "applicationApproved";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.applicationRejected = function (data) {
        var API_URL = this.apiUrl1 + "send_reject_email";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.teacherApplicationFilter = function (data) {
        var API_URL = this.apiUrl1 + "teacherApplicationFilter";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.get_all_courses = function (data) {
        var API_URL = this.apiUrl1 + "get_all_courses";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.search_courses = function (data) {
        var API_URL = this.apiUrl1 + "search_courses";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.change_status = function (data) {
        var API_URL = this.apiUrl1 + "change_status";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.change_user_status = function (data) {
        var API_URL = this.apiUrl1 + "change_user_status";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getAllTeachers = function (data) {
        var API_URL = this.apiUrl1 + "getAllTeachers";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.change_teacher_status = function (data) {
        var API_URL = this.apiUrl1 + "change_user_Teacher_status";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.filterTeacherList = function (data) {
        var API_URL = this.apiUrl1 + "search_teachers";
        console.log(API_URL);
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getMediaLinks = function () {
        var API_URL = this.apiUrl1 + "get_media_links";
        return this.httpClient.get(API_URL, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateLinks = function (data) {
        var API_URL = this.apiUrl1 + "social_media_links";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getFaq = function (data) {
        var API_URL = this.apiUrl1 + "get_faq";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.addFaq = function (data) {
        var API_URL = this.apiUrl1 + "add_faq";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteFaq = function (data) {
        var API_URL = this.apiUrl1 + "delete_faq";
        var obj = {
            faq_id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateFaq = function (data) {
        var API_URL = this.apiUrl1 + "update_faq";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getAdminProfile = function (data) {
        var API_URL = this.apiUrl1 + "getAdminProfile";
        return this.httpClient.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.updateAdminProfile = function (data) {
        var API_URL = this.apiUrl1 + "editAdminProfile";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteCourse = function (data) {
        var API_URL = this.apiUrl1 + "deleteCourse";
        var obj = {
            id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.courseRejected = function (data) {
        var API_URL = this.apiUrl1 + "change_status";
        return this.httpClient.post(API_URL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.deleteTeacherApplication = function (data) {
        var API_URL = this.apiUrl1 + "deleteTeacherApplication";
        var obj = {
            id: data
        };
        console.log(API_URL);
        return this.httpClient.post(API_URL, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "3/hr":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-faq/edit-teacher-faq.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"teacherFaqForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Edit Teacher Faq</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            \n\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Question</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea rows=\"5\" matInput  formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                    ></textarea>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Answer</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"10\"formControlName=\"answer\" [(ngModel)]=\"EnterAnswer\"\n                                    ></textarea>\n                                </mat-form-field>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                                <label>Status</label>\n                                 <p class=\"hd_p\">\n                                    {{link}}\n                                 </p>\n                             </div> -->\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"   [disabled]=\"!teacherFaqForm.valid\" (click)=\"updateFaq()\">Update</button>\n                  \n                </div>\n            </form>\n\n</div>\n");

/***/ }),

/***/ "3Xqn":
/*!**************************************************************************************!*\
  !*** ./src/app/teacher-management/view-teacher-list/view-teacher-list.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n.vid_wrap iframe{\n        width: 100%;\n        height: 270px;\n        margin-bottom: 30px;\n    }\nlabel{\n        font-size: 18px;\n        color:#000;\n    }\n.hd_p{\n        color: #949494;\n        padding-bottom: 10px;\n       font-size: 14px;\n       \n        max-height: 100%;\n    }\n.card{\n        padding: 0px 4em!important;\n    }\n.hddr{\n        background: #6aa524;\n        color: #fff;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdGVhY2hlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0E7UUFDSSxjQUFjO1FBQ2Qsb0JBQW9CO09BQ3JCLGVBQWU7O1FBRWQsZ0JBQWdCO0lBQ3BCO0FBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2YiLCJmaWxlIjoidmlldy10ZWFjaGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAudmlkX3dyYXAgaWZyYW1le1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG4gICAgLmhkX3B7XG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgICBwYWRkaW5nOiAwcHggNGVtIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhkZHJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH0iXX0= */");

/***/ }),

/***/ "3y3T":
/*!******************************************************************!*\
  !*** ./src/app/category/add-category/add-category.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtRQUNRLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7SUFDbEI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoiYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgIl19 */");

/***/ }),

/***/ "44Ic":
/*!*******************************************************************!*\
  !*** ./src/app/general-faq/add-gen-faq/add-gen-faq.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1nZW4tZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsY0FBYztJQUNsQjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJhZGQtZ2VuLWZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YWE1MjQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4uZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHNwYW4ubWF0X2ltYWcge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmlucHRfaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgcmlnaHQ6IC0xM3B4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmFhNTI0O1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLm1hdF9pbWFnIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEtZWRpdHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogOXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgICJdfQ== */");

/***/ }),

/***/ "4Y5O":
/*!*******************************************************************************!*\
  !*** ./src/app/sub-category/edit-sub-category/edit-sub-category.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubCategoryComponent", function() { return EditSubCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-sub-category.component.html */ "JrXK");
/* harmony import */ var _edit_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-sub-category.component.css */ "JreF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");









var EditSubCategoryComponent = /** @class */ (function () {
    function EditSubCategoryComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.categoryData = {
            category: "",
            image: "",
        };
        this.editCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    EditSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('iddddddd***', this.route.snapshot.params.subCatId);
        this.imgUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].subCategory_images + 'sub_category_images/';
        this.catId = this.route.snapshot.params.catId;
        var id = this.route.snapshot.params.subCatId;
        var obj = {
            sub_category_id: id
        };
        // console.log("Edit Id: ",)
        this.service.getSubCategoryById(obj).subscribe(function (res) {
            console.log("Data *************************: ", res);
            _this.categoryData.category = res.data.sub_category_name;
            _this.categoryData.image = res.data.image;
            _this.testi_image = res.data.image;
        });
    };
    EditSubCategoryComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.categoryData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    EditSubCategoryComponent.prototype.editCategory = function () {
        var _this = this;
        console.log("this", this.route.snapshot.params);
        var formData = new FormData();
        this.catId = this.route.snapshot.params.catId;
        formData.append('sub_category_name', this.categoryData.category);
        formData.append('image', this.categoryData.image);
        formData.append('category_id', this.route.snapshot.params.catId);
        formData.append('sub_category_id', this.route.snapshot.params.subCatId);
        this.service.updateSubCategory(formData).subscribe(function (data) {
            console.log("Data Successfully Updated!", data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            // this.router.navigate(['/category']);
            _this.router.navigate(["/sub_category/" + _this.catId]);
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    EditSubCategoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EditSubCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-sub-category',
            template: _raw_loader_edit_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditSubCategoryComponent);
    return EditSubCategoryComponent;
}());



/***/ }),

/***/ "4mNI":
/*!******************************************************!*\
  !*** ./src/app/teacher-faq/teacher-faq.component.ts ***!
  \******************************************************/
/*! exports provided: TeacherFaqComponent, AddTeacherFaqDialog, EditTeacherFaqDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherFaqComponent", function() { return TeacherFaqComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherFaqDialog", function() { return AddTeacherFaqDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeacherFaqDialog", function() { return EditTeacherFaqDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_teacher_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./teacher-faq.component.html */ "uyra");
/* harmony import */ var _teacher_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-faq.component.css */ "/A4d");
/* harmony import */ var _raw_loader_add_teacher_faq_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./add-teacher-faq.html */ "Gw6x");
/* harmony import */ var _raw_loader_edit_teacher_faq_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./edit-teacher-faq.html */ "3/hr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);













var TeacherFaqComponent = /** @class */ (function () {
    function TeacherFaqComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.faq = 'teacher_faq';
        this.responseData = [];
        this.displayedColumns = ['position', 'question', 'answer', 'action'];
    }
    TeacherFaqComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.responseData);
        // this.datamodel = {}
        this.teacherFaq();
    };
    TeacherFaqComponent.prototype.teacherFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.loader = true;
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("teacherfaqres*****", res.data);
            if (res) {
                _this.dataSource = res.data;
                _this.loader = false;
                //   this.dataSource=res.data
            }
        });
    };
    TeacherFaqComponent.prototype.addTeacherFaqDialog = function () {
        var _this = this;
        var dialogRefEdit = this.dialog.open(AddTeacherFaqDialog, {
            // height: '350px',
            width: '600px',
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.teacherFaq();
        });
    };
    TeacherFaqComponent.prototype.editDialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditTeacherFaqDialog, {
            // height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.teacherFaq();
        });
    };
    TeacherFaqComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Faq!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteFaq(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Deleted!', 'This Faq has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Cancelled', 'This Faq is safe :)', 'error');
            }
        });
    };
    TeacherFaqComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    TeacherFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-teacher-faq',
            template: _raw_loader_teacher_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_teacher_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], TeacherFaqComponent);
    return TeacherFaqComponent;
}());

///////Add Teacher Faq /////////////////////
var AddTeacherFaqDialog = /** @class */ (function () {
    function AddTeacherFaqDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'teacher_faq';
        this.teacherFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    AddTeacherFaqDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddTeacherFaqDialog.prototype.ngOnInit = function () {
        this.LinkId = this.dialogRef.id;
    };
    AddTeacherFaqDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AddTeacherFaqDialog.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_type: this.faq,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.addFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            //   this.ngOnInit()
        });
    };
    AddTeacherFaqDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    AddTeacherFaqDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'add-teacher-faq-dialog',
            template: _raw_loader_add_teacher_faq_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], AddTeacherFaqDialog);
    return AddTeacherFaqDialog;
}());

//////////Edit teacher faq dialog/////////////////
var EditTeacherFaqDialog = /** @class */ (function () {
    function EditTeacherFaqDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'teacher_faq';
        this.teacherFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            // ({value:'dsfddf', disabled: true})
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    EditTeacherFaqDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditTeacherFaqDialog.prototype.ngOnInit = function () {
        //   this.getLink()
        this.getTeacherFaq();
        this.LinkId = this.dialogRef.id;
    };
    EditTeacherFaqDialog.prototype.getTeacherFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.EnterQuestion = element.question;
                    _this.EnterAnswer = element.answer;
                }
            });
        });
    };
    EditTeacherFaqDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditTeacherFaqDialog.prototype.updateFaq = function () {
        var _this = this;
        var type = {
            faq_id: this.LinkId,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.updateFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            _this.ngOnInit();
        });
    };
    EditTeacherFaqDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    EditTeacherFaqDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'edit-teacher-faq-dialog',
            template: _raw_loader_edit_teacher_faq_html__WEBPACK_IMPORTED_MODULE_4__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], EditTeacherFaqDialog);
    return EditTeacherFaqDialog;
}());



/***/ }),

/***/ "5PtA":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent-faq/edit-parent-faq.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"teacherFaqForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Edit Parent Faq</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            \n\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Question</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput  rows=\"5\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                    ></textarea>\n                                    <!-- cdkTextareaAutosize -->\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Answer</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"10\" formControlName=\"answer\" [(ngModel)]=\"EnterAnswer\"\n                                    ></textarea>\n                                    <!-- cdkTextareaAutosize -->\n                                </mat-form-field>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                                <label>Status</label>\n                                 <p class=\"hd_p\">\n                                    {{link}}\n                                 </p>\n                             </div> -->\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"   [disabled]=\"!teacherFaqForm.valid\" (click)=\"updateFaq()\">Update</button>\n                  \n                </div>\n            </form>\n\n</div>\n");

/***/ }),

/***/ "5fQc":
/*!*********************************************************************!*\
  !*** ./src/app/social-media-links/social-media-links.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtbWVkaWEtbGlua3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "6Cpu":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2  >CATEGORY</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\">\n            <button mat-button class=\"theme-btn\" routerLink=\"/addCategory\" >Add Category</button>\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n            <mat-form-field>\n             <mat-label>Search</mat-label>\n             <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\">\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{(currentIndex) * currentPage + i +1 }} </td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"category\">\n                        <th mat-header-cell *matHeaderCellDef >Category</th>\n                        <!-- class=\"text-center\" -->\n                        <td mat-cell *matCellDef=\"let element\" >{{element.category_name}}</td>\n                        <!-- class=\"text-center\" -->\n                    </ng-container>\n                     \n                    \n                    <ng-container matColumnDef=\"image\" class=\"mat-row\">\n                      <th mat-header-cell *matHeaderCellDef >Image\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\"> <img src=\"{{imagePath}}{{element.image}}\" class=\"img-fluid prfile_img\"> </td>\n\n                    </ng-container>  \n                    <!-- Description -->\n                    <!-- <ng-container matColumnDef=\"description\">\n                        <th mat-header-cell *matHeaderCellDef>Description</th> -->\n                        <!-- <td mat-cell *matCellDef=\"let element\">{{element.description}}</td> -->\n                    <!-- </ng-container> -->\n\n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                        Action\n                    </th>\n                    <td class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                        <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\"\n                            aria-label=\"Example icon-button with a menu\">\n                            <mat-icon>more_vert</mat-icon>\n                        </button> -->\n                        <!-- <mat-menu #menu=\"matMenu\"> -->\n                            <button mat-icon-button routerLink=\"/editCategory/{{element.id}}\" >\n                                <mat-icon >edit</mat-icon>\n                                <!-- Edit -->\n                            </button>\n                            <button mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                                <!-- Delete -->\n                            </button>\n                            <!-- <button mat-icon-button routerLink=\"/sub_category\"> -->\n                              <!-- (click)=\"openSubCategoryDialog()\" -->\n                              <!-- <mat-icon >view_list</mat-icon> -->\n                              <!-- Delete -->\n                           <!-- </button> -->\n                         <!-- </mat-menu> -->\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"subcategory\">\n                  <th mat-header-cell *matHeaderCellDef class=\"text-center\">Sub Category List</th>\n                  <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                    <button mat-icon-button routerLink=\"/sub_category/{{element.id}}\">\n                      <!-- (click)=\"openSubCategoryDialog()\" -->\n                      <mat-icon >view_list</mat-icon>\n                      <!-- Delete -->\n                   </button>\n                  </td>\n                  <!-- {{element.category_name}} -->\n              </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- \n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    \n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n  \n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  \n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div> -->");

/***/ }),

/***/ "6Kw5":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DateAgoPipe = /** @class */ (function () {
    function DateAgoPipe() {
    }
    DateAgoPipe.prototype.transform = function (value, args) {
        if (value) {
            var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            var intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            var counter = void 0;
            for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    };
    DateAgoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateAgo',
            pure: true
        })
    ], DateAgoPipe);
    return DateAgoPipe;
}());



/***/ }),

/***/ "6fx7":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent-faq/add-parent-faq/add-parent-faq.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     ADD PARENT FAQ\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"parentFaqForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" >\n                                    <mat-label>Enter Question</mat-label>\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <textarea matInput rows=\"2\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                        ></textarea>\n    \n                                    </mat-form-field>\n                                    <div *ngIf=\"parentFaqForm.controls['question'].touched &&\n                                     parentFaqForm.controls['question'].invalid\"\n                                     class=\"text-danger\">\n                                   \n                                   <div *ngIf=\"parentFaqForm.controls['question'].errors &&\n                                      parentFaqForm.controls['question'].errors.required\"> \n                                      Question is required.</div>\n                                    </div>\n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-label>Enter Answer</mat-label>\n                                    <editor\n                                    [init]=\"{\n                                        height: 350,\n                                        menubar: false,\n                                        plugins: [\n                                        'advlist autolink lists link image charmap print preview anchor',\n                                        'searchreplace visualblocks code fullscreen',\n                                        'insertdatetime media table paste code help wordcount'\n                                        ],\n                                        toolbar:\n                                        'undo redo | formatselect | bold italic backcolor | \\\n                                        alignleft aligncenter alignright alignjustify | \\\n                                        bullist numlist outdent indent | removeformat | help'\n                                    }\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></editor>\n                                            <div *ngIf=\"parentFaqForm.controls['answer'].touched &&\n                                        parentFaqForm.controls['answer'].invalid\"\n                                        class=\"text-danger\">\n                                    \n                                    <div *ngIf=\"parentFaqForm.controls['answer'].errors &&\n                                        parentFaqForm.controls['answer'].errors.required\"> \n                                        Answer is required.</div>\n                                        </div>\n\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            <br>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!parentFaqForm.valid\" (click)=\"addFaq()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/generalFaq\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "754x":
/*!******************************************************************************!*\
  !*** ./src/app/sub-category/add-sub-category/add-sub-category.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdWItY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJhZGQtc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "7JRj":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-testimonials/add-testimonials.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>add-testimonials works!</p> -->\n<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n   ADD TESTIMONIALS</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form  [formGroup]=\"testimonialForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <!-- Author Name -->\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n\n                                 \n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Author Name\" maxlength=\"60\"\n                                        formControlName=\"authorName\" [(ngModel)]=\"testimonialsData.authorName\"\n                                       >\n                                    </mat-form-field>\n                                    <div *ngIf=\"testimonialForm.controls['authorName'].touched &&\n                                    testimonialForm.controls['authorName'].invalid\"\n                                                class=\"text-danger\">\n                                        <div *ngIf=\"testimonialForm.controls['authorName'].errors &&\n                                        testimonialForm.controls['authorName'].errors.required\">\n                                            Author Name is required.</div>\n                                    </div>\n                                </div>\n\n                             \n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Designation\" maxlength=\"60\" formControlName=\"designation\" [(ngModel)]=\"testimonialsData.designation\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"testimonialForm.controls['designation'].touched &&\n                                    testimonialForm.controls['designation'].invalid\"\n                                                class=\"text-danger\">\n                                        <div *ngIf=\"testimonialForm.controls['designation'].errors &&\n                                        testimonialForm.controls['designation'].errors.required\">\n                                            Designation is required.</div>\n                                    </div>\n\n                                 \n                                </div>\n\n                                <!-- <div class=\"col-md-12\">\n                                    <h1>TinyMCE 5 Angular Demo</h1>\n                                        <editor\n                                        [init]=\"{\n                                            height: 500,\n                                            menubar: false,\n                                            plugins: [\n                                            'advlist autolink lists link image charmap print preview anchor',\n                                            'searchreplace visualblocks code fullscreen',\n                                            'insertdatetime media table paste code help wordcount'\n                                            ],\n                                            toolbar:\n                                            'undo redo | formatselect | bold italic backcolor | \\\n                                            alignleft aligncenter alignright alignjustify | \\\n                                            bullist numlist outdent indent | removeformat | help'\n                                        }\"\n                                        ></editor>\n                                 </div> -->\n\n                             \n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Description\" formControlName=\"description\" maxlength=\"100\" [(ngModel)]=\"testimonialsData.description\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"testimonialForm.controls['description'].touched &&\n                                    testimonialForm.controls['description'].invalid\"\n                                                class=\"text-danger\">\n                                        <div *ngIf=\"testimonialForm.controls['description'].errors &&\n                                        testimonialForm.controls['description'].errors.required\">\n                                            Description is required.</div>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" [disabled]=\"!testimonialForm.valid\" (click)=\"saveTestimonials()\">Submit</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/testimonials\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <!-- <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"updateTestimonials()\">Submit</button>\n                            </div> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "7dfY":
/*!********************************************************!*\
  !*** ./src/app/sub-category/sub-category.component.ts ***!
  \********************************************************/
/*! exports provided: SubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryComponent", function() { return SubCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sub-category.component.html */ "VcCe");
/* harmony import */ var _sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-category.component.css */ "2U6z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");










var SubCategoryComponent = /** @class */ (function () {
    //   
    function SubCategoryComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.currentPage = 10;
        this.currentIndex = 0;
        this.displayedColumns = ['position', 'category', 'image', 'action'];
        this.imagePath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].subCatImg;
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
        this.currentPage = 10;
        // console.log("pagesizeee",this.pageSize)
        this.currentIndex = 0;
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        this.CateID = this.route.snapshot.params.id;
        console.log("*****iddddddddd*****", this.CateID);
        this.datamodel = {};
        this.getSubCatList();
        // this.getAllCategory()
    };
    SubCategoryComponent.prototype.getSubCatList = function () {
        var _this = this;
        var list = {
            category_id: this.CateID,
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.getSubList(list).subscribe(function (res) {
            // console.log('*****getSubCategoryData******',res.data);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                _this.loader = false;
                console.log('responseData ***', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SubCategoryComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.filterSubCategoryList(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    SubCategoryComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    SubCategoryComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        var Cate = this.route.snapshot.params.id;
        console.log('cate id', Cate);
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        var list = {
            category_id: Cate,
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        // console.log(this.reqData)
        this.service.getSubList(list).subscribe(function (res) {
            console.log('paginator limit', res);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                // this.responseData=new MatTableDataSource(res.data);
                console.log('dataSource', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    // openSubCategoryDialog(){
    // 	const dialogRef = this.dialog.open(AddSubCategoryDialog,{
    // 		// height: '330px',
    // 		width: '600px',
    // 		id: this.route.snapshot.params.id
    // 	});
    // 	dialogRef.afterClosed().subscribe(result => {
    // 		console.log('The dialog was closed');
    // 		this.reqData = {}
    // 		this.reqData.offset = 0
    // 	    this.reqData.limit = 10
    // 	    this.dataSource = new MatTableDataSource(this.responseData);
    // 		this.datamodel = {}
    // 		this.getSubCatList()
    // 	});
    // }
    // openEditDialog(id){
    // 	const dialogRefEdit = this.dialog.open(EditSubCategoryDialog,{
    // 		// catId:this.route.snapshot.params.id,
    // 		// height: '350px',
    // 		width: '600px',
    // 		id :<any>{
    // 			id: id,
    // 			cate : this.route.snapshot.params.id
    // 		}
    // 		// catId: this.route.snapshot.params.id
    // 	});
    // 	dialogRefEdit.afterClosed().subscribe(result => {
    // 		console.log('The dialog was closed');	
    // 		this.reqData = {}
    // 	    this.reqData.offset = 0
    // 	    this.reqData.limit = 10
    // 	    this.dataSource = new MatTableDataSource(this.responseData);		    
    // 	    this.datamodel = {}
    // 		this.getSubCatList()
    // 	});
    // }
    SubCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Sub Category!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteSubCategory(id).subscribe(function (data) {
                    console.log('deleted data', data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'This Sub Category has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'This Sub Category is safe :)', 'error');
            }
        });
    };
    SubCategoryComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    SubCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sub-category',
            template: _raw_loader_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], SubCategoryComponent);
    return SubCategoryComponent;
}());

// Add sub-category
// @Component({
// 	selector: 'add-sub-category-dialog',
// 	templateUrl: 'add-sub-category.html',
//   })
//   export class AddSubCategoryDialog {
// 	categoryId;
//     addCategory: any = {
// 		category : "",
// description : ""
// }
// SubCategoryList:any = [];
// constructor(private fb: FormBuilder,
//   public dialogRef: MatDialogRef<AddSubCategoryDialog>, private service: AdminService, private route: ActivatedRoute,
//   ) {}
//   bookCategoryForm = new FormGroup({
// 	bookCategory : new FormControl('', [Validators.required]),
// categoryDescription: new FormControl('', [Validators.required])
//   })
// onNoClick(): void {
//   this.dialogRef.close();
// }
// ngOnInit(): void {
// 	this.categoryId=this.dialogRef.id	
// }
// createCategory(){
// 	var obj={
// 		category_id: this.categoryId,
//         sub_category_name : this.addCategory.category
// }
// console.log('id&category',obj)
// this.service.addSubCategory(obj).subscribe(res => {
//   console.log("Data Successfully Inserted!",res);
//  Swal.fire('Success..!', 'Successfully Created!', 'success')
//  this.dialogRef.close();
// },err => {
//   if(err.status >= 400){
// 	console.log('Invalid Credential!!!');
//   }else{
// 	console.log('Internet Connection Error');
//   }
// })
//alert(this.dialogRef.id);
// console.log("Book : ", this.addBook.bookCategory, " " , this.addBook.frame);
// var formData = new FormData();
// formData.append('book_category_id', this.addBook.bookCategory);
// formData.append('book_link', this.addBook.frame);
// this.service.addBook(formData).subscribe(data => {
//   console.log("Data Successfully Inserted!",data);
//   Swal.fire('Success..!', 'Successfully Created!', 'success')
// },err => {
//   if(err.status >= 400){
// 	console.log('Invalid Credential!!!');
//   }else{
// 	console.log('Internet Connection Error');
//   }
// })
// 	}
// 	closeDialog(){
// 		this.dialogRef.close();
// 	}
// }
// Edit sub category
//  @Component({
// 	selector: 'edit-sub-category-dialog',
// 	templateUrl: 'edit-sub-category.html',
//   })
//   export class EditSubCategoryDialog {
// 	subData
//     addCategory: any = {
// 		  category : ""
// 	  }
// 	constructor(
//     public dialogRef: MatDialogRef<EditSubCategoryDialog>,
//     private service: AdminService,
//     private route: ActivatedRoute,
//     private router: Router
// 	  ) {}
// 	onNoClick(): void {
// 	  this.dialogRef.close();
// 	}
// 	ngOnInit(): void {
// 		this.subData = this.dialogRef.id;
//     var obj = {
//       sub_category_id: this.subData.id
// 	}
// 		this.service.getSubCategoryById(obj).subscribe(res =>{
// 			console.log("Data : ",res);
// 			this.addCategory.category = res.data.sub_category_name
// 		 })
// console.log("SubDtaa: ",this.subData.id);
//  console.log('iddddddddd*****',this.dialogRef.id);
// }
// editCategory(){
// 	let categoryId=parseInt(this.subData.cate)
// 	console.log('checkingcatID:',categoryId);
// 	var obj={
// 		sub_category_id:this.subData.id,
// 		sub_category_name:this.addCategory.category,
// 		category_id: categoryId
// 	}
// 	console.log('dataaa:',obj);
// 	this.service.updateSubCategory(obj).subscribe(data => {
// 	  console.log("Data Successfully Updated!",data);
//   Swal.fire('Success..!', 'Successfully Updated!', 'success')
//   this.router.navigate(['/category']);
//       this.dialogRef.close();
// 		},err => {
// 		  if(err.status >= 400){
// 			console.log('Invalid Credential!!!');
// 		  }else{
// 			console.log('Internet Connection Error');
// 		  }
// 		})
// 	}
// 		closeDialog(){
// 		this.dialogRef.close();
// 	}
// }


/***/ }),

/***/ "9HS8":
/*!********************************************************************!*\
  !*** ./src/app/courses-management/courses-management.component.ts ***!
  \********************************************************************/
/*! exports provided: CoursesManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesManagementComponent", function() { return CoursesManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_courses_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./courses-management.component.html */ "QNiY");
/* harmony import */ var _courses_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-management.component.css */ "aZkB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);










var CoursesManagementComponent = /** @class */ (function () {
    // 'courses_overview',
    // ,'globally_price'
    function CoursesManagementComponent(dialog, service, route, router) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.router = router;
        this.currentPage = 10;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.currentIndex = 0;
        this.limit = 10;
        this.offset = 0;
        this.displayedColumns = ['position', 'course_type', 'course_title', 'teacher_name', 'date', 'status', 'action'];
    }
    CoursesManagementComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.currentPage = 10;
        this.currentIndex = 0;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        // this.dataSource.paginator = this.paginator;
        this.datamodel = {};
        this.length;
        this.getCourseList();
    };
    CoursesManagementComponent.prototype.getCourseList = function () {
        var _this = this;
        var list = {
            limit: this.reqData.limit,
            offset: this.reqData.offset
        };
        this.loader = true;
        this.service.get_all_courses(list).subscribe(function (res) {
            console.log('*****getCoursesrData******', res.data);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                _this.loader = false;
                console.log('responseData ***', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    CoursesManagementComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.search_courses(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    _this.length = res.length;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    CoursesManagementComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    CoursesManagementComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        console.log("evthrm", evt);
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        //   // let Cate=this.route.snapshot.params.id;
        //   // console.log('cate id',Cate);
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        console.log('checking  page Index', this.currentPage);
        console.log('checking current page', evt.pageSize);
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        //   // console.log(this.reqData)
        this.service.get_all_courses(list).subscribe(function (res) {
            console.log('paginator limit', res);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                // this.responseData=new MatTableDataSource(res.data);
                // console.log('dataSource',this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    CoursesManagementComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Course!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteCourse(id).subscribe(function (data) {
                    // console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'This Course has been deleted.', 'success');
                    // this.router.navigate(['/courses'])
                    //  this.ngOnInit();
                    var currentUrl = _this.router.url;
                    console.log('currentUrl', currentUrl);
                    _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                        _this.router.navigate([currentUrl]);
                    });
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'This Course is safe :)', 'error');
            }
        });
    };
    CoursesManagementComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    CoursesManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-courses-management',
            template: _raw_loader_courses_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_courses_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CoursesManagementComponent);
    return CoursesManagementComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AAYs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-second/edit-engaging/edit-engaging.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n   EDIT ENGAGING AND EFFICIENT</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form>\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <!-- Author Name -->\n\n\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Heading\" maxlength=\"50\" [(ngModel)]=\"engagingData.heading\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n            \n                                <!-- Designation -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Description\" maxlength=\"150\" [(ngModel)]=\"engagingData.description\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile value=\"testimonialsData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>                   -->\n                            </div>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"update()\">Update</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/section_2\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "AHzu":
/*!******************************************************************!*\
  !*** ./src/app/general-faq/add-gen-faq/add-gen-faq.component.ts ***!
  \******************************************************************/
/*! exports provided: AddGenFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGenFaqComponent", function() { return AddGenFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_gen_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-gen-faq.component.html */ "qFhu");
/* harmony import */ var _add_gen_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-gen-faq.component.css */ "44Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);









var AddGenFaqComponent = /** @class */ (function () {
    function AddGenFaqComponent(service, route, router, fb) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'general_faq';
        this.genFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AddGenFaqComponent.prototype.ngOnInit = function () {
        this.LinkId = this.route.snapshot.params.id;
    };
    AddGenFaqComponent.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_type: this.faq,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.addFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.router.navigate(['/generalFaq']);
            // this.closeDialog();
            //   this.ngOnInit()
        });
    };
    AddGenFaqComponent.ctorParameters = function () { return [
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddGenFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-gen-faq',
            template: _raw_loader_add_gen_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_gen_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddGenFaqComponent);
    return AddGenFaqComponent;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\">\n        <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n    </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BvXA":
/*!************************************************************************!*\
  !*** ./src/app/parent-faq/add-parent-faq/add-parent-faq.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXJlbnQtZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsY0FBYztJQUNsQjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJhZGQtcGFyZW50LWZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YWE1MjQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4uZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHNwYW4ubWF0X2ltYWcge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmlucHRfaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgcmlnaHQ6IC0xM3B4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmFhNTI0O1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLm1hdF9pbWFnIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEtZWRpdHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogOXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgICJdfQ== */");

/***/ }),

/***/ "CItg":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-applications/view-teacher-application/reject-application.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"rejectForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\">Reason For Rejection</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                \n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                    <mat-label>Message</mat-label>\n                                    <textarea matInput placeholder=\"Message\" formControlName=\"message\" [(ngModel)]=\"message\" ></textarea>\n                                </mat-form-field>\n                                <div *ngIf=\"rejectForm.controls['message'].touched &&\n                                rejectForm.controls['message'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"rejectForm.controls['message'].errors &&\n                                  rejectForm.controls['message'].errors.required\">\n                                  Message is required.</div>\n                              </div>\n                                \n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" [disabled]=\"!rejectForm.valid\" (click)=\"reject('Rejected')\">Reject</button>\n                   \n                </div>\n            </form>\n\n\n\n\n\n\n\n\n\n               \n                <!-- <form [formGroup]=\"rejectForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title ft\">Reason For Rejection</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                               \n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                            <textarea matInput placeholder=\"Message\" formControlName=\"message\" [(ngModel)]=\"message\" ></textarea>\n                                        </mat-form-field>\n                                        <div *ngIf=\"rejectForm.controls['message'].touched &&\n                                        rejectForm.controls['message'].invalid\"\n                                         class=\"text-danger\">\n                                      <div *ngIf=\"rejectForm.controls['message'].errors &&\n                                          rejectForm.controls['message'].errors.required\">\n                                          Message is required.</div>\n                                      </div>\n                                        \n                                            \n                                    </div>\n                               \n                         \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"reject('Decline')\">Reject</button>\n                    </div>\n                </form> -->\n            \n        \n  \n</div>\n");

/***/ }),

/***/ "CNgx":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses-management/view-course-details/view-course-details.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n   COURSE DETAILS </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form >\n                    <!-- [formGroup]=\"applicationForm\" -->\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 \">\n                                    <div class=\"vid_wrap\">\n                                        <label>Course Video</label>\n                                        <iframe class=\"embed-responsive-item\" [src]='video'></iframe>\n                                    </div>\n                                    \n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <div class=\"vid_wrap\">\n                                        <label>Cover Photo</label>\n                                        <img src=\"{{courseImg}}\" class=\"\"> \n                                    </div>\n                                    \n                                </div>\n                \n                               \n                                <div class=\"col-md-6\">\n                                    <label>Teacher Name</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.fullname}}\n                                    </p>\n                                    \n                                </div>\n                \n                                <div class=\"col-md-6\">\n                                    <label>Course Type</label>\n                                    <p class=\"hd_p\">\n                                       {{courseData.course_type}}\n                                    </p>\n                                    \n                                </div>\n                                \n                               \n                                <div class=\"col-md-6\">\n                                    <label>Course Title</label>\n                                    <p class=\"hd_p\">\n                                       {{courseData.course_title}}\n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Category Name</label>\n                                    <p class=\"hd_p\">\n                                       {{courseData.category_name}}\n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Sub Category Name</label>\n                                    <p class=\"hd_p\">\n                                       {{courseData.sub_category_name}}\n                                    </p>\n                                </div>\n                                 \n                                <div class=\"col-md-6\">\n                                    <label>Number Of Weeks</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.num_of_weeks}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Number Of Sessions Weeks</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.num_of_sessions_week}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Number Of Minute Session</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.num_of_minute_session}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                   \n                                    <label>Minimum Age</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.minimum_age}} \n                                    </p>\n                                </div>\n                                \n                                <div class=\"col-sm-6\">\n                                    <label>Maximum Age</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.maximum_age}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Maximum learners</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.maximum_learners}}\n                                    </p>\n                                </div>\n                                    \n                                \n                                <div class=\"col-sm-6\">\n                                    <label>Minimum learners</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.minimum_learners}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Courses Overview</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.courses_overview}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>learning Objectives</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.learning_objectives}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Course Breakup</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.course_breakup}}\n                                    </p>\n                                </div>\n                                <!-- <div class=\"col-sm-12\">\n                                    <label>Course Breakup</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.benefitsOfClass}}\n                                    </p>\n                                </div> -->\n                                <div class=\"col-sm-6\">\n                                    <label>Assignment</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.assignment == 'undefined' ? 'N/A' : courseData.assignment }}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Assessment</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.assessment == 'undefined'  ? 'N/A' : courseData.assessment}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Requirements</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.requirements}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Globally Price</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.globally_price}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>local Price</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.local_price}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <label>Multiple Session Courses</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.multiple_session_courses == 'undefined' ? 'N/A' : courseData.multiple_session_courses }}\n                                    </p>\n                                </div>\n                                <!-- <div class=\"col-sm-6\">\n                                    <label>Save Type</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.save_type}}\n                                    </p>\n                                </div> -->\n                                <!-- <div class=\"col-sm-6\">\n                                    <label>Zoom Class link</label>\n                                    <p class=\"hd_p\">\n                                        {{courseData.zoom_class_link}}\n                                    </p>\n                                </div> -->\n                        \n                               \n                                <div class=\"col-sm-6\">\n                                    <label>Course Date </label>\n                                     <p class=\"hd_p\">\n                                        {{courseData.date | dateAgo}}\n                                     </p>\n                                     <!-- speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK'); -->\n                                 </div>\n                                 <div class=\"col-sm-6\">\n                                    <label>Status</label>\n                                     <p class=\"hd_p\">\n                                        {{courseData.status == 'approved' ? 'Approved' : (courseData.status == 'rejected' ? 'Rejected' : 'Pending')}}\n                                     </p>\n                                     <!-- speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK'); -->\n                                 </div>\n                            </div>\n                           \n                            <div class=\"text-center\" *ngIf=\"courseData.status == 'rejected'\">\n                                <!--  -->\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('approved')\">Approve</button>\n                                <!-- &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('inactive')\" >Inactive</button> -->\n                                <!-- (click)=\"onStatus('Decline')\" -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/courses\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"courseData.status == 'approved'\">\n                               <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"rejectCourse()\"  >Reject</button>\n                               <!-- (click)=\"onStatus('rejected')\" -->\n                                &nbsp;&nbsp;&nbsp; <button mat-raised-button type=\"submit\" routerLink=\"/courses\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"courseData.status == 'pending'\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('approved')\">Approve</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"rejectCourse()\"  >Reject</button>\n                                <!-- (click)=\"onStatus('rejected')\" -->\n                                 &nbsp;&nbsp;&nbsp; <button mat-raised-button type=\"submit\" routerLink=\"/courses\" class=\"btn theme-btn ft\">Back</button>\n                             </div>\n                          </div>\n                         </div>\n               </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "Crkc":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-three/create-how-it-works/create-how-it-works.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n    CREATE HOW IT WORKS</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"createForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n\n\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"heading\" maxlength=\"50\" matInput placeholder=\"Heading\" [(ngModel)]=\"engagingData.heading\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"createForm.controls['heading'].touched &&\n                                     createForm.controls['heading'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"createForm.controls['heading'].errors &&\n                                      createForm.controls['heading'].errors.required\">\n                                         Heading  is required.</div>\n                                 </div>\n                                </div>\n            \n                               \n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"description\" matInput placeholder=\"Description\" maxlength=\"150\" [(ngModel)]=\"engagingData.description\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"createForm.controls['description'].touched &&\n                                    createForm.controls['description'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"createForm.controls['description'].errors &&\n                                     createForm.controls['description'].errors.required\">\n                                         Description is required.</div>\n                                 </div>\n                                </div>\n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input formControlName=\"image\" type=\"file\" #uploadFile value=\"engagingData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!createForm.valid\" (click)=\"add()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/section_3\" class=\"btn theme-btn ft\">Back</button>\n                                <!-- [disabled]=\"!createForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "Cxlq":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2  >STUDENT MANAGEMENT</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div> -->\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">\n                          {{ (currentIndex) * currentPage + i +1 }}\n                          <!-- {{ i + 1 }} -->\n                        </td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef>Name</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef>Email</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n                    </ng-container>\n                    \n                    <ng-container matColumnDef=\"phone\">\n                        <th mat-header-cell *matHeaderCellDef>Phone</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"status\">\n                      <th mat-header-cell *matHeaderCellDef>Status</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.status}}</td>\n                  </ng-container>\n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       View More\n                    </th>\n                    <td class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/student_list/{{element.id}}\">\n                              <!-- /{{}/{{}} -->\n                              <!-- (click)=\"viewDialog(element.id)\" -->\n                                <mat-icon >visibility</mat-icon>\n                            </button>\n                            <!-- <button  mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button> -->\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "D3jF":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-wrap{\r\n    background-color:#5faa00!important;\r\n    height: 100%;\r\n    width:100%;\r\n    position:absolute;\r\n    z-index: 1;\r\n}\r\n.login-wrap .card{\r\n    width: 30%!important;\r\n    margin: 0 auto;\r\n    display: block;\r\n    margin-top:100px;\r\n    padding:2em 5em;\r\n    background-color: #fff;\r\n    box-shadow: 0px 40px 35px -15px rgba(0,0,0)!important;\r\n    -webkit-box-shadow: 0px 40px 35px -15px rgba(0,0,0)!important;\r\n   -moz-box-shadow: 0px 40px 35px -15px rgba(0,0,0)!important;\r\n    border-radius: 8px;}\r\n.card > h4{\r\n    margin-top: 10px;\r\n    margin-bottom: 0px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    color: #2a3e7f;\r\n}\r\n.btn-theme,\r\n.btn-theme:focus,\r\n.btn-theme:hover,\r\n.btn-theme:active{\r\n    background-color: #5faa00;\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n    transition: cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n.form-group input{\r\n    background-color: #fff;\r\n    border-radius: 0px;\r\n    border: transparent;\r\n    border-bottom: solid grey;\r\n    box-shadow:none;\r\n    padding-left: 0px;\r\n    font-size: 14px;\r\n}\r\n.form-group input:focus{\r\n    border-bottom: solid #5faa00;\r\n    box-shadow:none;\r\n}\r\n.card label {\r\n    font-size: 0.8571em;\r\n    margin-bottom: 0px;\r\n    color: #000000;\r\n    font-size: 14px;\r\n}\r\ninput:-internal-autofill-selected {\r\n    -webkit-appearance: menulist-button;\r\n       -moz-appearance: menulist-button;\r\n            appearance: menulist-button;\r\n    background-color:#fff !important;\r\n    background-image: none !important;\r\n    color: -internal-light-dark(black, white) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxREFBcUQ7SUFDckQsNkRBQTZEO0dBQzlELDBEQUEwRDtJQUN6RCxrQkFBa0IsQ0FBQztBQUV2QjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7Ozs7SUFJSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBMkI7T0FBM0IsZ0NBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJhZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ZmFhMDAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ubG9naW4td3JhcCAuY2FyZHtcclxuICAgIHdpZHRoOiAzMCUhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICBwYWRkaW5nOjJlbSA1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDQwcHggMzVweCAtMTVweCByZ2JhKDAsMCwwKSFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0MHB4IDM1cHggLTE1cHggcmdiYSgwLDAsMCkhaW1wb3J0YW50O1xyXG4gICAtbW96LWJveC1zaGFkb3c6IDBweCA0MHB4IDM1cHggLTE1cHggcmdiYSgwLDAsMCkhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O31cclxuXHJcbi5jYXJkID4gaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzJhM2U3ZjtcclxufVxyXG4uYnRuLXRoZW1lLFxyXG4uYnRuLXRoZW1lOmZvY3VzLFxyXG4uYnRuLXRoZW1lOmhvdmVyLFxyXG4uYnRuLXRoZW1lOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmFhMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuLmZvcm0tZ3JvdXAgaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGdyZXk7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICM1ZmFhMDA7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuXHJcbi5jYXJkIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NTcxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pbnB1dDotaW50ZXJuYWwtYXV0b2ZpbGwtc2VsZWN0ZWQge1xyXG4gICAgYXBwZWFyYW5jZTogbWVudWxpc3QtYnV0dG9uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmsoYmxhY2ssIHdoaXRlKSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "DUgg":
/*!**********************************************************!*\
  !*** ./src/app/section-first/section-first.component.ts ***!
  \**********************************************************/
/*! exports provided: SectionFirstComponent, EditDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionFirstComponent", function() { return SectionFirstComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function() { return EditDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_first_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-first.component.html */ "RWIy");
/* harmony import */ var _section_first_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-first.component.css */ "R+wO");
/* harmony import */ var _raw_loader_edit_category_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./edit-category.html */ "KJiH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");














var SectionFirstComponent = /** @class */ (function () {
    function SectionFirstComponent(dialog, service, route, toastr) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.imagePath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].home_image;
        //  imagePath = environment.home_image;
        this.responseData = [];
        this.myFlagForSlideToggle = true;
        this.currentIndex = 0;
        this.currentPage = 10;
        this.displayedColumns = ['position', 'title', 'subtitle', 'image', 'status', 'Action'];
    }
    SectionFirstComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.responseData);
        this.datamodel = {};
        this.getbannerData();
    };
    SectionFirstComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    SectionFirstComponent.prototype.getbannerData = function () {
        var _this = this;
        this.currentIndex = 0;
        this.currentPage = 10;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.getAllBanner(list).subscribe(function (res) {
            console.log("section one data", res);
            if (res) {
                _this.length = res.data.count;
                console.log("****length***", _this.length);
                _this.dataSource = res.data.rows;
                _this.dataSource.paginator = _this.paginator;
                // console.log("datasource", this.dataSource)
                _this.loader = false;
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SectionFirstComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.bannerFilter(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                    // this.length = res.data.count
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;
                    // this.tableData = data.data;
                    // this.backUpTableData = data.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    SectionFirstComponent.prototype.deletebanner = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteBanner(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Deleted!', 'This Record has been deleted.', 'success');
                    var list = {
                        offset: _this.reqData.offset,
                        limit: _this.reqData.limit
                    };
                    _this.service.getAllBanner(list).subscribe(function (res) {
                        if (res) {
                            _this.length = res.data.count;
                            console.log("****length***", _this.length);
                            _this.dataSource = res.data.rows;
                            _this.dataSource.paginator = _this.paginator;
                        }
                    });
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Cancelled', 'This Record is safe :)', 'error');
            }
        });
    };
    SectionFirstComponent.prototype.openEditDialog = function () {
        var dialogRef = this.dialog.open(EditDialog, {
            // height: '600px!important',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            //   this.reqData.offset = 0
            //   this.reqData.limit = 10
            //   this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            // this.getStudentList()
        });
    };
    SectionFirstComponent.prototype.statusID = function (id) {
        console.log("valueeeeeeeeee", this.myFlagForSlideToggle);
        this.statusID = id;
        console.log('iddddddddddddddddd', id);
    };
    // onStatus(change,id){
    //   console.log("change",change)
    //   console.log("id",id)
    // this.statusType=change
    // console.log("change",this.statusType)
    // var obj={
    //   banner_id:id,
    //   status:change
    // }
    // this.service.bannerActiveAndInactive(obj).subscribe(res=>{
    //   this.toastr.success("Status changed successfully");
    //   console.log(res)
    // })
    // }
    SectionFirstComponent.prototype.onChange = function (evt, id) {
        var _this = this;
        console.log("eeee", evt);
        console.log("evt***", evt.checked);
        console.log("id***", id);
        var statusType;
        if (evt.checked == true) {
            statusType = "active";
        }
        else {
            statusType = "inactive";
        }
        console.log("statusType***", statusType);
        var obj = {
            banner_id: id,
            status: statusType
        };
        this.service.bannerActiveAndInactive(obj).subscribe(function (res) {
            _this.toastr.success("Status changed successfully", 'Success');
            console.log(res);
        });
    };
    SectionFirstComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    SectionFirstComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        console.log('checking  page Index', this.currentPage);
        console.log('checking current page', evt.pageSize);
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        // console.log(this.reqData)
        this.service.getAllBanner(list).subscribe(function (res) {
            // console.log('paginator limit',res)
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                // this.responseData=new MatTableDataSource(res.data);
                // console.log('dataSource',this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SectionFirstComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }
    ]; };
    SectionFirstComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], { static: true },] }]
    };
    SectionFirstComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-section-first',
            template: _raw_loader_section_first_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_section_first_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]])
    ], SectionFirstComponent);
    return SectionFirstComponent;
}());

/// Edit Home Dialog box
var EditDialog = /** @class */ (function () {
    function EditDialog(fb, dialogRef, service, route, toastr) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.addCategory = {
            name: "",
            email: "",
            phone: "",
            country: "",
            state: "",
            dob: "",
        };
        this.viewDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            content1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
        });
    }
    EditDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDialog.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 30;
        this.getStudentList();
        this.StudentId = this.dialogRef.id;
        // console.log('idddddd', this.StudentId)
    };
    EditDialog.prototype.readURL = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            // this.homeImage = file
            console.log('++++++++++++++++++++++++++++++', file);
            console.log('file ', file.size);
            if (file.size / 10027 / 10027 > 1) {
                this.toastr.error('Image size should not be more than 10MB', 'Success');
                // let snackBarRef = this._snackBar.open('Image size should not be more than 1MB', 'Ok', {
                // 	duration: environment.snackDuration,
                // });
            }
            else {
                this.homeImage = file;
                var reader_1 = new FileReader();
                reader_1.onload = function (e) { return _this.homeImageSrc = reader_1.result; };
                reader_1.onloadend = function (loadEvent) {
                    console.log(reader_1);
                    var mainImage = reader_1.result;
                    // console.log(mainImage)
                    // this.reqData.image.push(fr.result)
                    _this.homeImage = file;
                };
                console.log('this.homeImage+++', this.homeImage);
                reader_1.readAsDataURL(file);
            }
        }
    };
    EditDialog.prototype.getStudentList = function () {
        // var list={
        //   offset:this.reqData.offset,
        //   limit:this.reqData.limit
        // }
        // this.service.getallStudent(list).subscribe(res => {
        //   console.log('*****getStudentData******',res.data);
        //   let response=res.data.rows
        //   if(response){
        //     response.forEach(element => {
        //     let matchId=element.id
        //       if(matchId == this.StudentId ){
        //         this.addCategory.name=element.fullname;
        //         this.addCategory.email=element.email;
        //         this.addCategory.phone=element.phone;
        //         this.addCategory.country=element.country;
        //         this.addCategory.state=element.state;
        //         this.addCategory.dob=element.date_of_birth;
        //       }
        //     });
        //     }
        // })
    };
    EditDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditDialog.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }
    ]; };
    EditDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'edit-category-dialog',
            template: _raw_loader_edit_category_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]])
    ], EditDialog);
    return EditDialog;
}());



/***/ }),

/***/ "E9OQ":
/*!************************************************************************************!*\
  !*** ./src/app/section-three/create-how-it-works/create-how-it-works.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateHowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHowItWorksComponent", function() { return CreateHowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-how-it-works.component.html */ "Crkc");
/* harmony import */ var _create_how_it_works_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-how-it-works.component.css */ "c4Oj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var CreateHowItWorksComponent = /** @class */ (function () {
    function CreateHowItWorksComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.engagingData = {
            heading: "",
            description: "",
        };
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    CreateHowItWorksComponent.prototype.ngOnInit = function () {
    };
    CreateHowItWorksComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.engagingData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    CreateHowItWorksComponent.prototype.add = function () {
        var _this = this;
        var formData = new FormData();
        // formData.append("author_name",this.bannerData.title);
        // console.log("subtitle",this.bannerData.subtitle);
        // console.log("image", this.bannerData.image)
        // console.log("title", this.bannerData.title)
        formData.append("heading", this.engagingData.heading);
        formData.append("description", this.engagingData.description);
        formData.append("image", this.engagingData.image);
        this.loader = true;
        this.service.createHowItsWorks(formData).subscribe(function (data) {
            console.log(" Successfully Created!");
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.router.navigate(['/section_3']);
            _this.loader = false;
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    CreateHowItWorksComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CreateHowItWorksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-how-it-works',
            template: _raw_loader_create_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_create_how_it_works_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateHowItWorksComponent);
    return CreateHowItWorksComponent;
}());



/***/ }),

/***/ "EMSy":
/*!**********************************************************************************!*\
  !*** ./src/app/user-list/view-student-details/view-student-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewStudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStudentDetailsComponent", function() { return ViewStudentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_student_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-student-details.component.html */ "w6ZX");
/* harmony import */ var _view_student_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-student-details.component.css */ "EpiV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);









var ViewStudentDetailsComponent = /** @class */ (function () {
    function ViewStudentDetailsComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.studentData = {
            name: "",
            email: "",
            phone: "",
            country: "",
            state: "",
            dob: "",
            fb: "",
            google: "",
            status: "",
            type: ""
            // description : ""
        };
    }
    ViewStudentDetailsComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 3000;
        this.getStudentList();
        this.StudentId = this.route.snapshot.params.stdId;
    };
    ViewStudentDetailsComponent.prototype.getStudentList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.getallStudent(list).subscribe(function (res) {
            console.log('*****getStudentData******', res.data);
            var response = res.data.rows;
            if (response) {
                response.forEach(function (element) {
                    var matchId = element.id;
                    if (matchId == _this.StudentId) {
                        _this.studentData.name = element.fullname;
                        _this.studentData.email = element.email;
                        _this.studentData.phone = element.phone;
                        _this.studentData.country = element.country;
                        _this.studentData.state = element.state;
                        console.log("studentDAta state", _this.studentData.state);
                        _this.studentData.dob = element.date_of_birth;
                        _this.studentData.fb = element.facebook_id;
                        _this.studentData.google = element.google_id;
                        _this.studentData.type = element.user_type;
                        _this.studentData.status = element.status;
                    }
                });
            }
        });
    };
    ViewStudentDetailsComponent.prototype.onStatus = function (evt) {
        var _this = this;
        var obj = {
            user_id: this.StudentId,
            status: evt
        };
        // console.log("obj",obj)
        // this.loader=true;
        this.service.change_user_status(obj).subscribe(function (res) {
            console.log("res*****", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Changed!', 'success');
            _this.router.navigate(['/student_list']);
            // this.ngOnInit();
            // this.loader = false
        });
    };
    ViewStudentDetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ViewStudentDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view-student-details',
            template: _raw_loader_view_student_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_view_student_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ViewStudentDetailsComponent);
    return ViewStudentDetailsComponent;
}());



/***/ }),

/***/ "EO2G":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent-faq/parent-faq.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >PARENT FAQ</h2>\n </div>\n <div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" routerLink=\"/addParentFaq\" >Add Parent Faq</button>\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <!-- <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field> -->\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"question\">\n                        <th width=\"300px\" class=\"text-center\" mat-header-cell *matHeaderCellDef>Questions</th>\n                        <td width=\"300px\" class=\"text-center  ellipsis \" mat-cell *matCellDef=\"let element\">\n                          <div class=\"babu text-center\">\n                            <p>\n                              {{element.question}}\n                            </p>\n                          </div></td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"answer\">\n                        <th width=\"350px\" class=\"text-center\" mat-header-cell *matHeaderCellDef>Answers</th>\n                        <td width=\"350px\" class=\"text-center\" mat-cell *matCellDef=\"let element\">\n                          <div class=\"babu text-center\" [innerHtml]=\"element.answer\">\n                            \n                          </div></td>\n                    </ng-container>\n                    \n                   \n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th width=\"150px\" mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       Action\n                    </th>\n                    <td width=\"150px\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/editParentFaq/{{element.id}}\">\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            <button  mat-icon-button (click)=\"delete(element.id)\">\n                              <mat-icon >delete</mat-icon>\n                          </button>\n                            \n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <!-- <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div> -->\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "EpiV":
/*!***********************************************************************************!*\
  !*** ./src/app/user-list/view-student-details/view-student-details.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n.vid_wrap iframe{\n        width: 100%;\n        height: 270px;\n        margin-bottom: 30px;\n    }\nlabel{\n        font-size: 18px;\n        color:#000;\n    }\n.hd_p{\n        color: #949494;\n        padding-bottom: 10px;\n       font-size: 14px;\n       \n        max-height: 100%;\n    }\n.card{\n        padding: 0px 4em!important;\n    }\n.hddr{\n        background: #6aa524;\n        color: #fff;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctc3R1ZGVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0E7UUFDSSxjQUFjO1FBQ2Qsb0JBQW9CO09BQ3JCLGVBQWU7O1FBRWQsZ0JBQWdCO0lBQ3BCO0FBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2YiLCJmaWxlIjoidmlldy1zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAudmlkX3dyYXAgaWZyYW1le1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG4gICAgLmhkX3B7XG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgICBwYWRkaW5nOiAwcHggNGVtIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhkZHJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH0iXX0= */");

/***/ }),

/***/ "Eyal":
/*!********************************************************************!*\
  !*** ./src/app/general-faq/edit-gen-faq/edit-gen-faq.component.ts ***!
  \********************************************************************/
/*! exports provided: EditGenFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGenFaqComponent", function() { return EditGenFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_gen_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-gen-faq.component.html */ "GAcp");
/* harmony import */ var _edit_gen_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-gen-faq.component.css */ "aRL8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);










var EditGenFaqComponent = /** @class */ (function () {
    function EditGenFaqComponent(router, dialog, service, route) {
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.faq = 'general_faq';
        this.genFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            // ({value:'dsfddf', disabled: true})
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
    }
    EditGenFaqComponent.prototype.ngOnInit = function () {
        this.getGenFaq();
        this.LinkId = this.route.snapshot.params.id;
    };
    EditGenFaqComponent.prototype.getGenFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.EnterQuestion = element.question;
                    _this.EnterAnswer = element.answer;
                }
            });
        });
    };
    EditGenFaqComponent.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_id: this.LinkId,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.updateFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.router.navigate(['/teacherFaq']);
            // this.closeDialog();
            // this.ngOnInit()
        });
    };
    EditGenFaqComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditGenFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-gen-faq',
            template: _raw_loader_edit_gen_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_gen_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditGenFaqComponent);
    return EditGenFaqComponent;
}());



/***/ }),

/***/ "FIAw":
/*!*************************************************************!*\
  !*** ./src/app/section-second/section-second.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-fluid{\n    width: 120px;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tc2Vjb25kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzZWN0aW9uLXNlY29uZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "GAcp":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-faq/edit-gen-faq/edit-gen-faq.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     EDIT GEN FAQ\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"genFaqForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" >\n                                    <mat-label>Enter Question</mat-label>\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <textarea matInput rows=\"4\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                        ></textarea>\n    \n                                    </mat-form-field>\n                                    <div *ngIf=\"genFaqForm.controls['question'].touched &&\n                                     genFaqForm.controls['question'].invalid\"\n                                     class=\"text-danger\">\n                                   \n                                   <div *ngIf=\"genFaqForm.controls['question'].errors &&\n                                      genFaqForm.controls['question'].errors.required\"> \n                                      Question is required.</div>\n                                    </div>\n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-label>Enter Answer</mat-label>\n                                    <br>\n                                    <editor\n                                    [init]=\"{\n                                        height: 350,\n                                        menubar: false,\n                                        plugins: [\n                                        'advlist autolink lists link image charmap print preview anchor',\n                                        'searchreplace visualblocks code fullscreen',\n                                        'insertdatetime media table paste code help wordcount'\n                                        ],\n                                        toolbar:\n                                        'undo redo | formatselect | bold italic backcolor | \\\n                                        alignleft aligncenter alignright alignjustify | \\\n                                        bullist numlist outdent indent | removeformat | help'\n                                    }\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></editor>\n                                            <div *ngIf=\"genFaqForm.controls['answer'].touched &&\n                                        genFaqForm.controls['answer'].invalid\"\n                                        class=\"text-danger\">\n                                    \n                                    <div *ngIf=\"genFaqForm.controls['answer'].errors &&\n                                        genFaqForm.controls['answer'].errors.required\"> \n                                        Answer is required.</div>\n                                        </div>\n\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            <br>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!genFaqForm.valid\" (click)=\"addFaq()\">Update</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/generalFaq\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "Ge9A":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hdng{\n    background-color: #6AA524!important;\n    color: #fff;\n    padding-left: 35px;\n    padding-bottom: 52px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhkbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZBQTUyNCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MnB4O1xuICB9Il19 */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Gv57":
/*!***************************************************************************!*\
  !*** ./src/app/teacher-faq/add-teacher-faq/add-teacher-faq.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10ZWFjaGVyLWZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtRQUNRLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7SUFDbEI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoiYWRkLXRlYWNoZXItZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgIl19 */");

/***/ }),

/***/ "Gw6x":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-faq/add-teacher-faq.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"teacherFaqForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Add Teacher Faq</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <!-- <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                <mat-label>Type</mat-label>\n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">                                \n                                    <input matInput  formControlName=\"type\" [(ngModel)]=\"linkType\" >\n                                </mat-form-field> -->\n                                <!-- <div *ngIf=\"teacherFaqForm.controls['type'].touched &&\n                                teacherFaqForm.controls['type'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"teacherFaqForm.controls['type'].errors &&\n                                  teacherFaqForm.controls['type'].errors.required\">\n                                  type is required.</div>\n                              </div> -->\n                                \n                            <!-- </div> -->\n\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Question</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"4\" formControlName=\"question\" [(ngModel)]=\"EnterQuestion\"\n                                    ></textarea>\n\n                                </mat-form-field>\n                                <div *ngIf=\"teacherFaqForm.controls['question'].touched &&\n                                 teacherFaqForm.controls['question'].invalid\"\n                                 class=\"text-danger\">\n                               \n                               <div *ngIf=\"teacherFaqForm.controls['question'].errors &&\n                                  teacherFaqForm.controls['question'].errors.required\"> \n                                  Question is required.</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Answer</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"9\"   formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></textarea>\n                                </mat-form-field>\n                                <div *ngIf=\"teacherFaqForm.controls['answer'].touched &&\n                                 teacherFaqForm.controls['answer'].invalid\"\n                                 class=\"text-danger\">\n                               \n                               <div *ngIf=\"teacherFaqForm.controls['answer'].errors &&\n                                  teacherFaqForm.controls['answer'].errors.required\"> \n                                  Answer is required.</div>\n                                </div>\n                            </div>\n                          \n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"   [disabled]=\"!teacherFaqForm.valid\" (click)=\"addFaq()\">Add</button>\n                  \n                </div>\n            </form>\n\n</div>\n");

/***/ }),

/***/ "HzSU":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newsletter-management/newsletter-management.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >NEWSLETTER MANAGEMENT</h2>\n </div>");

/***/ }),

/***/ "I0SY":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "IWlm":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-banner/create-banner.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n  ADD HOME BANNER\n    </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"bannerForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n\n\n\n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"title\" matInput placeholder=\"Title\" maxlength=\"50\" [(ngModel)]=\"bannerData.title\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"bannerForm.controls['title'].touched &&\n                                     bannerForm.controls['title'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"bannerForm.controls['title'].errors &&\n                                      bannerForm.controls['title'].errors.required\">\n                                         Title  is required.</div>\n                                 </div>\n                                </div>\n            \n                                <!-- Designation -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"subtitle\" matInput placeholder=\"Sub Title\" maxlength=\"50\" [(ngModel)]=\"bannerData.subtitle\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"bannerForm.controls['subtitle'].touched &&\n                                    bannerForm.controls['subtitle'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"bannerForm.controls['subtitle'].errors &&\n                                     bannerForm.controls['subtitle'].errors.required\">\n                                         Sub title is required.</div>\n                                 </div>\n                                </div>\n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" formControlName=\"image\" #uploadFile value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!bannerForm.valid\" (click)=\"addBanner()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/section_1\" class=\"btn theme-btn ft\">Back</button>\n                                <!-- [disabled]=\"!bannerForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "Icj5":
/*!******************************************************************************************!*\
  !*** ./src/app/courses-management/view-course-details/view-course-details.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n.vid_wrap iframe{\n        width: 100%;\n        height: 270px;\n        margin-bottom: 30px;\n    }\n.vid_wrap img{\n        width: 100%;\n        border-radius: 0.1875rem;\n        height: 270px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border: 1px solid #e2e2e2;\n        }\nlabel{\n        font-size: 18px;\n        color:#000;\n    }\n.hd_p{\n        color: #949494;\n        padding-bottom: 10px;\n       font-size: 14px;\n       \n        max-height: 100%;\n    }\n.card{\n        padding: 0px 4em!important;\n    }\n.hddr{\n        background: #6aa524;\n        color: #fff;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctY291cnNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLG9CQUFpQjtXQUFqQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCO0FBQ0o7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0E7UUFDSSxjQUFjO1FBQ2Qsb0JBQW9CO09BQ3JCLGVBQWU7O1FBRWQsZ0JBQWdCO0lBQ3BCO0FBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2YiLCJmaWxlIjoidmlldy1jb3Vyc2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YWE1MjQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4uZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHNwYW4ubWF0X2ltYWcge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmlucHRfaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgcmlnaHQ6IC0xM3B4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmFhNTI0O1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLm1hdF9pbWFnIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEtZWRpdHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogOXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC52aWRfd3JhcCBpZnJhbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAudmlkX3dyYXAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICAgICAgfVxuICAgIGxhYmVse1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiMwMDA7XG4gICAgfVxuICAgIC5oZF9we1xuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgIFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgcGFkZGluZzogMHB4IDRlbSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5oZGRye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmFhNTI0O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9Il19 */");

/***/ }),

/***/ "JrXK":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/edit-sub-category/edit-sub-category.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2  >\n    <a routerLink=\"/sub_category/{{catId}}\" class=\"cal-back\">\n        <i class=\"fa fa-chevron-left\"></i>\n    </a>EDIT SUB CATEGORY</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"editCategoryForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <!-- Author Name -->\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n\n\n\n\n\n\n\n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"category\" matInput placeholder=\"Category\" [(ngModel)]=\"categoryData.category\" >\n                                    </mat-form-field>\n                                    <div *ngIf=\"editCategoryForm.controls['category'].touched &&\n                                     editCategoryForm.controls['category'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"editCategoryForm.controls['category'].errors &&\n                                      editCategoryForm.controls['category'].errors.required\">\n                                        Sub Category  is required.</div>\n                                 </div>\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!editCategoryForm.valid\" (click)=\"editCategory()\">Update</button>\n                                <!-- [disabled]=\"!editCategoryForm.valid\"  -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/sub_category/{{catId}}\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "JreF":
/*!********************************************************************************!*\
  !*** ./src/app/sub-category/edit-sub-category/edit-sub-category.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoiZWRpdC1zdWItY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH0iXX0= */");

/***/ }),

/***/ "K/lK":
/*!*********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ellipsis {\n    max-width: 40px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVsbGlwc2lzIHtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */");

/***/ }),

/***/ "KBt+":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-applications/teacher-applications.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >TEACHER APPLICATIONS</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div> -->\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">\n                          {{ (currentIndex) * currentPage + i +1 }}\n                          <!-- {{ i + 1 }} -->\n                        </td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"teacher_name\">\n                        <th mat-header-cell *matHeaderCellDef>Name</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.teacher_name}}</td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"email_id\">\n                        <th width=\"200px\" class=\"text-center\" mat-header-cell *matHeaderCellDef>Email</th>\n                        <td width=\"200px\" class=\"text-center\" mat-cell *matCellDef=\"let element\">{{element.email_id}}</td>\n                    </ng-container>\n                    \n                    <!-- <ng-container matColumnDef=\"mobile_number\">\n                        <th mat-header-cell *matHeaderCellDef>Phone</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.mobile_number}}</td>\n                    </ng-container> -->\n\n                    <ng-container matColumnDef=\"date\">\n                        <th width=\"200px\" class=\"text-center\"  mat-header-cell *matHeaderCellDef>Appication Date</th>\n                        <td width=\"200px\" class=\"text-center\" mat-cell *matCellDef=\"let element\">{{element.created_at | dateAgo}}</td>\n                    </ng-container>\n\n\n                    <ng-container matColumnDef=\"application_status\">\n                        <th mat-header-cell *matHeaderCellDef>Status</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.application_status}}</td>\n                    </ng-container>\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th width=\"150px\" class=\"text-center\" mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       View Application\n                    </th>\n                    <td  width=\"150px\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                      <button  mat-icon-button routerLink=\"/viewApplication/{{element.id}}\" >\n                         <mat-icon >visibility</mat-icon>\n                      </button>\n                      <button  mat-icon-button (click)=\"delete(element.id)\">\n                        <mat-icon >delete</mat-icon>\n                     </button>\n                     <!--                         \n                             \n                              <mat-form-field >\n                               \n                                <select (change)=\"onStatus($event.target.value, element.id)\" matNativeControl required>\n                                  <option>Choose an option</option>\n                                  <option value=\"Pending\">Pending</option>\n                                  <option value=\"Approved\" >Approved</option>\n                                  <option value=\"Decline\" >Declined</option>\n                                 \n                                 \n                                </select>\n                              </mat-form-field> -->\n                            <!-- </button> -->\n                       \n                    </td>\n\n\n                    <!-- </td> -->\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "KJiH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-first/edit-category.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .img-fluid {\n\tmax-height: 75px;\n\tmin-height: 75px;\n\tmin-width: 160px;\n\tobject-fit: cover;\n\tmax-width: 160px;\n\tmargin: 10px 0;\n    }\t\n    .img_inpt input{\n\tposition: absolute;\n\tbottom: 7px;\n\tleft: 31px;\n\topacity: 0;\n    }\n    .upload_img {\n\tposition: relative;\n    }\n    .img-fluid {\n\tmax-height: 75px;\n\tmin-height: 75px;\n\tmin-width: 160px;\n\tobject-fit: cover;\n\tmax-width: 160px;\n\tmargin: 10px 0;\n}\n.upload_img {\n\tposition: relative;\n}\n </style>\n\n  <div class=\"main-content\" style=\"position: relative;\">\n                <button mat-icon-button  (click)=\"closeDialog()\"\n                    style=\"position: absolute;\n                    right: -32px;\n                    top: -32px;\n                    transform: scale(0.75);\n                    outline: none;\n                    background-color: #ffffff!important;\n                    color: rgb(0, 0, 0);\n                    border-radius: 0px;\"  >\n                    <!-- style=\"padding-left: 492px;padding-top: 9px;\" -->\n                    <mat-icon >close</mat-icon>\n                </button>\n                   <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n\n                            <h4 class=\"card-title\">Actions</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                          \n                                  <form [formGroup]=\"viewDetailForm\">\n                                        <div clas=\"inpt_form\"> \n                                            <div class=\"row\">\n                                                 <mat-label class=\"col-sm-4\">First Content</mat-label>\n                                                 <div class=\"col-sm-8\">\n                                                    <mat-form-field  class=\"example-full-width\"  >\n                                                      <input matInput placeholder=\"First content\" formControlName=\"content\" [(ngModel)]=\"addCategory.name\">\n                                                    </mat-form-field>\n                                                 </div>\n                                            </div>\n                                        </div>  \n                                        <div clas=\"inpt_form\"> \n                                            <div class=\"row\">\n                                                 <mat-label class=\"col-sm-4\">Second Content</mat-label>\n                                                 <div class=\"col-sm-8\">\n                                                    <mat-form-field  class=\"example-full-width\"  >\n                                                      <input matInput placeholder=\"Second content\" formControlName=\"content1\" [(ngModel)]=\"addCategory.name\">\n                                                    </mat-form-field>\n                                                 </div>\n                                            </div>\n                                        </div>  \n                                        <div class=\"inpt_form\">\n                                            <div class=\"row\">\n                                                <mat-label clasS=\"col-sm-4\">Image</mat-label>\n                                                <div class=\"col-sm-8\">\n                                                    <!-- <mat-form-field class=\"example-form-field\"> -->\n                                                        <img src=\"{{homeImageSrc || 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'}}\" class=\"img-fluid prfile_img\">\n                                                        \n                                                        <div class=\"mt-3\">\n                                                            <button type=\"button\" class=\"btn btn-info upload_img\"  style=\"width: 115px\">Upload Image</button>\n                                                        </div>\n                                                        <span class=\"img_inpt\"><input type=\"file\" (change)=\"readURL($event)\" accept=\".jpeg,.png,.jpg\"></span>\n                                                    <!-- </mat-form-field> -->\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <button mat-raised-button class=\"btn btn-success\" (click)=\"Save()\">Save</button>\n                                  </form>             \n                        </div>  \n                    </div>\n   </div>\n");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-img\">\n          <img src=\"assets/img/logow.png\"/>\n      </div>\n    </a>\n    \n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems let i=index;\" [ngClass]=\"{active: router.url.includes('/sub_category' ) && menuItem.path == '/category' }\" class=\"{{menuItem.class}} nav-item\">\n        <!-- <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems let i=index;\" class=\"{{menuItem.class}} nav-item\"> -->\n            \n            <a class=\"nav-link collapsed\" [routerLink]=\"[menuItem.path]\" data-toggle=\"collapse\" [attr.data-target]=\"'#dfsa' + i\">\n                <i class=\"now-ui-icons {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n            <!-- <div class=\"collapse\" [attr.id]=\"'dfsa' + i\" data-parent=\"#accordionExample{{i}}\">\n                <ul type=\"none\" class=\"iner_ul\">\n                    <li *ngFor=\"let sbcat of menuItem.subcat\" class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"[sbcat.path]\">\n                            <i class=\"material-icons\">{{sbcat.icon}}</i>\n                            <p>{{sbcat.title}}</p>\n                        </a>\n                    </li>\n                </ul>\n            </div> -->\n        </li>\n        <li  routerLinkActive=\"active\"  class=\"nav-item\">\n            <a href=\"javascript:void(0)\" class=\"nav-link \">\n                <i class=\"material-icons\">list</i>\n                <p>User Management</p>\n                \n            </a>\n            <ul class=\"sub-ul\">\n                <li [ngClass]=\"router.url.includes('/student_list') ? 'active-1' : ''\" ><a  [routerLink]=\"['/student_list']\">Student Management</a></li>\n                <li [ngClass]=\"router.url.includes('/teacher_list') ? 'active-1' : ''\" ><a  [routerLink]=\"['/teacher_list']\">Teacher Management</a></li>\n            </ul>\n        </li>\n        <li  routerLinkActive=\"active\"  class=\"nav-item\">\n            <a href=\"javascript:void(0)\" class=\"nav-link\">\n                <i class=\"material-icons\">home</i>\n                <p>Home Management</p>\n                \n            </a>\n            <ul class=\"sub-ul\">\n                <!-- [ngClass]=\"{'font-green':  percent > 50, 'font-orange': percent>40 && percent<=50,'font-red': percent<=40}\" -->\n                <li  [ngClass]=\"router.url.includes('/section_1') ? 'active-1' : ''\"><a [routerLink]=\"['/section_1']\">BANNER MANAGEMENT</a></li>\n                <!-- <li class=\"active-1\"><a [routerLink]=\"['/section_1']\">BANNER MANAGEMENT</a></li> -->\n                <li [ngClass]=\"router.url.includes('/section_2') ? 'active-1' : ''\"><a [routerLink]=\"['/section_2']\"> ENGAGING & EFFICIENT </a></li>\n                <li [ngClass]=\"router.url.includes('/section_3') ? 'active-1' : ''\"><a [routerLink]=\"['/section_3']\">HOW IT WORKS</a></li>\n                <li [ngClass]=\"router.url.includes('/testimonials') ? 'active-1' : ''\"><a [routerLink]=\"['/testimonials']\">Testimonials</a></li>\n            </ul>\n        </li>\n        <!-- <li  routerLinkActive=\"active\"  class=\"nav-item\">\n            <a [routerLink]=\"['/teacherApplication']\">\n                <i class=\"material-icons\">list</i>\n                <p>Teacher Application Management</p>\n                \n            </a>\n            \n        </li> -->\n\n\n        <!-- <li  routerLinkActive=\"active\"  class=\"nav-item\">\n            <a href=\"javascript:void(0)\" class=\"nav-link \">\n                <i class=\"material-icons\">list</i>\n                <p>User Management</p>\n                \n            </a>\n            <ul class=\"sub-ul\">\n                <li [ngClass]=\"router.url.includes('/student_list') ? 'active-1' : ''\" ><a  [routerLink]=\"['/student_list']\">Student Management</a></li>\n                <li [ngClass]=\"router.url.includes('/teacherApplication') ? 'active-1' : ''\" ><a  [routerLink]=\"['/teacherApplication']\">Teacher Management</a></li>\n              -->\n\n\n\n        <li routerLinkActive=\"active\"  class=\"nav-item\">\n            <a href=\"javascript:void(0)\" class=\"nav-link\">\n                <i class=\"material-icons\">settings</i>\n                <p>General Management</p>\n            </a>\n              <ul class=\"sub-ul\">\n               <li  [ngClass]=\"router.url.includes('/contact') ? 'active-1' : ''\"><a [routerLink]=\"['/contact']\">CONTACT US</a></li>\n               <li  [ngClass]=\"router.url.includes('/sociaLinks') ? 'active-1' : ''\"><a [routerLink]=\"['/sociaLinks']\">SOCIAL MEDIA LINKS</a></li>\n             </ul>\n     \n        </li>\n        <li  routerLinkActive=\"active\"  class=\"nav-item\">\n            <a href=\"javascript:void(0)\" class=\"nav-link\">\n                <i class=\"material-icons\">info</i>\n                <p>Faq Management</p>\n            </a>    \n                <ul class=\"sub-ul\">\n                    <li [ngClass]=\"router.url.includes('/generalFaq') ? 'active-1' : ''\"><a [routerLink]=\"['/generalFaq']\">GENERAL FAQ</a></li>\n                    <li [ngClass]=\"router.url.includes('/teacherFaq') ? 'active-1' : ''\"><a [routerLink]=\"['/teacherFaq']\">TEACHER FAQ</a></li>\n                    <li [ngClass]=\"router.url.includes('/parentFaq') ? 'active-1' : ''\"><a [routerLink]=\"['/parentFaq']\">PARENT FAQ</a></li>\n                </ul>\n           \n        </li>\n\n    </ul>\n</div>\n\n<!-- \n<ul class=\"nav\">\n   <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems; let i = index;\" class=\"{{menuItem.class}} nav-item accordion\" id=\"accordionExample{{i}}\">\n       <a class=\"nav-link collapsed\" [routerLink]=\"[menuItem.path]\" data-toggle=\"collapse\" [attr.data-target]=\"'#dfsa' + i\">\n           <i class=\"material-icons\">{{menuItem.icon}}</i>\n           <p>{{menuItem.title}}</p>`\n       </a>\n       <div class=\"collapse\" [attr.id]=\"'dfsa' + i\" data-parent=\"#accordionExample{{i}}\">\n           <ul type=\"none\" class=\"iner_ul\">\n               <li *ngFor=\"let sbcat of menuItem.subcat\" class=\"nav-item\">\n                   <a class=\"nav-link\" [routerLink]=\"[sbcat.path]\">\n                       <i class=\"material-icons\">{{sbcat.icon}}</i>\n                       <p>{{sbcat.title}}</p>\n                   </a>\n               </li>\n           </ul>\n       </div>\n   </li>\n</ul> -->\n\n");

/***/ }),

/***/ "KL40":
/*!****************************************************************!*\
  !*** ./src/app/section-one-edit/section-one-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: SectionOneEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOneEditComponent", function() { return SectionOneEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_one_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-one-edit.component.html */ "YAw6");
/* harmony import */ var _section_one_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-one-edit.component.css */ "VJdo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");









var SectionOneEditComponent = /** @class */ (function () {
    function SectionOneEditComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.bannerData = {
            title: "",
            subtitle: "",
            image: "",
        };
    }
    SectionOneEditComponent.prototype.ngOnInit = function () {
        this.imgUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].banner_img + 'home_banner_images/';
        console.log('iddddd', this.route.snapshot.params.id);
        this.getBannerById(this.route.snapshot.params.id);
    };
    SectionOneEditComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.bannerData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    SectionOneEditComponent.prototype.getBannerById = function (id) {
        var _this = this;
        // console.log(this.bannerData);
        var obj = {
            banner_id: id
        };
        this.service.getBannerById(obj).subscribe(function (data) {
            console.log(" edit data**", data);
            _this.bannerData.title = data.data.heading;
            _this.bannerData.subtitle = data.data.sub_heading;
            _this.bannerData.image = data.data.banner_image;
            _this.testi_image = data.data.banner_image;
            // this.bannerData.description = data.data.description;
        })
            , function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            };
    };
    SectionOneEditComponent.prototype.updateTestimonials = function () {
        var _this = this;
        console.log('id***', this.route.snapshot.params.id);
        console.log('title/', this.bannerData.title);
        console.log('subtitle', this.bannerData.subtitle);
        console.log('image', this.bannerData.image);
        // console.log(this.bannerData.description);
        var formData = new FormData();
        formData.append('banner_id', this.route.snapshot.params.id);
        formData.append("heading", this.bannerData.title);
        formData.append("sub_heading", this.bannerData.subtitle);
        formData.append("banner_image", this.bannerData.image);
        this.service.updateBanner(formData).subscribe(function (data) {
            console.log(data, " Successfully Updated!");
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            _this.router.navigate(['/section_1']);
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    SectionOneEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SectionOneEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-section-one-edit',
            template: _raw_loader_section_one_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_section_one_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SectionOneEditComponent);
    return SectionOneEditComponent;
}());



/***/ }),

/***/ "L30g":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >TESTIMONIALS</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" routerLink=\"/createTestimonials\">Add Testimonials</button>\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n           <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"author_name\">\n                        <th  mat-header-cell *matHeaderCellDef>Name</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.author_name}}</td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"designation\">\n                        <th  width=\"150px\" class=\"\" mat-header-cell *matHeaderCellDef>Designation</th>\n                        <td  width=\"150px\" class=\"\" mat-cell *matCellDef=\"let element\">{{element.designation}}</td>\n                    </ng-container>\n                    \n                    <ng-container matColumnDef=\"description\">\n                        <th class=\"text-center\" mat-header-cell *matHeaderCellDef>Description</th>\n                        <td class=\"ellipsis text-center\" mat-cell *matCellDef=\"let element\">\n                          {{element.description}}\n                        </td>\n                    </ng-container>\n\n<!-- \n                    <ng-container matColumnDef=\"image\">\n                      <th mat-header-cell *matHeaderCellDef>Image</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.image}}</td>\n                   </ng-container> -->\n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th  width=\"150px\" mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       Action\n                    </th>\n                    <td width=\"150px\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/editTestimonials/{{element.id}}\">\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            <button  mat-icon-button (click)=\"deleteTestimonials(element.id)\">\n                              <mat-icon >delete</mat-icon>\n                            </button>\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <!-- <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div> -->\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "LkDY":
/*!*************************************************************************!*\
  !*** ./src/app/teacher-applications/teacher-applications.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".load_er{\n\tposition: fixed;\n\tz-index: 99;\n\tleft: 50%;\n\ttop: 50%;\n\t}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItYXBwbGljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLFNBQVM7Q0FDVCxRQUFRO0NBQ1IiLCJmaWxlIjoidGVhY2hlci1hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkX2Vye1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5O1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR9XG5cbiJdfQ== */");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "NaMH":
/*!*****************************************************************!*\
  !*** ./src/app/category/add-category/add-category.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-category.component.html */ "w966");
/* harmony import */ var _add_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component.css */ "3y3T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.categoryData = {
            category: "",
            image: "",
        };
        this.addCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.categoryData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    AddCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("category_name", this.categoryData.category);
        formData.append("image", this.categoryData.image);
        this.service.addCategory(formData).subscribe(function (res) {
            console.log("*****Data Successfully Inserted!****", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.router.navigate(['/category']);
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    AddCategoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AddCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-category',
            template: _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "NqkC":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-us.component.html */ "wibN");
/* harmony import */ var _contact_us_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.component.css */ "I0SY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.displayedColumns = ['position', 'name', 'email', 'subject', 'message', 'action'];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    ContactUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contact-us',
            template: _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_contact_us_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "OCGH":
/*!*****************************************************************************!*\
  !*** ./src/app/sub-category/add-sub-category/add-sub-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryComponent", function() { return AddSubCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-sub-category.component.html */ "+I2t");
/* harmony import */ var _add_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-sub-category.component.css */ "754x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var AddSubCategoryComponent = /** @class */ (function () {
    function AddSubCategoryComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.categoryData = {
            category: "",
            image: "",
        };
        this.addSubCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AddSubCategoryComponent.prototype.ngOnInit = function () {
        this.categoryId = this.route.snapshot.params.id;
        console.log("new iddddds", this.categoryId);
        // SubCategory
        // this.SubCategory()
    };
    AddSubCategoryComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.categoryData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    AddSubCategoryComponent.prototype.SubCategory = function () {
        var _this = this;
        // var obj={
        //  category_id:this.route.snapshot.params.id,
        //  category_name:this.categoryData.category
        // }
        var formData = new FormData();
        formData.append("sub_category_name", this.categoryData.category);
        formData.append("category_id", this.categoryId);
        formData.append("image", this.categoryData.image);
        // var formData
        this.service.addSubCategory(formData).subscribe(function (res) {
            console.log("Data Successfully Inserted!", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Created!', 'success');
            var route = "/sub_category/" + _this.categoryId;
            _this.router.navigate([route]);
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    AddSubCategoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AddSubCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-sub-category',
            template: _raw_loader_add_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddSubCategoryComponent);
    return AddSubCategoryComponent;
}());



/***/ }),

/***/ "OU7v":
/*!*******************************************************************!*\
  !*** ./src/app/testimonials-edit/testimonials-edit.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO1FBQ1EsZUFBZTtJQUNuQjtBQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoidGVzdGltb25pYWxzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH0iXX0= */");

/***/ }),

/***/ "Ot1x":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent-faq/edit-parent-faq/edit-parent-faq.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     EDIT PARENT FAQ\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"parentFaqForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" >\n                                    <mat-label>Enter Question</mat-label>\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <textarea matInput rows=\"4\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                        ></textarea>\n    \n                                    </mat-form-field>\n                                    <div *ngIf=\"parentFaqForm.controls['question'].touched &&\n                                     parentFaqForm.controls['question'].invalid\"\n                                     class=\"text-danger\">\n                                   \n                                   <div *ngIf=\"parentFaqForm.controls['question'].errors &&\n                                      parentFaqForm.controls['question'].errors.required\"> \n                                      Question is required.</div>\n                                    </div>\n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-label>Enter Answer</mat-label>\n                                    <br>\n                                    <editor\n                                    [init]=\"{\n                                        height: 350,\n                                        menubar: false,\n                                        plugins: [\n                                        'advlist autolink lists link image charmap print preview anchor',\n                                        'searchreplace visualblocks code fullscreen',\n                                        'insertdatetime media table paste code help wordcount'\n                                        ],\n                                        toolbar:\n                                        'undo redo | formatselect | bold italic backcolor | \\\n                                        alignleft aligncenter alignright alignjustify | \\\n                                        bullist numlist outdent indent | removeformat | help'\n                                    }\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></editor>\n                                            <div *ngIf=\"parentFaqForm.controls['answer'].touched &&\n                                        parentFaqForm.controls['answer'].invalid\"\n                                        class=\"text-danger\">\n                                    \n                                    <div *ngIf=\"parentFaqForm.controls['answer'].errors &&\n                                        parentFaqForm.controls['answer'].errors.required\"> \n                                        Answer is required.</div>\n                                        </div>\n\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            <br>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!parentFaqForm.valid\" (click)=\"addFaq()\">Update</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/generalFaq\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; })).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "QNiY":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses-management/courses-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >COURSES MANAGEMENT</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div> -->\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\" >\n                          {{ (currentIndex) * currentPage + i +1 }}\n                          <!-- {{ i + 1 }} -->\n                        </td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"course_type\">\n                        <th mat-header-cell  class=\"text-center\"  *matHeaderCellDef>Course Type</th>\n                        <td mat-cell  class=\"text-center\"  *matCellDef=\"let element\">{{element.course_type}}</td>\n                    </ng-container>\n \n                    <ng-container matColumnDef=\"teacher_name\">\n                        <th mat-header-cell  class=\"text-center\"  *matHeaderCellDef>Teacher Name</th>\n                        <td mat-cell  class=\"text-center\"  *matCellDef=\"let element\">{{element.teacher_data.fullname}}</td>\n                    </ng-container> \n\n                    <ng-container matColumnDef=\"course_title\">\n                        <th mat-header-cell class=\"text-center\" *matHeaderCellDef>Title</th>\n                        <td mat-cell  class=\"text-center\"  *matCellDef=\"let element\" class=\"text-center ellipsis\">{{element.course_title}}</td>\n                    </ng-container> \n\n                    <ng-container matColumnDef=\"date\">\n                        <th mat-header-cell class=\"text-center\" *matHeaderCellDef>Course Date</th>\n                        <td mat-cell class=\"text-center\" *matCellDef=\"let element\">{{element.created_at | dateAgo }}</td>\n                    </ng-container>\n               \n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef>Status</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          {{element.status == 'approved' ? 'Approved' : (element.status == 'rejected' ? 'Rejected' : 'Pending')}}\n                          <!-- {{courseData.status == 'active' ? 'Accepted' : (courseData.status == 'inactive' ? 'Rejected' : 'Pending')}} -->\n                          <!-- <mat-form-field >\n                               \n                            <select (change)=\"onStatus($event.target.value, element.id)\" matNativeControl required> -->\n                              <!-- <option *ngIf=\"element.status == 'active'\" value=\"inactive\">active</option>\n                              <option *ngIf=\"element.status == 'inactive'\" value=\"active\">active</option> -->\n                              <!-- <option value=\"active\">Pending</option>\n                              <option value=\"inactive\" >Approved</option> -->\n                             \n                             \n<!--                              \n                            </select>\n                          </mat-form-field> -->\n                        \n                         \n                        </td>\n                    </ng-container>\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th width=\"150px\" class=\"text-center\" mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       View Course\n                    </th>\n                    <td  width=\"150px\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                      <button  mat-icon-button routerLink=\"/viewCourse/{{element.id}}\" >\n                         <mat-icon >visibility</mat-icon>\n                     </button>\n                     <button  mat-icon-button (click)=\"delete(element.id)\" >\n                      <mat-icon >delete</mat-icon>\n                    </button>\n                        \n                             \n                             \n                            <!-- </button> -->\n                       \n                    </td>\n\n\n                    <!-- </td> -->\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QgpJ":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"login-wrap\">\n    <div class=\"card\">\n        <img src=\"assets/img/logo1.png\">\n        <h4 class=\"text-center\">Login</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" [(ngModel)]=\"loginCredential.username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" [(ngModel)]=\"loginCredential.password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"\">\n                    <button [disabled]=\"loading\" class=\"btn btn-theme\">\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        Login\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n </div>\n\n");

/***/ }),

/***/ "QnXU":
/*!*************************************************************************!*\
  !*** ./src/app/parent-faq/edit-parent-faq/edit-parent-faq.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditParentFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditParentFaqComponent", function() { return EditParentFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_parent_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-parent-faq.component.html */ "Ot1x");
/* harmony import */ var _edit_parent_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-parent-faq.component.css */ "ZLJd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);










var EditParentFaqComponent = /** @class */ (function () {
    function EditParentFaqComponent(router, dialog, service, route) {
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.faq = 'parent_faq';
        this.parentFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            // ({value:'dsfddf', disabled: true})
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
    }
    EditParentFaqComponent.prototype.ngOnInit = function () {
        this.getParentFaq();
        this.LinkId = this.route.snapshot.params.id;
    };
    EditParentFaqComponent.prototype.getParentFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.EnterQuestion = element.question;
                    _this.EnterAnswer = element.answer;
                }
            });
        });
    };
    EditParentFaqComponent.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_id: this.LinkId,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.updateFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.router.navigate(['/parentFaq']);
            // this.closeDialog();
            // this.ngOnInit()
        });
    };
    EditParentFaqComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditParentFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-parent-faq',
            template: _raw_loader_edit_parent_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_parent_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditParentFaqComponent);
    return EditParentFaqComponent;
}());



/***/ }),

/***/ "QqmM":
/*!************************************************************************!*\
  !*** ./src/app/teacher-applications/teacher-applications.component.ts ***!
  \************************************************************************/
/*! exports provided: TeacherApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherApplicationsComponent", function() { return TeacherApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_teacher_applications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./teacher-applications.component.html */ "KBt+");
/* harmony import */ var _teacher_applications_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-applications.component.css */ "LkDY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);










var TeacherApplicationsComponent = /** @class */ (function () {
    // 'mobile_number',
    function TeacherApplicationsComponent(dialog, service, route, router) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.router = router;
        this.currentPage = 10;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.currentIndex = 0;
        this.displayedColumns = ['position', 'teacher_name', 'email_id', 'date', 'application_status', 'action'];
    }
    TeacherApplicationsComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        // this.currentPage=10
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        // this.dataSource.paginator = this.paginator;
        this.datamodel = {};
        this.length;
        this.getTeacherList();
    };
    TeacherApplicationsComponent.prototype.getTeacherList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.showTeacherApplication(list).subscribe(function (res) {
            console.log('*****getTeacherData******2feb', res.data);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                _this.loader = false;
                console.log('responseData ***', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    TeacherApplicationsComponent.prototype.onStatus = function (evt, id) {
        var _this = this;
        console.log("status", evt);
        console.log("id****", id);
        var obj = {
            id: id,
            status: evt
        };
        this.loader = true;
        this.service.applicationApproved(obj).subscribe(function (res) {
            console.log("res*****", res);
            _this.ngOnInit();
            _this.loader = false;
        });
    };
    TeacherApplicationsComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.teacherApplicationFilter(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    TeacherApplicationsComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    TeacherApplicationsComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        //   // let Cate=this.route.snapshot.params.id;
        //   // console.log('cate id',Cate);
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        console.log('checking  page Index', this.currentPage);
        console.log('checking current page', evt.pageSize);
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        //   // console.log(this.reqData)
        this.service.showTeacherApplication(list).subscribe(function (res) {
            // console.log('paginator limit',res)
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                // this.responseData=new MatTableDataSource(res.data);
                // console.log('dataSource',this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    TeacherApplicationsComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Application!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteTeacherApplication(id).subscribe(function (data) {
                    // console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'This Application has been deleted.', 'success');
                    // this.router.navigate(['/courses'])
                    //  this.ngOnInit();
                    var currentUrl = _this.router.url;
                    console.log('currentUrl', currentUrl);
                    _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                        _this.router.navigate([currentUrl]);
                    });
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'This Application is safe :)', 'error');
            }
        });
    };
    TeacherApplicationsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    TeacherApplicationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-teacher-applications',
            template: _raw_loader_teacher_applications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_teacher_applications_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], TeacherApplicationsComponent);
    return TeacherApplicationsComponent;
}());



/***/ }),

/***/ "R+wO":
/*!***********************************************************!*\
  !*** ./src/app/section-first/section-first.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-fluid{\n    width: 120px;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tZmlyc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNlY3Rpb24tZmlyc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctZmx1aWR7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogODBweDtcbn0iXX0= */");

/***/ }),

/***/ "R6xh":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-management/teacher-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >TEACHER MANAGEMENT</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div> -->\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n\n<!-- \n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field> -->\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">\n                          {{ (currentIndex) * currentPage + i +1 }}\n                          <!-- {{ i + 1 }} -->\n                        </td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef>Name</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef>Email</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n                    </ng-container>\n                    \n                    <ng-container matColumnDef=\"phone\">\n                        <th mat-header-cell *matHeaderCellDef>Phone</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"status\">\n                      <th mat-header-cell *matHeaderCellDef>Status</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.status}}</td>\n                  </ng-container>\n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       View More\n                    </th>\n                    <td class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/view_teacher_list/{{element.id}}\">\n                              <!-- (click)=\"viewDialog(element.id)\" -->\n                                <mat-icon >visibility</mat-icon>\n                            </button>\n                            <!-- <button  mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button> -->\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "RHoy":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-faq/add-gen-faq.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"genFaqForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Add Gen Faq</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <!-- <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                <mat-label>Type</mat-label>\n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">                                \n                                    <input matInput  formControlName=\"type\" [(ngModel)]=\"linkType\" >\n                                </mat-form-field> -->\n                                <!-- <div *ngIf=\"genFaqForm.controls['type'].touched &&\n                                genFaqForm.controls['type'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"genFaqForm.controls['type'].errors &&\n                                  genFaqForm.controls['type'].errors.required\">\n                                  type is required.</div>\n                              </div> -->\n                                \n                            <!-- </div> -->\n\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Questions</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"4\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                    ></textarea>\n\n                                </mat-form-field>\n                                <div *ngIf=\"genFaqForm.controls['question'].touched &&\n                                 genFaqForm.controls['question'].invalid\"\n                                 class=\"text-danger\">\n                               \n                               <div *ngIf=\"genFaqForm.controls['question'].errors &&\n                                  genFaqForm.controls['question'].errors.required\"> \n                                  Question is required.</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Answers</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"9\"  formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></textarea>\n                                </mat-form-field>\n                                <div *ngIf=\"genFaqForm.controls['answer'].touched &&\n                                 genFaqForm.controls['answer'].invalid\"\n                                 class=\"text-danger\">\n                               \n                               <div *ngIf=\"genFaqForm.controls['answer'].errors &&\n                                  genFaqForm.controls['answer'].errors.required\"> \n                                  Answer is required.</div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                                <label>Status</label>\n                                 <p class=\"hd_p\">\n                                    {{link}}\n                                 </p>\n                             </div> -->\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"   [disabled]=\"!genFaqForm.valid\" (click)=\"addFaq()\">Add</button>\n                  \n                </div>\n            </form>\n\n\n\n\n\n\n\n\n\n               \n                <!-- <form [formGroup]=\"genFaqForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title ft\">Reason For Rejection</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                               \n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                            <textarea matInput placeholder=\"type\" formControlName=\"type\" [(ngModel)]=\"type\" ></textarea>\n                                        </mat-form-field>\n                                        <div *ngIf=\"genFaqForm.controls['type'].touched &&\n                                        genFaqForm.controls['type'].invalid\"\n                                         class=\"text-danger\">\n                                      <div *ngIf=\"genFaqForm.controls['type'].errors &&\n                                          genFaqForm.controls['type'].errors.required\">\n                                          type is required.</div>\n                                      </div>\n                                        \n                                            \n                                    </div>\n                               \n                         \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"reject('Decline')\">Reject</button>\n                    </div>\n                </form> -->\n            \n        \n  \n</div>\n");

/***/ }),

/***/ "RWIy":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-first/section-first.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n    <h2 >BANNER MANAGEMENT</h2>\n   </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" routerLink=\"/create_banner\">Add</button>       \n          <!-- /edit_section_one -->\n            <!-- create_banner -->\n            <!-- (click)=\"openEditDialog()\" -->\n          </div>\n          <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n        \n     \n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                   \n                    <ng-container matColumnDef=\"position\" class=\"mat-row\">\n                        <th  mat-header-cell *matHeaderCellDef >S.No\n                        </th>\n                        <td  mat-cell *matCellDef=\"let element let i=index\"> {{ (currentIndex) * currentPage + i +1 }} </td>\n\n                    </ng-container>   \n\n                    <ng-container matColumnDef=\"title\" class=\"mat-row\">\n                        <th  class=\"text-center\"  mat-header-cell *matHeaderCellDef >Title\n                        </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.heading}} </td>\n\n                    </ng-container>    \n                    \n                    <ng-container matColumnDef=\"subtitle\" class=\"mat-row\">\n                        <th  width=\"150px\" class=\"text-center\" mat-header-cell *matHeaderCellDef >Sub Title\n                        </th>\n                        <td  width=\"150px\" class=\"text-center\" mat-cell *matCellDef=\"let element\"> {{element.sub_heading}} </td>\n\n                    </ng-container>   \n                    \n                    <ng-container matColumnDef=\"image\" class=\"mat-row\">\n                        <th width=\"150px\" class=\"text-center\"  mat-header-cell *matHeaderCellDef >Image\n                        </th>\n                        <td width=\"150px\" class=\"text-center\"  mat-cell *matCellDef=\"let element\"> <img src=\"{{imagePath}}{{element.banner_image}}\" class=\"img-fluid prfile_img\"> </td>\n\n                    </ng-container>  \n                    \n                      \n                    <ng-container matColumnDef=\"status\" class=\"mat-row\">\n                        <th  width=\"150px\" class=\"text-center\" mat-header-cell *matHeaderCellDef >Status\n                        </th> \n                        <td  width=\"150px\" class=\"text-center\" mat-cell *matCellDef=\"let element\">\n                            <mat-slide-toggle (change)=\"onChange($event,element.id)\" [checked]=\"element.status == 'active' ?  true : false\">\n\n                            </mat-slide-toggle>\n                            <!-- *ngIf=\"element.status == 'active\" -->\n                            <!-- <mat-form-field >\n                               \n                                <select (change)=\"onStatus($event.target.value, element.id)\" matNativeControl required>\n                                  <option >{{element.status}}</option>\n                                  <option value=\"active\" >active</option>\n                                  <option value=\"inactive\" >inactive</option>\n                                 \n                                 \n                                </select>\n                              </mat-form-field> -->\n                            \n                        </td>\n\n                    </ng-container>\n                    <ng-container matColumnDef=\"Action\" class=\"mat-row\">\n                        <th  width=\"150px\" class=\"text-center\" mat-header-cell *matHeaderCellDef > Action </th>\n                        <td  width=\"150px\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/edit_section_one/{{element.id}}\">\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            <button  mat-icon-button (click)=\"deletebanner(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button>\n                        \n                      </td>\n                       \n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n                \n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div class=\"orgNL_page comon_page\"> -->\n    <!-- page class -->\n\n    <!-- <div class=\"card\">\n        <div class=\"card-body\">\n        \n\n            <h2 class=\"card_head\">Home Page First Section </h2>\n            <mat-divider></mat-divider>\n\n            <div class=\"table_db_indi\">\n                <mat-form-field>\n                    <mat-label>Filter</mat-label>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Ex. Name\">\n\n                </mat-form-field> -->\n                <!-- <a routerLink=\"/subscription-packages\"> -->\n                    <!-- <button style=\"float: right;margin-top: 10px;\" mat-raised-button color=\"primary\" (click)=\"add_faq()\">Add</button> -->\n                <!-- </a> -->\n                <!-- <div class=\"onl_tabl\">\n\n\n                    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-table table mat-elevation-z1\"> -->\n\n                        <!--- Note that these columns can be defined in any order.\n                          The actual rendered columns are set as a property on the row definition\" -->\n\n\n\n                        <!-- Name Column -->\n                        <!-- <ng-container matColumnDef=\"image\" class=\"mat-row\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-header-cell\">Image\n                            </th>\n                            <td mat-cell *matCellDef=\"let element\"> <img src=\"{{imagePath}}{{element.image}}\" class=\"img-fluid prfile_img\"> </td>\n\n                        </ng-container> -->\n\n                        \n\n<!--                         \n                        <ng-container matColumnDef=\"Action\" class=\"mat-row\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-header-cell\"> Action </th>\n                            <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                                <button mat-icon-button [matMenuTriggerFor]=\"menu\"\n                                    aria-label=\"Example icon-button with a menu\">\n                                    <mat-icon>more_vert</mat-icon>\n                                </button>\n                                <mat-menu #menu=\"matMenu\">\n                                    <button (click)=\"edit_content(element)\" mat-menu-item>\n                                        <mat-icon>edit</mat-icon>\n                                        <span >Edit</span>\n                                    </button> -->\n\n                                    <!-- <button mat-menu-item (click)=\"delete(element)\">\n                                        <mat-icon >delete</mat-icon>\n                                        <span>Delete</span>\n                                    </button> -->\n\n                                <!-- </mat-menu>\n                            </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </div>\n            </div> -->\n\n            <!-- table start --> \n<!-- \n        </div>\n    </div>\n</div> -->\n\n<!-- <button (click)=\"tt()\">Click</button> -->\n<!-- \n<div class=\"modal fade edit_modal\" id=\"editForm\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Actions</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"add_pckg_div\">\n                            <form class=\"\">\n                                <div class=\"inpt_form\">\n                                    <div class=\"row\">\n                                        <mat-label clasS=\"col-sm-4\">First Content</mat-label>\n                                        <div class=\"col-sm-8\">\n                                            <mat-form-field class=\"example-form-field\">\n                                                <input matInput placeholder=\"First Content\" [(ngModel)]=\"formData.content\" [formControl]=\"complexForm.controls['content']\" autocomplete=\"content\" required>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"inpt_form\">\n                                    <div class=\"row\">\n                                        <mat-label clasS=\"col-sm-4\">Second Content</mat-label>\n                                        <div class=\"col-sm-8\">\n                                            <mat-form-field class=\"example-form-field\">\n                                                <textarea matInput placeholder=\"Second Content\" [(ngModel)]=\"formData.content2\" [formControl]=\"complexForm.controls['content2']\" autocomplete=\"content2\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"inpt_form\">\n                                    <div class=\"row\">\n                                        <mat-label clasS=\"col-sm-4\">Third Content</mat-label>\n                                        <div class=\"col-sm-8\">\n                                            <mat-form-field class=\"example-form-field\">\n                                                <textarea matInput placeholder=\"Third Content\" [(ngModel)]=\"formData.content3\" [formControl]=\"complexForm.controls['content3']\" autocomplete=\"content3\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"inpt_form\">\n                                    <div class=\"row\">\n                                        <mat-label clasS=\"col-sm-4\">Image</mat-label>\n                                        <div class=\"col-sm-8\">\n                                             <mat-form-field class=\"example-form-field\"> -->\n                                                <!-- <img src=\"{{homeImageSrc || 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'}}\" class=\"img-fluid prfile_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info upload_img\"  style=\"width: 115px\">Upload Image</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"img_inpt\"><input type=\"file\" (change)=\"readURL($event)\" accept=\".jpeg,.png,.jpg\"></span> -->\n                                            <!-- </mat-form-field> -->\n                                        <!-- </div> -->\n                                    <!-- </div>\n                                </div>\n                                \n                                <button mat-raised-button color=\"primary\" (click)=\"Save()\">Save</button>\n                            </form>\n                        </div>\n                    </div> -->\n<!-- \n            </div>\n        </div>\n    </div>\n</div> --> \n\n\n<!-- <div class=\"modal fade\" id=\"addForm\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Actions</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                    <div class=\"col-sm-12\">\n                        <div class=\"add_pckg_div\">\n                            <form class=\"\">\n                                <div class=\"inpt_form\">\n                                    <div class=\"row\">\n                                        <mat-label clasS=\"col-sm-4\">Question</mat-label>\n                                        <div class=\"col-sm-8\">\n                                            <mat-form-field class=\"example-form-field\">\n                                                <input matInput placeholder=\"Question\" [formControl]=\"complexForm.controls['question']\" autocomplete=\"question\" required>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"inpt_form\">\n                                    <div class=\"row\">\n                                        <mat-label clasS=\"col-sm-4\">Answer</mat-label>\n                                        <div class=\"col-sm-8\">\n                                            <mat-form-field class=\"example-form-field\">\n                                                <textarea matInput placeholder=\"Enter Answer\" [formControl]=\"complexForm.controls['answer']\" autocomplete=\"answer\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <button mat-raised-button color=\"primary\" (click)=\"Add()\">Save</button>\n                            </form>\n                        </div>\n                    </div>\n\n            </div>\n        </div>\n    </div>\n</div> -->");

/***/ }),

/***/ "Rll3":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-second/create-engaging/create-engaging.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n    <!-- <a routerLink=\"/section_2\" class=\"cal-back\">\n        <i class=\"fa fa-chevron-left\"></i>\n    </a> -->\n    CREATE ENGAGING</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"createForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n\n\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"heading\" matInput placeholder=\"Heading\" maxlength=\"50\" [(ngModel)]=\"engagingData.heading\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"createForm.controls['heading'].touched &&\n                                     createForm.controls['heading'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"createForm.controls['heading'].errors &&\n                                      createForm.controls['heading'].errors.required\">\n                                         Heading  is required.</div>\n                                 </div>\n                                </div>\n            \n                                <!-- Designation -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"description\" matInput placeholder=\"Description\" maxlength=\"150\" [(ngModel)]=\"engagingData.description\"\n                                        >\n                                    </mat-form-field>\n                                    <div *ngIf=\"createForm.controls['description'].touched &&\n                                    createForm.controls['description'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"createForm.controls['description'].errors &&\n                                     createForm.controls['description'].errors.required\">\n                                         Description is required.</div>\n                                 </div>\n                                </div>\n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" formControlName=\"image\" #uploadFile value=\"engagingData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!createForm.valid\" (click)=\"add()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/section_2\" class=\"btn theme-btn ft\">Back</button>\n                                <!-- [disabled]=\"!createForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "S51R":
/*!*******************************************************************!*\
  !*** ./src/app/category/edit-category/edit-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-category.component.html */ "Su7g");
/* harmony import */ var _edit_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-category.component.css */ "f931");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");









var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.categoryData = {
            category: "",
            image: "",
        };
        this.editCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].category_images + 'category_images/';
        this.Id = this.route.snapshot.params.id;
        var obj = {
            category_id: this.Id
        };
        // console.log("Edit Id: ",)
        this.service.getCategoryById(obj).subscribe(function (res) {
            console.log("Data *************************: ", res);
            _this.categoryData.category = res.data.category_name;
            _this.categoryData.image = res.data.image;
            _this.testi_image = res.data.image;
        });
    };
    EditCategoryComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.categoryData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    EditCategoryComponent.prototype.editCategory = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('category_name', this.categoryData.category);
        formData.append('image', this.categoryData.image);
        formData.append('category_id', this.Id);
        this.service.updateCategory(formData).subscribe(function (data) {
            console.log("Data Successfully Updated!", data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            // this.router.navigate(['/category']);
            _this.router.navigate(['/category']);
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    EditCategoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EditCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-category',
            template: _raw_loader_edit_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle\">\n                <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <!-- <a class=\"navbar-brand\" *ngIf=\"getTitle\">{{getTitle()}}</a> -->\n            <!-- href=\"#pablo\" -->\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n          <!-- <form>\n            <div class=\"input-group no-border\">\n              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n              <div class=\"input-group-append\">\n                <div class=\"input-group-text\">\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                </div>\n              </div>\n            </div>\n          </form> -->\n          <ul class=\"navbar-nav\">\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n              </a>\n            </li> -->\n            <li class=\"nav-item\" ngbDropdown>\n              <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <!-- <p>\n                  <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p> -->\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a class=\"dropdown-item\" routerLink=\"/user-profile\" >Edit Profile</a>\n                <a class=\"dropdown-item\" (click)=\"logOut()\" >Log Out</a>\n                \n                <!-- <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\n              </div>\n            </li>\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" >\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Logout</span>\n                </p>\n              </a>\n            </li> -->\n          </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "Su7g":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category/edit-category.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n    \n  <h2 >\n    EDIT CATEGORY\n  </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"editCategoryForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <!-- <div class=\"card-body block-card\"> -->\n                            <!-- <div class=\"row\"> -->\n                                <!-- Author Name -->\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n\n\n\n\n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input  formControlName=\"category\" matInput placeholder=\"Category\" [(ngModel)]=\"categoryData.category\" >\n                                    </mat-form-field>\n                                    <div *ngIf=\"editCategoryForm.controls['category'].touched &&\n                                     editCategoryForm.controls['category'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"editCategoryForm.controls['category'].errors &&\n                                      editCategoryForm.controls['category'].errors.required\">\n                                         Category  is required.</div>\n                                 </div>\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            <!-- </div> -->\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!editCategoryForm.valid\" (click)=\"editCategory()\">Update</button>\n                                <!-- [disabled]=\"!editCategoryForm.valid\"  -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/category\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                        <!-- </div> -->\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "U5tD":
/*!******************************************************!*\
  !*** ./src/app/general-faq/general-faq.component.ts ***!
  \******************************************************/
/*! exports provided: GeneralFaqComponent, AddGenFaqDialog, EditGenFaqDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFaqComponent", function() { return GeneralFaqComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGenFaqDialog", function() { return AddGenFaqDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGenFaqDialog", function() { return EditGenFaqDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_general_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./general-faq.component.html */ "s1iN");
/* harmony import */ var _general_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-faq.component.css */ "bG1T");
/* harmony import */ var _raw_loader_add_gen_faq_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./add-gen-faq.html */ "RHoy");
/* harmony import */ var _raw_loader_edit_gen_faq_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./edit-gen-faq.html */ "WIiG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);













var GeneralFaqComponent = /** @class */ (function () {
    function GeneralFaqComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.checked = false;
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.faq = 'general_faq';
        this.displayedColumns = ['position', 'question', 'answer', 'action'];
    }
    GeneralFaqComponent.prototype.ngOnInit = function () {
        // this.reqData = {} 
        // this.reqData.offset = 0
        // this.reqData.limit = 10
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.responseData);
        // this.datamodel = {}
        this.genFaq();
    };
    GeneralFaqComponent.prototype.genFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.loader = true;
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("genfaqres*****", res.data);
            if (res) {
                _this.dataSource = res.data;
                _this.loader = false;
                //   this.dataSource=res.data
            }
        });
    };
    GeneralFaqComponent.prototype.addGenFaq = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(AddGenFaqDialog, {
            // height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            // this.reqData.offset = 0
            // this.reqData.limit = 10
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            _this.genFaq();
        });
    };
    GeneralFaqComponent.prototype.editGenDialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditGenFaqDialog, {
            // height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.genFaq();
        });
    };
    GeneralFaqComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Faq!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteFaq(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Deleted!', 'This Faq has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Cancelled', 'This Record is safe :)', 'error');
            }
        });
    };
    GeneralFaqComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    GeneralFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-general-faq',
            template: _raw_loader_general_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_general_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], GeneralFaqComponent);
    return GeneralFaqComponent;
}());

///////Add Gen Faq Dialog Box//////////////////
var AddGenFaqDialog = /** @class */ (function () {
    function AddGenFaqDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'general_faq';
        this.genFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    AddGenFaqDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddGenFaqDialog.prototype.ngOnInit = function () {
        this.LinkId = this.dialogRef.id;
    };
    AddGenFaqDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AddGenFaqDialog.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_type: this.faq,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.addFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            //   this.ngOnInit()
        });
    };
    AddGenFaqDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    AddGenFaqDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'add-gen-faq-dialog',
            template: _raw_loader_add_gen_faq_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], AddGenFaqDialog);
    return AddGenFaqDialog;
}());

//////////Edit gen faq dialog/////////////////
var EditGenFaqDialog = /** @class */ (function () {
    function EditGenFaqDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'general_faq';
        this.genFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            // ({value:'dsfddf', disabled: true})
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    EditGenFaqDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditGenFaqDialog.prototype.ngOnInit = function () {
        //   this.getLink()
        this.getGenFaq();
        this.LinkId = this.dialogRef.id;
    };
    EditGenFaqDialog.prototype.getGenFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.EnterQuestion = element.question;
                    _this.EnterAnswer = element.answer;
                }
            });
        });
    };
    // getLink(){
    //  this.service.getMediaLinks().subscribe(res=>{
    //    console.log("response",res.data)
    //    let data=res.data
    //    data.forEach(element => {
    //      let id=element.id
    //      if(this.LinkId == id){
    //          this.linkType=element.link_type
    //          this.link=element.social_media_link
    //      }
    //    });
    //  })
    // }
    EditGenFaqDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditGenFaqDialog.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_id: this.LinkId,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.updateFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            _this.ngOnInit();
        });
    };
    EditGenFaqDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    EditGenFaqDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'edit-gen-faq-dialog',
            template: _raw_loader_edit_gen_faq_html__WEBPACK_IMPORTED_MODULE_4__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], EditGenFaqDialog);
    return EditGenFaqDialog;
}());



/***/ }),

/***/ "UMdc":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent, ViewCategoryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoryDialog", function() { return ViewCategoryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-list.component.html */ "Cxlq");
/* harmony import */ var _user_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component.css */ "Ge9A");
/* harmony import */ var _raw_loader_view_category_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./view-category.html */ "bgOj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");












var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.currentPage = 10;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.currentIndex = 0;
        this.displayedColumns = ['position', 'name', 'email', 'phone', 'status', 'action'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        // this.currentPage=10
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.responseData);
        this.dataSource.paginator = this.paginator;
        this.datamodel = {};
        this.length;
        this.getStudentList();
    };
    UserListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    UserListComponent.prototype.getStudentList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.getallStudent(list).subscribe(function (res) {
            // console.log('*****getStudentData******',res.data);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                _this.loader = false;
                console.log('responseData ***', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    UserListComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.filterStudentList(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                    // this.length = res.data.count
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;
                    // this.tableData = data.data;
                    // this.backUpTableData = data.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    UserListComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    UserListComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        // let Cate=this.route.snapshot.params.id;
        // console.log('cate id',Cate);
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        console.log('checking  page Index', this.currentPage);
        console.log('checking current page', evt.pageSize);
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        // console.log(this.reqData)
        this.service.getallStudent(list).subscribe(function (res) {
            // console.log('paginator limit',res)
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                // this.responseData=new MatTableDataSource(res.data);
                // console.log('dataSource',this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    UserListComponent.prototype.viewDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(ViewCategoryDialog, {
            // height: '600px',
            width: '600px',
            id: id
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            // this.reqData.offset = 0
            // this.reqData.limit = 60
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.getStudentList()
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            // this.length
        });
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    UserListComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"], { static: true },] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-user-list',
            template: _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());

//view Category dialog
var ViewCategoryDialog = /** @class */ (function () {
    function ViewCategoryDialog(fb, dialogRef, service, route) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.addCategory = {
            name: "",
            email: "",
            phone: "",
            country: "",
            state: "",
            dob: "",
        };
        this.viewDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
        });
    }
    ViewCategoryDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ViewCategoryDialog.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 30;
        this.getStudentList();
        this.StudentId = this.dialogRef.id;
        console.log('idddddd', this.StudentId);
    };
    ViewCategoryDialog.prototype.getStudentList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.getallStudent(list).subscribe(function (res) {
            console.log('*****getStudentData******', res.data);
            var response = res.data.rows;
            if (response) {
                response.forEach(function (element) {
                    var matchId = element.id;
                    if (matchId == _this.StudentId) {
                        _this.addCategory.name = element.fullname;
                        _this.addCategory.email = element.email;
                        _this.addCategory.phone = element.phone;
                        _this.addCategory.country = element.country;
                        _this.addCategory.state = element.state;
                        _this.addCategory.dob = element.date_of_birth;
                    }
                });
            }
            //   if(res){
            //     this.dataSource=res.data.rows
            //     console.log('responseData ***',this.dataSource)
            //   }
            // },
            //  err => {
            // console.log(err);
            // if(err.status >= 400){
            //   console.log('Invalid Credential!!!');
            // }else{
            //   console.log('Internet Connection Error');
            // }
        });
    };
    // createCategory(){
    // 	//alert(this.dialogRef.id);
    // 	console.log("Category : ", this.addCategory.category);
    // 	var formData = new FormData();
    // 	formData.append('category_name', this.addCategory.category);
    // 	// formData.append('description', this.addCategory.description);
    // 	this.service.addCategory(formData).subscribe(res => {
    //  	  console.log("Data Successfully Inserted!",res);
    //      Swal.fire('Success..!', 'Successfully Created!', 'success')
    //      this.dialogRef.close();
    // 	},err => {
    // 	  if(err.status >= 400){
    // 		console.log('Invalid Credential!!!');
    // 	  }else{
    // 		console.log('Internet Connection Error');
    // 	  }
    // 	})
    // }
    ViewCategoryDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ViewCategoryDialog.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    ViewCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'view-category-dialog',
            template: _raw_loader_view_category_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], ViewCategoryDialog);
    return ViewCategoryDialog;
}());



/***/ }),

/***/ "UPXU":
/*!****************************************************************!*\
  !*** ./src/app/add-testimonials/add-testimonials.component.ts ***!
  \****************************************************************/
/*! exports provided: AddTestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTestimonialsComponent", function() { return AddTestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_testimonials_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-testimonials.component.html */ "7JRj");
/* harmony import */ var _add_testimonials_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-testimonials.component.css */ "y7OV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var AddTestimonialsComponent = /** @class */ (function () {
    // image
    // imgUrl
    // testimonialsData: any = {
    //   authorName:"",
    //   designation:"",
    //   image:"",
    //   description:""
    // }
    // testi_image
    function AddTestimonialsComponent(fb, service, router) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.testimonialsData = {
            authorName: "",
            designation: "",
            image: "",
            description: ""
        };
        this.testimonialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            authorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AddTestimonialsComponent.prototype.ngOnInit = function () {
        // this.imgUrl = environment.testimonials_img + 'testimonial/'
    };
    AddTestimonialsComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.testimonialsData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    AddTestimonialsComponent.prototype.saveTestimonials = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("author_name", this.testimonialsData.authorName);
        console.log("author_name", this.testimonialsData.authorName);
        console.log("designation", this.testimonialsData.designation);
        console.log("image", this.testimonialsData.image);
        console.log("description", this.testimonialsData.description);
        formData.append("designation", this.testimonialsData.designation);
        formData.append("image", this.testimonialsData.image);
        formData.append("description", this.testimonialsData.description);
        this.loader = true;
        this.service.createTestimonial(formData).subscribe(function (data) {
            console.log("Testimonials Successfully Created!");
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.router.navigate(['/testimonials']);
            _this.loader = false;
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    AddTestimonialsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AddTestimonialsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-testimonials',
            template: _raw_loader_add_testimonials_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_testimonials_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddTestimonialsComponent);
    return AddTestimonialsComponent;
}());



/***/ }),

/***/ "VCa0":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-faq/add-teacher-faq/add-teacher-faq.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     ADD TEACHER FAQ\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"teacherFaqForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" >\n                                    <mat-label>Enter Question</mat-label>\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <textarea matInput rows=\"2\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                        ></textarea>\n    \n                                    </mat-form-field>\n                                    <div *ngIf=\"teacherFaqForm.controls['question'].touched &&\n                                     teacherFaqForm.controls['question'].invalid\"\n                                     class=\"text-danger\">\n                                   \n                                   <div *ngIf=\"teacherFaqForm.controls['question'].errors &&\n                                      teacherFaqForm.controls['question'].errors.required\"> \n                                      Question is required.</div>\n                                    </div>\n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-label>Enter Answer</mat-label>\n                                    <editor\n                                    [init]=\"{\n                                        height: 350,\n                                        menubar: false,\n                                        plugins: [\n                                        'advlist autolink lists link image charmap print preview anchor',\n                                        'searchreplace visualblocks code fullscreen',\n                                        'insertdatetime media table paste code help wordcount'\n                                        ],\n                                        toolbar:\n                                        'undo redo | formatselect | bold italic backcolor | \\\n                                        alignleft aligncenter alignright alignjustify | \\\n                                        bullist numlist outdent indent | removeformat | help'\n                                    }\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></editor>\n                                            <div *ngIf=\"teacherFaqForm.controls['answer'].touched &&\n                                        teacherFaqForm.controls['answer'].invalid\"\n                                        class=\"text-danger\">\n                                    \n                                    <div *ngIf=\"teacherFaqForm.controls['answer'].errors &&\n                                        teacherFaqForm.controls['answer'].errors.required\"> \n                                        Answer is required.</div>\n                                        </div>\n\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            <br>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!teacherFaqForm.valid\" (click)=\"addFaq()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/teacherFaq\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "VJdo":
/*!*****************************************************************!*\
  !*** ./src/app/section-one-edit/section-one-edit.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tb25lLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJzZWN0aW9uLW9uZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "VcCe":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >SUB CATEGORY</h2>\n </div> \n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" routerLink=\"/add_sub_category/{{CateID}}\">Add Sub Category</button>\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\">\n         </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{(currentIndex) * currentPage + i +1 }}</td>\n                    </ng-container>\n                             \n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"category\">\n                        <th  mat-header-cell *matHeaderCellDef>Sub Category</th>\n                        <!-- class=\"text-center\" -->\n                        <td  mat-cell *matCellDef=\"let element\">{{element.sub_category_name}}</td>\n                        <!-- class=\"text-center\" -->\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"image\" class=\"mat-row\">\n                      <th mat-header-cell *matHeaderCellDef >Image\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\"> <img src=\"{{imagePath}}{{element.image}}\" class=\"img-fluid prfile_img\"> </td>\n\n                    </ng-container>  \n\n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                        Action\n                    </th>\n                    <td class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/sub_category/{{CateID}}/{{element.id}}\" >\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            <button  mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button>\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- \n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    \n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n  \n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  \n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div> -->");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WIiG":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-faq/edit-gen-faq.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"genFaqForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Edit Gen Faq</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <!-- <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                <mat-label>Type</mat-label>\n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">                                \n                                    <input matInput  formControlName=\"type\" [(ngModel)]=\"linkType\" >\n                                </mat-form-field> -->\n                                <!-- <div *ngIf=\"rejectForm.controls['type'].touched &&\n                                rejectForm.controls['type'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"rejectForm.controls['type'].errors &&\n                                  rejectForm.controls['type'].errors.required\">\n                                  type is required.</div>\n                              </div> -->\n                                \n                            <!-- </div> -->\n\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Question</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"5\"  formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                    ></textarea>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Answer</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"10\"  formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></textarea>\n                                </mat-form-field>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                                <label>Status</label>\n                                 <p class=\"hd_p\">\n                                    {{link}}\n                                 </p>\n                             </div> -->\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"    (click)=\"addFaq()\">Update</button>\n                    <!-- [disabled]=\"!genFaqForm.valid\" -->\n                  \n                </div>\n            </form>\n\n</div>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav>\n      <!-- <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n      </ul> -->\n    </nav>\n    <div class=\"copyright \">\n      &copy;\n      {{test | date: 'yyyy'}},BRIDGEGAP\n      <!-- <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>. -->\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "Wy3c":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media-links/edit-link.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"rejectForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Social Media Link</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                <div>\n                                    <mat-label>Type</mat-label>\n                                </div>\n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">                                \n                                    <input matInput  formControlName=\"type\" [(ngModel)]=\"linkType\" >\n                                </mat-form-field>\n                                <!-- <div *ngIf=\"rejectForm.controls['type'].touched &&\n                                rejectForm.controls['type'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"rejectForm.controls['type'].errors &&\n                                  rejectForm.controls['type'].errors.required\">\n                                  type is required.</div>\n                              </div> -->\n                                \n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Link</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <input matInput  formControlName=\"link\" maxlength=\"50\" [(ngModel)]=\"link\"\n                                    >\n                                </mat-form-field>\n                            </div>\n                            <!-- <div class=\"col-md-12\">\n                                <label>Status</label>\n                                 <p class=\"hd_p\">\n                                    {{link}}\n                                 </p>\n                             </div> -->\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  (click)=\"change()\">Update</button>\n                    <!-- [disabled]=\"!rejectForm.valid\" -->\n                </div>\n            </form>\n\n\n\n\n\n\n\n\n\n               \n                <!-- <form [formGroup]=\"rejectForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title ft\">Reason For Rejection</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                               \n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                            <textarea matInput placeholder=\"type\" formControlName=\"type\" [(ngModel)]=\"type\" ></textarea>\n                                        </mat-form-field>\n                                        <div *ngIf=\"rejectForm.controls['type'].touched &&\n                                        rejectForm.controls['type'].invalid\"\n                                         class=\"text-danger\">\n                                      <div *ngIf=\"rejectForm.controls['type'].errors &&\n                                          rejectForm.controls['type'].errors.required\">\n                                          type is required.</div>\n                                      </div>\n                                        \n                                            \n                                    </div>\n                               \n                         \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"reject('Decline')\">Reject</button>\n                    </div>\n                </form> -->\n            \n        \n  \n</div>\n");

/***/ }),

/***/ "X0jp":
/*!******************************************!*\
  !*** ./src/app/adminAuth/admin.guard.ts ***!
  \******************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



var AdminGuard = /** @class */ (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        // return true;
        this.router.navigate(['/login']);
        return false;
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "XLOz":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-login.component.html */ "QgpJ");
/* harmony import */ var _admin_login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-login.component.css */ "D3jF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(formBuilder, route, router, service, toastr
    //private accountService: AccountService,
    //private alertService: AlertService
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.service = service;
        this.toastr = toastr;
        this.loading = false;
        this.submitted = false;
        this.loginCredential = {
            username: '',
            password: ''
        };
        // redirect to home if already logged in
        // if (this.accountService.userValue) {
        //     this.router.navigate(['/']);
        // }
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(AdminLoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    AdminLoginComponent.prototype.onSubmit = function () {
        // this.router.navigate(['/dashboard'])
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        console.log("Username: ", this.loginCredential.username);
        console.log("Password: ", this.loginCredential.password);
        this.service.adminLogin(this.loginCredential).subscribe(function (login) {
            console.log("Login Credentials: ", login);
            localStorage.setItem("login", JSON.stringify(login));
            localStorage.setItem("isLoggedin", 'true');
            localStorage.setItem("token", login.token);
            _this.service.setAuthToken();
            _this.router.navigate(['/dashboard']);
            _this.loading = true;
        }, function (err) {
            console.log('login err', err.error.errors.msg);
            if (err.status >= 400) {
                _this.toastr.error(err.error.errors.msg, 'Error');
            }
            else {
                _this.toastr.error('Internet Connection Error', 'Error');
            }
            // this.service.showAuthError(error);
        });
    };
    AdminLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
    ]; };
    AdminLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-admin-login',
            template: _raw_loader_admin_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
            //private accountService: AccountService,
            //private alertService: AlertService
        ])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "XuI3":
/*!********************************************************************!*\
  !*** ./src/app/social-media-links/social-media-links.component.ts ***!
  \********************************************************************/
/*! exports provided: SocialMediaLinksComponent, EditLinkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLinksComponent", function() { return SocialMediaLinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLinkDialog", function() { return EditLinkDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_social_media_links_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./social-media-links.component.html */ "bHj8");
/* harmony import */ var _social_media_links_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-media-links.component.css */ "5fQc");
/* harmony import */ var _raw_loader_edit_link_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./edit-link.html */ "Wy3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");













var SocialMediaLinksComponent = /** @class */ (function () {
    function SocialMediaLinksComponent(dialog, service, route, toastr) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        //  imagePath = environment.home_image;
        this.responseData = [];
        this.displayedColumns = ['position', 'social_media_type', 'social_media_link', 'Action'];
    }
    SocialMediaLinksComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.responseData);
        this.socialLinkData();
    };
    SocialMediaLinksComponent.prototype.socialLinkData = function () {
        var _this = this;
        this.loader = true;
        this.service.getMediaLinks().subscribe(function (res) {
            console.log('social links', res.data);
            if (res) {
                _this.dataSource = res.data;
                console.log("datasource", _this.dataSource);
                _this.loader = false;
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    SocialMediaLinksComponent.prototype.editLinkdialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditLinkDialog, {
            // height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            // this.reqData.offset = 0
            // this.reqData.limit = 10
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            _this.socialLinkData();
        });
    };
    SocialMediaLinksComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }
    ]; };
    SocialMediaLinksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-social-media-links',
            template: _raw_loader_social_media_links_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_social_media_links_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]])
    ], SocialMediaLinksComponent);
    return SocialMediaLinksComponent;
}());

///////// Edit Social Media Links //////////////////
var EditLinkDialog = /** @class */ (function () {
    function EditLinkDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.rejectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: true }),
            // ({value:'dsfddf', disabled: true})
            // type: new FormControl('',[Validators.required]),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
    }
    EditLinkDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditLinkDialog.prototype.ngOnInit = function () {
        this.getLink();
        this.LinkId = this.dialogRef.id;
    };
    EditLinkDialog.prototype.getLink = function () {
        var _this = this;
        this.service.getMediaLinks().subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.linkType = element.link_type;
                    _this.link = element.social_media_link;
                }
            });
        });
    };
    EditLinkDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditLinkDialog.prototype.change = function () {
        var _this = this;
        var type = {
            link_type: this.linkType,
            social_media_link: this.link
        };
        console.log("typr update", type);
        this.service.updateLinks(type).subscribe(function (res) {
            console.log("res", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            _this.ngOnInit();
        });
    };
    EditLinkDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
    ]; };
    EditLinkDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'edit-link-dialog',
            template: _raw_loader_edit_link_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], EditLinkDialog);
    return EditLinkDialog;
}());



/***/ }),

/***/ "YAw6":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-one-edit/section-one-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 > \n      EDIT HOME BANNER\n    </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form>\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n\n\n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Title\" maxlength=\"25\" [(ngModel)]=\"bannerData.title\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n            \n                                <!-- Designation -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Sub Title\" maxlength=\"25\" [(ngModel)]=\"bannerData.subtitle\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile value=\"testimonialsData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>               -->\n                            </div>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"updateTestimonials()\">Update</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/section_1\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "YPFg":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n            \n               \n                <form>\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title ft\">Edit Category</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                    <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                        <input matInput placeholder=\"Category\" [(ngModel)]=\"addCategory.category\" [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"editCategory()\">Update</button>\n                    </div>\n                </form>\n            \n        \n  \n</div>\n");

/***/ }),

/***/ "Yms5":
/*!***********************************************************!*\
  !*** ./src/app/section-three/section-three.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-fluid{\n    width: 120px;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tdGhyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNlY3Rpb24tdGhyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctZmx1aWR7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogODBweDtcbn0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _adminAuth_admin_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminAuth/admin.guard */ "X0jp");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./category/category.component */ "clsX");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./category/add-category/add-category.component */ "NaMH");
/* harmony import */ var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sub-category/sub-category.component */ "7dfY");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _section_first_section_first_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./section-first/section-first.component */ "DUgg");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "czZ8");
/* harmony import */ var _add_testimonials_add_testimonials_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-testimonials/add-testimonials.component */ "UPXU");
/* harmony import */ var _section_second_section_second_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./section-second/section-second.component */ "0I2P");
/* harmony import */ var _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./section-three/section-three.component */ "/QHs");
/* harmony import */ var _general_faq_general_faq_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./general-faq/general-faq.component */ "U5tD");
/* harmony import */ var _teacher_faq_teacher_faq_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./teacher-faq/teacher-faq.component */ "4mNI");
/* harmony import */ var _parent_faq_parent_faq_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parent-faq/parent-faq.component */ "sC5k");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "NqkC");
/* harmony import */ var _section_one_edit_section_one_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./section-one-edit/section-one-edit.component */ "KL40");
/* harmony import */ var _testimonials_edit_testimonials_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./testimonials-edit/testimonials-edit.component */ "+zzn");
/* harmony import */ var _create_banner_create_banner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./create-banner/create-banner.component */ "suf6");
/* harmony import */ var _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./category/edit-category/edit-category.component */ "S51R");
/* harmony import */ var _sub_category_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sub-category/add-sub-category/add-sub-category.component */ "OCGH");
/* harmony import */ var _sub_category_edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sub-category/edit-sub-category/edit-sub-category.component */ "4Y5O");
/* harmony import */ var _section_second_create_engaging_create_engaging_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./section-second/create-engaging/create-engaging.component */ "2Uv9");
/* harmony import */ var _section_second_edit_engaging_edit_engaging_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./section-second/edit-engaging/edit-engaging.component */ "hERL");
/* harmony import */ var _section_three_create_how_it_works_create_how_it_works_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./section-three/create-how-it-works/create-how-it-works.component */ "E9OQ");
/* harmony import */ var _section_three_edit_how_it_works_edit_how_it_works_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./section-three/edit-how-it-works/edit-how-it-works.component */ "awQQ");
/* harmony import */ var _teacher_applications_teacher_applications_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./teacher-applications/teacher-applications.component */ "QqmM");
/* harmony import */ var _teacher_applications_view_teacher_application_view_teacher_application_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./teacher-applications/view-teacher-application/view-teacher-application.component */ "hr2U");
/* harmony import */ var _teacher_management_teacher_management_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./teacher-management/teacher-management.component */ "ZD+H");
/* harmony import */ var _user_list_view_student_details_view_student_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./user-list/view-student-details/view-student-details.component */ "EMSy");
/* harmony import */ var _courses_management_courses_management_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./courses-management/courses-management.component */ "9HS8");
/* harmony import */ var _courses_management_view_course_details_view_course_details_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./courses-management/view-course-details/view-course-details.component */ "qgk4");
/* harmony import */ var _teacher_management_view_teacher_list_view_teacher_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./teacher-management/view-teacher-list/view-teacher-list.component */ "x9IN");
/* harmony import */ var _social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./social-media-links/social-media-links.component */ "XuI3");
/* harmony import */ var _newsletter_management_newsletter_management_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./newsletter-management/newsletter-management.component */ "f3C+");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ "6Kw5");
/* harmony import */ var _general_faq_add_gen_faq_add_gen_faq_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./general-faq/add-gen-faq/add-gen-faq.component */ "AHzu");
/* harmony import */ var _general_faq_edit_gen_faq_edit_gen_faq_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./general-faq/edit-gen-faq/edit-gen-faq.component */ "Eyal");
/* harmony import */ var _parent_faq_add_parent_faq_add_parent_faq_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./parent-faq/add-parent-faq/add-parent-faq.component */ "j7xL");
/* harmony import */ var _parent_faq_edit_parent_faq_edit_parent_faq_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./parent-faq/edit-parent-faq/edit-parent-faq.component */ "QnXU");
/* harmony import */ var _teacher_faq_add_teacher_faq_add_teacher_faq_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./teacher-faq/add-teacher-faq/add-teacher-faq.component */ "co1N");
/* harmony import */ var _teacher_faq_edit_teacher_faq_edit_teacher_faq_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./teacher-faq/edit-teacher-faq/edit-teacher-faq.component */ "mroN");






















// import { AddSubCategoryDialog,EditSubCategoryDialog} from './sub-category/sub-category.component';






































// import { SubCategoryComponent } from './sub-category/sub-category.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"]
                //
                // MatDialogModule
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__["AdminLoginComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_15__["CategoryComponent"],
                _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_19__["AddCategoryComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_15__["AddCategoryDialog"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_15__["EditCategoryDialog"],
                // AddSubCategoryDialog,
                _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_20__["SubCategoryComponent"],
                // EditSubCategoryDialog,
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_21__["UserListComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_21__["ViewCategoryDialog"],
                _section_first_section_first_component__WEBPACK_IMPORTED_MODULE_22__["SectionFirstComponent"],
                _section_first_section_first_component__WEBPACK_IMPORTED_MODULE_22__["EditDialog"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_24__["TestimonialsComponent"],
                _add_testimonials_add_testimonials_component__WEBPACK_IMPORTED_MODULE_25__["AddTestimonialsComponent"],
                _section_second_section_second_component__WEBPACK_IMPORTED_MODULE_26__["SectionSecondComponent"],
                _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_27__["SectionThreeComponent"],
                _general_faq_general_faq_component__WEBPACK_IMPORTED_MODULE_28__["GeneralFaqComponent"],
                _general_faq_general_faq_component__WEBPACK_IMPORTED_MODULE_28__["AddGenFaqDialog"],
                _general_faq_general_faq_component__WEBPACK_IMPORTED_MODULE_28__["EditGenFaqDialog"],
                _teacher_faq_teacher_faq_component__WEBPACK_IMPORTED_MODULE_29__["TeacherFaqComponent"],
                _teacher_faq_teacher_faq_component__WEBPACK_IMPORTED_MODULE_29__["AddTeacherFaqDialog"],
                _teacher_faq_teacher_faq_component__WEBPACK_IMPORTED_MODULE_29__["EditTeacherFaqDialog"],
                _parent_faq_parent_faq_component__WEBPACK_IMPORTED_MODULE_30__["ParentFaqComponent"],
                _parent_faq_parent_faq_component__WEBPACK_IMPORTED_MODULE_30__["AddParentFaqDialog"],
                _parent_faq_parent_faq_component__WEBPACK_IMPORTED_MODULE_30__["EditParentFaqDialog"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_31__["ContactUsComponent"],
                _section_one_edit_section_one_edit_component__WEBPACK_IMPORTED_MODULE_32__["SectionOneEditComponent"],
                _testimonials_edit_testimonials_edit_component__WEBPACK_IMPORTED_MODULE_33__["TestimonialsEditComponent"],
                _create_banner_create_banner_component__WEBPACK_IMPORTED_MODULE_34__["CreateBannerComponent"],
                _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_35__["EditCategoryComponent"],
                _sub_category_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_36__["AddSubCategoryComponent"],
                _sub_category_edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_37__["EditSubCategoryComponent"],
                _section_second_create_engaging_create_engaging_component__WEBPACK_IMPORTED_MODULE_38__["CreateEngagingComponent"],
                _section_second_edit_engaging_edit_engaging_component__WEBPACK_IMPORTED_MODULE_39__["EditEngagingComponent"],
                _section_three_create_how_it_works_create_how_it_works_component__WEBPACK_IMPORTED_MODULE_40__["CreateHowItWorksComponent"],
                _section_three_edit_how_it_works_edit_how_it_works_component__WEBPACK_IMPORTED_MODULE_41__["EditHowItWorksComponent"],
                _teacher_applications_teacher_applications_component__WEBPACK_IMPORTED_MODULE_42__["TeacherApplicationsComponent"],
                _teacher_applications_view_teacher_application_view_teacher_application_component__WEBPACK_IMPORTED_MODULE_43__["ViewTeacherApplicationComponent"],
                _teacher_applications_view_teacher_application_view_teacher_application_component__WEBPACK_IMPORTED_MODULE_43__["RejectApplicationDialog"],
                _teacher_management_teacher_management_component__WEBPACK_IMPORTED_MODULE_44__["TeacherManagementComponent"],
                _user_list_view_student_details_view_student_details_component__WEBPACK_IMPORTED_MODULE_45__["ViewStudentDetailsComponent"],
                _courses_management_courses_management_component__WEBPACK_IMPORTED_MODULE_46__["CoursesManagementComponent"],
                _courses_management_view_course_details_view_course_details_component__WEBPACK_IMPORTED_MODULE_47__["ViewCourseDetailsComponent"],
                _courses_management_view_course_details_view_course_details_component__WEBPACK_IMPORTED_MODULE_47__["RejectCourseDialog"],
                _teacher_management_view_teacher_list_view_teacher_list_component__WEBPACK_IMPORTED_MODULE_48__["ViewTeacherListComponent"],
                _social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_49__["SocialMediaLinksComponent"],
                _social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_49__["EditLinkDialog"],
                _newsletter_management_newsletter_management_component__WEBPACK_IMPORTED_MODULE_50__["NewsletterManagementComponent"],
                _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_51__["DateAgoPipe"],
                _general_faq_add_gen_faq_add_gen_faq_component__WEBPACK_IMPORTED_MODULE_52__["AddGenFaqComponent"],
                _general_faq_edit_gen_faq_edit_gen_faq_component__WEBPACK_IMPORTED_MODULE_53__["EditGenFaqComponent"],
                _parent_faq_add_parent_faq_add_parent_faq_component__WEBPACK_IMPORTED_MODULE_54__["AddParentFaqComponent"],
                _parent_faq_edit_parent_faq_edit_parent_faq_component__WEBPACK_IMPORTED_MODULE_55__["EditParentFaqComponent"],
                _teacher_faq_add_teacher_faq_add_teacher_faq_component__WEBPACK_IMPORTED_MODULE_56__["AddTeacherFaqComponent"],
                _teacher_faq_edit_teacher_faq_edit_teacher_faq_component__WEBPACK_IMPORTED_MODULE_57__["EditTeacherFaqComponent"],
            ],
            providers: [_adminAuth_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZD+H":
/*!********************************************************************!*\
  !*** ./src/app/teacher-management/teacher-management.component.ts ***!
  \********************************************************************/
/*! exports provided: TeacherManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherManagementComponent", function() { return TeacherManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_teacher_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./teacher-management.component.html */ "R6xh");
/* harmony import */ var _teacher_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-management.component.css */ "uN5D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");










var TeacherManagementComponent = /** @class */ (function () {
    function TeacherManagementComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.currentPage = 10;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.currentIndex = 0;
        this.displayedColumns = ['position', 'name', 'email', 'phone', 'status', 'action'];
    }
    TeacherManagementComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        // this.currentPage=10
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        this.dataSource.paginator = this.paginator;
        this.datamodel = {};
        this.length;
        this.getTeacherList();
    };
    TeacherManagementComponent.prototype.getTeacherList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.getAllTeachers(list).subscribe(function (res) {
            console.log('*****getTeachersData******', res.data);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                _this.loader = false;
                console.log('responseData ***', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    TeacherManagementComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.filterTeacherList(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data.rows;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    TeacherManagementComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    TeacherManagementComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        // let Cate=this.route.snapshot.params.id;
        // console.log('cate id',Cate);
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        console.log('checking  page Index', this.currentPage);
        console.log('checking current page', evt.pageSize);
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        // console.log(this.reqData)
        this.service.getAllTeachers(list).subscribe(function (res) {
            // console.log('paginator limit',res)
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                // this.responseData=new MatTableDataSource(res.data);
                // console.log('dataSource',this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    TeacherManagementComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    TeacherManagementComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], { static: true },] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    TeacherManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-teacher-management',
            template: _raw_loader_teacher_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_teacher_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], TeacherManagementComponent);
    return TeacherManagementComponent;
}());



/***/ }),

/***/ "ZLJd":
/*!**************************************************************************!*\
  !*** ./src/app/parent-faq/edit-parent-faq/edit-parent-faq.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGFyZW50LWZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtRQUNRLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7SUFDbEI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoiZWRpdC1wYXJlbnQtZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgIl19 */");

/***/ }),

/***/ "ZMr7":
/*!******************************************************************************************************!*\
  !*** ./src/app/teacher-applications/view-teacher-application/view-teacher-application.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n.vid_wrap iframe{\n        width: 100%;\n        height: 270px;\n        margin-bottom: 30px;\n    }\nlabel{\n        font-size: 18px;\n        color:#000;\n    }\n.hd_p{\n        color: #949494;\n        padding-bottom: 10px;\n       font-size: 14px;\n       \n        max-height: 100%;\n    }\n.card{\n        padding: 0px 4em!important;\n    }\n.hddr{\n        background: #6aa524;\n        color: #fff;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdGVhY2hlci1hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtRQUNRLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCO0FBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixXQUFXO1FBQ1gsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsaUJBQWlCO0lBQ3JCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNBO1FBQ0ksY0FBYztRQUNkLG9CQUFvQjtPQUNyQixlQUFlOztRQUVkLGdCQUFnQjtJQUNwQjtBQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztJQUNmIiwiZmlsZSI6InZpZXctdGVhY2hlci1hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YWE1MjQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4uZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHNwYW4ubWF0X2ltYWcge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmlucHRfaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgcmlnaHQ6IC0xM3B4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmFhNTI0O1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLm1hdF9pbWFnIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEtZWRpdHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogOXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC52aWRfd3JhcCBpZnJhbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgIH1cbiAgICAuaGRfcHtcbiAgICAgICAgY29sb3I6ICM5NDk0OTQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICBcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICAgIHBhZGRpbmc6IDBweCA0ZW0haW1wb3J0YW50O1xuICAgIH1cbiAgICAuaGRkcntcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfSJdfQ== */");

/***/ }),

/***/ "aFyv":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-faq/edit-teacher-faq/edit-teacher-faq.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     EDIT TEACHER FAQ\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"teacherFaqForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" >\n                                    <mat-label>Enter Question</mat-label>\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <textarea matInput rows=\"4\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                        ></textarea>\n    \n                                    </mat-form-field>\n                                    <div *ngIf=\"teacherFaqForm.controls['question'].touched &&\n                                     teacherFaqForm.controls['question'].invalid\"\n                                     class=\"text-danger\">\n                                   \n                                   <div *ngIf=\"teacherFaqForm.controls['question'].errors &&\n                                      teacherFaqForm.controls['question'].errors.required\"> \n                                      Question is required.</div>\n                                    </div>\n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-label>Enter Answer</mat-label>\n                                    <br>\n                                    <editor\n                                    [init]=\"{\n                                        height: 350,\n                                        menubar: false,\n                                        plugins: [\n                                        'advlist autolink lists link image charmap print preview anchor',\n                                        'searchreplace visualblocks code fullscreen',\n                                        'insertdatetime media table paste code help wordcount'\n                                        ],\n                                        toolbar:\n                                        'undo redo | formatselect | bold italic backcolor | \\\n                                        alignleft aligncenter alignright alignjustify | \\\n                                        bullist numlist outdent indent | removeformat | help'\n                                    }\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></editor>\n                                            <div *ngIf=\"teacherFaqForm.controls['answer'].touched &&\n                                        teacherFaqForm.controls['answer'].invalid\"\n                                        class=\"text-danger\">\n                                    \n                                    <div *ngIf=\"teacherFaqForm.controls['answer'].errors &&\n                                        teacherFaqForm.controls['answer'].errors.required\"> \n                                        Answer is required.</div>\n                                        </div>\n\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            <br>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!teacherFaqForm.valid\" (click)=\"addFaq()\">Update</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/teacherFaq\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "aHhy":
/*!**************************************************************************!*\
  !*** ./src/app/section-second/edit-engaging/edit-engaging.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZW5nYWdpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJlZGl0LWVuZ2FnaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "aRL8":
/*!*********************************************************************!*\
  !*** ./src/app/general-faq/edit-gen-faq/edit-gen-faq.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZ2VuLWZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtRQUNRLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7SUFDbEI7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDQTtRQUNJLGVBQWU7SUFDbkIiLCJmaWxlIjoiZWRpdC1nZW4tZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgIl19 */");

/***/ }),

/***/ "aZkB":
/*!*********************************************************************!*\
  !*** ./src/app/courses-management/courses-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "awQQ":
/*!********************************************************************************!*\
  !*** ./src/app/section-three/edit-how-it-works/edit-how-it-works.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditHowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHowItWorksComponent", function() { return EditHowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-how-it-works.component.html */ "fl6C");
/* harmony import */ var _edit_how_it_works_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-how-it-works.component.css */ "1sIi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");









var EditHowItWorksComponent = /** @class */ (function () {
    function EditHowItWorksComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.workData = {
            heading: "",
            description: "",
            image: "",
        };
    }
    EditHowItWorksComponent.prototype.ngOnInit = function () {
        this.imgUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].how_it_img + 'how_its_works_images/';
        // this.imgUrl = environment.engag_img + 'engaging_and_efficient_images/'
        console.log('iddddd', this.route.snapshot.params.id);
        this.getHowById(this.route.snapshot.params.id);
    };
    EditHowItWorksComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.workData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    EditHowItWorksComponent.prototype.getHowById = function (id) {
        var _this = this;
        var obj = {
            id: id
        };
        this.service.getHowItsWorksById(obj).subscribe(function (data) {
            console.log(" edit data**", data);
            _this.workData.heading = data.data.heading;
            _this.workData.description = data.data.description;
            _this.workData.image = data.data.image;
            _this.testi_image = data.data.image;
            // this.bannerData.description = data.data.description;
        })
            , function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            };
    };
    EditHowItWorksComponent.prototype.update = function () {
        var _this = this;
        console.log('id***', this.route.snapshot.params.id);
        console.log('heading/', this.workData.heading);
        console.log('description', this.workData.description);
        console.log('image', this.workData.image);
        // console.log(this.bannerData.description);
        var formData = new FormData();
        formData.append('id', this.route.snapshot.params.id);
        formData.append("image", this.workData.image);
        formData.append("heading", this.workData.heading);
        formData.append("description", this.workData.description);
        this.service.updateHowItsWorks(formData).subscribe(function (data) {
            console.log(" Successfully Updated!//////", data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            _this.router.navigate(['/section_3']);
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    EditHowItWorksComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EditHowItWorksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-how-it-works',
            template: _raw_loader_edit_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_how_it_works_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditHowItWorksComponent);
    return EditHowItWorksComponent;
}());



/***/ }),

/***/ "b2lK":
/*!*****************************************************************************!*\
  !*** ./src/app/teacher-faq/edit-teacher-faq/edit-teacher-faq.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 200px;\n        height: 200px;\n        background: #fafafa;\n        display: block;\n        margin: 0 auto;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdGVhY2hlci1mYXEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjO0lBQ2xCO0FBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixXQUFXO1FBQ1gsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsaUJBQWlCO0lBQ3JCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxlQUFlO0lBQ25CIiwiZmlsZSI6ImVkaXQtdGVhY2hlci1mYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAiXX0= */");

/***/ }),

/***/ "bG1T":
/*!*******************************************************!*\
  !*** ./src/app/general-faq/general-faq.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".babu p{\n    width: 250px!important;\n    text-overflow: ellipsis!important;\n    overflow: hidden!important;\n    white-space: nowrap!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakMiLCJmaWxlIjoiZ2VuZXJhbC1mYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWJ1IHB7XG4gICAgd2lkdGg6IDI1MHB4IWltcG9ydGFudDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "bHj8":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media-links/social-media-links.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div> -->\n\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n    <h2 >SOCIAL MEDIA LINKS MANAGEMENT</h2>\n </div>\n <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          \n          <div class=\"card-body\">\n            \n       \n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                      <!-- Position -->\n                        \n                      <ng-container matColumnDef=\"position\" class=\"mat-row\">\n                        <th mat-header-cell *matHeaderCellDef >S.No\n                        </th>\n                        <td mat-cell *matCellDef=\"let element let i=index\"> {{i+1}} </td>\n\n                      </ng-container>   \n\n      \n                      <ng-container matColumnDef=\"social_media_type\" class=\"mat-row\">\n                          <th class=\"text-center\" mat-header-cell *matHeaderCellDef >Social Media\n                          </th>\n                          <td class=\"text-center\" mat-cell *matCellDef=\"let element\"> {{element.link_type}} </td>\n  \n                      </ng-container>      \n                      \n                      <ng-container matColumnDef=\"social_media_link\" class=\"mat-row\">\n                        <th class=\"text-center\" mat-header-cell *matHeaderCellDef >Link\n                        </th>\n                        <td class=\"text-center\" mat-cell *matCellDef=\"let element\"> {{element.social_media_link}} </td>\n\n                    </ng-container>  \n                        \n                      <ng-container matColumnDef=\"Action\" class=\"mat-row\">\n                          <th mat-header-cell *matHeaderCellDef > Action </th>\n                          <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                              <button  mat-icon-button (click)=\"editLinkdialog(element.id)\">\n                                  <mat-icon >edit</mat-icon>\n                              </button>\n                              <!-- <button  mat-icon-button (click)=\"delete(element.id)\">\n                                  <mat-icon >delete</mat-icon>\n                              </button> -->\n                          \n                        </td>\n                         \n                      </ng-container>\n  \n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <!-- <div>\n                      <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                          (page)=\"paginationOptionChange($event)\">\n                      </mat-paginator>\n                  </div> -->\n              </div>\n          </div> \n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _adminAuth_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminAuth/admin.guard */ "X0jp");








var routes = [
    {
        path: '',
        redirectTo: 'adminLogin',
        pathMatch: 'full',
    },
    {
        path: 'adminLogin',
        component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__["AdminLoginComponent"]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        canActivate: [_adminAuth_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'adminLogin'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bgOj":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/view-category.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    </style>\n\n<div class=\"main-content\" style=\"position: relative;\">\n   \n       \n           \n                <button mat-icon-button  (click)=\"closeDialog()\"\n                    style=\"position: absolute;\n                    right: -32px;\n                    top: -32px;\n                    transform: scale(0.75);\n                    outline: none;\n                    background-color: #ffffff!important;\n                    color: rgb(0, 0, 0);\n                    border-radius: 0px;\"  >\n                    <!-- style=\"padding-left: 492px;padding-top: 9px;\" -->\n                    <mat-icon >close</mat-icon>\n                </button>\n          \n                <!-- style=\"margin-top: 30px;\" -->\n               \n                <form [formGroup]=\"viewDetailForm\" >\n                    <!-- style=\"padding-top: 24px;\" -->\n                    <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <!-- .card .card-header:not([data-background-color]) {\n                                background-color: #6AA524;\n                                padding-bottom: 0.5px; -->\n                            <h4 class=\"card-title\">All Details</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                 <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                    <!-- style=\"padding-top: 70px;\" -->\n                                    <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                        <input matInput placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"addCategory.name\">\n                                    </mat-form-field>\n                                 </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"addCategory.email\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" [(ngModel)]=\"addCategory.phone\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"Country\" formControlName=\"country\" [(ngModel)]=\"addCategory.country\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"State\" formControlName=\"state\" [(ngModel)]=\"addCategory.state\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"D.O.B\" formControlName=\"dob\" [(ngModel)]=\"addCategory.dob\">\n                                        </mat-form-field>\n                                    </div>\n                           \n                               \n\n                                \n                                    <!-- <div *ngIf=\"bookCategoryForm.controls['bookCategory'].touched &&\n                                      bookCategoryForm.controls['bookCategory'].invalid\"\n                                       class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].errors &&\n                                        bookCategoryForm.controls['bookCategory'].errors.required\">\n                                        Category is required.</div>\n                                    </div> -->\n\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"Description\" formControlName=\"categoryDescription\" rows=\"2\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"></textarea> -->\n                                        <!-- <input matInput placeholder=\"Description\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"> -->\n                                    <!-- </mat-form-field> -->\n                                    <!-- <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].touched &&\n                                            bookCategoryForm.controls['categoryDescription'].invalid\"\n                                            class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].errors &&\n                                    bookCategoryForm.controls['categoryDescription'].errors.required\">\n                                        Description is required.</div>\n                                    </div> -->\n                                <!-- </div> -->\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!bookCategoryForm.valid\" (click)=\"createCategory()\">Submit</button> -->\n                        <!-- [disabled]=\"!bookCategoryForm.valid\" -->\n                    <!-- </div> -->\n                </form>\n           \n        \n</div>\n");

/***/ }),

/***/ "c4Oj":
/*!*************************************************************************************!*\
  !*** ./src/app/section-three/create-how-it-works/create-how-it-works.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJjcmVhdGUtaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "cJgW":
/*!*****************************************************!*\
  !*** ./src/app/parent-faq/parent-faq.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJlbnQtZmFxLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "cUD1":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5.title{\n    font-size: 16px;\n}\n.mat-form-field{\n   \n    /* font-size: 18px; */\n    border-bottom: 1px;\n}\ntable {\n    width: 100%;\n  }\nsection {\n    display: table;\n  }\n.example-label {\n    display: table-cell;\n    font-size: 14px;\n    margin-left: 8px;\n    min-width: 120px;\n  }\n.example-button-row {\n    display: table-cell;\n    width: 490px;\n  }\n.example-button-row .mat-button-base {\n    margin: 8px 8px 8px 0;\n  }\n.example-flex-container {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n.example-button-container {\n    display: flex;\n    justify-content: center;\n    width: 120px;\n  }\n.theme-btn{\n    background-color: #142c69;\n    color: #fff;\n  }\n.hdng{\n    background-color: #6AA524!important;\n    color: #fff;\n    padding-left: 35px;\n    padding-bottom: 52px;\n  }\n.img-fluid{\n    width: 120px;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztFQUNiO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0FBQUM7SUFDQyxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUudGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgXG4gICAgLyogZm9udC1zaXplOiAxOHB4OyAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWxhYmVsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDQ5MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLnRoZW1lLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyYzY5O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5oZG5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUE1MjQhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTJweDtcbiAgfS5pbWctZmx1aWR7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogODBweDtcbn0iXX0= */");

/***/ }),

/***/ "cUH4":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-management/view-teacher-list/view-teacher-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n    TEACHER DETAILS </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form >\n                    <!-- [formGroup]=\"applicationForm\" -->\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\" style=\"margin-top: 29px;\">\n                            <div class=\"row\">\n                            \n                                <div class=\"col-md-6\">\n                                    <label>Name</label>\n                                    <p class=\"hd_p\">\n                                        {{teacherData.name == \"null\" ? \"N/A\" : teacherData.name}}\n                                    </p>\n                                    \n                                </div>\n                \n                                <div class=\"col-md-6\">\n                                    <label>Email</label>\n                                    <p class=\"hd_p\">\n                                       {{teacherData.email == null ? \"N/A\" : teacherData.email}}\n                                    </p>\n                                    \n                                </div>\n                                \n                               \n                                <div class=\"col-md-6\">\n                                    <label>Phone</label>\n                                    <p class=\"hd_p\">\n                                       {{teacherData.phone == null ? \"N/A\" : teacherData.phone }}\n                                    </p>\n                                </div>\n<!-- \n                                <div class=\"col-md-6\">\n                                    <label>Country</label>\n                                    <p class=\"hd_p\">\n                                       {{teacherData.country ==null ? \"N/A\" : teacherData.country}}\n                                    </p>\n                                </div> -->\n\n                                <!-- <div class=\"col-md-6\">\n                                    <label>State</label>\n                                    <p class=\"hd_p\">\n                                       {{teacherData.state == null ? \"N/A\" : teacherData.state}}\n                                    </p>\n                                </div> -->\n                                 \n                                <!-- <div class=\"col-md-6\">\n                                    <label>Date Of Birth</label>\n                                    <p class=\"hd_p\">\n                                        {{teacherData.dob == null ? \"N/A\" : teacherData.dob}} \n                                    </p>\n                                </div> -->\n<!-- \n                                <div class=\"col-md-6\">\n                                    <label>Facebook Id</label>\n                                    <p class=\"hd_p\">\n                                        {{teacherData.fb == null ? \"N/A\" : teacherData.fb}} \n                                    </p>\n                                </div> -->\n\n                                <!-- <div class=\"col-md-6\">\n                                    <label>Google Id</label>\n                                    <p class=\"hd_p\">\n                                        {{teacherData.google == null ? \"N/A\" : teacherData.google}} \n                                    </p>\n                                </div> -->\n\n                                <div class=\"col-md-6\">\n                                    <label>User Type</label>\n                                    <p class=\"hd_p\">\n                                        {{teacherData.type == null ? \"N/A\" : teacherData.type}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                   \n                                    <label>Status</label>\n                                    <p class=\"hd_p\">\n                                        {{teacherData.status}} \n                                    </p>\n                                </div>\n                                \n                                \n                            </div>\n                           \n                            <div class=\"text-center\" *ngIf=\"teacherData.status == 'inactive'\">\n                                <!--  -->\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('active')\">Active</button>\n                                <!-- &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('inactive')\" >Inactive</button> -->\n                                <!-- (click)=\"onStatus('Decline')\" -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/teacher_list\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"teacherData.status == 'active'\">\n                               <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('inactive')\" >Inactive</button>\n                                &nbsp;&nbsp;&nbsp; <button mat-raised-button type=\"submit\" routerLink=\"/teacher_list\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                          </div>\n                         </div>\n               </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "clsX":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent, AddCategoryDialog, EditCategoryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryDialog", function() { return AddCategoryDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryDialog", function() { return EditCategoryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.component.html */ "6Cpu");
/* harmony import */ var _category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component.css */ "cUD1");
/* harmony import */ var _raw_loader_add_category_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./add-category.html */ "zz07");
/* harmony import */ var _raw_loader_edit_category_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./edit-category.html */ "YPFg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
















var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.imagePath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__["environment"].cateImg;
        this.displayedColumns = ['position', 'category', 'image', 'subcategory', 'action'];
        this.currentPage = 10;
        this.currentIndex = 0;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.currentPage = 10;
        // console.log("pagesizeee",this.pageSize)
        this.currentIndex = 0;
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.responseData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.datamodel = {};
        this.getAllCategory();
    };
    CategoryComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    CategoryComponent.prototype.getPageSizeOptions = function () {
        return [10, 20, 30];
    };
    CategoryComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        console.log('*******', evt);
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        this.currentPage = evt.pageSize;
        this.currentIndex = evt.pageIndex;
        var obj = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        console.log(this.reqData);
        this.service.allCategory(obj).subscribe(function (res) {
            console.log('paginator limit', res);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                if (_this.filterValue) {
                    _this.dataSource.filter = _this.filterValue;
                }
                console.log('dataSource', _this.dataSource);
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    CategoryComponent.prototype.getAllCategory = function () {
        var _this = this;
        var obj = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.allCategory(obj).subscribe(function (res) {
            // console.log('getTableData******',res.data);
            if (res) {
                // this.length = res.data.count
                _this.dataSource = res.data.rows;
                _this.length = res.data.count;
                // this.responseData=new MatTableDataSource(res.data);
                console.log('dataSource', _this.dataSource);
                _this.loader = false;
            }
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    CategoryComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.filterCategoryList(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                    // this.length = res.data.count
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;
                    // this.tableData = data.data;
                    // this.backUpTableData = data.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    CategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Category!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteCategory(id).subscribe(function (data) {
                    console.log('deleted data', data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire('Deleted!', 'This Category has been deleted.', 'success');
                    // this.getAllCategory()
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire('Cancelled', 'This Category is safe :)', 'error');
            }
        });
    };
    CategoryComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddCategoryDialog, {
            // height: '350px',
            width: '600px',
            id: this.route.snapshot.params.id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            // this.reqData.offset = 0
            // this.reqData.limit = 10
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            _this.getAllCategory();
        });
    };
    CategoryComponent.prototype.openEditDialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditCategoryDialog, {
            // height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            // this.reqData.offset = 0
            // this.reqData.limit = 10
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            _this.getAllCategory();
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
    ]; };
    CategoryComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
    };
    CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-category',
            template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());

//add category dialog box
var AddCategoryDialog = /** @class */ (function () {
    function AddCategoryDialog(fb, dialogRef, service, route) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.addCategory = {
            category: "",
        };
        this.bookCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            bookCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
        });
    }
    AddCategoryDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddCategoryDialog.prototype.ngOnInit = function () {
    };
    AddCategoryDialog.prototype.createCategory = function () {
        var _this = this;
        //alert(this.dialogRef.id);
        console.log("Category : ", this.addCategory.category);
        var formData = new FormData();
        formData.append('category_name', this.addCategory.category);
        // formData.append('description', this.addCategory.description);
        this.service.addCategory(formData).subscribe(function (res) {
            console.log("Data Successfully Inserted!", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.dialogRef.close();
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    AddCategoryDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AddCategoryDialog.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
    ]; };
    AddCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'add-category-dialog',
            template: _raw_loader_add_category_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"], _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
    ], AddCategoryDialog);
    return AddCategoryDialog;
}());

///Edit Category 
var EditCategoryDialog = /** @class */ (function () {
    function EditCategoryDialog(dialogRef, service, route, router) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.addCategory = {
            category: ""
        };
    }
    EditCategoryDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditCategoryDialog.prototype.ngOnInit = function () {
        var _this = this;
        var obj = {
            category_id: this.dialogRef.id
        };
        // console.log("Edit Id: ",)
        this.service.getCategoryById(obj).subscribe(function (res) {
            // console.log("Data : ",res);
            _this.addCategory.category = res.data.category_name;
        });
    };
    EditCategoryDialog.prototype.editCategory = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('category_name', this.addCategory.category);
        // formData.append('description', this.addCategory.description);
        formData.append('category_id', this.dialogRef.id);
        this.service.updateCategory(formData).subscribe(function (data) {
            console.log("Data Successfully Updated!", data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            // this.router.navigate(['/category']);
            _this.dialogRef.close();
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    EditCategoryDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditCategoryDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
    ]; };
    EditCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'edit-category-dialog',
            template: _raw_loader_edit_category_html__WEBPACK_IMPORTED_MODULE_4__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], EditCategoryDialog);
    return EditCategoryDialog;
}());

//Add Sub-category


/***/ }),

/***/ "co1N":
/*!**************************************************************************!*\
  !*** ./src/app/teacher-faq/add-teacher-faq/add-teacher-faq.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddTeacherFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherFaqComponent", function() { return AddTeacherFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_teacher_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-teacher-faq.component.html */ "VCa0");
/* harmony import */ var _add_teacher_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-teacher-faq.component.css */ "Gv57");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);









var AddTeacherFaqComponent = /** @class */ (function () {
    function AddTeacherFaqComponent(service, route, router, fb) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'teacher_faq';
        this.teacherFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AddTeacherFaqComponent.prototype.ngOnInit = function () {
    };
    AddTeacherFaqComponent.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_type: this.faq,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.addFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.router.navigate(['/teacherFaq']);
            // this.closeDialog();
            //   this.ngOnInit()
        });
    };
    AddTeacherFaqComponent.ctorParameters = function () { return [
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddTeacherFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-teacher-faq',
            template: _raw_loader_add_teacher_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_teacher_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddTeacherFaqComponent);
    return AddTeacherFaqComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    // endPoint: "https://developers.promaticstechnologies.com:3003/",
    // endPoint_localhost: "http://localhost:3002/",
    endPoint: "https://production.promaticstechnologies.com:3009/",
    home_image: "https://production.promaticstechnologies.com/bridgegap_apis/public/home_banner_images/",
    testimonials_img: "https://production.promaticstechnologies.com/bridgegap_apis/public/",
    banner_img: "https://production.promaticstechnologies.com/bridgegap_apis/public/",
    category_images: "https://production.promaticstechnologies.com/bridgegap_apis/public/",
    cateImg: "https://production.promaticstechnologies.com/bridgegap_apis/public/category_images/",
    subCatImg: "https://production.promaticstechnologies.com/bridgegap_apis/public/sub_category_images/",
    subCategory_images: "https://production.promaticstechnologies.com/bridgegap_apis/public/",
    engaging_image: "https://production.promaticstechnologies.com/bridgegap_apis/public/engaging_and_efficient_images/",
    engag_img: "https://production.promaticstechnologies.com/bridgegap_apis/public/",
    how_it_works_img: "https://production.promaticstechnologies.com/bridgegap_apis/public/how_its_works_images/",
    how_it_img: "https://production.promaticstechnologies.com/bridgegap_apis/public/",
    application_image: "https://production.promaticstechnologies.com/bridgegap_apis/public/teacher_videos/",
    courses_video: "https://production.promaticstechnologies.com/bridgegap_apis/public/courseImages/",
    courses_images: "https://production.promaticstechnologies.com/bridgegap_apis/public/courseImages/"
};


/***/ }),

/***/ "czZ8":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./testimonials.component.html */ "L30g");
/* harmony import */ var _testimonials_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonials.component.css */ "K/lK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









// import { log } from 'console';
var TestimonialsComponent = /** @class */ (function () {
    //   ,'image'
    function TestimonialsComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.displayedColumns = ['position', 'author_name', 'designation', 'description', 'action'];
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 10;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.responseData);
        this.datamodel = {};
        this.allTestimonial();
    };
    TestimonialsComponent.prototype.allTestimonial = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.loader = true;
        this.service.allTestimonial(list).subscribe(function (res) {
            console.log('testimonial data', res);
            if (res) {
                _this.length = res.data.count;
                _this.dataSource = res.data.rows;
                console.log("datasource", _this.dataSource);
            }
            _this.loader = false;
        }, function (err) {
            console.log(err);
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    };
    TestimonialsComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        // this.filterValue = filterValue.trim().toLowerCase();
        var obj = {
            search: filterValue
        };
        if (obj.search) {
            this.service.testimonialFilter(obj).subscribe(function (res) {
                console.log('filterResponse', res);
                if (res) {
                    _this.dataSource = res.data;
                    // this.dataSource = new MatTableDataSource(data.data);
                    // this.length = res.data.count
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;
                    // this.tableData = data.data;
                    // this.backUpTableData = data.data;
                }
            }, function (err) {
                console.log(err);
                if (err.status >= 400) {
                    // this.toastr.error('Internal Error', 'Error')
                    console.log('Invalid Credential!!!');
                }
                else {
                    // this.toastr.error('Internet Connection Error', 'Error')
                    console.log('Internet Connection Error');
                }
            });
        }
        else {
            this.ngOnInit();
        }
    };
    TestimonialsComponent.prototype.deleteTestimonials = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Testimonial!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteTestimonials(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'This Testimonial has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'This Testimonial is safe :)', 'error');
            }
        });
    };
    TestimonialsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    TestimonialsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-testimonials',
            template: _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_testimonials_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "daP9":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses-management/view-course-details/reject-course.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"rejectForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\">Reason For Rejection</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                \n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                    <mat-label>Message</mat-label>\n                                    <textarea matInput placeholder=\"Message\" formControlName=\"message\" [(ngModel)]=\"message\" ></textarea>\n                                </mat-form-field>\n                                <div *ngIf=\"rejectForm.controls['message'].touched &&\n                                rejectForm.controls['message'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"rejectForm.controls['message'].errors &&\n                                  rejectForm.controls['message'].errors.required\">\n                                  Message is required.</div>\n                              </div>\n                                \n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" [disabled]=\"!rejectForm.valid\" (click)=\"reject('rejected')\">Reject</button>\n                   \n                </div>\n            </form>\n\n\n\n\n\n\n\n\n\n               \n                <!-- <form [formGroup]=\"rejectForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title ft\">Reason For Rejection</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                               \n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                            <textarea matInput placeholder=\"Message\" formControlName=\"message\" [(ngModel)]=\"message\" ></textarea>\n                                        </mat-form-field>\n                                        <div *ngIf=\"rejectForm.controls['message'].touched &&\n                                        rejectForm.controls['message'].invalid\"\n                                         class=\"text-danger\">\n                                      <div *ngIf=\"rejectForm.controls['message'].errors &&\n                                          rejectForm.controls['message'].errors.required\">\n                                          Message is required.</div>\n                                      </div>\n                                        \n                                            \n                                    </div>\n                               \n                         \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"reject('Decline')\">Reject</button>\n                    </div>\n                </form> -->\n            \n        \n  \n</div>\n");

/***/ }),

/***/ "f3C+":
/*!**************************************************************************!*\
  !*** ./src/app/newsletter-management/newsletter-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewsletterManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterManagementComponent", function() { return NewsletterManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newsletter_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newsletter-management.component.html */ "HzSU");
/* harmony import */ var _newsletter_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-management.component.css */ "1Blb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NewsletterManagementComponent = /** @class */ (function () {
    function NewsletterManagementComponent() {
    }
    NewsletterManagementComponent.prototype.ngOnInit = function () {
    };
    NewsletterManagementComponent.ctorParameters = function () { return []; };
    NewsletterManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-newsletter-management',
            template: _raw_loader_newsletter_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_newsletter_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NewsletterManagementComponent);
    return NewsletterManagementComponent;
}());



/***/ }),

/***/ "f49U":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-three/section-three.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n    <h2 >HOW IT WORKS MANAGEMENT</h2>\n </div>\n <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          \n          <div class=\"card-body\">\n            <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n              <button mat-button class=\"theme-btn\" routerLink=\"/create_\">Add</button>\n            </div> -->\n            <mat-form-field>\n              <mat-label>Search</mat-label>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n            </mat-form-field>\n       \n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                      <!-- Position -->\n                        \n                      <ng-container matColumnDef=\"position\" class=\"mat-row\">\n                        <th mat-header-cell *matHeaderCellDef >S.No\n                        </th>\n                        <td mat-cell *matCellDef=\"let element let i=index\"> {{i+1}} </td>\n\n                    </ng-container>   \n\n                      <ng-container matColumnDef=\"image\" class=\"mat-row\">\n                          <th mat-header-cell *matHeaderCellDef >Image\n                          </th>\n                          <td mat-cell *matCellDef=\"let element \"> <img src=\"{{imagePath}}{{element.image}}\" class=\"img-fluid prfile_img\"> </td>\n  \n                      </ng-container>   \n  \n                      <ng-container matColumnDef=\"heading\" class=\"mat-row\">\n                          <th mat-header-cell *matHeaderCellDef >Heading\n                          </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.heading}} </td>\n  \n                      </ng-container>      \n                      \n                      <ng-container matColumnDef=\"description\" class=\"mat-row\">\n                        <th mat-header-cell *matHeaderCellDef >Description\n                        </th>\n                        <td class=\"ellipsis\" mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n\n                    </ng-container>  \n                        \n                      <ng-container matColumnDef=\"Action\" class=\"mat-row\">\n                          <th mat-header-cell *matHeaderCellDef > Action </th>\n                          <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                              <button  mat-icon-button routerLink=\"/edit_/{{element.id}}\">\n                                  <mat-icon >edit</mat-icon>\n                              </button>\n                              <button  mat-icon-button (click)=\"delete(element.id)\">\n                                  <mat-icon >delete</mat-icon>\n                              </button>\n                          \n                        </td>\n                         \n                      </ng-container>\n  \n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <div>\n                      <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                          (page)=\"paginationOptionChange($event)\">\n                      </mat-paginator>\n                  </div>\n              </div>\n          </div> \n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "f931":
/*!********************************************************************!*\
  !*** ./src/app/category/edit-category/edit-category.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\n\n    mat-form-field{\n        width: 100%;\n    }\n    span.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n    .inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n    .inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n    .inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n    .mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n    .inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n    .ft{\n        font-size: 16px;\n    } */\n\n\n\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n\n\n\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n\n\n\n    .ft{\n            font-size: 16px;\n        }\n\n\n\n    mat-form-field{\n            width: 100%;\n        }\n\n\n\n    span.mat_imag {\n            width: 200px;\n            height: 200px;\n            background: #fafafa;\n            display: block;\n            margin: 0 auto;\n        }\n\n\n\n    .inpt_icon {\n            position: absolute;\n            top: -12px;\n            right: -13px;\n            width: 40px;\n            height: 40px;\n            border-radius: 100%;\n            overflow: hidden;\n            background: #6aa524;\n        }\n\n\n\n    .inpt_icon .fa {\n            color: #fff;\n            position: absolute;\n            top: 9px;\n            right: 12px;\n            font-size: 17px;\n            z-index: 0;\n            cursor: pointer;\n        }\n\n\n\n    .inpt_icon input {\n            width: 100%;\n            height: 100%;\n            opacity: 0;\n            cursor: pointer;\n            position: relative;\n            z-index: 2;\n        }\n\n\n\n    .mat_imag img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n            object-fit: cover;\n        }\n\n\n\n    .inpt_icon .fa-edit{\n            color: #fff;\n            position: absolute;\n            top: 10px;\n            right: 9px;\n            font-size: 17px;\n            z-index: 0;\n            cursor: pointer;\n        }\n\n\n\n    .ft{\n            font-size: 16px;\n        }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpRU87Ozs7SUFJSDtRQUNJLHdCQUF3QjtRQUN4QixXQUFXO0lBQ2Y7Ozs7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCOzs7O0lBQ0E7WUFDUSxlQUFlO1FBQ25COzs7O0lBRUE7WUFDSSxXQUFXO1FBQ2Y7Ozs7SUFDQTtZQUNJLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1FBQ2xCOzs7O0lBQ0E7WUFDSSxrQkFBa0I7WUFDbEIsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsbUJBQW1CO1FBQ3ZCOzs7O0lBQ0E7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixXQUFXO1lBQ1gsZUFBZTtZQUNmLFVBQVU7WUFDVixlQUFlO1FBQ25COzs7O0lBQ0E7WUFDSSxXQUFXO1lBQ1gsWUFBWTtZQUNaLFVBQVU7WUFDVixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFVBQVU7UUFDZDs7OztJQUNBO1lBQ0ksV0FBVztZQUNYLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsaUJBQWlCO1FBQ3JCOzs7O0lBQ0E7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxVQUFVO1lBQ1YsZUFBZTtZQUNmLFVBQVU7WUFDVixlQUFlO1FBQ25COzs7O0lBQ0E7WUFDSSxlQUFlO1FBQ25CIiwiZmlsZSI6ImVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH0gKi9cblxuXG5cbiAgICAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYnRuLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG4gICAgLmZ0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmlucHRfaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgICAgcmlnaHQ6IC0xM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICAgICAgLm1hdF9pbWFnIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHRfaWNvbiAuZmEtZWRpdHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICJdfQ== */");

/***/ }),

/***/ "fl6C":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-three/edit-how-it-works/edit-how-it-works.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n    EDIT HOW IT WORKS</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form>\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n\n                        <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                            <mat-form-field class=\"example-full-width text-center\">\n                                <label>Upload Image</label>\n                                <input matInput readonly />\n                                <span class=\"mat_imag position-relative\">\n                                    <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                        src=\"assets/img/img-place.jpg\" />\n                                    \n                                    <img *ngIf=\"image\" class=\"img-responsive\"\n                                        [src]=\"image\" />\n                                    <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                    <span class=\"inpt_icon\">\n                                        <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                            (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                        <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                        <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                    </span>\n                                </span>\n                            </mat-form-field>\n                           \n                        </div> \n\n\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Heading\" maxlength=\"50\" [(ngModel)]=\"workData.heading\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n            \n                                <!-- Designation -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Description\" maxlength=\"150\" [(ngModel)]=\"workData.description\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                                \n                                <!-- Image -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile value=\"testimonialsData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div>                   -->\n                            </div>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"update()\">Update</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/section_3\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "hERL":
/*!*************************************************************************!*\
  !*** ./src/app/section-second/edit-engaging/edit-engaging.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditEngagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEngagingComponent", function() { return EditEngagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_engaging_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-engaging.component.html */ "AAYs");
/* harmony import */ var _edit_engaging_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-engaging.component.css */ "aHhy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");









var EditEngagingComponent = /** @class */ (function () {
    function EditEngagingComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.engagingData = {
            heading: "",
            description: "",
            image: "",
        };
    }
    EditEngagingComponent.prototype.ngOnInit = function () {
        this.imgUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].engag_img + 'engaging_and_efficient_images/';
        console.log('iddddd', this.route.snapshot.params.id);
        this.getEngagingById(this.route.snapshot.params.id);
    };
    EditEngagingComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.engagingData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    EditEngagingComponent.prototype.getEngagingById = function (id) {
        var _this = this;
        // console.log(this.bannerData);
        var obj = {
            id: id
        };
        this.service.getEngagingAndEfficientsById(obj).subscribe(function (data) {
            console.log(" edit data**", data);
            _this.engagingData.heading = data.data.heading;
            _this.engagingData.description = data.data.description;
            _this.engagingData.image = data.data.image;
            _this.testi_image = data.data.image;
            // this.bannerData.description = data.data.description;
        })
            , function (err) {
                console.log(err);
                if (err.status >= 400) {
                    console.log('Invalid Credential!!!');
                }
                else {
                    console.log('Internet Connection Error');
                }
            };
    };
    EditEngagingComponent.prototype.update = function () {
        var _this = this;
        console.log('id***', this.route.snapshot.params.id);
        console.log('heading/', this.engagingData.heading);
        console.log('description', this.engagingData.description);
        console.log('image', this.engagingData.image);
        // console.log(this.bannerData.description);
        var formData = new FormData();
        formData.append('id', this.route.snapshot.params.id);
        formData.append("image", this.engagingData.image);
        formData.append("heading", this.engagingData.heading);
        formData.append("description", this.engagingData.description);
        this.service.updateEngagingAndEfficients(formData).subscribe(function (data) {
            console.log(" Successfully Updated!//////", data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            _this.router.navigate(['/section_2']);
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    EditEngagingComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EditEngagingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-engaging',
            template: _raw_loader_edit_engaging_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_engaging_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditEngagingComponent);
    return EditEngagingComponent;
}());



/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");













































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "hr2U":
/*!*****************************************************************************************************!*\
  !*** ./src/app/teacher-applications/view-teacher-application/view-teacher-application.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ViewTeacherApplicationComponent, RejectApplicationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTeacherApplicationComponent", function() { return ViewTeacherApplicationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectApplicationDialog", function() { return RejectApplicationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_teacher_application_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-teacher-application.component.html */ "zwek");
/* harmony import */ var _view_teacher_application_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-teacher-application.component.css */ "ZMr7");
/* harmony import */ var _raw_loader_reject_application_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./reject-application.html */ "CItg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");












var ViewTeacherApplicationComponent = /** @class */ (function () {
    function ViewTeacherApplicationComponent(dialog, fb, service, route, router, sanitizer) {
        this.dialog = dialog;
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.videoPath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].application_image;
        this.applicationData = {
            name: "",
            email: "",
            phone: "",
            country: "",
            state: "",
            city: "",
            nationality: "",
            address: "",
            experiance: "",
            benefits: "",
            teach: "",
            benefitsOfClass: "",
            whatWillYouTeach: "",
            link: "",
            status: "",
            date: "",
            requirement: "",
            classes_teach_data: [],
            academic_qualifications: [],
            professional_qualifications: []
        };
        this.createForm();
    }
    ViewTeacherApplicationComponent.prototype.createForm = function () {
        this.applicationForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 'dsfddf', disabled: true }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            experiance: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            teach: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            benefitsOfClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            whatWillYouTeach: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
        });
    };
    ViewTeacherApplicationComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 3000000;
        this.getTeacherList();
        this.StudentId = this.route.snapshot.params.id;
    };
    ViewTeacherApplicationComponent.prototype.getTeacherList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.showTeacherApplication(list).subscribe(function (res) {
            console.log('*****getStudentData******', res.data);
            var response = res.data.rows;
            if (response) {
                response.forEach(function (element) {
                    var matchId = element.id;
                    if (matchId == _this.StudentId) {
                        _this.applicationData.name = element.teacher_name;
                        _this.applicationData.email = element.email_id;
                        _this.applicationData.phone = element.mobile_number;
                        _this.applicationData.country = element.country_data.name;
                        _this.applicationData.state = element.state_data.name;
                        _this.applicationData.city = element.city_data.name;
                        _this.applicationData.nationality = element.nationality;
                        _this.applicationData.address = element.address;
                        _this.applicationData.experiance = element.teacher_experience;
                        _this.applicationData.benefits = element.learner_benefits_of_class;
                        _this.applicationData.teach = element.how_will_you_teach;
                        _this.applicationData.benefitsOfClass = element.learner_benefits_of_class;
                        _this.applicationData.whatWillYouTeach = element.what_will_you_teach;
                        _this.applicationData.link = element.websites_link;
                        _this.applicationData.requirement = element.requirement_for_class;
                        _this.applicationData.status = element.application_status;
                        _this.applicationData.date = element.created_at;
                        _this.applicationData.classes_teach_data = element.classes_teach_data;
                        console.log(" this.applicationData.classes_teach_data", _this.applicationData.classes_teach_data);
                        _this.applicationData.academic_qualifications = element.academic_qualifications;
                        console.log(" this.applicationData.academic_qualifications", _this.applicationData.academic_qualifications);
                        _this.applicationData.professional_qualifications = element.professional_qualifications;
                        console.log(" this.applicationData.professional_qualifications", _this.applicationData.professional_qualifications);
                        var videoUrl = _this.videoPath + element.video;
                        console.log(videoUrl);
                        _this.video = _this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
                        // this.video=element.video;
                    }
                });
            }
        });
    };
    ViewTeacherApplicationComponent.prototype.onStatus = function () {
        var _this = this;
        console.log("status", status);
        var obj = {
            id: this.StudentId,
        };
        console.log("status", obj);
        this.service.applicationApproved(obj).subscribe(function (res) {
            // console.log("res*****",res)
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success..!', 'Successfully Accepted!', 'success');
            _this.router.navigate(['/teacherApplication']);
        });
    };
    ViewTeacherApplicationComponent.prototype.rejectApplication = function () {
        var dialogRefEdit = this.dialog.open(RejectApplicationDialog, {
            // height: '350px',
            width: '600px',
            id: this.StudentId
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            // this.reqData.offset = 0
            // this.reqData.limit = 10
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            // this.getAllCategory()
        });
    };
    ViewTeacherApplicationComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
    ]; };
    ViewTeacherApplicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-view-teacher-application',
            template: _raw_loader_view_teacher_application_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_view_teacher_application_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]])
    ], ViewTeacherApplicationComponent);
    return ViewTeacherApplicationComponent;
}());

////////Reject Application Dialog Box//////////////////////
var RejectApplicationDialog = /** @class */ (function () {
    function RejectApplicationDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.rejectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    }
    RejectApplicationDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RejectApplicationDialog.prototype.ngOnInit = function () {
        this.StudentId = this.dialogRef.id;
    };
    RejectApplicationDialog.prototype.reject = function (status) {
        var _this = this;
        console.log("status", status);
        var obj = {
            id: this.StudentId,
            status: status,
        };
        var rejectObj = {
            user_id: this.StudentId,
            message: this.message
        };
        console.log("Rejectstatus", rejectObj);
        console.log("status", obj);
        // this.service.applicationApproved(obj).subscribe(res => {
        // console.log("res*****",res)
        this.service.applicationRejected(rejectObj).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success..!', 'Application Rejected!', 'success');
            _this.dialogRef.close();
            _this.router.navigate(['/teacherApplication']);
        });
        // })
    };
    RejectApplicationDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    RejectApplicationDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    RejectApplicationDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'reject-application-dialog',
            template: _raw_loader_reject_application_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RejectApplicationDialog);
    return RejectApplicationDialog;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        var html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName('html')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (html.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                html.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        // titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        // return 'Dashboard';
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('login');
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedin');
        console.log("Toekn: ", localStorage.getItem('token'));
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "j7xL":
/*!***********************************************************************!*\
  !*** ./src/app/parent-faq/add-parent-faq/add-parent-faq.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddParentFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentFaqComponent", function() { return AddParentFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_parent_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-parent-faq.component.html */ "6fx7");
/* harmony import */ var _add_parent_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-parent-faq.component.css */ "BvXA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);









var AddParentFaqComponent = /** @class */ (function () {
    function AddParentFaqComponent(service, route, router, fb) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'parent_faq';
        this.parentFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AddParentFaqComponent.prototype.ngOnInit = function () {
    };
    AddParentFaqComponent.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_type: this.faq,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.addFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.router.navigate(['/parentFaq']);
            // this.closeDialog();
            //   this.ngOnInit()
        });
    };
    AddParentFaqComponent.ctorParameters = function () { return [
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddParentFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-parent-faq',
            template: _raw_loader_add_parent_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_parent_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddParentFaqComponent);
    return AddParentFaqComponent;
}());



/***/ }),

/***/ "jCzT":
/*!******************************************************************************!*\
  !*** ./src/app/section-second/create-engaging/create-engaging.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lbmdhZ2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtRQUNRLGVBQWU7SUFDbkI7QUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCO0FBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixXQUFXO1FBQ1gsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsaUJBQWlCO0lBQ3JCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxlQUFlO0lBQ25CIiwiZmlsZSI6ImNyZWF0ZS1lbmdhZ2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YWE1MjQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4uZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHNwYW4ubWF0X2ltYWcge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmlucHRfaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgcmlnaHQ6IC0xM3B4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmFhNTI0O1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgLm1hdF9pbWFnIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEtZWRpdHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogOXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfSJdfQ== */");

/***/ }),

/***/ "mroN":
/*!****************************************************************************!*\
  !*** ./src/app/teacher-faq/edit-teacher-faq/edit-teacher-faq.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditTeacherFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeacherFaqComponent", function() { return EditTeacherFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_teacher_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-teacher-faq.component.html */ "aFyv");
/* harmony import */ var _edit_teacher_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-teacher-faq.component.css */ "b2lK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);









var EditTeacherFaqComponent = /** @class */ (function () {
    function EditTeacherFaqComponent(router, service, route) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.faq = 'teacher_faq';
        this.teacherFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            // ({value:'dsfddf', disabled: true})
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    EditTeacherFaqComponent.prototype.ngOnInit = function () {
        this.getTeacherFaq();
        this.LinkId = this.route.snapshot.params.id;
    };
    EditTeacherFaqComponent.prototype.getTeacherFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.EnterQuestion = element.question;
                    _this.EnterAnswer = element.answer;
                }
            });
        });
    };
    EditTeacherFaqComponent.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_id: this.LinkId,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.updateFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.router.navigate(['/generalFaq']);
            // this.closeDialog();
            // this.ngOnInit()
        });
    };
    EditTeacherFaqComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditTeacherFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-teacher-faq',
            template: _raw_loader_edit_teacher_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_teacher_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditTeacherFaqComponent);
    return EditTeacherFaqComponent;
}());



/***/ }),

/***/ "oIo8":
/*!***********************************************************!*\
  !*** ./src/app/create-banner/create-banner.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n.load_er{\n        position: fixed;\n        z-index: 99;\n        left: 50%;\n        top: 50%;\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxTQUFTO1FBQ1QsUUFBUTtRQUNSIiwiZmlsZSI6ImNyZWF0ZS1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDowcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhNTI0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZ0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBzcGFuLm1hdF9pbWFnIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbnB0X2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogIzZhYTUyNDtcbiAgICB9XG4gICAgLmlucHRfaWNvbiAuZmEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5tYXRfaW1hZyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhLWVkaXR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDlweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAubG9hZF9lcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "oazE":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials-edit/testimonials-edit.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n    EDIT TESTIMONIALS</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n <form >\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Testimonials</h4>\n        </div>\n        <div class=\"card-body block-card\">\n            <div class=\"row\">\n\n\n                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                    <mat-form-field class=\"example-full-width text-center\">\n                        <label>Upload Image</label>\n                        <input matInput readonly />\n                        <span class=\"mat_imag position-relative\">\n                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                src=\"assets/img/img-place.jpg\" />\n                            \n                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                [src]=\"image\" />\n                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                            <span class=\"inpt_icon\">\n                                <input type=\"file\" #uploadFile value=\"bannerData.image\"\n                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                            </span>\n                        </span>\n                    </mat-form-field>\n                   \n                </div> \n                <!-- Author Name -->\n                <div class=\"col-md-12\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Author Name\" maxlength=\"60\" [(ngModel)]=\"testimonialsData.authorName\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                    </mat-form-field>\n                </div>\n\n                <!-- Designation -->\n                <div class=\"col-md-12\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Designation\" maxlength=\"60\" [(ngModel)]=\"testimonialsData.designation\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                    </mat-form-field>\n                </div>\n                \n                <!-- Image -->\n                <!-- <div class=\"col-md-12\">\n\n\n\n                    <mat-form-field class=\"example-full-width\">\n                        <label>Image</label>\n                        <input matInput readonly />\n                        <span class=\"mat_imag position-relative\">\n                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                src=\"assets/img/img-place.jpg\" />\n                            \n                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                [src]=\"image\" />\n                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                            <span class=\"inpt_icon\">\n                                <input type=\"file\" #uploadFile value=\"testimonialsData.image\"\n                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                            </span>\n                        </span>\n                    </mat-form-field>\n                   \n                </div> -->\n                \n                <!-- Description -->\n                <div class=\"col-md-12\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Description\" maxlength=\"150\" [(ngModel)]=\"testimonialsData.description\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <!-- <div class=\"text-center\">\n                <button mat-raised-button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!testimonialForm.valid\" (click)=\"saveTestimonials()\">Submit</button>\n            </div> -->\n            <div class=\"text-center\">\n                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"updateTestimonials()\">Submit</button>\n                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/testimonials\" class=\"btn theme-btn ft\">Back</button>\n            </div>\n          </div>\n         </div>\n       </form>\n     </div>\n   </div>\n  </div>\n</div>");

/***/ }),

/***/ "qFhu":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-faq/add-gen-faq/add-gen-faq.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     ADD GEN FAQ\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"genFaqForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" >\n                                    <mat-label>Enter Question</mat-label>\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <textarea matInput rows=\"2\" formControlName=\"question\"  [(ngModel)]=\"EnterQuestion\"\n                                        ></textarea>\n    \n                                    </mat-form-field>\n                                    <div *ngIf=\"genFaqForm.controls['question'].touched &&\n                                     genFaqForm.controls['question'].invalid\"\n                                     class=\"text-danger\">\n                                   \n                                   <div *ngIf=\"genFaqForm.controls['question'].errors &&\n                                      genFaqForm.controls['question'].errors.required\"> \n                                      Question is required.</div>\n                                    </div>\n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-label>Enter Answer</mat-label>\n                                    <editor\n                                    [init]=\"{\n                                        height: 350,\n                                        menubar: false,\n                                        plugins: [\n                                        'advlist autolink lists link image charmap print preview anchor',\n                                        'searchreplace visualblocks code fullscreen',\n                                        'insertdatetime media table paste code help wordcount'\n                                        ],\n                                        toolbar:\n                                        'undo redo | formatselect | bold italic backcolor | \\\n                                        alignleft aligncenter alignright alignjustify | \\\n                                        bullist numlist outdent indent | removeformat | help'\n                                    }\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></editor>\n                                            <div *ngIf=\"genFaqForm.controls['answer'].touched &&\n                                        genFaqForm.controls['answer'].invalid\"\n                                        class=\"text-danger\">\n                                    \n                                    <div *ngIf=\"genFaqForm.controls['answer'].errors &&\n                                        genFaqForm.controls['answer'].errors.required\"> \n                                        Answer is required.</div>\n                                        </div>\n\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            <br>\n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!genFaqForm.valid\" (click)=\"addFaq()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/generalFaq\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "qgk4":
/*!*****************************************************************************************!*\
  !*** ./src/app/courses-management/view-course-details/view-course-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewCourseDetailsComponent, RejectCourseDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCourseDetailsComponent", function() { return ViewCourseDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectCourseDialog", function() { return RejectCourseDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_course_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-course-details.component.html */ "CNgx");
/* harmony import */ var _view_course_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-course-details.component.css */ "Icj5");
/* harmony import */ var _raw_loader_reject_course_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./reject-course.html */ "daP9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");












var ViewCourseDetailsComponent = /** @class */ (function () {
    function ViewCourseDetailsComponent(dialog, fb, service, route, router, sanitizer) {
        this.dialog = dialog;
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.videoPath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].courses_video;
        this.imagePath = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].courses_images;
        this.courseData = {
            fullname: "",
            course_type: "",
            course_title: "",
            category_name: "",
            sub_category_name: "",
            num_of_weeks: "",
            num_of_sessions_week: "",
            num_of_minute_session: "",
            minimum_age: "",
            maximum_age: "",
            minimum_learners: "",
            maximum_learners: "",
            courses_overview: "",
            learning_objectives: "",
            course_breakup: "",
            assignment: "",
            assessment: "",
            requirements: "",
            globally_price: "",
            local_price: "",
            multiple_session_courses: "",
            status: "",
            date: "",
            save_type: "",
            zoom_class_link: "",
        };
    }
    ViewCourseDetailsComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 100000;
        this.getCourseList();
        this.courseId = this.route.snapshot.params.id;
        console.log("courseiid", this.courseId);
        // console.log("assignment",this.courseData.assignment)
        // console.log("assesment",this.courseData.assessment)
    };
    ViewCourseDetailsComponent.prototype.getCourseList = function () {
        var _this = this;
        var list = {
            limit: this.reqData.limit,
            offset: this.reqData.offset
        };
        this.service.get_all_courses(list).subscribe(function (res) {
            console.log('getCourseData', res.data.rows);
            var response = res.data.rows;
            if (response) {
                response.forEach(function (element) {
                    var matchId = element.id;
                    if (matchId == _this.courseId) {
                        _this.courseData.fullname = element.teacher_data.fullname;
                        _this.courseData.course_type = element.course_type;
                        _this.courseData.course_title = element.course_title;
                        console.log("element.category_data.category_name", element.category_data.category_name);
                        _this.courseData.category_name = element.category_data.category_name;
                        _this.courseData.sub_category_name = element.sub_category_data.sub_category_name;
                        _this.courseData.num_of_weeks = element.num_of_weeks;
                        _this.courseData.num_of_sessions_week = element.num_of_sessions_week;
                        _this.courseData.num_of_minute_session = element.num_of_minute_session;
                        _this.courseData.minimum_age = element.minimum_age;
                        _this.courseData.maximum_age = element.maximum_age;
                        _this.courseData.minimum_learners = element.minimum_learners;
                        _this.courseData.maximum_learners = element.maximum_learners;
                        _this.courseData.courses_overview = element.courses_overview;
                        _this.courseData.learning_objectives = element.learning_objectives;
                        _this.courseData.course_breakup = element.course_breakup;
                        _this.courseData.assignment = element.assignment;
                        console.log("assignment2feb", _this.courseData.assignment);
                        _this.courseData.assessment = element.assessment;
                        console.log("assesment2feb", _this.courseData.assessment);
                        _this.courseData.requirements = element.requirements;
                        _this.courseData.globally_price = element.globally_price;
                        _this.courseData.local_price = element.local_price;
                        _this.courseData.multiple_session_courses = element.multiple_session_courses;
                        _this.courseData.status = element.status;
                        _this.courseData.date = element.created_at;
                        _this.courseData.save_type = element.save_type;
                        _this.courseData.zoom_class_link = element.zoom_class_link;
                        var videoUrl = _this.videoPath + element.course_video;
                        console.log('urlllllllll', videoUrl);
                        _this.video = _this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
                        _this.courseImg = _this.imagePath + element.cover_photo;
                        // this.courseId=
                        // this.video=element.video;
                    }
                });
            }
        });
    };
    ViewCourseDetailsComponent.prototype.onStatus = function (evt) {
        var _this = this;
        // console.log("status",evt)
        // console.log("id****",id)
        var obj = {
            course_id: this.courseId,
            status: evt
        };
        // this.loader=true;
        this.service.change_status(obj).subscribe(function (res) {
            console.log("res*****", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success..!', 'Successfully Changed!', 'success');
            _this.router.navigate(['/courses']);
            // this.ngOnInit();
            // this.loader = false
        });
    };
    ViewCourseDetailsComponent.prototype.rejectCourse = function () {
        var dialogRefEdit = this.dialog.open(RejectCourseDialog, {
            // height: '350px',
            width: '600px',
            id: this.courseId
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.reqData = {}
            // this.reqData.offset = 0
            // this.reqData.limit = 10
            // this.dataSource = new MatTableDataSource(this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.datamodel = {}
            // this.getAllCategory()
        });
    };
    ViewCourseDetailsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
    ]; };
    ViewCourseDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-view-course-details',
            template: _raw_loader_view_course_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_view_course_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]])
    ], ViewCourseDetailsComponent);
    return ViewCourseDetailsComponent;
}());

////////Reject Course Dialog Box//////////////////////
var RejectCourseDialog = /** @class */ (function () {
    function RejectCourseDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.rejectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    }
    RejectCourseDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RejectCourseDialog.prototype.ngOnInit = function () {
        this.courseId = this.dialogRef.id;
    };
    RejectCourseDialog.prototype.reject = function (status) {
        var _this = this;
        console.log("status", status);
        // var  obj={
        //   id:this.StudentId,
        //   status:status,
        // }
        var rejectObj = {
            course_id: this.courseId,
            message: this.message,
            status: status
        };
        console.log("Rejectstatus", rejectObj);
        // console.log("status",obj)
        // this.service.applicationApproved(obj).subscribe(res => {
        // console.log("res*****",res)
        this.service.courseRejected(rejectObj).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Success..!', 'Course Rejected!', 'success');
            _this.dialogRef.close();
            _this.router.navigate(['/courses']);
        });
        // })
    };
    RejectCourseDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    RejectCourseDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    RejectCourseDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'reject-course-dialog',
            template: _raw_loader_reject_course_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RejectCourseDialog);
    return RejectCourseDialog;
}());



/***/ }),

/***/ "s1iN":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-faq/general-faq.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >GENERAL FAQ</h2>\n </div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" routerLink=\"/addGeneralFaq\" >Add Gen Faq </button>\n            <!-- (click)=\"addGenFaq()\" -->\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <!-- <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field> -->\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"question\">\n                        <th  width=\"300px\" class=\"text-center\" mat-header-cell *matHeaderCellDef>Questions</th>\n                        <td  width=\"300px\"  class=\"text-center  \" mat-cell *matCellDef=\"let element\">\n                          <div  class=\"babu text-center\" >\n                            <p>\n                              {{element.question}}\n                            </p>\n                          </div></td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"answer\">\n                        <th  width=\"350px\"   class=\"text-center\" mat-header-cell *matHeaderCellDef>Answers</th>\n                        <td  width=\"350px\"  class=\"text-center \" mat-cell *matCellDef=\"let element\">\n                          <div class=\"babu text-center\" [innerHTML]=\"element.answer \"></div></td>\n                    </ng-container>\n                    \n                   \n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th  width=\"150px\"   class=\"text-center\" mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       Action\n                    </th>\n                    <td  width=\"150px\"   class=\"text-center\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/editGenFaq/{{element.id}}\" >\n                              <!-- (click)=\"editGenDialog(element.id)\" -->\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            \n                            <button  mat-icon-button (click)=\"delete(element.id)\">\n                              <mat-icon >delete</mat-icon>\n                          </button>\n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <!-- <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div> -->\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "sC5k":
/*!****************************************************!*\
  !*** ./src/app/parent-faq/parent-faq.component.ts ***!
  \****************************************************/
/*! exports provided: ParentFaqComponent, AddParentFaqDialog, EditParentFaqDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentFaqComponent", function() { return ParentFaqComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentFaqDialog", function() { return AddParentFaqDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditParentFaqDialog", function() { return EditParentFaqDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parent_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parent-faq.component.html */ "EO2G");
/* harmony import */ var _parent_faq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent-faq.component.css */ "cJgW");
/* harmony import */ var _raw_loader_add_parent_faq_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./add-parent-faq.html */ "uGGy");
/* harmony import */ var _raw_loader_edit_parent_faq_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./edit-parent-faq.html */ "5PtA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);













var ParentFaqComponent = /** @class */ (function () {
    function ParentFaqComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.faq = 'parent_faq';
        this.responseData = [];
        this.displayedColumns = ['position', 'question', 'answer', 'action'];
    }
    ParentFaqComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.responseData);
        // this.datamodel = {}
        this.parentFaq();
    };
    ParentFaqComponent.prototype.parentFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.loader = true;
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("parentfaqres*****", res.data);
            if (res) {
                _this.dataSource = res.data;
                _this.loader = false;
                //   this.dataSource=res.data
            }
        });
    };
    ParentFaqComponent.prototype.addParentFaq = function () {
        var _this = this;
        var dialogRefEdit = this.dialog.open(AddParentFaqDialog, {
            // height: '350px',
            width: '600px',
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.parentFaq();
        });
    };
    ParentFaqComponent.prototype.editDialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditParentFaqDialog, {
            // height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.parentFaq();
        });
    };
    ParentFaqComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: 'Are you sure want to remove?',
            text: 'You will not be able to recover this Faq!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.service.deleteFaq(id).subscribe(function (data) {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Deleted!', 'This Faq has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Cancelled', 'This Faq is safe :)', 'error');
            }
        });
    };
    ParentFaqComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    ParentFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-parent-faq',
            template: _raw_loader_parent_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_parent_faq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], ParentFaqComponent);
    return ParentFaqComponent;
}());

///////Add Parent Faq /////////////////////
var AddParentFaqDialog = /** @class */ (function () {
    function AddParentFaqDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'parent_faq';
        this.parentFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    AddParentFaqDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddParentFaqDialog.prototype.ngOnInit = function () {
        this.LinkId = this.dialogRef.id;
    };
    AddParentFaqDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AddParentFaqDialog.prototype.addFaq = function () {
        var _this = this;
        var type = {
            faq_type: this.faq,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.addFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            //   this.ngOnInit()
        });
    };
    AddParentFaqDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    AddParentFaqDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'add-parent-faq-dialog',
            template: _raw_loader_add_parent_faq_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], AddParentFaqDialog);
    return AddParentFaqDialog;
}());

//////////Edit parent faq dialog/////////////////
var EditParentFaqDialog = /** @class */ (function () {
    function EditParentFaqDialog(dialogRef, service, route, router, fb) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.faq = 'parent_faq';
        this.teacherFaqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            // ({value:'dsfddf', disabled: true})
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    EditParentFaqDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditParentFaqDialog.prototype.ngOnInit = function () {
        //   this.getLink()
        this.getTeacherFaq();
        this.LinkId = this.dialogRef.id;
    };
    EditParentFaqDialog.prototype.getTeacherFaq = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('faq_type', this.faq);
        this.service.getFaq(formData).subscribe(function (res) {
            console.log("response", res.data);
            var data = res.data;
            data.forEach(function (element) {
                var id = element.id;
                if (_this.LinkId == id) {
                    _this.EnterQuestion = element.question;
                    _this.EnterAnswer = element.answer;
                }
            });
        });
    };
    EditParentFaqDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditParentFaqDialog.prototype.updateFaq = function () {
        var _this = this;
        var type = {
            faq_id: this.LinkId,
            answer: this.EnterAnswer,
            question: this.EnterQuestion
        };
        console.log("typr update", type);
        this.service.updateFaq(type).subscribe(function (res) {
            console.log("res123", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Updated Successfully!', 'success');
            _this.closeDialog();
            _this.ngOnInit();
        });
    };
    EditParentFaqDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    EditParentFaqDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'edit-parent-faq-dialog',
            template: _raw_loader_edit_parent_faq_html__WEBPACK_IMPORTED_MODULE_4__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], EditParentFaqDialog);
    return EditParentFaqDialog;
}());



/***/ }),

/***/ "suf6":
/*!**********************************************************!*\
  !*** ./src/app/create-banner/create-banner.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBannerComponent", function() { return CreateBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_banner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-banner.component.html */ "IWlm");
/* harmony import */ var _create_banner_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-banner.component.css */ "oIo8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var CreateBannerComponent = /** @class */ (function () {
    function CreateBannerComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.bannerData = {
            title: "",
            subtitle: "",
            image: "",
        };
        this.bannerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    CreateBannerComponent.prototype.ngOnInit = function () {
    };
    CreateBannerComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        var file = event.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            // this.toastr.warning('Please upload image file')
            return;
        }
        console.log(event.target.files[0]);
        this.bannerData.image = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = function (loadEvent) {
            var mainImage = fr.result;
            _this.image = mainImage;
        };
        fr.readAsDataURL(file);
    };
    CreateBannerComponent.prototype.addBanner = function () {
        var _this = this;
        var formData = new FormData();
        // formData.append("author_name",this.bannerData.title);
        // console.log("subtitle",this.bannerData.subtitle);
        // console.log("image", this.bannerData.image)
        // console.log("title", this.bannerData.title)
        formData.append("heading", this.bannerData.title);
        formData.append("sub_heading", this.bannerData.subtitle);
        formData.append("banner_image", this.bannerData.image);
        this.loader = true;
        this.service.createBanner(formData).subscribe(function (data) {
            console.log(" Successfully Created!");
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.router.navigate(['/section_1']);
            _this.loader = false;
        }, function (err) {
            if (err.status >= 400) {
                console.log("Inavalid Credentials!");
            }
            else {
                console.log("Internet Connection Error");
            }
        });
    };
    CreateBannerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CreateBannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-banner',
            template: _raw_loader_create_banner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_create_banner_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateBannerComponent);
    return CreateBannerComponent;
}());



/***/ }),

/***/ "uGGy":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent-faq/add-parent-faq.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .card .card-header .card-title {\n        margin-top:0px!important;\n        color: #fff;\n    }\n    .btn-success {\n        background-color: #6aa524;\n        color: #FFFFFF;\n    }\n    .ft{\n        font-size: 16px;\n    }\n    </style>\n  <div class=\"main-content\" style=\"position: relative;\">   \n        \n            <button mat-icon-button  (click)=\"closeDialog()\"\n                     style=\"position: absolute;\n                            right: -32px;\n                            top: -32px;\n                            transform: scale(0.75);\n                            outline: none;\n                            background-color: #ffffff!important;\n                            color: rgb(0, 0, 0);\n                            border-radius: 0px;\">\n                <mat-icon >close</mat-icon>\n            </button>\n \n            <form [formGroup]=\"parentFaqForm\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                        <!-- .card .card-header:not([data-background-color]) {\n                            background-color: #6AA524;\n                            padding-bottom: 0.5px; -->\n                        <h4 class=\"card-title ft\"> Add parent Faq</h4>\n                    </div>\n                    <div class=\"card-body block-card\">\n                        <div class=\"row\">\n                            <!-- <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                <mat-label>Type</mat-label>\n                                <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">                                \n                                    <input matInput  formControlName=\"type\" [(ngModel)]=\"linkType\" >\n                                </mat-form-field> -->\n                                <!-- <div *ngIf=\"parentFaqForm.controls['type'].touched &&\n                                parentFaqForm.controls['type'].invalid\"\n                                 class=\"text-danger\">\n                              <div *ngIf=\"parentFaqForm.controls['type'].errors &&\n                                  parentFaqForm.controls['type'].errors.required\">\n                                  type is required.</div>\n                              </div> -->\n                                \n                            <!-- </div> -->\n\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Question</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"4\"  formControlName=\"question\" [(ngModel)]=\"EnterQuestion\"\n                                    ></textarea>\n\n                                </mat-form-field>\n                                <div *ngIf=\"parentFaqForm.controls['question'].touched &&\n                                 parentFaqForm.controls['question'].invalid\"\n                                 class=\"text-danger\">\n                               \n                               <div *ngIf=\"parentFaqForm.controls['question'].errors &&\n                                  parentFaqForm.controls['question'].errors.required\"> \n                                  Question is required.</div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                <mat-label>Enter Answer</mat-label>\n                                <mat-form-field class=\"example-full-width\" style=\"width: 490px\">\n                                    <textarea matInput rows=\"9\" formControlName=\"answer\"  [(ngModel)]=\"EnterAnswer\"\n                                    ></textarea>\n                                </mat-form-field>\n                                <div *ngIf=\"parentFaqForm.controls['answer'].touched &&\n                                 parentFaqForm.controls['answer'].invalid\"\n                                 class=\"text-danger\">\n                               \n                               <div *ngIf=\"parentFaqForm.controls['answer'].errors &&\n                                  parentFaqForm.controls['answer'].errors.required\"> \n                                  Answer is required.</div>\n                                </div>\n                            </div>\n                          \n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"   [disabled]=\"!parentFaqForm.valid\" (click)=\"addFaq()\">Add</button>\n                  \n                </div>\n            </form>\n\n</div>\n");

/***/ }),

/***/ "uN5D":
/*!*********************************************************************!*\
  !*** ./src/app/teacher-management/teacher-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "uyra":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-faq/teacher-faq.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >TEACHER FAQ</h2>\n </div>\n <div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" routerLink=\"/addTeacherFaq\" >Add Teacher Faq</button>\n            <!-- (click)=\"addTeacherFaqDialog()\" -->\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n<!--          \n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field> -->\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"question\">\n                        <th width=\"300px\"  class=\"text-center\"  mat-header-cell *matHeaderCellDef>Questions</th>\n                        <td width=\"300px\" class=\"text-center \"  mat-cell *matCellDef=\"let element\">\n                          <div class=\"text-center babu\">\n                            <p class=\"\">{{element.question}}</p>\n                          </div></td>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"answer\">\n                        <th  width=\"350px\"  class=\"text-center\" mat-header-cell *matHeaderCellDef>Answers</th>\n                        <td  width=\"350px\"  class=\"text-center \"  mat-cell *matCellDef=\"let element\">\n                          <div class=\"babu text-center\" [innerHTML]=\"element.answer \"></div></td>\n                    </ng-container>\n                    \n                   \n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th width=\"150px\"   class=\"text-center\" mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       Action\n                    </th>\n                    <td width=\"150px\"  class=\"text-center\" class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button routerLink=\"/editTeacherFaq/{{element.id}}\" >\n                              <!-- (click)=\"editDialog(element.id)\" -->\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            <button  mat-icon-button (click)=\"delete(element.id)\">\n                              <mat-icon >delete</mat-icon>\n                          </button>\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <!-- <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div> -->\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "w6ZX":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/view-student-details/view-student-details.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n    STUDENT DETAILS </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form >\n                    <!-- [formGroup]=\"applicationForm\" -->\n                    <div class=\"card\" >\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body  block-card\" style=\"margin-top: 29px;\">\n                            <div class=\"row\">\n                            \n                                <div class=\"col-md-6\">\n                                    <label>Name</label>\n                                    <p class=\"hd_p\">\n                                        {{studentData.name == \"null\" ? \"N/A\" : studentData.name}}\n                                    </p>\n                                    \n                                </div>\n                \n                                <div class=\"col-md-6\">\n                                    <label>Email</label>\n                                    <p class=\"hd_p\">\n                                       {{studentData.email == null ? \"N/A\" : studentData.email}}\n                                    </p>\n                                    \n                                </div>\n                                \n                               \n                                <div class=\"col-md-6\">\n                                    <label>Phone</label>\n                                    <p class=\"hd_p\">\n                                       {{studentData.phone == null ? \"N/A\" : studentData.phone }}\n                                    </p>\n                                </div>\n\n                                <!-- <div class=\"col-md-6\">\n                                    <label>Country</label>\n                                    <p class=\"hd_p\">\n                                       {{studentData.country ==null ? \"N/A\" : studentData.country}}\n                                    </p>\n                                </div> -->\n\n                                <!-- <div class=\"col-md-6\">\n                                    <label>State</label>\n                                    <p class=\"hd_p\">\n                                       {{studentData.state == null ? \"N/A\" : studentData.state}}\n                                    </p>\n                                </div>\n                                  -->\n                                <!-- <div class=\"col-md-6\">\n                                    <label>Date Of Birth</label>\n                                    <p class=\"hd_p\">\n                                        {{studentData.dob == null ? \"N/A\" : studentData.dob}} \n                                    </p>\n                                </div> -->\n\n                                <!-- <div class=\"col-md-6\">\n                                    <label>Facebook Id</label>\n                                    <p class=\"hd_p\">\n                                        {{studentData.fb == null ? \"N/A\" : studentData.fb}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Google Id</label>\n                                    <p class=\"hd_p\">\n                                        {{studentData.google == null ? \"N/A\" : studentData.google}} \n                                    </p>\n                                </div> -->\n\n                                <div class=\"col-md-6\">\n                                    <label>User Type </label>\n                                    <p class=\"hd_p\">\n                                        {{studentData.type == null ? \"N/A\" : studentData.type}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                   \n                                    <label>Status</label>\n                                    <p class=\"hd_p\">\n                                        {{studentData.status}} \n                                    </p>\n                                </div>\n                                \n                                \n                            </div>\n                           \n                            <div class=\"text-center\" *ngIf=\"studentData.status == 'inactive'\">\n                                <!--  -->\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('active')\">Active</button>\n                                <!-- &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('inactive')\" >Inactive</button> -->\n                                <!-- (click)=\"onStatus('Decline')\" -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/student_list\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"studentData.status == 'active'\">\n                               <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus('inactive')\" >Inactive</button>\n                                &nbsp;&nbsp;&nbsp; <button mat-raised-button type=\"submit\" routerLink=\"/student_list\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                          </div>\n                         </div>\n               </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "w966":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-category/add-category.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2>\n     ADD CATEGORY\n</h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"addCategoryForm\">\n                    <div class=\"card\">\n                        <!-- <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div> -->\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 offset-sm-3 text-center a-u\">\n                                    <mat-form-field class=\"example-full-width text-center\">\n                                        <label>Upload Image</label>\n                                        <input matInput readonly />\n                                        <span class=\"mat_imag position-relative\">\n                                            <img *ngIf=\"!image && !testi_image\" class=\"img-responsive\"\n                                                src=\"assets/img/img-place.jpg\" />\n                                            \n                                            <img *ngIf=\"image\" class=\"img-responsive\"\n                                                [src]=\"image\" />\n                                            <img *ngIf=\"!image && testi_image\" class=\"img-responsive\" src=\"{{imgUrl}}{{testi_image}}\" />\n                                            <span class=\"inpt_icon\">\n                                                <input type=\"file\" #uploadFile formControlName=\"image\"  value=\"bannerData.image\"\n                                                    (change)=\"onFileChange($event)\" accept=\"image/*\">\n                                                <i class=\"fa fa-upload\" *ngIf=\"!image\"></i>\n                                                <i class=\"fa fa-edit\" *ngIf=\"image\"></i>\n                                            </span>\n                                        </span>\n                                    </mat-form-field>\n                                   \n                                </div> \n                                <!-- Author Name -->\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <!-- <label>Title</label> -->\n                                        <input  formControlName=\"category\" matInput placeholder=\"Category\" [(ngModel)]=\"categoryData.category\" >\n                                    </mat-form-field>\n                                    <div *ngIf=\"addCategoryForm.controls['category'].touched &&\n                                     addCategoryForm.controls['category'].invalid\"\n                                             class=\"text-danger\">\n                                     <div *ngIf=\"addCategoryForm.controls['category'].errors &&\n                                      addCategoryForm.controls['category'].errors.required\">\n                                         Category  is required.</div>\n                                 </div>\n                                </div>\n            \n                                <!-- Designation -->\n                              \n                                \n                                <!-- Image -->\n                                           \n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\"  [disabled]=\"!addCategoryForm.valid\" (click)=\"addCategory()\">Add</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/category\" class=\"btn theme-btn ft\">Back</button>\n                                \n                                <!-- [disabled]=\"!addCategoryForm.valid\"  -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div> \n </div>");

/***/ }),

/***/ "wibN":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >CONTACT US</h2>\n </div>\n <div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div> -->\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <!-- <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td> -->\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef>Name</th>\n                        <!-- <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td> -->\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef>Email</th>\n                        <!-- <td mat-cell *matCellDef=\"let element\">{{element.email}}</td> -->\n                    </ng-container>\n                    \n                    <ng-container matColumnDef=\"subject\">\n                        <th mat-header-cell *matHeaderCellDef>Subject</th>\n                        <!-- <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td> -->\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"message\">\n                      <th mat-header-cell *matHeaderCellDef>Message</th>\n                      <!-- <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td> -->\n                  </ng-container>\n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell text-center\">\n                       Reply\n                    </th>\n                    <td class=\"mat-cell act_td text-center\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button (click)=\"viewDialog(element.id)\">\n                                <mat-icon >Reply</mat-icon>\n                            </button>\n                            <!-- <button  mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button> -->\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <!-- <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div> -->\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "x9IN":
/*!*************************************************************************************!*\
  !*** ./src/app/teacher-management/view-teacher-list/view-teacher-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewTeacherListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTeacherListComponent", function() { return ViewTeacherListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_teacher_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-teacher-list.component.html */ "cUH4");
/* harmony import */ var _view_teacher_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-teacher-list.component.css */ "3Xqn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);









var ViewTeacherListComponent = /** @class */ (function () {
    function ViewTeacherListComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.teacherData = {
            name: "",
            email: "",
            phone: "",
            country: "",
            state: "",
            dob: "",
            fb: "",
            google: "",
            status: ""
            // description : ""
        };
    }
    ViewTeacherListComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 3000;
        this.getTeacherList();
        this.teacherId = this.route.snapshot.params.teacherId;
        console.log("teacherID", this.teacherId);
    };
    ViewTeacherListComponent.prototype.getTeacherList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.getAllTeachers(list).subscribe(function (res) {
            console.log('*****getTeacherData******', res.data);
            var response = res.data.rows;
            if (response) {
                response.forEach(function (element) {
                    var matchId = element.id;
                    if (matchId == _this.teacherId) {
                        _this.teacherData.name = element.fullname;
                        _this.teacherData.email = element.email;
                        _this.teacherData.phone = element.phone;
                        _this.teacherData.country = element.country;
                        _this.teacherData.state = element.state;
                        console.log("teacherData state", _this.teacherData.state);
                        _this.teacherData.dob = element.date_of_birth;
                        _this.teacherData.fb = element.facebook_id;
                        _this.teacherData.google = element.google_id;
                        _this.teacherData.type = element.user_type;
                        _this.teacherData.status = element.status;
                    }
                });
            }
        });
    };
    ViewTeacherListComponent.prototype.onStatus = function (evt) {
        var _this = this;
        var obj = {
            user_id: this.teacherId,
            status: evt
        };
        // console.log("obj",obj)
        // this.loader=true;
        this.service.change_teacher_status(obj).subscribe(function (res) {
            console.log("res*****", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Success..!', 'Successfully Changed!', 'success');
            _this.router.navigate(['/teacher_list']);
            // this.ngOnInit();
            // this.loader = false
        });
    };
    ViewTeacherListComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ViewTeacherListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view-teacher-list',
            template: _raw_loader_view_teacher_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_view_teacher_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ViewTeacherListComponent);
    return ViewTeacherListComponent;
}());



/***/ }),

/***/ "xdhd":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-second/section-second.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\" class=\"load_er\">\n\t<mat-progress-spinner\n\tcolor=\"primary\"\n\tmode=\"indeterminate\">\n\t</mat-progress-spinner></div>\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n    <h2 > ENGAGING & EFFICIENT MANAGEMENT</h2>\n </div>\n <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          \n          <div class=\"card-body\">\n            <div class=\"text-right\" style=\"padding-right: 65px;\" >\n              <button mat-button class=\"theme-btn\" routerLink=\"/createEngaging\" >Add</button>\n            </div>\n            <mat-form-field>\n              <mat-label>Search</mat-label>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"\" #input>\n            </mat-form-field>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                      <!-- Position -->\n                    \n                      <ng-container matColumnDef=\"position\" class=\"mat-row\">\n                        <th mat-header-cell *matHeaderCellDef >S.No\n                        </th>\n                        <td mat-cell *matCellDef=\"let element let i=index;\"> {{i+1}}</td>\n\n                    </ng-container>  \n\n                      <ng-container matColumnDef=\"image\" class=\"mat-row\">\n                          <th mat-header-cell *matHeaderCellDef >Image\n                          </th>\n                          <td mat-cell *matCellDef=\"let element\"> <img src=\"{{imagePath}}{{element.image}}\" class=\"img-fluid prfile_img\"> </td>\n  \n                      </ng-container>     \n                      \n                      <ng-container matColumnDef=\"heading\" class=\"mat-row\">\n                        <th mat-header-cell *matHeaderCellDef >Heading\n                        </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.heading}} </td>\n\n                    </ng-container>   \n                    \n                    \n                    <ng-container matColumnDef=\"description\" class=\"mat-row\">\n                        <th mat-header-cell *matHeaderCellDef >Description\n                        </th>\n                        <td class=\"ellipsis\" mat-cell *matCellDef=\"let element\">{{element.description}} </td>\n\n                    </ng-container>   \n                      <ng-container matColumnDef=\"Action\" class=\"mat-row\">\n                          <th mat-header-cell *matHeaderCellDef > Action </th>\n                          <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                              <button  mat-icon-button routerLink=\"/editEngaging/{{element.id}}\" >\n                                  <mat-icon >edit</mat-icon>\n                              </button>\n                              <button  mat-icon-button (click)=\"delete(element.id)\">\n                                  <mat-icon >delete</mat-icon>\n                              </button>\n                          \n                        </td>\n                         \n                      </ng-container>\n  \n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <div>\n                      <mat-paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                          (page)=\"paginationOptionChange($event)\">\n                      </mat-paginator>\n                  </div>\n              </div>\n          </div> \n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "y7OV":
/*!*****************************************************************!*\
  !*** ./src/app/add-testimonials/add-testimonials.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\nmat-form-field{\n        width: 100%;\n    }\nspan.mat_imag {\n        width: 150px;\n        height: 150px;\n        background: #fafafa;\n        display: inline-block;\n    }\n.inpt_icon {\n        position: absolute;\n        top: -12px;\n        right: -13px;\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        overflow: hidden;\n        background: #6aa524;\n    }\n.inpt_icon .fa {\n        color: #fff;\n        position: absolute;\n        top: 9px;\n        right: 12px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.inpt_icon input {\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        position: relative;\n        z-index: 2;\n    }\n.mat_imag img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n    }\n.inpt_icon .fa-edit{\n        color: #fff;\n        position: absolute;\n        top: 10px;\n        right: 9px;\n        font-size: 17px;\n        z-index: 0;\n        cursor: pointer;\n    }\n.ft{\n        font-size: 16px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7UUFDUSxlQUFlO0lBQ25CO0FBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksZUFBZTtJQUNuQiIsImZpbGUiOiJhZGQtdGVzdGltb25pYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTUyNDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mdHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc3Bhbi5tYXRfaW1hZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWE1MjQ7XG4gICAgfVxuICAgIC5pbnB0X2ljb24gLmZhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmlucHRfaWNvbiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAubWF0X2ltYWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5wdF9pY29uIC5mYS1lZGl0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    { path: '/category', title: 'Category', icon: 'location_map-big', class: '' },
    { path: '/courses', title: 'Courses Management', icon: 'education_atom', class: '' },
    { path: '/teacherApplication', title: 'Teacher Applications', icon: 'users_single-02', class: '' },
    { path: '/newsLetter', title: 'Newsletter Management', icon: 'objects_spaceship', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()(".nav-link").click(function () {
                //$(".sub-ul").hide();
                // alert($(this).children(":nth-child(3)").attr('style'));
                if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).next().is(":visible")) {
                    jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).next().hide();
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_5___default()(".sub-ul").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).next().show();
                }
                // $(this).children(":nth-child(3)").toggle();
                // $(this).find(".sub-ul").toggle();
            });
        });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    SidebarComponent.propDecorators = {
        accordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"],] }]
    };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Now UI Dashboard Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-angular
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zwek":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-applications/view-teacher-application/view-teacher-application.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>add-testimonials works!</p> -->\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"hdng\">\n  <h2 >\n   APPLICATION DETAILS </h2>\n </div>\n <div class=\"main-content\" style=\"position: relative;\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"\">\n                <form [formGroup]=\"applicationForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Testimonials</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 offset-sm-3\">\n                                    <div class=\"vid_wrap\">\n                                        <iframe class=\"embed-responsive-item\" [src]='video'></iframe>\n                                    </div>\n                                    \n                                </div>\n                \n                               \n                                <div class=\"col-md-6\">\n                                    <label>Name</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.name}}\n                                    </p>\n                                    \n                                </div>\n                \n                                <div class=\"col-md-6\">\n                                    <label>Email</label>\n                                    <p class=\"hd_p\">\n                                       {{applicationData.email}}\n                                    </p>\n                                    \n                                </div>\n                                \n                               \n                                <div class=\"col-md-6\">\n                                    <label>Phone Number</label>\n                                    <p class=\"hd_p\">\n                                       {{applicationData.phone}}\n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Country</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.country}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>State</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.state}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>City</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.city}} \n                                    </p>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                   \n                                    <label>Address</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.address}} \n                                    </p>\n                                </div>\n                                \n                                <div class=\"col-md-6\">\n                                    <label>Teaching Experience</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.experiance}}\n                                    </p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label>Websites Links That Show Teaching Experience</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.link}}\n                                    </p>\n                                </div>\n                                    \n                                \n                                <div class=\"col-md-6\">\n                                    <label>What will you teach?</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.whatWillYouTeach}}\n                                    </p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label>How you will teach? Your Approach?</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.teach}}\n                                    </p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label>Requirements for the class?</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.requirement}}\n                                    </p>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label>How will learners benefit from this class?</label>\n                                    <p class=\"hd_p\">\n                                        {{applicationData.benefitsOfClass}}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm-12\" *ngIf=\"applicationData.academic_qualifications.length >0\">\n                                    <label>Academic Qualification</label>\n                                    <table class=\"table table-bordered text-center\">\n                                        <tbody>\n                                          <tr class=\"hddr\">\n                                           <td><b>Sr.No.</b></td>\n                                           <td><b>Degree/Certificate</b></td>\t\t\t\n                                            <td><b>Major</b></td>\n                                            <td><b>College/University</b></td>\n                                            <td><b>Year of Passing</b></td>\n                                          </tr>\n                                          <tr *ngFor=\"let qual of applicationData.academic_qualifications;let i = index;\">\n                                              <td>{{i+1}}</td>\n                                              <td>{{qual.degree_certificates}}</td>\n                                              <td>{{qual.major}}</td>\n                                              <td>{{qual.college_university}}</td>\n                                              <td>{{qual.year_of_passing}}</td>\n                                          </tr>\n                                        </tbody>\n                                        \n                                    </table>\n                                </div>\n\n                                <div class=\"col-sm-12\" *ngIf=\"applicationData.professional_qualifications.length >0\">\n                                    <label>Professional Qualification</label>\n                                    <table class=\"table table-bordered text-center\">\n                                        <tbody>\n                                          <tr class=\"hddr\">\n                                           <td><b>Sr.No.</b></td>\n                                           <td><b>Employer</b></td>\t\n                                           <td><b>Position</b></td>\t\t\n                                            <td><b>From(month/year)</b></td>\n                                            <td><b>To(month/year)</b></td>\n                                          </tr>\n                                          <tr *ngFor=\"let prof of applicationData.professional_qualifications;let i = index;\">\n                                              <td>{{i+1}}</td>\n                                              <td>{{prof.employer}}</td>\n                                              <td>{{prof.position}}</td>\n                                              <td>{{prof.from_month_year}}</td>\n                                              <td>{{prof.to_month_year}}</td>\n                                          </tr>\n                                        </tbody>\n                                        \n                                    </table>\n                                </div>\n\n                                <div class=\"col-sm-12\" *ngIf=\"applicationData.classes_teach_data.length >0\">\n                                    <label>Classes That You Want To Teach</label>\n                                    <table class=\"table table-bordered text-center\" >\n                                        <tbody>\n                                           \n                                          <tr class=\"hddr\">\n                                            <td><b>Sr.No.</b></td>   \n                                           <td><b>Topic</b></td>\t\t\t\n                                            <td><b>Sub Topic</b></td>\n                                            <td><b>Years of teaching experience</b></td>\n                                            <td><b>Age Group</b></td>\n                                          </tr>\n                                          <tr *ngFor=\"let data of applicationData.classes_teach_data;let i = index;\">\n                                           \n                                              <!-- <div *ngIf=\"applicationData.classes_teach_data.length > 0\"> -->\n                                              <td>{{i+1}}</td>\n                                              <td>{{data.topic }}</td>\n                                              <td>{{data.sub_topic}}</td>\n                                              <td>{{data.teaching_experience }}</td>\n                                              <td>{{data.fromAge + \" \" + \"to\" + \" \" + data.toAge }}</td>\n                                              <!-- </div> -->\n                                              \n                                              \n                                          </tr>\n                                        </tbody>\n                                        \n                                    </table>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <label>Application Date</label>\n                                     <p class=\"hd_p\">\n                                        {{applicationData.date| dateAgo}}\n                                     </p>\n                                 </div>\n                                <div class=\"col-md-12\">\n                                   <label>Status</label>\n                                    <p class=\"hd_p\">\n                                       {{applicationData.status}}\n                                    </p>\n                                </div>\n                                \n                            </div>\n                           \n                            <div class=\"text-center\" *ngIf=\"applicationData.status == 'Approved'\">\n                                <!-- <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus()\">Accept</button> -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"rejectApplication()\" >Reject</button>\n                                <!-- (click)=\"onStatus('Decline')\" -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/teacherApplication\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"applicationData.status == 'Pending'\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"onStatus()\">Accept</button>\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" (click)=\"rejectApplication()\" >Reject</button>\n                                <!-- (click)=\"onStatus('Decline')\" -->\n                                &nbsp;&nbsp;&nbsp;<button mat-raised-button type=\"submit\" routerLink=\"/teacherApplication\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                            <div class=\"text-center\" *ngIf=\"applicationData.status == 'Rejected'\">\n                                <button mat-raised-button type=\"submit\" routerLink=\"/teacherApplication\" class=\"btn theme-btn ft\">Back</button>\n                            </div>\n                          </div>\n                         </div>\n               </form>\n            </div>\n        </div>\n    </div> \n </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "zz07":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-category.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n.card .card-header .card-title {\n    margin-top:0px!important;\n    color: #fff;\n}\n.btn-success {\n    background-color: #6aa524;\n    color: #FFFFFF;\n}\n.ft{\n        font-size: 16px;\n    }\n</style>\n<div class=\"main-content\" style=\"position: relative;\">\n           <button mat-icon-button  (click)=\"closeDialog()\" style=\"position: absolute;\n           right: -32px;\n           top: -32px;\n           transform: scale(0.75);\n           outline: none;\n           background-color: #ffffff!important;\n           color: rgb(0, 0, 0);\n           border-radius: 0px;\">\n           <mat-icon >close</mat-icon>\n          </button>\n                <form [formGroup]=\"bookCategoryForm\">\n                    <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <!-- .card .card-header:not([data-background-color]) {\n                                background-color: #6AA524;\n                                padding-bottom: 0.5px; -->\n                            <h4 class=\"card-title ft\">Add Category</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                    <!-- style=\"padding-top: 70px;\" -->\n                                    <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                        <!-- style=\"width: 285px\" -->\n                                        <!-- class=\"example-full-width\" -->\n                                        <input matInput placeholder=\"Category\" formControlName=\"bookCategory\" [(ngModel)]=\"addCategory.category\">\n                                    </mat-form-field>\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].touched &&\n                                      bookCategoryForm.controls['bookCategory'].invalid\"\n                                       class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].errors &&\n                                        bookCategoryForm.controls['bookCategory'].errors.required\">\n                                        Category is required.</div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-success ft\" [disabled]=\"!bookCategoryForm.valid\" (click)=\"createCategory()\">Submit</button>\n                        <!-- [disabled]=\"!bookCategoryForm.valid\" -->\n                    </div>\n                </form>\n           \n        \n    \n</div>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map