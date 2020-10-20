import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Retailertab2PageRoutingModule } from './retailertab2-routing.module';

import { Retailertab2Page } from './retailertab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ExploreContainerComponentModule,
    IonicModule,
    Retailertab2PageRoutingModule
  ],
  declarations: [Retailertab2Page]
})
export class Retailertab2PageModule {}
