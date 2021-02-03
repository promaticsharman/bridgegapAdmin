import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParentFaqComponent } from './add-parent-faq.component';

describe('AddParentFaqComponent', () => {
  let component: AddParentFaqComponent;
  let fixture: ComponentFixture<AddParentFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParentFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParentFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
