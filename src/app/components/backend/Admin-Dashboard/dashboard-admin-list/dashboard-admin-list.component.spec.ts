import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminListComponent } from './dashboard-admin-list.component';

describe('DashboardAdminListComponent', () => {
  let component: DashboardAdminListComponent;
  let fixture: ComponentFixture<DashboardAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
