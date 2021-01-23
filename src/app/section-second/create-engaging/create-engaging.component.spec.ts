import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEngagingComponent } from './create-engaging.component';

describe('CreateEngagingComponent', () => {
  let component: CreateEngagingComponent;
  let fixture: ComponentFixture<CreateEngagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEngagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEngagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
