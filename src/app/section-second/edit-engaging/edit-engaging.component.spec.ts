import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEngagingComponent } from './edit-engaging.component';

describe('EditEngagingComponent', () => {
  let component: EditEngagingComponent;
  let fixture: ComponentFixture<EditEngagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEngagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEngagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
