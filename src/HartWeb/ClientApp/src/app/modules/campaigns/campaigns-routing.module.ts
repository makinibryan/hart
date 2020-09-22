import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongonotComponent } from './components';

const routes: Routes = [
    {
      path: '',
      component: LongonotComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
