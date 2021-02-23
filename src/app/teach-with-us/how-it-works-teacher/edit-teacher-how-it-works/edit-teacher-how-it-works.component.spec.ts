import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherHowItWorksComponent } from './edit-teacher-how-it-works.component';

describe('EditTeacherHowItWorksComponent', () => {
  let component: EditTeacherHowItWorksComponent;
  let fixture: ComponentFixture<EditTeacherHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
