import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherApplicationsComponent } from './teacher-applications.component';

describe('TeacherApplicationsComponent', () => {
  let component: TeacherApplicationsComponent;
  let fixture: ComponentFixture<TeacherApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
