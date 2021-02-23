import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTestimonialComponent } from './teacher-testimonial.component';

describe('TeacherTestimonialComponent', () => {
  let component: TeacherTestimonialComponent;
  let fixture: ComponentFixture<TeacherTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
