import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { NewCustomerOrderComponent } from './new-customer-order/new-customer-order.component';
import { ExistingCustomerOrderComponent } from './existing-customer-order/existing-customer-order.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent
  },
  {
    path: 'new-customer-order',
    component: NewCustomerOrderComponent
  },
  {
    path: 'existing-customer-order',
    component: ExistingCustomerOrderComponent
  }
];

@NgModule({
  declarations: [OrderComponent, NewCustomerOrderComponent, ExistingCustomerOrderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderModule { }
