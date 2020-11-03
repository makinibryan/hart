import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

import { CampaignsRoutingModule } from './campaigns-routing.module';

import {
  AllCampaignsComponent,
  LongonotComponent,
  ThreeDaysDianiXWasiniIslandExcursionComponent,
  MombasaThreeDaysTwoNightsBeachDazeComponent,
  CampaignMaasaiMaraThreeDaysComponent,
  CampaignZipLiningAndTeamBuildingNgongHillsComponent,
  CampaignSamburuOverlandTruckGameDriveComponent
} from './components';
import { CampaignOlooluaComponent } from './components/campaign-oloolua/campaign-oloolua.component';


@NgModule({
  declarations: [
    LongonotComponent,
    ThreeDaysDianiXWasiniIslandExcursionComponent,
    AllCampaignsComponent,
    MombasaThreeDaysTwoNightsBeachDazeComponent,
    CampaignMaasaiMaraThreeDaysComponent,
    CampaignZipLiningAndTeamBuildingNgongHillsComponent,
    CampaignSamburuOverlandTruckGameDriveComponent,
    CampaignOlooluaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
