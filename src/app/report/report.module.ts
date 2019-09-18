import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { AccountReportComponent } from './account-report/account-report.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent
  },
  {
    path: 'customer-report',
    component: CustomerReportComponent
  },
  {
    path: 'account-reort',
    component: AccountReportComponent
  },
  {
    path: 'order-report',
    component: OrderReportComponent
  }
];

@NgModule({
  declarations: [ReportComponent, CustomerReportComponent, AccountReportComponent, OrderReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportModule {}
