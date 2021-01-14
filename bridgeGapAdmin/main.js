(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/promatics/harman/bridgeGapAdmin/src/main.ts */"zUnb");


/***/ }),

/***/ "1Y/h":
/*!********************************************************!*\
  !*** ./src/app/add-category/add-category.component.ts ***!
  \********************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-category.component.html */ "O467");
/* harmony import */ var _add_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component.css */ "hPg0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent() {
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent.ctorParameters = function () { return []; };
    AddCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-category',
            template: _raw_loader_add_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2U6z":
/*!*********************************************************!*\
  !*** ./src/app/sub-category/sub-category.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".theme-btn{\n    background-color: #142c69;\n    color: #fff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYiIsImZpbGUiOiJzdWItY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MmM2OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfSJdfQ== */");

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
            this.toastr.error("Somthing went wrong here");
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

/***/ "6Cpu":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\"><button mat-button class=\"theme-btn\" (click)=\"openDialog()\" >Add Category</button></div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Ex. Name\">\n         </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"category\">\n                        <th mat-header-cell *matHeaderCellDef>Category</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.category_name}}</td>\n                    </ng-container>\n\n                    <!-- Description -->\n                    <!-- <ng-container matColumnDef=\"description\">\n                        <th mat-header-cell *matHeaderCellDef>Description</th> -->\n                        <!-- <td mat-cell *matCellDef=\"let element\">{{element.description}}</td> -->\n                    <!-- </ng-container> -->\n\n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell\">\n                        Action\n                    </th>\n                    <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                        <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\"\n                            aria-label=\"Example icon-button with a menu\">\n                            <mat-icon>more_vert</mat-icon>\n                        </button> -->\n                        <!-- <mat-menu #menu=\"matMenu\"> -->\n                            <button mat-icon-button (click)=\"openEditDialog(element.id)\">\n                                <mat-icon >edit</mat-icon>\n                                <!-- Edit -->\n                            </button>\n                            <button mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                                <!-- Delete -->\n                            </button>\n                            <!-- <button mat-icon-button routerLink=\"/sub_category\"> -->\n                              <!-- (click)=\"openSubCategoryDialog()\" -->\n                              <!-- <mat-icon >view_list</mat-icon> -->\n                              <!-- Delete -->\n                           <!-- </button> -->\n                         <!-- </mat-menu> -->\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"subcategory\">\n                  <th mat-header-cell *matHeaderCellDef>Sub Category List</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    <button mat-icon-button routerLink=\"/sub_category/{{element.id}}\">\n                      <!-- (click)=\"openSubCategoryDialog()\" -->\n                      <mat-icon >view_list</mat-icon>\n                      <!-- Delete -->\n                   </button>\n                  </td>\n                  <!-- {{element.category_name}} -->\n              </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"5\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- \n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    \n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n  \n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  \n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div> -->");

/***/ }),

/***/ "7dfY":
/*!********************************************************!*\
  !*** ./src/app/sub-category/sub-category.component.ts ***!
  \********************************************************/
/*! exports provided: SubCategoryComponent, AddSubCategoryDialog, EditSubCategoryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryComponent", function() { return SubCategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryDialog", function() { return AddSubCategoryDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubCategoryDialog", function() { return EditSubCategoryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sub-category.component.html */ "VcCe");
/* harmony import */ var _sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-category.component.css */ "2U6z");
/* harmony import */ var _raw_loader_add_sub_category_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./add-sub-category.html */ "9O8t");
/* harmony import */ var _raw_loader_edit_sub_category_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./edit-sub-category.html */ "Wqbc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);













var SubCategoryComponent = /** @class */ (function () {
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
        this.displayedColumns = ['position', 'category', 'action'];
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 5;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.responseData);
        this.datamodel = {};
        this.getSubCatList(this.route.snapshot.params.id);
        // this.getAllCategory()
    };
    SubCategoryComponent.prototype.getSubCatList = function (id) {
        var _this = this;
        var list = {
            category_id: id,
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.getSubList(list).subscribe(function (res) {
            // console.log('*****getSubCategoryData******',res.data);
            if (res) {
                _this.dataSource = res.data.rows;
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
        return [5, 10, 20, 30];
    };
    SubCategoryComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        var Cate = this.route.snapshot.params.id;
        console.log('cate id', Cate);
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
    SubCategoryComponent.prototype.openSubCategoryDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddSubCategoryDialog, {
            height: '330px',
            width: '600px',
            id: this.route.snapshot.params.id
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.responseData);
            _this.datamodel = {};
            _this.getSubCatList(_this.route.snapshot.params.id);
        });
    };
    SubCategoryComponent.prototype.openEditDialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditSubCategoryDialog, {
            // catId:this.route.snapshot.params.id,
            height: '350px',
            width: '600px',
            id: {
                id: id,
                cate: this.route.snapshot.params.id
            }
            // catId: this.route.snapshot.params.id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            _this.reqData.offset = 0;
            _this.reqData.limit = 10;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.responseData);
            _this.datamodel = {};
            _this.getSubCatList(_this.route.snapshot.params.id);
        });
    };
    SubCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Deleted!', 'This Category has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Cancelled', 'This Category is safe :)', 'error');
            }
        });
    };
    SubCategoryComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    SubCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-sub-category',
            template: _raw_loader_sub_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sub_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], SubCategoryComponent);
    return SubCategoryComponent;
}());

// Add sub-category
var AddSubCategoryDialog = /** @class */ (function () {
    // SubCategoryList:any = [];
    function AddSubCategoryDialog(fb, dialogRef, service, route) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.addCategory = {
            category: "",
        };
        this.bookCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            bookCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
    }
    AddSubCategoryDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddSubCategoryDialog.prototype.ngOnInit = function () {
        this.categoryId = this.dialogRef.id;
    };
    AddSubCategoryDialog.prototype.createCategory = function () {
        var _this = this;
        var obj = {
            category_id: this.categoryId,
            sub_category_name: this.addCategory.category
        };
        // console.log('id&category',obj)
        this.service.addSubCategory(obj).subscribe(function (res) {
            console.log("Data Successfully Inserted!", res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Successfully Created!', 'success');
            _this.dialogRef.close();
        }, function (err) {
            if (err.status >= 400) {
                console.log('Invalid Credential!!!');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
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
    };
    AddSubCategoryDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AddSubCategoryDialog.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    AddSubCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'add-sub-category-dialog',
            template: _raw_loader_add_sub_category_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], AddSubCategoryDialog);
    return AddSubCategoryDialog;
}());

// Edit sub category
var EditSubCategoryDialog = /** @class */ (function () {
    function EditSubCategoryDialog(dialogRef, service, route, router) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.router = router;
        this.addCategory = {
            category: ""
        };
    }
    EditSubCategoryDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditSubCategoryDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.dialogRef.id;
        var obj = {
            sub_category_id: this.subData.id
        };
        this.service.getSubCategoryById(obj).subscribe(function (res) {
            console.log("Data : ", res);
            _this.addCategory.category = res.data.sub_category_name;
        });
        // console.log("SubDtaa: ",this.subData.id);
        //  console.log('iddddddddd*****',this.dialogRef.id);
    };
    EditSubCategoryDialog.prototype.editCategory = function () {
        var _this = this;
        var categoryId = parseInt(this.subData.cate);
        console.log('checkingcatID:', categoryId);
        var obj = {
            sub_category_id: this.subData.id,
            sub_category_name: this.addCategory.category,
            category_id: categoryId
        };
        console.log('dataaa:', obj);
        this.service.updateSubCategory(obj).subscribe(function (data) {
            console.log("Data Successfully Updated!", data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Success..!', 'Successfully Updated!', 'success');
            //   this.router.navigate(['/category']);
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
    EditSubCategoryDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditSubCategoryDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
    ]; };
    EditSubCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'edit-sub-category-dialog',
            template: _raw_loader_edit_sub_category_html__WEBPACK_IMPORTED_MODULE_4__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], EditSubCategoryDialog);
    return EditSubCategoryDialog;
}());



/***/ }),

/***/ "9O8t":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/add-sub-category.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div>\n            <div class=\"col-md-12\" >\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <form [formGroup]=\"bookCategoryForm\" style=\"padding-top: 24px;\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <!-- .card .card-header:not([data-background-color]) {\n                                background-color: #6AA524;\n                                padding-bottom: 0.5px; -->\n                            <h4 class=\"card-title\">Add Sub Category</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\"  >\n                                    <!-- style=\"padding-top: 70px;\" -->\n                                    <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                        <!-- style=\"width: 285px\" -->\n                                        <!-- class=\"example-full-width\" -->\n                                        <input matInput placeholder=\"Category\" formControlName=\"bookCategory\" [(ngModel)]=\"addCategory.category\">\n                                    </mat-form-field>\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].touched &&\n                                      bookCategoryForm.controls['bookCategory'].invalid\"\n                                       class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].errors &&\n                                        bookCategoryForm.controls['bookCategory'].errors.required\">\n                                        Category is required.</div>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"Description\" formControlName=\"categoryDescription\" rows=\"2\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"></textarea> -->\n                                        <!-- <input matInput placeholder=\"Description\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"> -->\n                                    <!-- </mat-form-field> -->\n                                    <!-- <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].touched &&\n                                            bookCategoryForm.controls['categoryDescription'].invalid\"\n                                            class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].errors &&\n                                    bookCategoryForm.controls['categoryDescription'].errors.required\">\n                                        Description is required.</div>\n                                    </div> -->\n                                <!-- </div> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!bookCategoryForm.valid\" (click)=\"createCategory()\">Submit</button>\n                        <!-- [disabled]=\"!bookCategoryForm.valid\" -->\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"margin-top: 30px;\">\n                <form [formGroup]=\"bookForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Add Sub Categories</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                      <mat-form-field appearance=\"fill\">\n                                        <mat-label>Select Sub Category</mat-label>\n                                        <mat-select formControlName=\"category\" [(ngModel)]=\"addBook.bookCategory\" >\n                                            [ngModelOptions]=\"{standalone: true}\"\n                                          <mat-option *ngFor=\"let book of bookCategoryList\" [value]=\"book._id\">\n                                            {{ book.category }}\n                                          </mat-option>\n                                        </mat-select>\n                                      </mat-form-field> -->\n                                      <!-- <div *ngIf=\"bookForm.controls['category'].touched &&\n                                      bookForm.controls['category'].invalid\"\n                                      class=\"text-danger\">\n                                         <div *ngIf=\"bookForm.controls['category'].errors &&\n                                              bookForm.controls['category'].errors.required\">\n                                             Book Category is required.\n                                         </div> -->\n                                <!-- </div>\n                          </div> -->\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"Description\" rows=\"5\" formControlName=\"description\" [(ngModel)]=\"addBook.frame\" ></textarea>\n                                      \n                                    </mat-form-field>\n                                    <div *ngIf=\"bookForm.controls['description'].touched &&\n                                                  bookForm.controls['description'].invalid\"\n                                                  class=\"text-danger\">\n                                            <div *ngIf=\"bookForm.controls['description'].errors &&\n                                                    bookForm.controls['description'].errors.required\">\n                                                    Description is required.\n                                            </div>\n                                      </div>\n                                </div> -->\n                            <!-- </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!bookForm.valid\" (click)=\"createBook()\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div> -->\n");

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

/***/ "Cxlq":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <!-- <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div> -->\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Ex. Mia\" #input>\n          </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef>Name</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.fullname}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef>Email</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.email}}</td>\n                    </ng-container>\n                    \n                    <ng-container matColumnDef=\"phone\">\n                        <th mat-header-cell *matHeaderCellDef>Phone</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td>\n                    </ng-container>\n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell\">\n                       View More\n                    </th>\n                    <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button (click)=\"viewDialog(element.id)\">\n                                <mat-icon >view_list</mat-icon>\n                            </button>\n                            <!-- <button  mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button> -->\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"5\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

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

/***/ "Ge9A":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

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

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-img\">\n          <img src=\"assets/img/logow.png\"/>\n      </div>\n    </a>\n    \n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"now-ui-icons {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

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

/***/ "O467":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-category/add-category.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n          </mat-form-field>\n          <div class=\"text-right\"><button mat-button class=\"theme-btn\" routerLink=\"/addcategory\">Save</button></div>\n         \n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

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

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle\">\n                <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <a class=\"navbar-brand\" href=\"#pablo\">{{getTitle()}}</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n          <form>\n            <div class=\"input-group no-border\">\n              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n              <div class=\"input-group-append\">\n                <div class=\"input-group-text\">\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                </div>\n              </div>\n            </div>\n          </form>\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n              </a>\n            </li>\n            <li class=\"nav-item\" ngbDropdown>\n              <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <i class=\"now-ui-icons location_world\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a class=\"dropdown-item\" href=\"#\">Action</a>\n                <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logOut()\">\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Logout</span>\n                </p>\n              </a>\n            </li>\n          </ul>\n        </div>\n    </div>\n</nav>\n");

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

/***/ "UA8p":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-sub-category.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>hello</h2>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"margin-top: 30px;\">\n                <form [formGroup]=\"bookForm\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Add Book</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field appearance=\"fill\">\n                                        <mat-label>Select Book Category</mat-label>\n                                        <mat-select formControlName=\"category\" [(ngModel)]=\"addBook.bookCategory\" [ngModelOptions]=\"{standalone: true}\">\n                                          <mat-option *ngFor=\"let book of bookCategoryList\" [value]=\"book._id\">\n                                            {{ book.category }}\n                                          </mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                      <div *ngIf=\"bookForm.controls['category'].touched &&\n                                      bookForm.controls['category'].invalid\"\n                                      class=\"text-danger\">\n                                <div *ngIf=\"bookForm.controls['category'].errors &&\n                                        bookForm.controls['category'].errors.required\">\n                                        Book Category is required.\n                                </div>\n                          </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"Description\" rows=\"5\" formControlName=\"description\" [(ngModel)]=\"addBook.frame\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                                        <!-- <input matInput placeholder=\"Description\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"> -->\n                                    </mat-form-field>\n                                    <div *ngIf=\"bookForm.controls['description'].touched &&\n                                                  bookForm.controls['description'].invalid\"\n                                                  class=\"text-danger\">\n                                            <div *ngIf=\"bookForm.controls['description'].errors &&\n                                                    bookForm.controls['description'].errors.required\">\n                                                    Description is required.\n                                            </div>\n                                      </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!bookForm.valid\" (click)=\"createBook()\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

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










var UserListComponent = /** @class */ (function () {
    // 
    function UserListComponent(dialog, service, route) {
        this.dialog = dialog;
        this.service = service;
        this.route = route;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.responseData = [];
        this.displayedColumns = ['position', 'name', 'email', 'phone', 'action'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 5;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.responseData);
        this.datamodel = {};
        this.getStudentList();
    };
    UserListComponent.prototype.getStudentList = function () {
        var _this = this;
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.getallStudent(list).subscribe(function (res) {
            // console.log('*****getStudentData******',res.data);
            if (res) {
                _this.dataSource = res.data.rows;
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
        return [5, 10, 20, 30];
    };
    UserListComponent.prototype.paginationOptionChange = function (evt) {
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
        // let Cate=this.route.snapshot.params.id;
        // console.log('cate id',Cate);
        var list = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        // console.log(this.reqData)
        this.service.getallStudent(list).subscribe(function (res) {
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
    UserListComponent.prototype.viewDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(ViewCategoryDialog, {
            height: '350px',
            width: '600px',
            id: id
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            _this.reqData.offset = 0;
            _this.reqData.limit = 10;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.responseData);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            _this.datamodel = {};
            _this.getStudentList();
        });
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
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

/***/ "VcCe":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        \n        <div class=\"card-body\">\n          <div class=\"text-right\" style=\"padding-right: 65px;\" >\n            <button mat-button class=\"theme-btn\" (click)=\"openSubCategoryDialog()\">Add Sub Category</button>\n          </div>\n          <!-- routerLink=\"/addcategory\" -->\n         \n          <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Ex. Name\">\n         </mat-form-field>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-table table mat-elevation-z1\">\n                    <!-- Position -->\n                    <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">{{ i + 1 }}</td>\n                    </ng-container>\n\n                    <!-- Questions -->\n                    <ng-container matColumnDef=\"category\">\n                        <th mat-header-cell *matHeaderCellDef>Sub Category</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.sub_category_name}}</td>\n                    </ng-container>\n\n                  \n                    <!-- Action -->\n                    <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef  class=\"mat-header-cell\">\n                        Action\n                    </th>\n                    <td class=\"mat-cell act_td\" mat-cell *matCellDef=\"let element\">\n                            <button  mat-icon-button (click)=\"openEditDialog(element.id)\">\n                                <mat-icon >edit</mat-icon>\n                            </button>\n                            <button  mat-icon-button (click)=\"deleteCategory(element.id)\">\n                                <mat-icon >delete</mat-icon>\n                            </button>\n                        \n                    </td>\n                </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <div>\n                    <mat-paginator [length]=\"length\" [pageSize]=\"5\" [pageSizeOptions]=\"getPageSizeOptions()\"\n                        (page)=\"paginationOptionChange($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div> \n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- \n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    \n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n  \n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  \n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div> -->");

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

/***/ "Wqbc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/edit-sub-category.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div>\n            <div class=\"col-md-12\" style=\"margin-top: 30px;\">\n                <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                <form>\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title\">Edit Sub Category</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                    <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                        <input matInput placeholder=\"Category\" [(ngModel)]=\"addCategory.category\" [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" (click)=\"editCategory()\">Update</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{test | date: 'yyyy'}}, Designed by\n      <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n    </div>\n  </div>\n</footer>\n");

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







var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(formBuilder, route, router, service
    //private accountService: AccountService,
    //private alertService: AlertService
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.service = service;
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
        }, function (error) {
            _this.service.showAuthError(error);
        });
    };
    AdminLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] }
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
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
            //private accountService: AccountService,
            //private alertService: AlertService
        ])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "YPFg":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/edit-category.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div>\n            <div class=\"col-md-12\" style=\"margin-top: 30px;\">\n               \n                <form>\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <h4 class=\"card-title\">Edit Category</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                    <mat-form-field class=\"example-full-width\"  style=\"width: 490px\">\n                                        <input matInput placeholder=\"Category\" [(ngModel)]=\"addCategory.category\" [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" (click)=\"editCategory()\">Update</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _adminAuth_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adminAuth/admin.guard */ "X0jp");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./category/category.component */ "clsX");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-category/add-category.component */ "1Y/h");
/* harmony import */ var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sub-category/sub-category.component */ "7dfY");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
























// import { SubCategoryComponent } from './sub-category/sub-category.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"],
                _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_18__["AddCategoryComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_14__["AddCategoryDialog"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_14__["EditCategoryDialog"],
                _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_19__["AddSubCategoryDialog"],
                _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_19__["SubCategoryComponent"],
                _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_19__["EditSubCategoryDialog"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["ViewCategoryDialog"]
                // SubCategoryComponent
            ],
            providers: [_adminAuth_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div>\n            <div class=\"col-md-12\">\n                <!-- style=\"margin-top: 30px;\" -->\n               \n                <form [formGroup]=\"viewDetailForm\" style=\"padding-top: 24px;\">\n                    <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <!-- .card .card-header:not([data-background-color]) {\n                                background-color: #6AA524;\n                                padding-bottom: 0.5px; -->\n                            <h4 class=\"card-title\">All Details</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                 <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                    <!-- style=\"padding-top: 70px;\" -->\n                                    <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                        <input matInput placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"addCategory.name\">\n                                    </mat-form-field>\n                                 </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"addCategory.email\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" [(ngModel)]=\"addCategory.phone\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"Country\" formControlName=\"country\" [(ngModel)]=\"addCategory.country\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"State\" formControlName=\"state\" [(ngModel)]=\"addCategory.state\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n                                        <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                            <input matInput placeholder=\"D.O.B\" formControlName=\"dob\" [(ngModel)]=\"addCategory.dob\">\n                                        </mat-form-field>\n                                    </div>\n                           \n                               \n\n                                \n                                    <!-- <div *ngIf=\"bookCategoryForm.controls['bookCategory'].touched &&\n                                      bookCategoryForm.controls['bookCategory'].invalid\"\n                                       class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].errors &&\n                                        bookCategoryForm.controls['bookCategory'].errors.required\">\n                                        Category is required.</div>\n                                    </div> -->\n\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"Description\" formControlName=\"categoryDescription\" rows=\"2\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"></textarea> -->\n                                        <!-- <input matInput placeholder=\"Description\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"> -->\n                                    <!-- </mat-form-field> -->\n                                    <!-- <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].touched &&\n                                            bookCategoryForm.controls['categoryDescription'].invalid\"\n                                            class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].errors &&\n                                    bookCategoryForm.controls['categoryDescription'].errors.required\">\n                                        Description is required.</div>\n                                    </div> -->\n                                <!-- </div> -->\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!bookCategoryForm.valid\" (click)=\"createCategory()\">Submit</button> -->\n                        <!-- [disabled]=\"!bookCategoryForm.valid\" -->\n                    <!-- </div> -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "cUD1":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5.title{\n    font-size: 16px;\n}\n.mat-form-field{\n    width: 100%;\n    font-size: 18px;\n    border-bottom: 1px;\n}\ntable {\n    width: 100%;\n  }\nsection {\n    display: table;\n  }\n.example-label {\n    display: table-cell;\n    font-size: 14px;\n    margin-left: 8px;\n    min-width: 120px;\n  }\n.example-button-row {\n    display: table-cell;\n    width: 490px;\n  }\n.example-button-row .mat-button-base {\n    margin: 8px 8px 8px 0;\n  }\n.example-flex-container {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n.example-button-container {\n    display: flex;\n    justify-content: center;\n    width: 120px;\n  }\n.theme-btn{\n    background-color: #142c69;\n    color: #fff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztFQUNiO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUudGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiA0OTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIC50aGVtZS1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MmM2OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfSJdfQ== */");

/***/ }),

/***/ "clsX":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent, AddCategoryDialog, EditCategoryDialog, AddSubCategoryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryDialog", function() { return AddCategoryDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryDialog", function() { return EditCategoryDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryDialog", function() { return AddSubCategoryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.component.html */ "6Cpu");
/* harmony import */ var _category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component.css */ "cUD1");
/* harmony import */ var _raw_loader_add_category_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./add-category.html */ "zz07");
/* harmony import */ var _raw_loader_edit_category_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raw-loader!./edit-category.html */ "YPFg");
/* harmony import */ var _raw_loader_add_sub_category_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!./add-sub-category.html */ "UA8p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/admin.service */ "2esG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
















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
        this.displayedColumns = ['position', 'category', 'subcategory', 'action'];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.reqData = {};
        this.reqData.offset = 0;
        this.reqData.limit = 5;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.responseData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.datamodel = {};
        this.getAllCategory();
    };
    CategoryComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    CategoryComponent.prototype.getPageSizeOptions = function () {
        return [5, 10, 20, 30];
    };
    CategoryComponent.prototype.paginationOptionChange = function (evt) {
        // console.log(evt)
        var _this = this;
        this.reqData.offset = (evt.pageIndex * evt.pageSize).toString();
        this.reqData.limit = evt.pageSize;
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
        // 	if (res) {
        // 		this.responseData = data.data.rows
        // 		this.length = data.data.count
        // 		this.dataSource = new MatTableDataSource(data.data);
        // 		this.dataSource.sort = this.sort;
        // 		console.log(this.dataSource)
        // 		if (this.filterValue) {
        // 			this.dataSource.filter = this.filterValue
        // 		}
        // 	}
        // }, err => {
        // 		console.log(err)
        // 		if (err.status >= 400) {
        // 			// this.toastr.error('Internal Error', 'Error')
        // 		} else {
        // 			// this.toastr.error('Internet Connection Error', 'Error')
        // 			console.log('Internet Connection Error')
        // 		}
        // 	})
        // }
    };
    CategoryComponent.prototype.getAllCategory = function () {
        var _this = this;
        var obj = {
            offset: this.reqData.offset,
            limit: this.reqData.limit
        };
        this.service.allCategory(obj).subscribe(function (res) {
            // console.log('getTableData******',res.data);
            // let tableData
            if (res) {
                // this.length = res.data.count
                _this.dataSource = res.data.rows;
                _this.length = res.data.count;
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Deleted!', 'This Category has been deleted.', 'success');
                    _this.ngOnInit();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Cancelled', 'This Category is safe :)', 'error');
            }
        });
    };
    CategoryComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddCategoryDialog, {
            height: '350px',
            width: '600px',
            id: this.route.snapshot.params.id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            _this.reqData.offset = 0;
            _this.reqData.limit = 10;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.responseData);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datamodel = {};
            _this.getAllCategory();
        });
    };
    CategoryComponent.prototype.openEditDialog = function (id) {
        var _this = this;
        var dialogRefEdit = this.dialog.open(EditCategoryDialog, {
            height: '350px',
            width: '600px',
            id: id
        });
        dialogRefEdit.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            _this.reqData.offset = 0;
            _this.reqData.limit = 10;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.responseData);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datamodel = {};
            _this.getAllCategory();
        });
    };
    CategoryComponent.prototype.openSubCategoryDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddSubCategoryDialog, {
            height: '500px',
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.reqData = {};
            _this.reqData.offset = 0;
            _this.reqData.limit = 10;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.responseData);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datamodel = {};
            // this.service.getBookByCategoryId(this.addCategory.category).subscribe(data => {
            // 	console.log(data);
            // 	if(data){
            // 		  this.length = data.data.count;
            // 		  this.dataSource = data.data;
            // 		console.log(this.dataSource);
            // 		//this.dataSource = new MatTableDataSource(this.responseData);
            // 	  }
            //   },err => {
            // 		console.log(err);
            // 		if(err.status >= 400){
            // 			  console.log('Invalid Credential!!!');
            // 		}else{
            // 			  console.log('Internet Connection Error');
            // 		}
            // 	});
            //this.getAllCategory(this.reqData.limit, this.reqData.offset)
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
    ]; };
    CategoryComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
    };
    CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-category',
            template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]])
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
        this.bookCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            bookCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Success..!', 'Successfully Created!', 'success');
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
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
    ]; };
    AddCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'add-category-dialog',
            template: _raw_loader_add_category_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"], _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]])
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Success..!', 'Successfully Updated!', 'success');
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
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
    ]; };
    EditCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'edit-category-dialog',
            template: _raw_loader_edit_category_html__WEBPACK_IMPORTED_MODULE_4__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"],
            _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], EditCategoryDialog);
    return EditCategoryDialog;
}());

//Add Sub-category
var AddSubCategoryDialog = /** @class */ (function () {
    function AddSubCategoryDialog(fb, dialogRef, service, route) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.service = service;
        this.route = route;
        this.addBook = {
            bookCategory: "",
            frame: ""
        };
        this.bookCategoryList = [];
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])
        });
    }
    AddSubCategoryDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddSubCategoryDialog.prototype.ngOnInit = function () {
        // this.service.allCategory(limit).subscribe(res => {
        // 	console.log('*****getSubCategoryData******',res.data);
        // let tableData
        // 	if(res){
        // 	  // this.length = res.data.count;
        // 	  this.dataSource = res.data;
        // 	  // this.responseData=new MatTableDataSource(res.data);
        // 	  console.log('dataSource',this.dataSource);
        // 	}
        //   },err => {
        // 	console.log(err);
        // 	if(err.status >= 400){
        // 		console.log('Invalid Credential!!!');
        // 	}else{
        // 		console.log('Internet Connection Error');
        // 	}
        //   })
        // }
        // this.service.getAllBookCategory().subscribe(data => {
        //   console.log(data);
        //   this.bookCategoryList = data.data
        //   console.log("Data Array : ", this.bookCategoryList);
        // })
    };
    AddSubCategoryDialog.prototype.createBook = function () {
        //alert(this.dialogRef.id);
        console.log("Book : ", this.addBook.bookCategory, " ", this.addBook.frame);
        var formData = new FormData();
        formData.append('book_category_id', this.addBook.bookCategory);
        formData.append('book_link', this.addBook.frame);
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
    };
    AddSubCategoryDialog.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] },
        { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }
    ]; };
    AddSubCategoryDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'add-sub-category-dialog',
            template: _raw_loader_add_sub_category_html__WEBPACK_IMPORTED_MODULE_5__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"], _shared_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]])
    ], AddSubCategoryDialog);
    return AddSubCategoryDialog;
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
    endPoint: "https://production.promaticstechnologies.com:3009/"
};


/***/ }),

/***/ "hPg0":
/*!*********************************************************!*\
  !*** ./src/app/add-category/add-category.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5.title{\r\n    font-size: 16px;\r\n}\r\n.mat-form-field{\r\n    width: 100%;\r\n    font-size: 18px;\r\n    border-bottom: 1px;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\nsection {\r\n    display: table;\r\n  }\r\n.example-label {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 8px;\r\n    min-width: 120px;\r\n  }\r\n.example-button-row {\r\n    display: table-cell;\r\n    width: 490px;\r\n  }\r\n.example-button-row .mat-button-base {\r\n    margin: 8px 8px 8px 0;\r\n  }\r\n.example-flex-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n  }\r\n.example-button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\r\n.theme-btn{\r\n    background-color: #142c69;\r\n    color: #fff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7RUFDYjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2IiLCJmaWxlIjoiYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNS50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgLnRoZW1lLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDJjNjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9Il19 */");

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
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
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




var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    { path: '/category', title: 'Category', icon: 'design_app', class: '' },
    { path: '/user_list', title: 'Student List', icon: 'design_bullet-list-67', class: '' },
    // { path: '/sub_category', title: 'Sub Category',  icon: 'design_app', class: '' },
    { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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

/***/ "zz07":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/add-category.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div>\n            <div class=\"col-md-12\">\n                <!-- style=\"margin-top: 30px;\" -->\n               \n                <form [formGroup]=\"bookCategoryForm\" style=\"padding-top: 24px;\">\n                    <!-- <div class=\"text-right\" style=\"padding-right: 5px;\"><button mat-icon-button  (click)=\"closeDialog()\"><mat-icon >close</mat-icon></button></div> -->\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-danger\" style=\"padding-bottom: 0.5px; background-color: #6AA524;\">\n                            <!-- .card .card-header:not([data-background-color]) {\n                                background-color: #6AA524;\n                                padding-bottom: 0.5px; -->\n                            <h4 class=\"card-title\">Add Category</h4>\n                        </div>\n                        <div class=\"card-body block-card\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"padding-top: 10px;\" >\n                                    <!-- style=\"padding-top: 70px;\" -->\n                                    <mat-form-field  class=\"example-full-width\" style=\"width: 490px\" >\n                                        <!-- style=\"width: 285px\" -->\n                                        <!-- class=\"example-full-width\" -->\n                                        <input matInput placeholder=\"Category\" formControlName=\"bookCategory\" [(ngModel)]=\"addCategory.category\">\n                                    </mat-form-field>\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].touched &&\n                                      bookCategoryForm.controls['bookCategory'].invalid\"\n                                       class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['bookCategory'].errors &&\n                                        bookCategoryForm.controls['bookCategory'].errors.required\">\n                                        Category is required.</div>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"Description\" formControlName=\"categoryDescription\" rows=\"2\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"></textarea> -->\n                                        <!-- <input matInput placeholder=\"Description\" [(ngModel)]=\"addCategory.description\" [ngModelOptions]=\"{standalone: true}\"> -->\n                                    <!-- </mat-form-field> -->\n                                    <!-- <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].touched &&\n                                            bookCategoryForm.controls['categoryDescription'].invalid\"\n                                            class=\"text-danger\">\n                                    <div *ngIf=\"bookCategoryForm.controls['categoryDescription'].errors &&\n                                    bookCategoryForm.controls['categoryDescription'].errors.required\">\n                                        Description is required.</div>\n                                    </div> -->\n                                <!-- </div> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!bookCategoryForm.valid\" (click)=\"createCategory()\">Submit</button>\n                        <!-- [disabled]=\"!bookCategoryForm.valid\" -->\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map