import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateFormComponent } from './admin-create-form.component';

describe('AdminCreateFormComponent', () => {
  let component: AdminCreateFormComponent;
  let fixture: ComponentFixture<AdminCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
