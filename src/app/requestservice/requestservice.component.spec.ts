import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestserviceComponent } from './requestservice.component';

describe('RequestserviceComponent', () => {
  let component: RequestserviceComponent;
  let fixture: ComponentFixture<RequestserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
