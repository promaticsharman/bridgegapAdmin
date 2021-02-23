import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSessionComponent } from './multi-session.component';

describe('MultiSessionComponent', () => {
  let component: MultiSessionComponent;
  let fixture: ComponentFixture<MultiSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
