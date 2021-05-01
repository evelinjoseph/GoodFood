import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerUpdatePasswordPageRoutingModule } from './retailer-update-password-routing.module';

import { RetailerUpdatePasswordPage } from './retailer-update-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetailerUpdatePasswordPageRoutingModule
  ],
  declarations: [RetailerUpdatePasswordPage]
})
export class RetailerUpdatePasswordPageModule {}
