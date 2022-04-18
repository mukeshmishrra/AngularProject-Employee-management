import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetInfoUpdateComponent } from './timesheet-info-update.component';

describe('TimesheetInfoUpdateComponent', () => {
  let component: TimesheetInfoUpdateComponent;
  let fixture: ComponentFixture<TimesheetInfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetInfoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
