import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { CategoryComponent } from '../../category/category.component';
import { AddCategoryComponent } from '../../add-category/add-category.component';
import { SubCategoryComponent } from '../../sub-category/sub-category.component';
import { UserListComponent } from '../../user-list/user-list.component';
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
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'category',      component: CategoryComponent },
    { path: 'sub_category/:id',      component: SubCategoryComponent },
    { path: 'user_list',      component: UserListComponent },
    { path: 'section_1',      component: SectionFirstComponent },
    { path: 'edit_section_one',      component: SectionOneEditComponent },
    { path: 'section_2',      component: SectionSecondComponent },
    { path: 'section_3',      component: SectionThreeComponent },
    { path: 'addcategory',      component: AddCategoryComponent },
    { path: 'testimonials',   component: TestimonialsComponent },
    { path: 'createTestimonials',   component: AddTestimonialsComponent },
    { path: 'generalFaq',   component: GeneralFaqComponent },
    { path: 'teacherFaq',   component: TeacherFaqComponent },
    { path: 'parentFaq',   component: ParentFaqComponent },
    { path: 'contact',   component: ContactUsComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
