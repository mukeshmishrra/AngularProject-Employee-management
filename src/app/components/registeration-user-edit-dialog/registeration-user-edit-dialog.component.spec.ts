import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationUserEditDialogComponent } from './registeration-user-edit-dialog.component';

describe('RegisterationUserEditDialogComponent', () => {
  let component: RegisterationUserEditDialogComponent;
  let fixture: ComponentFixture<RegisterationUserEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationUserEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationUserEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
