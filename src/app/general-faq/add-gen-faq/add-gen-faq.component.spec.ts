import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenFaqComponent } from './add-gen-faq.component';

describe('AddGenFaqComponent', () => {
  let component: AddGenFaqComponent;
  let fixture: ComponentFixture<AddGenFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGenFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
