import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCampaignsComponent,
        CampaignMaasaiMaraThreeDaysComponent,
        LongonotComponent,
        MombasaThreeDaysTwoNightsBeachDazeComponent,
        ThreeDaysDianiXWasiniIslandExcursionComponent
      } from './components';

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
      path: 'diani',
      component: ThreeDaysDianiXWasiniIslandExcursionComponent
    },
    {
      path: 'mombasa-three-days-two-nights-beach-daze',
      component: MombasaThreeDaysTwoNightsBeachDazeComponent
    },
    {
      path: 'maasai-mara-three-days',
      component: CampaignMaasaiMaraThreeDaysComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
