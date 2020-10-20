import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailertabsPageRoutingModule } from './retailertabs-routing.module';

import { RetailertabsPage } from './retailertabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetailertabsPageRoutingModule
  ],
  declarations: [RetailertabsPage]
})
export class RetailertabsPageModule {}
