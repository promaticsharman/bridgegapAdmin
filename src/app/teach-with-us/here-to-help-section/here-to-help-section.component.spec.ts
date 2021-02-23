import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereToHelpSectionComponent } from './here-to-help-section.component';

describe('HereToHelpSectionComponent', () => {
  let component: HereToHelpSectionComponent;
  let fixture: ComponentFixture<HereToHelpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HereToHelpSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HereToHelpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
