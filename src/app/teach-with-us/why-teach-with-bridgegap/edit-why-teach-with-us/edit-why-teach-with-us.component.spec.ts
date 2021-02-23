import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWhyTeachWithUsComponent } from './edit-why-teach-with-us.component';

describe('EditWhyTeachWithUsComponent', () => {
  let component: EditWhyTeachWithUsComponent;
  let fixture: ComponentFixture<EditWhyTeachWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWhyTeachWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWhyTeachWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
