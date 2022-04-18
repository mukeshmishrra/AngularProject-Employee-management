import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAlertBoxComponent } from './confirmation-alert-box.component';

describe('ConfirmationAlertBoxComponent', () => {
  let component: ConfirmationAlertBoxComponent;
  let fixture: ComponentFixture<ConfirmationAlertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationAlertBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
