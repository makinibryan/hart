import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EastAfricaModule } from './modules';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: () => import ('./modules'). then(m => m.BlogModule)
  },
  {
    path: 'longonot',
    loadChildren: () => import('./modules/campaigns').then(m => m.CampaignsModule)
  },
  {
    path: 'domestic',
    loadChildren: () => import ('./modules/tour-packages/domestic'). then (m => m.DomesticsModule)
  },
  {
    path: 'east-africa',
    loadChildren: () => import ('./modules/tour-packages/domestic'). then (m => EastAfricaModule)
  },
  {
    path: 'international',
    loadChildren: () => import ('./modules/tour-packages/international'). then (m => m.InternationalModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules').then(m => m.PagesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
