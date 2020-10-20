import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailertabsPage } from './retailertabs.page';

const routes: Routes = [
  {
    path: 'retailertabs',
    component: RetailertabsPage,
    children: [
      {
        path: 'retailertab1',
        loadChildren: () => import('../retailertab1/retailertab1.module').then(m => m.Retailertab1PageModule)
      },
      {
        path: 'retailertab2',
        loadChildren: () => import('../retailertab2/retailertab2.module').then(m => m.Retailertab2PageModule)
      },
      {
        path: 'retailertab3',
        loadChildren: () => import('../retailertab3/retailertab3.module').then(m => m.Retailertab3PageModule)
      },
      {
        path: '',
        redirectTo: '/retailertabs/retailertab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/retailertabs/retailertabs/retailertab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailertabsPageRoutingModule {}
