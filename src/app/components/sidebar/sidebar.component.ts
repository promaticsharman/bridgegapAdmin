import { Component, OnInit,ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Alert } from 'bootstrap';
import $ from "jquery";
import {Router} from '@angular/router'

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    // subcat:{};
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/category', title: 'Category',  icon: 'location_map-big', class: ''  },
    { path: '/courses', title: 'Courses Management',  icon: 'education_atom', class: ''  },
    { path: '/teacherApplication', title: 'Teacher Applications',  icon: 'users_single-02', class: ''  },
    { path: '/newsLetter', title: 'Newsletter Management',  icon: 'objects_spaceship', class: ''  },
   
    // { path: '/user_list', title: 'User Management',  icon: 'design_bullet-list-67', class: '' ,subcat:[]},
    // { path: '/section_1', title: 'Home Section 1',  icon: 'ui-1_bell-53', class: '' ,subcat:[]}
    // { path: '/sub_category', title: 'Sub Category',  icon: 'design_app', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  subcat: any[];
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private router:Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    $( document ).ready(function() {
      $(".nav-link").click(function(){
        //$(".sub-ul").hide();
       // alert($(this).children(":nth-child(3)").attr('style'));
        if($(this).next().is(":visible")){
          $(this).next().hide();
        }else{
          $(".sub-ul").hide();
          $(this).next().show();
        }
        // $(this).children(":nth-child(3)").toggle();
        // $(this).find(".sub-ul").toggle();
      });
  });
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  // checkUrl(url){
  //   return this.router.
  // }
}
