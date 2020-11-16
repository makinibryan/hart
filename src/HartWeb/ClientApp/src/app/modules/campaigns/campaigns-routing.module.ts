import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AllCampaignsComponent,
  LongonotComponent,
  MombasaThreeDaysTwoNightsBeachDazeComponent,
  ThreeDaysDianiXWasiniIslandExcursionComponent,
  CampaignMaasaiMaraThreeDaysComponent,
  CampaignZipLiningAndTeamBuildingNgongHillsComponent,
  CampaignSamburuOverlandTruckGameDriveComponent,
  CampaignOlooluaComponent,
  CampaignNnpKitengelaComponent,
  CampaignLakeNaivashaComponent
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
  },
  {
    path: 'samburu-overland-truck-game-drive',
    component: CampaignSamburuOverlandTruckGameDriveComponent
  },
  {
    path: 'oloolua-nature-trails',
    component: CampaignOlooluaComponent
  },
  {
    path: 'nairobi-national-park-and-kitengela-glass-adventure',
    component: CampaignNnpKitengelaComponent
  },
  {
    path: 'lake-naivasha-oloiden-olkaria-spa-hells-gate-crater-lake',
    component: CampaignLakeNaivashaComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
