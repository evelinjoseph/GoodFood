import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerRegisterPage } from './retailer-register.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerRegisterPageRoutingModule {}
