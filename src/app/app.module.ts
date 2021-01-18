import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from './adminAuth/admin.guard';
import { CategoryComponent } from './category/category.component';
import { MaterialModule } from "./material/material.module";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddCategoryDialog ,EditCategoryDialog} from './category/category.component';
import { AddSubCategoryDialog,EditSubCategoryDialog} from './sub-category/sub-category.component';
import { SubCategoryComponent} from './sub-category/sub-category.component';
import { UserListComponent,ViewCategoryDialog } from './user-list/user-list.component';
import { SectionFirstComponent,EditDialog } from './section-first/section-first.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AddTestimonialsComponent } from './add-testimonials/add-testimonials.component';
import { SectionSecondComponent } from './section-second/section-second.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { GeneralFaqComponent } from './general-faq/general-faq.component';
import { TeacherFaqComponent } from './teacher-faq/teacher-faq.component';
import { ParentFaqComponent } from './parent-faq/parent-faq.component';

// import { SubCategoryComponent } from './sub-category/sub-category.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule
    //
    // MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminLoginComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddCategoryDialog,
    EditCategoryDialog,
    AddSubCategoryDialog,
    SubCategoryComponent,
    EditSubCategoryDialog,
    
    UserListComponent,
    ViewCategoryDialog,
    SectionFirstComponent,
    EditDialog,
    TestimonialsComponent,
    AddTestimonialsComponent,
    SectionSecondComponent,
    SectionThreeComponent,
    GeneralFaqComponent,
    TeacherFaqComponent,
    ParentFaqComponent,


    // SubCategoryComponent
    
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
