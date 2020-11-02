import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Retailertab1PageRoutingModule } from './retailertab1-routing.module';

import { Retailertab1Page } from './retailertab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ExploreContainerComponentModule,
    IonicModule,
    Retailertab1PageRoutingModule
  ],
  declarations: [Retailertab1Page]
})
export class Retailertab1PageModule {}
