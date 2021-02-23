import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHereToHelpSectionComponent } from './edit-here-to-help-section.component';

describe('EditHereToHelpSectionComponent', () => {
  let component: EditHereToHelpSectionComponent;
  let fixture: ComponentFixture<EditHereToHelpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHereToHelpSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHereToHelpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
