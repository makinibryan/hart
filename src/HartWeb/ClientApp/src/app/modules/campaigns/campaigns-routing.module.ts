import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCampaignsComponent, LongonotComponent, ThreeDaysDianiXWasiniIslandExcursionComponent } from './components';

const routes: Routes = [
    {
      path: '',
      component: AllCampaignsComponent
    },
    {
      path: 'longonot',
      component: LongonotComponent
    },
    {
      path: 'three-days-diani-x-wasini-island-excursion',
      component: ThreeDaysDianiXWasiniIslandExcursionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
