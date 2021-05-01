import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerListingPage } from './retailer-listing.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerListingPageRoutingModule {}
