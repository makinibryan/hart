import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

import { CampaignsRoutingModule } from './campaigns-routing.module';

<<<<<<< HEAD
import {
  AllCampaignsComponent,
  LongonotComponent,
  ThreeDaysDianiXWasiniIslandExcursionComponent,
  MombasaThreeDaysTwoNightsBeachDazeComponent,
  CampaignMaasaiMaraThreeDaysComponent
} from './components';
=======
import { AllCampaignsComponent,
         LongonotComponent,
         ThreeDaysDianiXWasiniIslandExcursionComponent,
         MombasaThreeDaysTwoNightsBeachDazeComponent,
         CampaignMaasaiMaraThreeDaysComponent
         } from './components';
>>>>>>> b0c551b98329e433ed47773fff2095098c975115


@NgModule({
  declarations: [
    LongonotComponent,
    ThreeDaysDianiXWasiniIslandExcursionComponent,
    AllCampaignsComponent,
    MombasaThreeDaysTwoNightsBeachDazeComponent,
    CampaignMaasaiMaraThreeDaysComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }
