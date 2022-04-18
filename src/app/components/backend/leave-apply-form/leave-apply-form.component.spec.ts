import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplyFormComponent } from './leave-apply-form.component';

describe('LeaveApplyFormComponent', () => {
  let component: LeaveApplyFormComponent;
  let fixture: ComponentFixture<LeaveApplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveApplyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
