import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'initial-page', pathMatch: 'full' },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'initial-page',
    loadChildren: () => import('./initial-page/initial-page.module').then( m => m.InitialPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'retailer-register',
    loadChildren: () => import('./retailer-register/retailer-register.module').then( m => m.RetailerRegisterPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },  {
    path: 'retailertabs',
    loadChildren: () => import('./retailertabs/retailertabs.module').then( m => m.RetailertabsPageModule)
  },
  {
    path: 'retailertab1',
    loadChildren: () => import('./retailertab1/retailertab1.module').then( m => m.Retailertab1PageModule)
  },
  {
    path: 'retailertab2',
    loadChildren: () => import('./retailertab2/retailertab2.module').then( m => m.Retailertab2PageModule)
  },
  {
    path: 'retailertab3',
    loadChildren: () => import('./retailertab3/retailertab3.module').then( m => m.Retailertab3PageModule)
  },
  {
    path: 'user-listing',
    loadChildren: () => import('./user-listing/user-listing.module').then( m => m.UserListingPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'new-listing',
    loadChildren: () => import('./new-listing/new-listing.module').then( m => m.NewListingPageModule)
  },
  {
    path: 'retailer-listing',
    loadChildren: () => import('./retailer-listing/retailer-listing.module').then( m => m.RetailerListingPageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./paypal/paypal.module').then( m => m.PaypalPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },
  {
    path: 'retailer-update-password',
    loadChildren: () => import('./retailer-update-password/retailer-update-password.module').then( m => m.RetailerUpdatePasswordPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
