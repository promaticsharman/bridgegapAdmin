import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeSessionComponent } from './one-time-session.component';

describe('OneTimeSessionComponent', () => {
  let component: OneTimeSessionComponent;
  let fixture: ComponentFixture<OneTimeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTimeSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
