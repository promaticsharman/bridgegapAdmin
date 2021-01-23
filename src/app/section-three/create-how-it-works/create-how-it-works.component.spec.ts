import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHowItWorksComponent } from './create-how-it-works.component';

describe('CreateHowItWorksComponent', () => {
  let component: CreateHowItWorksComponent;
  let fixture: ComponentFixture<CreateHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
