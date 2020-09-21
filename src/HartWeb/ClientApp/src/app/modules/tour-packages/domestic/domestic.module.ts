import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DomesticRoutingModule} from './domestic-routing.module';

import { ToursInfoComponent } from './components/tours-info';

import {
    AllDomesticsComponent,
    AllMountainsComponent,
    MountainFourDaysClimbingSirimonRouteComponent,
    MountainFiveDaysClimbingSirimonNaroMoroRouteComponent,
    MountainSixDaysClimbingChogoriaEasyPaceRouteComponent,
    AllSafarisComponent,
    SafariThreeDaysTheHemmingwayTrailComponent,
    SafariFourDaysMaasaiMaraNakuruComponent,
    SafariFiveDaysMaasaiMaraLakeNakuruComponent,
    SafariSixDaysMaasaiMaraLakeNakuruBaringoComponent,
    SafariSevenDaysMaasaiMaraSamburuComponent,
    SafariEightDaysTurkanaSpecialComponent,
    SafariNineDaysMaasaiMaraKisumuAmboseliComponent,
    SafariTheGreatMaraThreeDaysAndTwoNightsComponent,
    SafariTheGreatMaraElevenDaysAndTenNightsComponent,
    SafariHomeOfTheBigNineDaysAndEightNightsComponent,
    SafariBreathtakingWondersOfKenyaComponent,
    SafariReconnectWithNatureSevenDaysAndSixNightsComponent,
    SafariGreatLakesSixDaysAndFiveNightsComponent,
    SafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent,
    SafariLandGiantsFiveDaysAndFourNightsComponent,
    SafariMagnificentExcursionsFiveDaysAndFourNightsComponent,
    SafariHomeOfTheWildElephantThreeDaysAndTwoNightsComponent,
    SafariBushAndLakeComponent,
    AllBeachesComponent,
    BeachAfroChicDianiBeachComponent,
    BeachEnglishPointMarinaComponent,
    BeachLeopardBeachResortComponent,
    BeachNeptuneBeachResortComponent,
    BeachPrideInnExpressResortComponent,
    AllDayTripsComponent,
    DayNairobiCityTourComponent,
    DayNairobiNationalParkComponent,
    DayKarenBlixenAndGiraffeCenterComponent,
    DayBomasOfKenyaComponent,
    DayGreatRiftValleyLakeNakuruComponent,
    DayKiccAndTownCenterComponent,
    FortJesusOldTownMambaVillageCenterComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DomesticRoutingModule
    ],
    declarations: [
        AllDomesticsComponent,
        AllMountainsComponent,
        MountainFourDaysClimbingSirimonRouteComponent,
        MountainFiveDaysClimbingSirimonNaroMoroRouteComponent,
        MountainSixDaysClimbingChogoriaEasyPaceRouteComponent,
        AllSafarisComponent,
        SafariThreeDaysTheHemmingwayTrailComponent,
        SafariFourDaysMaasaiMaraNakuruComponent,
        SafariFiveDaysMaasaiMaraLakeNakuruComponent,
        SafariSixDaysMaasaiMaraLakeNakuruBaringoComponent,
        SafariSevenDaysMaasaiMaraSamburuComponent,
        SafariEightDaysTurkanaSpecialComponent,
        SafariNineDaysMaasaiMaraKisumuAmboseliComponent,
        AllBeachesComponent,
        BeachAfroChicDianiBeachComponent,
        BeachEnglishPointMarinaComponent,
        BeachLeopardBeachResortComponent,
        BeachNeptuneBeachResortComponent,
        BeachPrideInnExpressResortComponent,
        AllDayTripsComponent,
        DayNairobiCityTourComponent,
        DayNairobiNationalParkComponent,
        DayKarenBlixenAndGiraffeCenterComponent,
        DayBomasOfKenyaComponent,
        DayGreatRiftValleyLakeNakuruComponent,
        ToursInfoComponent,
        SafariTheGreatMaraThreeDaysAndTwoNightsComponent,
        SafariTheGreatMaraElevenDaysAndTenNightsComponent,
        SafariHomeOfTheBigNineDaysAndEightNightsComponent,
        SafariBreathtakingWondersOfKenyaComponent,
        SafariReconnectWithNatureSevenDaysAndSixNightsComponent,
        SafariGreatLakesSixDaysAndFiveNightsComponent,
        SafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent,
        SafariLandGiantsFiveDaysAndFourNightsComponent,
        SafariMagnificentExcursionsFiveDaysAndFourNightsComponent,
        SafariHomeOfTheWildElephantThreeDaysAndTwoNightsComponent,
        SafariBushAndLakeComponent,
        DayKiccAndTownCenterComponent,
        FortJesusOldTownMambaVillageCenterComponent
    ]
})
export class DomesticsModule{}