import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTeachWithBridgegapComponent } from './why-teach-with-bridgegap.component';

describe('WhyTeachWithBridgegapComponent', () => {
  let component: WhyTeachWithBridgegapComponent;
  let fixture: ComponentFixture<WhyTeachWithBridgegapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTeachWithBridgegapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyTeachWithBridgegapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
