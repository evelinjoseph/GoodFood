import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Retailertab1Page } from './retailertab1.page';

const routes: Routes = [
  {
    path: '',
    component: Retailertab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Retailertab1PageRoutingModule {}
