import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherManagementComponent } from './edit-teacher-management.component';

describe('EditTeacherManagementComponent', () => {
  let component: EditTeacherManagementComponent;
  let fixture: ComponentFixture<EditTeacherManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
