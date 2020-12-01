import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerListingPageRoutingModule } from './retailer-listing-routing.module';

import { RetailerListingPage } from './retailer-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetailerListingPageRoutingModule
  ],
  declarations: [RetailerListingPage]
})
export class RetailerListingPageModule {}
