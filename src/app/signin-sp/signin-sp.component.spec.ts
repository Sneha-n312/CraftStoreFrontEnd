import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSpComponent } from './signin-sp.component';

describe('SigninSpComponent', () => {
  let component: SigninSpComponent;
  let fixture: ComponentFixture<SigninSpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninSpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
