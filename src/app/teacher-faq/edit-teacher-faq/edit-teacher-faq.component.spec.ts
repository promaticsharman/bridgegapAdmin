import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherFaqComponent } from './edit-teacher-faq.component';

describe('EditTeacherFaqComponent', () => {
  let component: EditTeacherFaqComponent;
  let fixture: ComponentFixture<EditTeacherFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
