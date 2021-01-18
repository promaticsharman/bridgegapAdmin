import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneEditComponent } from './section-one-edit.component';

describe('SectionOneEditComponent', () => {
  let component: SectionOneEditComponent;
  let fixture: ComponentFixture<SectionOneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOneEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
