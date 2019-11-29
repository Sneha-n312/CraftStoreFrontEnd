import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninUbComponent } from './signin-ub.component';

describe('SigninUbComponent', () => {
  let component: SigninUbComponent;
  let fixture: ComponentFixture<SigninUbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninUbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninUbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
