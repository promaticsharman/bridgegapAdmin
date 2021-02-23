import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksTeacherComponent } from './how-it-works-teacher.component';

describe('HowItWorksTeacherComponent', () => {
  let component: HowItWorksTeacherComponent;
  let fixture: ComponentFixture<HowItWorksTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
