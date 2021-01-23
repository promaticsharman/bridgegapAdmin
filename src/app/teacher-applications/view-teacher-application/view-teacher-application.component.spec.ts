import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherApplicationComponent } from './view-teacher-application.component';

describe('ViewTeacherApplicationComponent', () => {
  let component: ViewTeacherApplicationComponent;
  let fixture: ComponentFixture<ViewTeacherApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeacherApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
