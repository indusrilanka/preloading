import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { OrderAccountComponent } from './order-account/order-account.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent
  },
  {
    path: 'customer-account',
    component: CustomerAccountComponent
  },
  {
    path: 'order-account',
    component: OrderAccountComponent
  }
];

@NgModule({
  declarations: [AccountComponent, CustomerAccountComponent, OrderAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModule { }
