import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFaqComponent } from './parent-faq.component';

describe('ParentFaqComponent', () => {
  let component: ParentFaqComponent;
  let fixture: ComponentFixture<ParentFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
