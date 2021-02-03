import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParentFaqComponent } from './edit-parent-faq.component';

describe('EditParentFaqComponent', () => {
  let component: EditParentFaqComponent;
  let fixture: ComponentFixture<EditParentFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParentFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParentFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
