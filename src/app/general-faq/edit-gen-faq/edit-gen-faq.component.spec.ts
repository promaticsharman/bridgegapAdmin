import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenFaqComponent } from './edit-gen-faq.component';

describe('EditGenFaqComponent', () => {
  let component: EditGenFaqComponent;
  let fixture: ComponentFixture<EditGenFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGenFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
