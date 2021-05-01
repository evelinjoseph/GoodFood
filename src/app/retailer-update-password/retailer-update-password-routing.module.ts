import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerUpdatePasswordPage } from './retailer-update-password.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerUpdatePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerUpdatePasswordPageRoutingModule {}
