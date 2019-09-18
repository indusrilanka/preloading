import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerOrderComponent } from './new-customer-order.component';

describe('NewCustomerOrderComponent', () => {
  let component: NewCustomerOrderComponent;
  let fixture: ComponentFixture<NewCustomerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCustomerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
