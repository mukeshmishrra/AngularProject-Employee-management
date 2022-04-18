import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAppliedEmpListViewComponent } from './leave-applied-emp-list-view.component';

describe('LeaveAppliedEmpListViewComponent', () => {
  let component: LeaveAppliedEmpListViewComponent;
  let fixture: ComponentFixture<LeaveAppliedEmpListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAppliedEmpListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAppliedEmpListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
