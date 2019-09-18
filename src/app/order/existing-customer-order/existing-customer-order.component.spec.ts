import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCustomerOrderComponent } from './existing-customer-order.component';

describe('ExistingCustomerOrderComponent', () => {
  let component: ExistingCustomerOrderComponent;
  let fixture: ComponentFixture<ExistingCustomerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingCustomerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingCustomerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
