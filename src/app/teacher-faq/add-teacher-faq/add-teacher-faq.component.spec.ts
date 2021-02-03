import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherFaqComponent } from './add-teacher-faq.component';

describe('AddTeacherFaqComponent', () => {
  let component: AddTeacherFaqComponent;
  let fixture: ComponentFixture<AddTeacherFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeacherFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
