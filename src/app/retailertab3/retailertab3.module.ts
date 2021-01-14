import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Retailertab3PageRoutingModule } from './retailertab3-routing.module';

import { Retailertab3Page } from './retailertab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Retailertab3PageRoutingModule
  ],
  declarations: [Retailertab3Page]
})
export class Retailertab3PageModule {}
