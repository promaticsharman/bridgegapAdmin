import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { CategoryComponent } from '../../category/category.component';
import { SubCategoryComponent } from '../../sub-category/sub-category.component';
import { UserListComponent } from '../../user-list/user-list.component';
import { ViewStudentDetailsComponent } from '../../user-list/view-student-details/view-student-details.component';
import { SectionFirstComponent } from '../../section-first/section-first.component';
import { SectionOneEditComponent } from '../../section-one-edit/section-one-edit.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { AddTestimonialsComponent } from '../../add-testimonials/add-testimonials.component';
import { SectionSecondComponent } from '../../section-second/section-second.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { GeneralFaqComponent } from '../../general-faq/general-faq.component';
import { TeacherFaqComponent } from '../../teacher-faq/teacher-faq.component';
import { ParentFaqComponent } from '../../parent-faq/parent-faq.component';
import { ContactUsComponent } from '../../contact-us/contact-us.component';
import { TestimonialsEditComponent } from '../../testimonials-edit/testimonials-edit.component';
import { CreateBannerComponent } from '../../create-banner/create-banner.component';
import {AddCategoryComponent} from '../../category/add-category/add-category.component'
import { EditCategoryComponent } from '../../category/edit-category/edit-category.component';
import { AddSubCategoryComponent } from '../../sub-category/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from '../../sub-category/edit-sub-category/edit-sub-category.component';
import { CreateEngagingComponent } from '../../section-second/create-engaging/create-engaging.component';
import { EditEngagingComponent } from '../../section-second/edit-engaging/edit-engaging.component';
import { CreateHowItWorksComponent } from '../../section-three/create-how-it-works/create-how-it-works.component';
import { EditHowItWorksComponent } from '../../section-three/edit-how-it-works/edit-how-it-works.component';
import { TeacherApplicationsComponent } from '../../teacher-applications/teacher-applications.component';
import { ViewTeacherApplicationComponent } from '../../teacher-applications/view-teacher-application/view-teacher-application.component';
import { TeacherManagementComponent } from '../../teacher-management/teacher-management.component';
import { CoursesManagementComponent } from '../../courses-management/courses-management.component';
import { ViewCourseDetailsComponent } from '../../courses-management/view-course-details/view-course-details.component';
import { ViewTeacherListComponent } from '../../teacher-management/view-teacher-list/view-teacher-list.component';
import { SocialMediaLinksComponent } from '../../social-media-links/social-media-links.component';
import { NewsletterManagementComponent } from '../../newsletter-management/newsletter-management.component';
import { AddGenFaqComponent } from '../../general-faq/add-gen-faq/add-gen-faq.component';
import { EditGenFaqComponent } from '../../general-faq/edit-gen-faq/edit-gen-faq.component';
import { AddParentFaqComponent } from '../../parent-faq/add-parent-faq/add-parent-faq.component';
import { EditParentFaqComponent } from '../../parent-faq/edit-parent-faq/edit-parent-faq.component';
import { AddTeacherFaqComponent } from '../../teacher-faq/add-teacher-faq/add-teacher-faq.component';
import { EditTeacherFaqComponent } from '../../teacher-faq/edit-teacher-faq/edit-teacher-faq.component';
import { TermsComponent } from '../../general-management/terms/terms.component';
import { PrivacyPolicyComponent } from '../../general-management/privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from '../../general-management/cancellation-policy/cancellation-policy.component';
import { BannerManagementComponent } from '../../teach-with-us/banner-management/banner-management.component';
import { WhyTeachWithBridgegapComponent } from '../../teach-with-us/why-teach-with-bridgegap/why-teach-with-bridgegap.component';
import { HowItWorksTeacherComponent } from '../../teach-with-us/how-it-works-teacher/how-it-works-teacher.component';
import { HereToHelpSectionComponent } from '../../teach-with-us/here-to-help-section/here-to-help-section.component';
import { TeacherTestimonialComponent } from '../../teach-with-us/teacher-testimonial/teacher-testimonial.component';
import { FaqComponent } from '../../teach-with-us/faq/faq.component';
import { EditTeacherBannerComponent } from '../../teach-with-us/banner-management/edit-teacher-banner/edit-teacher-banner.component';
import { AddComponent } from '../../teach-with-us/why-teach-with-bridgegap/add/add.component';
import { EditWhyTeachWithUsComponent } from '../../teach-with-us/why-teach-with-bridgegap/edit-why-teach-with-us/edit-why-teach-with-us.component';
import { EditTeacherHowItWorksComponent } from '../../teach-with-us/how-it-works-teacher/edit-teacher-how-it-works/edit-teacher-how-it-works.component';
import { EditTeacherManagementComponent } from '../../teacher-management/edit-teacher-management/edit-teacher-management.component';
import { EditHereToHelpSectionComponent } from '../../teach-with-us/here-to-help-section/edit-here-to-help-section/edit-here-to-help-section.component';
import { SubSubCategoryComponent } from '../../sub-sub-category/sub-sub-category.component';
import { AddSubSubCategoryComponent } from '../../sub-sub-category/add-sub-sub-category/add-sub-sub-category.component';
import { EditSubSubCategoryComponent } from '../../sub-sub-category/edit-sub-sub-category/edit-sub-sub-category.component';
import { OneTimeSessionComponent } from '../../cancellation-policy/one-time-session/one-time-session.component';
import { MultiSessionComponent } from '../../cancellation-policy/multi-session/multi-session.component';
import { TeacherProfileComponent } from '../../teacher-management/teacher-profile/teacher-profile.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'category',      component: CategoryComponent },
    { path: 'addCategory',      component: AddCategoryComponent },
    { path: 'editCategory/:id',      component: EditCategoryComponent },
    { path: 'sub_category/:id',      component: SubCategoryComponent },
    { path: 'sub_sub_category/:catId/:subcatId', component: SubSubCategoryComponent },
    { path: 'add_sub_category/:id',      component: AddSubCategoryComponent },
    { path: 'sub_category/:catId/:subCatId',      component: EditSubCategoryComponent },
    { path: 'add_sub_sub_category/:catId/:subCatId',      component: AddSubSubCategoryComponent },
    { path: 'edit_sub_sub_category/:catId/:subCatId/:id',      component: EditSubSubCategoryComponent },
    { path: 'one_time_policy',      component: OneTimeSessionComponent },
    { path: 'multi_session_policy',      component: MultiSessionComponent },
    { path: 'student_list',      component: UserListComponent },
    { path: 'student_list/:stdId',  component: ViewStudentDetailsComponent },
    // /:lt/:ofst
    
    { path: 'teacher_list',    component: TeacherManagementComponent},
    { path: 'edit_teacher_list/:id',      component: EditTeacherManagementComponent},
    { path: 'view_teacher_list/:teacherId',      component: ViewTeacherListComponent},
    { path: 'section_1',      component: SectionFirstComponent },
    { path: 'createEngaging',      component: CreateEngagingComponent },
    { path: 'editEngaging/:id',      component: EditEngagingComponent },
    { path: 'create_banner',      component: CreateBannerComponent },
    { path: 'edit_section_one/:id',      component: SectionOneEditComponent },
    { path: 'section_2',      component: SectionSecondComponent },
    { path: 'section_3',      component: SectionThreeComponent },
    { path: 'create_',      component: CreateHowItWorksComponent },
    { path: 'edit_/:id',      component: EditHowItWorksComponent },
    // { path: 'addcategory',      component: AddCategoryComponent },
    { path: 'testimonials',   component: TestimonialsComponent },
    { path: 'createTestimonials',   component: AddTestimonialsComponent },
    { path: 'editTestimonials/:testimonial_id', component: TestimonialsEditComponent },
    { path: 'generalFaq',   component: GeneralFaqComponent },
    { path: 'addGeneralFaq',   component: AddGenFaqComponent },
    { path: 'editGenFaq/:id',   component: EditGenFaqComponent },
    { path: 'teacherFaq',   component: TeacherFaqComponent },
    { path: 'addTeacherFaq',   component: AddTeacherFaqComponent },
    { path: 'editTeacherFaq/:id',   component: EditTeacherFaqComponent },
    { path: 'parentFaq',   component: ParentFaqComponent },
    { path: 'addParentFaq',   component: AddParentFaqComponent },
    { path: 'editParentFaq/:id',   component: EditParentFaqComponent },
    { path: 'contact',   component: ContactUsComponent },
    { path: 'teacherApplication',   component: TeacherApplicationsComponent },
    { path: 'viewApplication/:id',   component: ViewTeacherApplicationComponent },
    { path: 'courses',   component: CoursesManagementComponent },
    { path: 'viewCourse/:id',   component: ViewCourseDetailsComponent },
    { path: 'sociaLinks',   component:SocialMediaLinksComponent },
    { path: 'newsLetter',   component:NewsletterManagementComponent },
    
    { path: 'terms',   component: TermsComponent },
    { path: 'privacy',   component: PrivacyPolicyComponent },
    { path: 'cancellation',   component: CancellationPolicyComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'teacher_banner',   component: BannerManagementComponent },
    { path: 'edit_teacher_banner/:id',   component: EditTeacherBannerComponent },
    { path: 'teacher_teach_with',   component: WhyTeachWithBridgegapComponent },
    { path: 'add_teacher_teach_with',   component: AddComponent },
    { path: 'edit_teacher_teach_with/:id',   component: EditWhyTeachWithUsComponent },
    { path: 'teacher_how_it_works',   component: HowItWorksTeacherComponent },
    { path: 'edit_teacher_how_it_works/:id',   component: EditTeacherHowItWorksComponent },
    { path: 'teacher_here_to_help',   component: HereToHelpSectionComponent },
    { path: 'edit_here_to_help',   component: EditHereToHelpSectionComponent },
    { path: 'teacher_profile/:id',   component: TeacherProfileComponent }
    // { path: 'terms',   component: TermsComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
