import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCalenderCreateComponent } from './leave-calender-create.component';

describe('LeaveCalenderCreateComponent', () => {
  let component: LeaveCalenderCreateComponent;
  let fixture: ComponentFixture<LeaveCalenderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCalenderCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCalenderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
