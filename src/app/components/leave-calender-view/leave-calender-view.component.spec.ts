import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCalenderViewComponent } from './leave-calender-view.component';

describe('LeaveCalenderViewComponent', () => {
  let component: LeaveCalenderViewComponent;
  let fixture: ComponentFixture<LeaveCalenderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCalenderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCalenderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
