import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationUserViewComponent } from './registeration-user-view.component';

describe('RegisterationUserViewComponent', () => {
  let component: RegisterationUserViewComponent;
  let fixture: ComponentFixture<RegisterationUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
