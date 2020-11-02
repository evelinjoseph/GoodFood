import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Retailertab3Page } from './retailertab3.page';

const routes: Routes = [
  {
    path: '',
    component: Retailertab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Retailertab3PageRoutingModule {}
