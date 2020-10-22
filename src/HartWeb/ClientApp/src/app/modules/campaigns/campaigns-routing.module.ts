import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCampaignsComponent,
        LongonotComponent,
        MombasaThreeDaysTwoNightsBeachDazeComponent,
        ThreeDaysDianiXWasiniIslandExcursionComponent,
        CampaignMaasaiMaraThreeDaysComponent,
        CampaignZipLiningAndTeamBuildingNgongHillsComponent
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
      path: 'mombasa',
      component: MombasaThreeDaysTwoNightsBeachDazeComponent
    },
    {
      path: 'maasai-mara',
      component: CampaignMaasaiMaraThreeDaysComponent
    },
    {
      path: 'zip-lining-ngong-hills',
      component: CampaignZipLiningAndTeamBuildingNgongHillsComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
