import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Retailertab3PageRoutingModule } from './retailertab3-routing.module';

import { Retailertab3Page } from './retailertab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ExploreContainerComponentModule,
    IonicModule,
    Retailertab3PageRoutingModule
  ],
  declarations: [Retailertab3Page]
})
export class Retailertab3PageModule {}
