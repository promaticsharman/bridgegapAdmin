import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherBannerComponent } from './edit-teacher-banner.component';

describe('EditTeacherBannerComponent', () => {
  let component: EditTeacherBannerComponent;
  let fixture: ComponentFixture<EditTeacherBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
