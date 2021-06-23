import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/Home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('src/app/User/user.module').then(module => module.UserModule)
  },
  {
    path: 'company',
    loadChildren: () => import('src/app/Company/company.module').then(module => module.CompanyModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('src/app/Contact/contact.module').then(module => module.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
