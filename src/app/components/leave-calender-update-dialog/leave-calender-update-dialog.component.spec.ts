import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCalenderUpdateDialogComponent } from './leave-calender-update-dialog.component';

describe('LeaveCalenderUpdateDialogComponent', () => {
  let component: LeaveCalenderUpdateDialogComponent;
  let fixture: ComponentFixture<LeaveCalenderUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCalenderUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCalenderUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
