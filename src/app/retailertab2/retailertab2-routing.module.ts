import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Retailertab2Page } from './retailertab2.page';

const routes: Routes = [
  {
    path: '',
    component: Retailertab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Retailertab2PageRoutingModule {}
