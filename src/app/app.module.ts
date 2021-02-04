import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
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
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AddCategoryDialog ,EditCategoryDialog} from './category/category.component';
// import { AddSubCategoryDialog,EditSubCategoryDialog} from './sub-category/sub-category.component';
import { SubCategoryComponent} from './sub-category/sub-category.component';
import { UserListComponent,ViewCategoryDialog } from './user-list/user-list.component';
import { SectionFirstComponent,EditDialog } from './section-first/section-first.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AddTestimonialsComponent } from './add-testimonials/add-testimonials.component';
import { SectionSecondComponent } from './section-second/section-second.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { GeneralFaqComponent,AddGenFaqDialog,EditGenFaqDialog } from './general-faq/general-faq.component';
import { TeacherFaqComponent,AddTeacherFaqDialog ,EditTeacherFaqDialog} from './teacher-faq/teacher-faq.component';
import { ParentFaqComponent,AddParentFaqDialog,EditParentFaqDialog } from './parent-faq/parent-faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SectionOneEditComponent } from './section-one-edit/section-one-edit.component';
import { TestimonialsEditComponent } from './testimonials-edit/testimonials-edit.component';
import { CreateBannerComponent } from './create-banner/create-banner.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AddSubCategoryComponent } from './sub-category/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './sub-category/edit-sub-category/edit-sub-category.component';
import { CreateEngagingComponent } from './section-second/create-engaging/create-engaging.component';
import { EditEngagingComponent } from './section-second/edit-engaging/edit-engaging.component';
import { CreateHowItWorksComponent } from './section-three/create-how-it-works/create-how-it-works.component';
import { EditHowItWorksComponent } from './section-three/edit-how-it-works/edit-how-it-works.component';
import { TeacherApplicationsComponent } from './teacher-applications/teacher-applications.component';
import { ViewTeacherApplicationComponent,RejectApplicationDialog } from './teacher-applications/view-teacher-application/view-teacher-application.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { ViewStudentDetailsComponent } from './user-list/view-student-details/view-student-details.component';
import { CoursesManagementComponent } from './courses-management/courses-management.component';
import { ViewCourseDetailsComponent,RejectCourseDialog } from './courses-management/view-course-details/view-course-details.component';
import { ViewTeacherListComponent } from './teacher-management/view-teacher-list/view-teacher-list.component';
import { SocialMediaLinksComponent,EditLinkDialog } from './social-media-links/social-media-links.component';
import { NewsletterManagementComponent } from './newsletter-management/newsletter-management.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { AddGenFaqComponent } from './general-faq/add-gen-faq/add-gen-faq.component';
import { EditGenFaqComponent } from './general-faq/edit-gen-faq/edit-gen-faq.component';
import { AddParentFaqComponent } from './parent-faq/add-parent-faq/add-parent-faq.component';
import { EditParentFaqComponent } from './parent-faq/edit-parent-faq/edit-parent-faq.component';
import { AddTeacherFaqComponent } from './teacher-faq/add-teacher-faq/add-teacher-faq.component';
import { EditTeacherFaqComponent } from './teacher-faq/edit-teacher-faq/edit-teacher-faq.component';
import { TermsComponent } from './general-management/terms/terms.component';
import { PrivacyPolicyComponent } from './general-management/privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './general-management/cancellation-policy/cancellation-policy.component';

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
    MatExpansionModule,
    EditorModule
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
    // AddSubCategoryDialog,
    SubCategoryComponent,
    // EditSubCategoryDialog,
    
    UserListComponent,
    ViewCategoryDialog,
    SectionFirstComponent,
    EditDialog,
    TestimonialsComponent,
    AddTestimonialsComponent,
    SectionSecondComponent,
    SectionThreeComponent,
    GeneralFaqComponent,
    AddGenFaqDialog,
    EditGenFaqDialog,
    TeacherFaqComponent,
    AddTeacherFaqDialog,
    EditTeacherFaqDialog,
    ParentFaqComponent,
    AddParentFaqDialog,
    EditParentFaqDialog,
    ContactUsComponent,
    SectionOneEditComponent,
    TestimonialsEditComponent,
    CreateBannerComponent,
    EditCategoryComponent,
    AddSubCategoryComponent,
    EditSubCategoryComponent,
    CreateEngagingComponent,
    EditEngagingComponent,
    CreateHowItWorksComponent,
    EditHowItWorksComponent,
    TeacherApplicationsComponent,
    ViewTeacherApplicationComponent,
    RejectApplicationDialog,
    TeacherManagementComponent,
    ViewStudentDetailsComponent,
    CoursesManagementComponent,
    ViewCourseDetailsComponent,
    RejectCourseDialog,
    ViewTeacherListComponent,
    SocialMediaLinksComponent,
    EditLinkDialog,
    NewsletterManagementComponent,
    DateAgoPipe,
    AddGenFaqComponent,
    EditGenFaqComponent,
    AddParentFaqComponent,
    EditParentFaqComponent,
    AddTeacherFaqComponent,
    EditTeacherFaqComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    CancellationPolicyComponent,


    // SubCategoryComponent
    
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
